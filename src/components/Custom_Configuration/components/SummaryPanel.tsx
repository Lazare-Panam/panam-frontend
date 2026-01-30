import { Box, Grid, Typography } from "@mui/material"
import React from "react"
interface SummaryPanelProps {
  generatedPartNumber: string
}
const SummaryPanel: React.FC<SummaryPanelProps> = ({ generatedPartNumber }) => {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ mt: "auto", p: 2, bgcolor: "#01B0F0", color: "#fff", borderRadius: 0, textAlign: "center" }}>
        <Typography variant="caption" sx={{ opacity: 0.8, fontWeight: 700 }}>
          GENERATED PART NUMBER:
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", mt: 0.5, letterSpacing: 1 }}>{generatedPartNumber || "---"}</Typography>
      </Box>
    </Grid>
  )
}
export default SummaryPanel
