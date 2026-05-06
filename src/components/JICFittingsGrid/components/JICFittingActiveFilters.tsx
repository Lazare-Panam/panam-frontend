import { Stack, Chip, Typography } from '@mui/material'
import { type JICFittingFilters, JIC_FITTING_TYPE_LABELS, JIC_P1_TYPE_LABELS } from '../hooks/types'

const BRAND_BLUE = '#01B0F0'

interface Props {
  filters: JICFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<JICFittingFilters>>
}

export function JICFittingActiveFilters({ filters, setFilters }: Props) {
  const chips: { key: keyof JICFittingFilters; label: string; value: string }[] = []

  filters.fittingTypes.forEach(v => chips.push({ key: 'fittingTypes', label: JIC_FITTING_TYPE_LABELS[v] ?? v, value: v }))
  filters.p1Sizes.forEach(v => chips.push({ key: 'p1Sizes', label: `P1: ${v}`, value: v }))
  filters.p1Types.forEach(v => chips.push({ key: 'p1Types', label: `P1: ${JIC_P1_TYPE_LABELS[v] ?? v}`, value: v }))
  filters.p2Sizes.forEach(v => chips.push({ key: 'p2Sizes', label: `P2: ${v}`, value: v }))
  filters.p2Types.forEach(v => chips.push({ key: 'p2Types', label: `P2: ${JIC_P1_TYPE_LABELS[v] ?? v}`, value: v }))
  filters.materials.forEach(v => chips.push({ key: 'materials', label: v, value: v }))

  if (chips.length === 0) return null

  const remove = (key: keyof JICFittingFilters, value: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].filter(v => v !== value) }))

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