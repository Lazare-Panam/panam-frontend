import { Stack, Chip, Typography } from "@mui/material"
import {
  type ConnectorElbowFilters,
  FITTING_TYPE_LABELS,
  THREAD_TYPE_LABELS,
  TUBE_OD_UNIT_LABELS,
} from "../hooks/types"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Props {
  filters: ConnectorElbowFilters
  setFilters: React.Dispatch<React.SetStateAction<ConnectorElbowFilters>>
}

export function ConnectorElbowActiveFilters({ filters, setFilters }: Props) {
  const chips: { label: string; onDelete: () => void }[] = []

  filters.fittingTypes.forEach(v => chips.push({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, fittingTypes: prev.fittingTypes.filter(x => x !== v) })) }))
  filters.tubeODUnits.forEach(v => chips.push({ label: TUBE_OD_UNIT_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, tubeODUnits: prev.tubeODUnits.filter(x => x !== v) })) }))
  filters.tubeODs.forEach(v => chips.push({ label: `OD: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, tubeODs: prev.tubeODs.filter(x => x !== v) })) }))
  filters.threadTypes.forEach(v => chips.push({ label: THREAD_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(prev => ({ ...prev, threadTypes: prev.threadTypes.filter(x => x !== v) })) }))
  filters.threadDimensions.forEach(v => chips.push({ label: `Thread: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, threadDimensions: prev.threadDimensions.filter(x => x !== v) })) }))
  if (filters.isPositionable !== null) chips.push({ label: filters.isPositionable ? "Positionable" : "Standard Rod", onDelete: () => setFilters(prev => ({ ...prev, isPositionable: null })) })
  if (filters.hasORingSeal !== null) chips.push({ label: filters.hasORingSeal ? "With O-Ring" : "No O-Ring", onDelete: () => setFilters(prev => ({ ...prev, hasORingSeal: null })) })

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}