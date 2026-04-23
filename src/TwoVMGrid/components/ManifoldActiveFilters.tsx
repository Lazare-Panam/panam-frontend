import { Stack, Chip, Typography } from '@mui/material'
import { type ManifoldFilters } from '../hooks/types'
const BRAND_BLUE = '#01B0F0'

interface Props {
  filters: ManifoldFilters
  setFilters: React.Dispatch<React.SetStateAction<ManifoldFilters>>
}

export function ManifoldActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof ManifoldFilters; label: string; value: string }[] = []

  filters.connectionSizes.forEach(v => chips.push({ key: 'connectionSizes', label: v, value: v }))
  filters.connectionTypes.forEach(v => chips.push({ key: 'connectionTypes', label: v, value: v }))
  filters.mountings.forEach(v => chips.push({ key: 'mountings', label: v, value: v }))
  filters.maxPressures.forEach(v => chips.push({ key: 'maxPressures', label: v, value: v }))
  filters.configurations.forEach(v => chips.push({ key: 'configurations', label: `Config: ${v}`, value: v }))
filters.ventHoleSizes.forEach(v => chips.push({ key: 'ventHoleSizes', label: `Vent: ${v}`, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof ManifoldFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))
  }

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((f, i) => (
        <Chip key={`${f.key}-${f.value}-${i}`} label={f.label}
          size="small" variant="outlined"
          sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
          onDelete={() => remove(f.key, f.value)} />
      ))}
    </Stack>
  )
}