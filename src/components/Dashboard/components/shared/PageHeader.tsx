import { Box, Typography } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

interface Props {
  title: string
  subtitle?: string
}

const PageHeader = ({ title, subtitle }: Props) => (
  <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
    <Typography variant="h4" fontWeight={700} sx={{ color: "#1a1a1a" }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
        {subtitle}
      </Typography>
    )}
  </Box>
)

export default PageHeader