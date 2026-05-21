import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { type PTFFilters, EMPTY_PTF_FILTERS, END_CONNECTION_LABELS } from "../hooks/types"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: PTFFilters
  setFilters: React.Dispatch<React.SetStateAction<PTFFilters>>
  seriesOptions: string[]
  threadStandardOptions: string[]
  threadSizeOptions: string[]
  endConnectionOptions: string[]
  filterElementOptions: string[]
  poreSizeOptions: number[]
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_BLUE, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function CheckList({ options, selected, onChange, labelMap, suffix }: {
  options: (string | number)[]
  selected: (string | number)[]
  onChange: (v: any) => void
  labelMap?: Record<string, string>
  suffix?: string
}) {
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 260, overflowY: "auto" }}>
      {options.map(opt => (
        <FormControlLabel key={String(opt)}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
          label={<Typography variant="body2" fontSize="0.8rem">{labelMap?.[String(opt)] ?? String(opt)}{suffix ?? ""}</Typography>}
        />
      ))}
    </Box>
  )
}

export function PTFSidebar({
  filters, setFilters,
  seriesOptions, threadStandardOptions, threadSizeOptions,
  endConnectionOptions, filterElementOptions, poreSizeOptions,
  activeCount,
}: Props) {
  const toggleStr = (key: keyof Omit<PTFFilters, 'poreSizes'>, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const togglePore = (val: number) =>
    setFilters(prev => ({
      ...prev,
      poreSizes: prev.poreSizes.includes(val)
        ? prev.poreSizes.filter(v => v !== val)
        : [...prev.poreSizes, val],
    }))

  return (
    <Box sx={{
      width: 240, flexShrink: 0, p: 2,
      borderRight: "1px solid", borderColor: "divider",
      bgcolor: "background.paper",
      position: "sticky", top: 0, alignSelf: "flex-start",
      maxHeight: "100vh", overflowY: "auto", boxSizing: "border-box",
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE }}
            onClick={() => setFilters(EMPTY_PTF_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <CheckList options={seriesOptions} selected={filters.series} onChange={(v) => toggleStr("series", v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD STANDARD" count={filters.threadStandards.length || undefined}>
        <CheckList options={threadStandardOptions} selected={filters.threadStandards} onChange={(v) => toggleStr("threadStandards", v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD SIZE" count={filters.threadSizes.length || undefined}>
        <CheckList options={threadSizeOptions} selected={filters.threadSizes} onChange={(v) => toggleStr("threadSizes", v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="END CONNECTION" count={filters.endConnections.length || undefined}>
        <CheckList options={endConnectionOptions} selected={filters.endConnections} onChange={(v) => toggleStr("endConnections", v)} labelMap={END_CONNECTION_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="FILTER ELEMENT" count={filters.filterElements.length || undefined}>
        <CheckList options={filterElementOptions} selected={filters.filterElements} onChange={(v) => toggleStr("filterElements", v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="PORE SIZE (μm)" count={filters.poreSizes.length || undefined}>
        <CheckList options={poreSizeOptions} selected={filters.poreSizes} onChange={(v) => togglePore(v)} suffix=" μm" />
      </FilterGroup>
    </Box>
  )
}