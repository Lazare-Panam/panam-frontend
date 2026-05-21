import { Stack, Chip, Typography } from "@mui/material"
import { type PIFFilters, END_CONNECTION_LABELS } from "../hooks/types2"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: PIFFilters
  setFilters: React.Dispatch<React.SetStateAction<PIFFilters>>
}

export function PIFActiveFilters({ filters, setFilters }: Props) {
  const chips: { label: string; onDelete: () => void }[] = []

  filters.series.forEach(v => chips.push({
    label: `Series: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, series: prev.series.filter(x => x !== v) })),
  }))
  filters.threadStandards.forEach(v => chips.push({
    label: `Thread: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, threadStandards: prev.threadStandards.filter(x => x !== v) })),
  }))
  filters.threadSizes.forEach(v => chips.push({
    label: `Size: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, threadSizes: prev.threadSizes.filter(x => x !== v) })),
  }))
  filters.endConnections.forEach(v => chips.push({
    label: `End: ${END_CONNECTION_LABELS[v] ?? v}`,
    onDelete: () => setFilters(prev => ({ ...prev, endConnections: prev.endConnections.filter(x => x !== v) })),
  }))
  filters.filterElements.forEach(v => chips.push({
    label: `Element: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, filterElements: prev.filterElements.filter(x => x !== v) })),
  }))
  filters.poreSizes.forEach(v => chips.push({
    label: `Pore: ${v} μm`,
    onDelete: () => setFilters(prev => ({ ...prev, poreSizes: prev.poreSizes.filter(x => x !== v) })),
  }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}