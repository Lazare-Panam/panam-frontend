import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton,
  ToggleButtonGroup, ToggleButton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  type ConnectorElbowFilters,
  EMPTY_CONNECTOR_ELBOW_FILTERS,
  FITTING_TYPE_LABELS,
  THREAD_TYPE_LABELS,
} from "../hooks/types"
import { type ConnectorElbowFilterOptions } from "../../../api/connectorElbowApi"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const IMPERIAL_ODS = [
  '1/16', '1/8', '3/16', '1/4', '5/16', '3/8',
  '1/2', '5/8', '3/4', '7/8', '1', '1-1/4', '1-1/2', '2'
]

const METRIC_ODS = [
  '2', '3', '4', '6', '8', '10', '12',
  '14', '15', '16', '18', '20', '22', '25', '28', '30', '32', '38'
]

interface Props {
  filters: ConnectorElbowFilters
  setFilters: React.Dispatch<React.SetStateAction<ConnectorElbowFilters>>
  filterOptions?: ConnectorElbowFilterOptions
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

export function ConnectorElbowSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const toggle = (key: "fittingTypes" | "tubeODs" | "tubeODUnits" | "threadDimensions" | "threadTypes", val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleSx = {
    "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
    "& .Mui-selected": { bgcolor: `${BRAND_BLUE} !important`, color: "#fff !important" },
  }

  const selectedUnit = filters.tubeODUnits[0] ?? "all"

  const visibleODs = selectedUnit === "Imperial"
    ? IMPERIAL_ODS
    : selectedUnit === "Metric"
    ? METRIC_ODS
    : [...IMPERIAL_ODS, ...METRIC_ODS]

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
            onClick={() => setFilters(EMPTY_CONNECTOR_ELBOW_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <StringCheckbox
          options={filterOptions?.fittingTypes ?? []}
          selected={filters.fittingTypes}
          onChange={v => toggle("fittingTypes", v)}
          loading={filtersLoading}
          labelMap={FITTING_TYPE_LABELS}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <ToggleButtonGroup
          exclusive
          size="small"
          sx={{ mt: 0.5, mb: 1.5, ...toggleSx }}
          value={selectedUnit}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({
              ...prev,
              tubeODUnits: val === "all" ? [] : [val],
              tubeODs: [],
            }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
        <StringCheckbox
          options={visibleODs}
          selected={filters.tubeODs}
          onChange={v => toggle("tubeODs", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <StringCheckbox
          options={filterOptions?.threadTypes ?? []}
          selected={filters.threadTypes}
          onChange={v => toggle("threadTypes", v)}
          loading={filtersLoading}
          labelMap={THREAD_TYPE_LABELS}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD DIMENSION" count={filters.threadDimensions.length || undefined}>
        <StringCheckbox
          options={filterOptions?.threadDimensions ?? []}
          selected={filters.threadDimensions}
          onChange={v => toggle("threadDimensions", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="POSITIONABLE">
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.isPositionable === null ? "all" : filters.isPositionable ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, isPositionable: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">Standard</ToggleButton>
          <ToggleButton value="yes">Positionable</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="O-RING SEAL">
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.hasORingSeal === null ? "all" : filters.hasORingSeal ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, hasORingSeal: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">Standard</ToggleButton>
          <ToggleButton value="yes">With O-Ring</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </Box>
  )
}