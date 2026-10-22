import React from "react"
import { Box, Container, Typography, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import SpeedIcon from "@mui/icons-material/Speed"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import ScienceIcon from "@mui/icons-material/Science"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C, GRADIENT, SHADOW, sectionSx } from "../../Landing2/homeTokens"

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

// Highest working pressure per Pressure Classes row, drawn as a bar against the 60,000 psi top class
const PSI_METER: Record<string, number> = {
  "6K / 10K / 15K / 20K psig": 20000,
  "MP Cone & Thread — 20,000 psi": 20000,
  "HP Cone & Thread — 60,000 psi": 60000,
}
const PSI_MAX = 60000

// Two-letter badge for material rows, e.g. "KEL-F (PCTFE)" → "KE"
const badge = (name: string) => name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()

// Datasheet-style table: one card, pill tabs on top, a real <table> below. Inactive tables stay in the DOM
// (hidden) so the prerendered HTML still carries every row. Below sm each row stacks into a block.
const tableSx = {
  borderCollapse: "separate",
  "& th": { color: C.muted, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: `1px solid ${C.border}`, py: 1.75, px: { xs: 2.5, md: 3.5 }, bgcolor: C.white },
  "& td": { borderBottom: `1px solid ${C.border}`, py: 2.5, px: { xs: 2.5, md: 3.5 }, verticalAlign: "middle" },
  "& tbody tr": { position: "relative", transition: "background-color 0.2s ease" },
  "& tbody tr:hover": { bgcolor: C.tintBg },
  "& tbody tr:hover td:first-of-type": { boxShadow: `inset 3px 0 0 ${C.brand}` },
  "& tbody tr:last-of-type td": { borderBottom: 0 },
  "@media (max-width: 599.95px)": {
    "& thead": { display: "none" },
    "& tbody tr, & tbody td": { display: "block" },
    "& tbody tr": { py: 1, borderBottom: `1px solid ${C.border}` },
    "& tbody tr:last-of-type": { borderBottom: 0 },
    "& td": { border: 0, py: 1 },
    "& td.spec-num": { display: "none" },
  },
} as const

const TechnicalSpecs: React.FC = () => {
  const [active, setActive] = React.useState(0)
  const current = specGroups[active]

  return (
    <Box component="section" sx={sectionSx("surface")}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Technical Reference"
          title="Pressure Classes, Seat Materials & Metallurgy"
          subtitle="Every product in this catalog is specified against a known pressure class, seat material and body metallurgy — the same reference our engineers use when matching a component to your application."
        />

        <Box sx={{ bgcolor: C.white, border: `1px solid ${C.border}`, borderRadius: "22px", boxShadow: SHADOW.card, overflow: "hidden" }}>
          {/* Toolbar: segmented tabs + the active group's summary */}
          <Box sx={{ px: { xs: 2, md: 3.5 }, pt: { xs: 2, md: 3 }, pb: { xs: 2.5, md: 3 }, borderBottom: `1px solid ${C.border}`, background: `linear-gradient(180deg, ${C.surface} 0%, ${C.white} 100%)` }}>
            <Box
              role="tablist"
              aria-label="Technical reference groups"
              sx={{ display: "flex", gap: 0.5, p: 0.5, borderRadius: "14px", bgcolor: "#E9EFF5", width: { xs: "100%", md: "fit-content" }, boxSizing: "border-box", overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
              {specGroups.map((group, i) => {
                const on = active === i
                return (
                  <Box
                    key={group.label}
                    component="button"
                    type="button"
                    role="tab"
                    id={`spec-tab-${i}`}
                    aria-selected={on}
                    aria-controls={`spec-panel-${i}`}
                    onClick={e => {
                      setActive(i)
                      // Keep the chosen tab in view when the tab row scrolls sideways on phones
                      e.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
                    }}
                    sx={{
                      flex: { xs: "1 0 auto", md: "0 0 auto" },
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      px: { xs: 1.5, md: 2.25 },
                      py: 1.1,
                      border: 0,
                      borderRadius: "10px",
                      font: "inherit",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      color: on ? C.brandDark : C.muted,
                      bgcolor: on ? C.white : "transparent",
                      boxShadow: on ? "0 1px 2px rgba(15,34,54,0.06), 0 4px 12px rgba(15,34,54,0.08)" : "none",
                      transition: "all 0.2s ease",
                      "& svg": { fontSize: 18 },
                      "&:hover": { color: on ? C.brandDark : C.ink },
                    }}>
                    {group.icon}
                    {group.label}
                  </Box>
                )
              })}
            </Box>

            <Stack direction="row" alignItems="flex-start" sx={{ mt: { xs: 2.5, md: 3 }, gap: 2 }}>
              <Box sx={{ width: 48, height: 48, flex: "none", borderRadius: "14px", background: GRADIENT.brand, color: C.white, display: { xs: "none", sm: "grid" }, placeItems: "center", boxShadow: SHADOW.brand, "& svg": { fontSize: 24 } }}>
                {current.icon}
              </Box>
              <Box>
                <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: { xs: "1.15rem", md: "1.3rem" }, letterSpacing: "-0.01em" }}>{current.label}</Typography>
                <Typography sx={{ mt: 0.5, color: C.muted, fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 760 }}>{current.blurb}</Typography>
              </Box>
            </Stack>
          </Box>

          {specGroups.map((group, i) => (
            <Box key={group.label} role="tabpanel" id={`spec-panel-${i}`} aria-labelledby={`spec-tab-${i}`} hidden={active !== i}>
              <Table sx={tableSx}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: 56 }}>#</TableCell>
                    <TableCell sx={{ width: { sm: "38%" } }}>{group.columns[0]}</TableCell>
                    <TableCell>{group.columns[1]}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {group.rows.map((row, r) => {
                    const psi = PSI_METER[row[0]]
                    return (
                      <TableRow key={row[0]}>
                        <TableCell className="spec-num" sx={{ color: C.muted, fontWeight: 600, fontSize: "0.82rem", fontVariantNumeric: "tabular-nums" }}>
                          {String(r + 1).padStart(2, "0")}
                        </TableCell>
                        <TableCell>
                          {psi ? (
                            <Box>
                              <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.98rem", lineHeight: 1.35 }}>{row[0]}</Typography>
                              <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mt: 1.1, maxWidth: 260 }}>
                                <Box sx={{ flex: 1, height: 6, borderRadius: 3, bgcolor: C.surface, overflow: "hidden" }}>
                                  <Box sx={{ height: "100%", width: `${(psi / PSI_MAX) * 100}%`, borderRadius: 3, background: GRADIENT.brand }} />
                                </Box>
                                <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: C.brandDark, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                                  {psi.toLocaleString("en-GB")} psi
                                </Typography>
                              </Stack>
                            </Box>
                          ) : (
                            <Stack direction="row" spacing={1.5} alignItems="center">
                              <Box aria-hidden sx={{ width: 38, height: 38, flex: "none", borderRadius: "10px", bgcolor: C.tintBg, border: "1px solid rgba(1,176,240,0.25)", color: C.brandDark, display: "grid", placeItems: "center", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                                {badge(row[0])}
                              </Box>
                              <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.98rem" }}>{row[0]}</Typography>
                            </Stack>
                          )}
                        </TableCell>
                        <TableCell sx={{ color: C.text, fontSize: "0.94rem", lineHeight: 1.6 }}>{row[1]}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default TechnicalSpecs
