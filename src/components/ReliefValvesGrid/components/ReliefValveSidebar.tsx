import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  type ReliefValveFilters, EMPTY_RELIEF_VALVE_FILTERS,
  SERIES_LABELS, BODY_MATERIAL_LABELS, CONNECTION_TYPE_LABELS,
  THREAD_TYPE_LABELS, SEAL_MATERIAL_LABELS, SPRING_LABELS, CONNECTION_SIZE_LABELS
} from "../hooks/types"
import { type ReliefValveFilterOptions } from "../../../api/reliefValveApi"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Props {
  filters: ReliefValveFilters
  setFilters: React.Dispatch<React.SetStateAction<ReliefValveFilters>>
  filterOptions?: ReliefValveFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary" fontFamily={PRIMARY_FONT}>{title}</Typography>
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
          label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

export function ReliefValveSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const toggle = (key: keyof ReliefValveFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  return (
    <Box sx={{
      width: 260, flexShrink: 0, p: 2,
      borderRight: "1px solid", borderColor: "divider",
      bgcolor: "background.paper",
      overflowY: "auto", boxSizing: "border-box",
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}
            onClick={() => setFilters(EMPTY_RELIEF_VALVE_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <StringCheckbox options={filterOptions?.series ?? []} selected={filters.series} onChange={v => toggle("series", v)} loading={filtersLoading} labelMap={SERIES_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="BODY MATERIAL" count={filters.bodyMaterials.length || undefined}>
        <StringCheckbox options={filterOptions?.bodyMaterials ?? []} selected={filters.bodyMaterials} onChange={v => toggle("bodyMaterials", v)} loading={filtersLoading} labelMap={BODY_MATERIAL_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <StringCheckbox options={filterOptions?.connectionSizes ?? []} selected={filters.connectionSizes} onChange={v => toggle("connectionSizes", v)} loading={filtersLoading} labelMap={CONNECTION_SIZE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.threadTypes ?? []} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} loading={filtersLoading} labelMap={THREAD_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTION TYPE" count={filters.connectionTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.connectionTypes ?? []} selected={filters.connectionTypes} onChange={v => toggle("connectionTypes", v)} loading={filtersLoading} labelMap={CONNECTION_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="SPRING" count={filters.springs.length || undefined}>
        <StringCheckbox options={filterOptions?.springs ?? []} selected={filters.springs} onChange={v => toggle("springs", v)} loading={filtersLoading} labelMap={SPRING_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="SEAL MATERIAL" count={filters.sealMaterials.length || undefined}>
        <StringCheckbox options={filterOptions?.sealMaterials ?? []} selected={filters.sealMaterials} onChange={v => toggle("sealMaterials", v)} loading={filtersLoading} labelMap={SEAL_MATERIAL_LABELS} />
      </FilterGroup>
    </Box>
  )
}