import { Stack, Chip, Typography } from "@mui/material"
import { type FilterElementFilters } from "../hooks/typesElement"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: FilterElementFilters
  setFilters: React.Dispatch<React.SetStateAction<FilterElementFilters>>
}

export function PSEActiveFilters({ filters, setFilters }: Props) {
  const chips: { label: string; onDelete: () => void }[] = []

  filters.sizeGroups.forEach(v => chips.push({
    label: `Size Group: ${v}`,
    onDelete: () => setFilters(prev => ({ ...prev, sizeGroups: prev.sizeGroups.filter(x => x !== v) })),
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
