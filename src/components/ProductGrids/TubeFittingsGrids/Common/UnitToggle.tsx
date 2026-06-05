import { ToggleButtonGroup, ToggleButton } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

const toggleSx = {
  "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
  "& .Mui-selected": { bgcolor: `${BRAND_BLUE} !important`, color: "#fff !important" },
}

interface Props {
  value: string
  onChange: (val: string) => void
}

export function UnitToggle({ value, onChange }: Props) {
  return (
    <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, mb: 1.5, ...toggleSx }}
      value={value}
      onChange={(_, val) => { if (!val) return; onChange(val) }}>
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="Imperial">Imperial</ToggleButton>
      <ToggleButton value="Metric">Metric</ToggleButton>
    </ToggleButtonGroup>
  )
}