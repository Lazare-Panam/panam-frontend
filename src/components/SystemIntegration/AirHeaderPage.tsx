import { Box, Container, Typography, Divider, Button, Chip } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const SPECS = [
  { label: "Max Outlets", value: "20" },
  { label: "Min Outlets", value: "4" },
  { label: "Max Working Pressure", value: "6,000 psi (414 bar)" },
  { label: "Max Working Temperature", value: "648°C (1,200°F)" },
  { label: "Standard Material", value: "SS316 (ASTM A312-TP316)" },
  { label: "Distribution Pipe", value: 'Seamless SS — 1" to 2" SCH 40 / 80 / 160' },
  { label: "Inlet Flange", value: "ASME B16.5 / EN 1092-1 — Class 150 to 600, PN 16 to PN 100" },
  { label: "Testing Standard", value: "Nitrogen at 250 psi — ASME BPVC Section V & VIII" },
]

const TEMP_RATINGS = [
  { seat: "Ball Valve — Delrin Seats", temp: "Up to 85°C (185°F)" },
  { seat: "Ball Valve — PCTFE", temp: "Up to 149°C (300°F)" },
  { seat: "Ball Valve — Modified PTFE", temp: "Up to 204°C (400°F)" },
  { seat: "Ball Valve — PEEK", temp: "Up to 232°C (450°F)" },
  { seat: "Needle Valve — PTFE Packing", temp: "Up to 232°C (450°F)" },
  { seat: "Needle Valve — PEEK Packing", temp: "Up to 315°C (600°F)" },
  { seat: "Needle Valve — Grafoil", temp: "Up to 648°C (1,200°F)" },
]

const CONNECTIONS = [
  {
    label: "Inlet",
    options: 'Male/Female NPT · Male/Female BSPT · Male/Female BSPP · ASME B16.5 / EN 1092-1 Flanges · ½" to 2"',
  },
  {
    label: "Outlet",
    options: 'Male/Female NPT · Male/Female BSPT · Male/Female BSPP · Tube Socket / Pipe Socket Weld · Compression Fittings (6mm, 10mm, 12mm) · ½" to 2"',
  },
  {
    label: "Drain",
    options: 'Male/Female NPT · Male/Female BSPT · ¼" to ½" · Valve, Plug, or Threaded',
  },
]

const MATERIALS = [
  { component: "Inlet Flange", standard: "ASTM A182 SS316" },
  { component: "Distribution Pipe", standard: "ASTM A312-TP316" },
  { component: "Outlets", standard: "ASTM A479-316 SS" },
  { component: "Distribution Valves (Ball or Needle)", standard: "ASTM A479-316 SS" },
  { component: "Drain Valve (Ball or Needle)", standard: "ASTM A479-316 SS" },
]

const FEATURES = [
  "Radiographic & Liquid Penetrate Testing of all welds",
  "100% nitrogen leak-tight performance test at max working pressure",
  "Branch outlets on both sides as standard; single-side available on request",
  "Optional pressure gauge available on request",
  "Drain valve on opposite end — ordered with or without",
  "Ball Valve or Needle Valve series available for inlet, outlets, and drain",
  "Custom end connections, sizes, and materials available on request",
]

export default function AirHeaderDetailPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url("https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/air-h.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® System Integration
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 60 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 700, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
            Air Header
            <br />
            <span style={{ color: BRAND_BLUE }}>Distribution Manifold.</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: 15, md: 18 }, color: "rgba(255,255,255,0.85)", maxWidth: 560, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Stainless steel air distribution headers engineered for instrument and utility applications — up to 20 outlets, 6,000 psi working pressure, and full ASME BPVC leak testing on every unit.</Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="/enquiry" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Make an Enquiry
            </Button>
            <Button variant="outlined" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.08)" } }}>
              Email Sales
            </Button>
          </Box>
        </Container>
      </Box>

      {/* MARQUEE */}
      <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 28s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map(i => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["Up to 20 Outlets", "6,000 psi Rated", "SS316 Standard", "ASME BPVC Tested", "Ball & Needle Valve Options", "NPT · BSPT · BSPP · Flanged", "Custom Configurations Available", "Oil & Gas · Petrochemical · Offshore"].map(item => (
                <Typography key={item} sx={{ fontSize: 13, fontWeight: 500, color: "text.secondary", display: "flex", alignItems: "center", gap: 1.5, fontFamily: PRIMARY_FONT }}>
                  <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: BRAND_BLUE, flexShrink: 0 }} />
                  {item}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* OVERVIEW */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
              General Information
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 3, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              What is an Air Header?
            </Typography>
            <Typography sx={{ color: "#444", lineHeight: 1.85, mb: 2, fontFamily: PRIMARY_FONT, fontSize: 15 }}>A PANAM® air distribution header features an inlet on one end, a drain on the opposite end, and multiple outlets on the sides. The inlet can be fitted with a ball valve or needle valve to isolate all outlets simultaneously — this must be specified at the time of ordering.</Typography>
            <Typography sx={{ color: "#444", lineHeight: 1.85, mb: 2, fontFamily: PRIMARY_FONT, fontSize: 15 }}>The distribution pipe is fabricated from stainless steel thick-walled seamless tube and supports up to 20 outlets. Outlets can be supplied with threaded connections, weld connections, compression fittings, or factory pre-installed ball or needle valves.</Typography>
            <Typography sx={{ color: "#444", lineHeight: 1.85, fontFamily: PRIMARY_FONT, fontSize: 15 }}>The drain end can be configured with a threaded connection, weld connection, compression fitting, or a factory-installed ball/needle valve or plug.</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f8f8f8", p: 4, height: "100%" }}>
              <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 2 }}>
                Key Specifications
              </Typography>
              {SPECS.map((s, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", py: 1.5, borderBottom: i < SPECS.length - 1 ? "1px solid #e8e8e8" : "none", gap: 2 }}>
                  <Typography sx={{ fontSize: 13, color: "#888", fontFamily: PRIMARY_FONT, flexShrink: 0 }}>{s.label}</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", fontFamily: PRIMARY_FONT, textAlign: "right" }}>{s.value}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* KEY FEATURES */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Standard Features
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 6, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Built to Specification
          </Typography>
          <Grid container spacing={3}>
            {FEATURES.map((f, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BRAND_BLUE, flexShrink: 0, mt: "6px" }} />
                  <Typography sx={{ fontSize: 14, color: "#444", lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>{f}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* TEMPERATURE RATINGS */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Temperature Ratings
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Seat & Packing Options
          </Typography>
          <Typography sx={{ color: "#666", mb: 5, fontFamily: PRIMARY_FONT, fontSize: 14, maxWidth: 640, lineHeight: 1.75 }}>The temperature rating of each air header assembly is governed by the most restrictive component. Select the appropriate valve seat or packing material based on your process temperature.</Typography>
          <Box sx={{ border: "1px solid #e8e8e8" }}>
            {TEMP_RATINGS.map((t, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 3,
                  py: 2,
                  bgcolor: i % 2 === 0 ? "#fff" : "#fafafa",
                  borderBottom: i < TEMP_RATINGS.length - 1 ? "1px solid #e8e8e8" : "none",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography sx={{ fontSize: 14, color: "#333", fontFamily: PRIMARY_FONT }}>{t.seat}</Typography>
                <Chip label={t.temp} size="small" sx={{ bgcolor: "#e8f7fd", color: "#0078a8", fontWeight: 700, fontSize: 12, borderRadius: 0, fontFamily: PRIMARY_FONT }} />
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* END CONNECTIONS */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            End Connections
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 6, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Connection Options
          </Typography>
          <Grid container spacing={3}>
            {CONNECTIONS.map((c, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Box sx={{ border: "1px solid #e8e8e8", p: 3, height: "100%" }}>
                  <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, mb: 1.5, textTransform: "uppercase" }}>{c.label} Connection</Typography>
                  <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>{c.options}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* MATERIALS */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Material of Construction
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 6, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Standard Bill of Materials
          </Typography>
          <Box sx={{ border: "1px solid #e8e8e8" }}>
            <Box sx={{ display: "flex", px: 3, py: 1.5, bgcolor: "#f5f5f5", borderBottom: "1px solid #e8e8e8" }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#888", fontFamily: PRIMARY_FONT, flex: 1, textTransform: "uppercase" }}>Component</Typography>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#888", fontFamily: PRIMARY_FONT, flex: 1, textTransform: "uppercase" }}>Material Standard</Typography>
            </Box>
            {MATERIALS.map((m, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  px: 3,
                  py: 2,
                  bgcolor: i % 2 === 0 ? "#fff" : "#fafafa",
                  borderBottom: i < MATERIALS.length - 1 ? "1px solid #e8e8e8" : "none",
                }}>
                <Typography sx={{ fontSize: 14, color: "#333", fontFamily: PRIMARY_FONT, flex: 1 }}>{m.component}</Typography>
                <Typography sx={{ fontSize: 14, color: "#555", fontFamily: PRIMARY_FONT, flex: 1 }}>{m.standard}</Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={{ fontSize: 12, color: "#999", mt: 1.5, fontFamily: PRIMARY_FONT }}>Other materials available on request (e.g. Duplex SS ASTM EN 10272-5 Grade 1.4462).</Typography>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* TESTING */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Quality Assurance
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 3, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Testing & Inspection
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: "Nitrogen Leak Test", body: "Every unit tested in a nitrogen gas chamber at 250 psi (17.2 bar). No detectable leak accepted at the specified detection method." },
              { title: "Weld Tightness Test", body: "Carried out per Article 5 of ASME BPVC. Acceptance per ASME BPVC Section 8, Section 1, Appendix 8." },
              { title: "Radiographic Testing", body: "Weld radiography per ASME BPVC Section V Article 2. Acceptance per ASME BPVC Section VIII Division 1 UW-51." },
              { title: "Liquid Penetrate Testing", body: "Applied to all welds as standard. Ensures surface integrity and absence of weld defects prior to dispatch." },
            ].map((t, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ borderLeft: `3px solid ${BRAND_BLUE}`, pl: 3, py: 0.5 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: 15, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mb: 1 }}>{t.title}</Typography>
                  <Typography sx={{ fontSize: 14, color: "#555", lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>{t.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* CTA */}
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Ready to specify your Air Header?
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Tell us your outlet count, pressure class, connection type, and valve preference — we'll come back to you within 24 hours.</Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="/enquiry" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Make an Enquiry
            </Button>
            <Button variant="outlined" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
              Email Technical Sales
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
