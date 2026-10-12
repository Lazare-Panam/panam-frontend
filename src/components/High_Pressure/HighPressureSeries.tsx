import React from "react"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const needleValveSeries = [
  { series: "HP", pressure: "10,000 psi", connection: "NPT" },
  { series: "HP1", pressure: "15,000 psi", connection: "NPT / MP Cone & Thread" },
  { series: "HP2", pressure: "20,000 psi", connection: "MP Cone & Thread" },
  { series: "HP3", pressure: "30,000 psi", connection: "MP / HP Cone & Thread" },
  { series: "HP6", pressure: "60,000 psi", connection: "HP Cone & Thread" },
]

const ballValveSeries = [
  { series: "HP", pressure: "10,000 psi", config: "2-Way" },
  { series: "HP1", pressure: "15,000 psi", config: "2-Way · 3-Way 180°" },
  { series: "HP2", pressure: "15,000 – 20,000 psi", config: "2-Way · 3-Way 180° · 3-Way 90° Diverter" },
]

const tableSx = {
  "& th": { fontFamily: PRIMARY_FONT, fontWeight: 800, color: "#1a1a1a", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.03em", bgcolor: "#fafafa" },
  "& td": { fontFamily: PRIMARY_FONT, color: "#444", fontSize: "0.9rem" },
  "& tbody tr": { transition: "background-color 0.15s ease" },
  "& tbody tr:hover": { bgcolor: "rgba(1,176,240,0.04)" },
}

const HighPressureSeries: React.FC = () => {
  return (
    <Box component="section">
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
        Pressure Series Reference
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
        Which Series Do You Need?
      </Typography>
      <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 5, maxWidth: 640, lineHeight: 1.8 }}>
        Series designation maps directly to pressure class and connection standard — use this to shortlist before requesting a quote.
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mb: 1.5 }}>Needle Valve Series</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: 0 }}>
            <Table size="small" sx={tableSx}>
              <TableHead>
                <TableRow>
                  <TableCell>Series</TableCell>
                  <TableCell>Max Pressure</TableCell>
                  <TableCell>Connection</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {needleValveSeries.map(row => (
                  <TableRow key={row.series}>
                    <TableCell sx={{ fontWeight: 700 }}>{row.series}</TableCell>
                    <TableCell>{row.pressure}</TableCell>
                    <TableCell>{row.connection}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mb: 1.5 }}>Ball Valve Series</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: 0 }}>
            <Table size="small" sx={tableSx}>
              <TableHead>
                <TableRow>
                  <TableCell>Series</TableCell>
                  <TableCell>Max Pressure</TableCell>
                  <TableCell>Configurations</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ballValveSeries.map(row => (
                  <TableRow key={row.series}>
                    <TableCell sx={{ fontWeight: 700 }}>{row.series}</TableCell>
                    <TableCell>{row.pressure}</TableCell>
                    <TableCell>{row.config}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HighPressureSeries
