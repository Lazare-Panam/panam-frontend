import React from "react"
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Stack } from "@mui/material"
import SpeedIcon from "@mui/icons-material/Speed"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import ScienceIcon from "@mui/icons-material/Science"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const specGroups = [
  {
    icon: <SpeedIcon />,
    label: "Pressure Classes",
    blurb: "Working pressure ranges across our standard and high-pressure ranges — the starting point for matching a component to your process conditions.",
    columns: ["Series", "Scope"],
    rows: [
      ["6K / 10K / 15K / 20K psig", "SS316 across ball, needle, manifolds and DBB — standard instrumentation classes"],
      ["MP Cone & Thread — 20,000 psi", "Compact, weld-free sealing for very high pressure or tight envelopes"],
      ["HP Cone & Thread — 60,000 psi", "Proven for hydrogen and offshore service; HP needle valves extend to this class"],
    ],
  },
  {
    icon: <ThermostatIcon />,
    label: "Seat & Seal Materials",
    blurb: "Seat and packing material governs temperature range and chemical compatibility — selected per application during quoting.",
    columns: ["Material", "Notes"],
    rows: [
      ["PTFE", "Broad chemical resistance, typical to ~200°C. Standard for many ball seats and needle packing."],
      ["PEEK", "Higher temperature and deformation resistance; suited to higher delta-P and compressible gas service."],
      ["KEL-F (PCTFE)", "Cryogenic and low-temperature service with good permeation resistance."],
      ["Graphoil", "High-temperature packing to 538°C in needle and manifold bonnets."],
    ],
  },
  {
    icon: <ScienceIcon />,
    label: "Body Metallurgy",
    blurb: "Body material is matched to the media and environment — from standard utility service to aggressive offshore and chemical duty.",
    columns: ["Material", "Application"],
    rows: [
      ["SS316", "Standard choice for most utilities and clean process streams"],
      ["Duplex", "Higher strength and chloride stress corrosion resistance; common offshore"],
      ["Monel", "Excellent seawater and hydrofluoric acid resistance"],
      ["Hastelloy", "Aggressive chemical resistance in refining and chemical plants"],
    ],
  },
]

const tableSx = {
  "& th": { fontFamily: PRIMARY_FONT, fontWeight: 800, color: "#1a1a1a", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.03em", bgcolor: "#fafafa" },
  "& td": { fontFamily: PRIMARY_FONT, color: "#444", fontSize: "0.9rem" },
  "& tbody tr": { transition: "background-color 0.15s ease" },
  "& tbody tr:hover": { bgcolor: "rgba(1,176,240,0.04)" },
}

const TechnicalSpecs: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff", borderTop: "1px solid #eee" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, maxWidth: 800 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 800, letterSpacing: 3, fontFamily: PRIMARY_FONT, display: "block" }}>
            Technical Reference
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, mt: 1, mb: 2, color: "#1a1a1a", fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
            Pressure Classes, Seat Materials & Metallurgy
          </Typography>
          <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#555", lineHeight: 1.8 }}>
            Every product in this catalog is specified against a known pressure class, seat material and body metallurgy — the same reference our engineers use when matching a component to your application.
          </Typography>
        </Box>

        <Stack spacing={6}>
          {specGroups.map(group => (
            <Grid container spacing={4} key={group.label} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <Box sx={{ color: BRAND_BLUE, display: "flex" }}>{group.icon}</Box>
                  <Typography sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", fontSize: "1.15rem" }}>
                    {group.label}
                  </Typography>
                </Stack>
                <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {group.blurb}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: 0 }}>
                  <Table size="small" sx={tableSx}>
                    <TableHead>
                      <TableRow>
                        {group.columns.map(col => (
                          <TableCell key={col}>{col}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {group.rows.map(row => (
                        <TableRow key={row[0]}>
                          <TableCell sx={{ fontWeight: 700, whiteSpace: "nowrap" }}>{row[0]}</TableCell>
                          <TableCell>{row[1]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default TechnicalSpecs
