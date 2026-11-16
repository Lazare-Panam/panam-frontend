import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { type PCVFilters, EMPTY_PCV_FILTERS, INLET_OUTLET_LABELS, MATERIAL_LABELS, formatPressure } from "../hooks/types"
import { type PCVFilterOptions } from "../../../api/checkValveApi"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: PCVFilters
  setFilters: React.Dispatch<React.SetStateAction<PCVFilters>>
  filterOptions?: PCVFilterOptions
  filtersLoading: boolean
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

function StringCheckbox({ options, selected, onChange, loading, labelMap }: {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  loading?: boolean
  labelMap?: Record<string, string>
}) {
  if (loading) return <Skeleton height={50} />
  if (!options?.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
          label={<Typography variant="body2" fontSize="0.8rem">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

function NumberCheckbox({ options, selected, onChange, loading, format }: {
  options: number[]
  selected: number[]
  onChange: (v: number) => void
  loading?: boolean
  format: (v: number) => string
}) {
  if (loading) return <Skeleton height={50} />
  if (!options?.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
          label={<Typography variant="body2" fontSize="0.8rem">{format(opt)}</Typography>}
        />
      ))}
    </>
  )
}

export function PCVSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const toggle = (key: keyof PCVFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const toggleNum = (val: number) =>
    setFilters(prev => ({
      ...prev,
      pressureRatings: prev.pressureRatings.includes(val)
        ? prev.pressureRatings.filter(v => v !== val)
        : [...prev.pressureRatings, val],
    }))

  return (
    <Box sx={{
      width: 240, flexShrink: 0, p: 2,
      borderRight: "1px solid", borderColor: "divider",
      bgcolor: "background.paper",
      overflowY: "auto", boxSizing: "border-box",
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE }}
            onClick={() => setFilters(EMPTY_PCV_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="BODY MATERIAL" count={filters.materials.length || undefined}>
        <StringCheckbox options={filterOptions?.materials ?? []} selected={filters.materials} onChange={v => toggle("materials", v)} loading={filtersLoading} labelMap={MATERIAL_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="WORKING PRESSURE" count={filters.pressureRatings.length || undefined}>
        <NumberCheckbox options={filterOptions?.pressureRatings ?? []} selected={filters.pressureRatings} onChange={toggleNum} loading={filtersLoading} format={formatPressure} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="INLET TYPE" count={filters.inlets.length || undefined}>
        <StringCheckbox options={filterOptions?.inlets ?? []} selected={filters.inlets} onChange={v => toggle("inlets", v)} loading={filtersLoading} labelMap={INLET_OUTLET_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="INLET SIZE" count={filters.inletTubeODs.length || undefined}>
        <StringCheckbox options={filterOptions?.inletTubeODs ?? []} selected={filters.inletTubeODs} onChange={v => toggle("inletTubeODs", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="OUTLET TYPE" count={filters.outlets.length || undefined}>
        <StringCheckbox options={filterOptions?.outlets ?? []} selected={filters.outlets} onChange={v => toggle("outlets", v)} loading={filtersLoading} labelMap={INLET_OUTLET_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="OUTLET SIZE" count={filters.outletTubeODs.length || undefined}>
        <StringCheckbox options={filterOptions?.outletTubeODs ?? []} selected={filters.outletTubeODs} onChange={v => toggle("outletTubeODs", v)} loading={filtersLoading} />
      </FilterGroup>
    </Box>
  )
}