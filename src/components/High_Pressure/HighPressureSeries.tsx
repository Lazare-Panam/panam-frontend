import React from "react"
import { Box, Typography, Grid, Stack } from "@mui/material"
import { SectionHeader } from "../Landing2/homeStyles"
import { C, GRADIENT, cardSx } from "../Landing2/homeTokens"

const needleValveSeries = [
  { series: "HP", pressure: "10,000 psi", connection: "NPT" },
  { series: "HP1", pressure: "15,000 psi", connection: "NPT / MP Cone & Thread" },
  { series: "HP2", pressure: "20,000 psi", connection: "MP Cone & Thread" },
  { series: "HP3", pressure: "30,000 psi", connection: "MP / HP Cone & Thread" },
  { series: "HP6", pressure: "60,000 psi", connection: "HP Cone & Thread" },
]

const ballValveSeries = [
  { series: "HP", pressure: "10,000 psi", config: "3-Way 180° · 3-Way 90° Diverter" },
  { series: "HP1", pressure: "15,000 psi", config: "2-Way · 3-Way 180° · 3-Way 90° Diverter" },
  { series: "HP2", pressure: "15,000 – 20,000 psi", config: "2-Way · 3-Way 180° · 3-Way 90° Diverter" },
]

const MAX_PSI = 60000
const topPsi = (s: string) => Math.max(...(s.match(/[\d,]+/g) ?? ["0"]).map(n => Number(n.replace(/,/g, ""))))

interface Row {
  series: string
  pressure: string
  detail: string
}

// One row per series: badge, pressure with a fill bar against the 60k ceiling, and the connection/config detail
const SeriesCard = ({ title, detailLabel, rows }: { title: string; detailLabel: string; rows: Row[] }) => (
  <Box sx={{ ...cardSx, borderRadius: "22px", overflow: "hidden", height: "100%" }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 3, py: 2, borderBottom: `1px solid ${C.border}`, bgcolor: C.surface }}>
      <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.05rem" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{rows.length} series</Typography>
    </Stack>
    <Stack>
      {rows.map((row, i) => (
        <Box key={row.series} sx={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 2, alignItems: "center", px: 3, py: 2, borderTop: i > 0 ? `1px solid ${C.border}` : "none", transition: "background-color 0.15s ease", "&:hover": { bgcolor: "rgba(1,176,240,0.04)" } }}>
          <Box sx={{ height: 40, borderRadius: "12px", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", fontWeight: 800, fontSize: "0.92rem", letterSpacing: "0.02em" }}>{row.series}</Box>
          <Box sx={{ minWidth: 0 }}>
            <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ gap: 1, flexWrap: "wrap" }}>
              <Typography sx={{ fontWeight: 800, color: C.ink, fontSize: "0.98rem" }}>{row.pressure}</Typography>
              <Typography sx={{ fontSize: "0.82rem", color: C.muted }}>
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                  {detailLabel}:{" "}
                </Box>
                {row.detail}
              </Typography>
            </Stack>
            <Box sx={{ mt: 1, height: 6, borderRadius: 3, bgcolor: "#E9EEF3", overflow: "hidden" }}>
              <Box sx={{ height: "100%", width: `${(topPsi(row.pressure) / MAX_PSI) * 100}%`, borderRadius: 3, background: GRADIENT.brand }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  </Box>
)

const HighPressureSeries: React.FC = () => {
  return (
    <Box>
      <SectionHeader eyebrow="Pressure Series Reference" title="Which Series Do You Need?" subtitle="Series designation maps directly to pressure class and connection standard — use this to shortlist before requesting a quote." />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <SeriesCard title="Needle Valve Series" detailLabel="Connection" rows={needleValveSeries.map(r => ({ series: r.series, pressure: r.pressure, detail: r.connection }))} />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <SeriesCard title="Ball Valve Series" detailLabel="Configurations" rows={ballValveSeries.map(r => ({ series: r.series, pressure: r.pressure, detail: r.config }))} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HighPressureSeries
