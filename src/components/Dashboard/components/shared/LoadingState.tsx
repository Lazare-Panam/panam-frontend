import { Box, CircularProgress } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

const LoadingState = ({ height = "400px" }: { height?: string }) => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height }}>
    <CircularProgress sx={{ color: BRAND_BLUE }} />
  </Box>
)

export default LoadingState