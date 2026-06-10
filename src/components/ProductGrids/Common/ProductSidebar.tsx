import { Box, Stack, Typography } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface Props {
  activeCount: number
  onClearAll: () => void
  children: React.ReactNode
}

export function ProductSidebar({ activeCount, onClearAll, children }: Props) {
  return (
    <Box sx={{ width: 260, flexShrink: 0, p: 2, borderRight: "1px solid", borderColor: "divider", bgcolor: "background.paper", overflowY: "auto", boxSizing: "border-box" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>
          FILTER
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE, fontFamily: PRIMARY_FONT }} onClick={onClearAll}>
            Clear all
          </Typography>
        )}
      </Stack>
      {children}
    </Box>
  )
}