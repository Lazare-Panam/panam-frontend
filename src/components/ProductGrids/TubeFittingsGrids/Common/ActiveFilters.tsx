// ActiveFilters.tsx
import { Stack, Chip, Typography } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface FilterChip {
  label: string
  onDelete: () => void
}

interface Props {
  chips: FilterChip[]
}

export function ActiveFilters({ chips }: Props) {
  if (chips.length === 0) return null
  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>
        ACTIVE FILTERS:
      </Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}