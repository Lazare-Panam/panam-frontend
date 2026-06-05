import { Box, FormControlLabel, Checkbox, Stack, Typography } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Props {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  counts: Record<string, number>
  labelMap?: Record<string, string>
}

export function SmartCheckList({ options, selected, onChange, counts, labelMap }: Props) {
  if (!options?.length) return (
    <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  )

  return (
    <Box sx={{ maxHeight: 260, overflowY: "auto" }}>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={
              <Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled}
                sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE }, "&.Mui-disabled": { color: "rgba(0,0,0,0.18)" } }}
              />
            }
            label={
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}
                  sx={{ color: isDisabled ? "text.disabled" : "text.primary" }}>
                  {labelMap?.[opt] ?? opt}
                </Typography>
                <Typography variant="caption" fontWeight={600} fontSize="0.68rem"
                  sx={{ color: isDisabled ? "text.disabled" : "text.secondary" }}>
                  ({count})
                </Typography>
              </Stack>
            }
            sx={{ opacity: isDisabled ? 0.45 : 1, mr: 0 }}
          />
        )
      })}
    </Box>
  )
}