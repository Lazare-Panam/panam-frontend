import React, { useEffect, useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Container, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import EcoOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined"
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import { Eyebrow, SectionHeader } from "../../Landing2/homeStyles"
import { industryData } from "../../Industries/components/industryData"
import { C, GRADIENT, RADIUS, SHADOW, btn, cardHoverSx, cardSx, sectionSx } from "../../Landing2/homeTokens"

const SectionHeading: React.FC<{ id?: string; tag?: string; children: React.ReactNode }> = ({ id, tag, children }) => (
  <Box id={id} sx={{ scrollMarginTop: "120px", mb: 2.5 }}>
    {tag && (
      <Box component="span" sx={{ display: "inline-block", mb: 1.25, px: 1.25, py: 0.4, borderRadius: RADIUS.pill, bgcolor: C.brandTint, color: C.brandDark, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em" }}>
        {tag}
      </Box>
    )}
    <Typography component="h2" sx={{ fontSize: { xs: "1.5rem", md: "1.85rem" }, fontWeight: 800, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
      {children}
    </Typography>
  </Box>
)

const Body: React.FC<{ children: React.ReactNode; sx?: object }> = ({ children, sx }) => <Typography sx={{ color: C.text, lineHeight: 1.8, fontSize: "1rem", mb: 2, ...sx }}>{children}</Typography>

const IndustryLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Box component={RouterLink} viewTransition to={to} sx={{ color: C.brandDark, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
    {children}
  </Box>
)

const IndustryChip: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Box
    component={RouterLink}
    viewTransition
    to={to}
    sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, px: 1.75, py: 0.75, borderRadius: RADIUS.pill, border: `1px solid ${C.border}`, bgcolor: C.white, color: C.inkSoft, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none", transition: "all 0.2s ease", "& svg": { fontSize: 16 }, "&:hover": { borderColor: C.brand, color: C.brandDark } }}>
    {children} <ArrowForwardRoundedIcon />
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 5 — Opening paragraphs (shown in the hero)                    */
/* ------------------------------------------------------------------ */

export const CertificatesIntro: React.FC = () => {
  const sx = { color: C.muted, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.75 }
  return (
    <Stack spacing={1.5}>
      <Typography sx={sx}>Valves, fittings and manifolds are often signed off by someone who has to answer for them — a project engineer approving an installation, a procurement lead qualifying a new vendor, an inspector checking documentation against a purchase order.</Typography>
      <Typography sx={sx}>This page brings the certificates we hold into one place. Certificates are available to view below, and anything not listed can be requested at the foot of the page — we will confirm what can be supplied for your specific items.</Typography>
    </Stack>
  )
}

/* ------------------------------------------------------------------ */
/* Block 7 — At a glance                                               */
/* ------------------------------------------------------------------ */

const AT_A_GLANCE: { standard: string; covers: string; docs: string; icon: React.ReactNode }[] = [
  { standard: "ISO 9001:2015", covers: "Quality management system", docs: "Certificate", icon: <VerifiedOutlinedIcon /> },
  { standard: "ISO 14001:2015", covers: "Environmental management system", docs: "Certificate", icon: <EcoOutlinedIcon /> },
  { standard: "ISO 45001:2018", covers: "Occupational health and safety management system", docs: "Certificate", icon: <HealthAndSafetyOutlinedIcon /> },
  { standard: "ATEX (2014/34/EU)", covers: "Equipment for potentially explosive atmospheres", docs: "LCIE technical file deposit — instrumentation valves and fittings", icon: <LocalFireDepartmentOutlinedIcon /> },
  { standard: "PED (2014/68/EU)", covers: "Pressure equipment — processing of metallic materials", docs: "TÜV NORD material processor recognition", icon: <CompressOutlinedIcon /> },
  { standard: "Material certificates", covers: "Material documentation for supplied items", docs: "On request", icon: <DescriptionOutlinedIcon /> },
]

export const CertificationsAtGlance: React.FC = () => (
  <Box component="section" sx={sectionSx("white")}>
    <Container maxWidth="lg">
      <SectionHeader eyebrow="At a glance" title="Certifications and approvals at a glance" subtitle="Certification scope varies by product family, material and connection type. Confirm the exact documentation for your item at the point of quotation." />
      <Grid container spacing={2.5}>
        {AT_A_GLANCE.map(row => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={row.standard}>
            <Box
              sx={{
                ...cardSx,
                ...cardHoverSx,
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                "&::before": { content: '""', position: "absolute", left: 0, right: 0, top: 0, height: 3, background: GRADIENT.brand, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.35s ease" },
                "&:hover::before": { transform: "scaleX(1)" },
                "&:hover .glance-icon": { background: GRADIENT.brand, color: C.white, boxShadow: SHADOW.brand },
              }}>
              <Stack direction="row" spacing={1.75} alignItems="center" sx={{ px: 3, py: 2.5, background: `linear-gradient(135deg, ${C.tintBg} 0%, ${C.white} 100%)`, borderBottom: `1px solid ${C.border}` }}>
                <Box className="glance-icon" sx={{ flex: "none", width: 48, height: 48, borderRadius: "14px", bgcolor: C.white, color: C.brandDark, border: `1px solid ${C.border}`, display: "grid", placeItems: "center", transition: "all 0.3s ease", "& svg": { fontSize: 25 } }}>
                  {row.icon}
                </Box>
                <Typography component="h3" sx={{ fontWeight: 800, fontSize: "1.15rem", color: C.ink, letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                  {row.standard}
                </Typography>
              </Stack>
              <Stack spacing={2} sx={{ p: 3, flexGrow: 1 }}>
                {[
                  { label: "What it covers", value: row.covers },
                  { label: "Documentation available", value: row.docs },
                ].map(item => (
                  <Box key={item.label}>
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>{item.label}</Typography>
                    <Typography sx={{ mt: 0.5, color: C.text, fontSize: "0.95rem", lineHeight: 1.55 }}>{item.value}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 8 — Certification sections                                    */
/* ------------------------------------------------------------------ */

const PRODUCT_FAMILY_TABLE: { family: string; materials: string; notes: string }[] = [
  { family: "Tube fittings", materials: "SS316, duplex, Monel, Hastelloy, brass", notes: 'Single & double ferrule; 1/16–2" OD, 3–50mm OD' },
  { family: "37° JIC / flare fittings", materials: "SS316, duplex, Monel, Hastelloy", notes: '1/16–2"' },
  { family: "Pipe fittings", materials: "SS316, duplex, super duplex, Inconel, Monel, Hastelloy", notes: '1/8–2"' },
  { family: "High pressure pipe fittings", materials: "SS316, duplex, Monel, Hastelloy", notes: '1/16–2"' },
  { family: "Weld fittings", materials: "SS316, duplex, Monel, Hastelloy", notes: '1/16–2"' },
  { family: "Needle valves", materials: "SS316, duplex, Monel, Hastelloy", notes: "IB, HB, HP, SB & Mini series; to 538°C with graphoil packing" },
  { family: "Ball valves", materials: "SS316, duplex, Monel, Hastelloy", notes: "2 & 3 port T and L; Delrin, PTFE, PEEK, KEL-F seats" },
  { family: "Check valves", materials: "SS316, duplex, Monel, Hastelloy", notes: "Cracking pressures 1/3 to 100 psig" },
  { family: "Relief valves", materials: "SS316, duplex, Monel, Hastelloy", notes: "4.8mm orifice; externally adjustable, lock wire secured" },
  { family: "Gauge root valves", materials: "SS316, duplex, Monel, Hastelloy", notes: '1/2–3/4"; to 538°C with graphoil packing' },
  { family: "2-3-5 valve manifolds", materials: "SS316, duplex, Monel, Hastelloy", notes: "Pipe-to-pipe, pipe-to-flange, flange-to-flange" },
  { family: "Double block & bleed", materials: "SS316, duplex, Monel, Hastelloy", notes: '1/2–3", Class 150–2500' },
  { family: "Flange adapters", materials: "SS316, duplex, Monel, Hastelloy", notes: "ASME, DIN, EN, JIS" },
  { family: "Swivel gauge adapters", materials: "SS316, duplex, super duplex, Monel, Hastelloy", notes: "360° positioning, silver plated swivel thread" },
  { family: "Filters", materials: "SS316", notes: "T-type and in-line; nitrogen leak tested at 1000 psi" },
  { family: "Pressure regulators", materials: "SS316, brass", notes: '1/4" NPT; piston sensed' },
  { family: "Air headers", materials: "SS316, carbon steel", notes: "Class 150–2500" },
  { family: "Condensate pots", materials: "SS316, carbon steel", notes: "Class 150–2500" },
  { family: "Pre-fabricated hookups", materials: "SS316/316L and alloys", notes: "Built to your specification" },
  { family: "Bellow sealed valves", materials: "316 SS", notes: "To 325°C" },
  { family: "Pressure transmitters", materials: "Aluminium or stainless housing", notes: "Specification on request" },
  { family: "Temperature transmitters", materials: "Aluminium or SS sensor head", notes: "Specification on request" },
  { family: "Pressure gauges", materials: "SS316, SS316L, Monel sensing element", notes: "Specification on request" },
  { family: "Temperature gauges", materials: "SS316 wetted parts", notes: "Specification on request" },
  { family: "Flow elements", materials: "Wide range available", notes: "Specification on request" },
]

const FAMILY_PREVIEW = 8

// Full-height table (no scroll trap): first rows shown, the rest revealed with an explicit toggle
const ProductFamilyTable: React.FC = () => {
  const [showAll, setShowAll] = useState(false)
  const rows = showAll ? PRODUCT_FAMILY_TABLE : PRODUCT_FAMILY_TABLE.slice(0, FAMILY_PREVIEW)
  const cell = { fontSize: "0.88rem", verticalAlign: "top", py: 1.5, borderColor: C.border } as const

  return (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ position: "relative", border: `1px solid ${C.border}`, borderRadius: "12px", overflow: "hidden" }}>
        {/* Phones: one stacked card per family, so no column is hidden off-screen */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          {rows.map((row, i) => (
            <Box key={row.family} sx={{ p: 2, borderTop: i === 0 ? "none" : `1px solid ${C.border}`, bgcolor: i % 2 ? "#FAFCFD" : C.white }}>
              <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.95rem" }}>{row.family}</Typography>
              {[
                { label: "Materials", value: row.materials },
                { label: "Notes", value: row.notes },
              ].map(f => (
                <Box key={f.label} sx={{ mt: 1 }}>
                  <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted }}>{f.label}</Typography>
                  <Typography sx={{ fontSize: "0.88rem", color: C.text, lineHeight: 1.5 }}>{f.value}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <TableContainer sx={{ display: { xs: "none", sm: "block" } }}>
          <Table size="small" sx={{ minWidth: 560 }}>
            <TableHead>
              <TableRow>
                {["Product family", "Materials", "Notes"].map(h => (
                  <TableCell key={h} sx={{ bgcolor: C.tintBg, color: C.ink, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.04em", textTransform: "uppercase", py: 1.5, borderBottom: `1px solid ${C.border}` }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.family} sx={{ "&:nth-of-type(even)": { bgcolor: "#FAFCFD" }, "&:hover": { bgcolor: C.tintBg } }}>
                  <TableCell sx={{ ...cell, fontWeight: 700, color: C.ink }}>{row.family}</TableCell>
                  <TableCell sx={{ ...cell, color: C.text }}>{row.materials}</TableCell>
                  <TableCell sx={{ ...cell, color: C.muted }}>{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Fade hints that the list continues */}
        {!showAll && <Box aria-hidden sx={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 90, background: "linear-gradient(180deg, rgba(255,255,255,0), #FFFFFF 85%)", pointerEvents: "none" }} />}
      </Box>
      <Stack alignItems="center" sx={{ mt: showAll ? 2 : -2.5, position: "relative" }}>
        <Button onClick={() => setShowAll(v => !v)} aria-expanded={showAll} endIcon={<ExpandMoreRoundedIcon sx={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }} />} sx={{ ...btn.secondary, py: 1, boxShadow: SHADOW.card }}>
          {showAll ? "Show fewer" : `Show all ${PRODUCT_FAMILY_TABLE.length} product families`}
        </Button>
      </Stack>
    </Box>
  )
}

const SECTION_NAV = [
  { id: "management-systems", label: "Quality — ISO 9001" },
  { id: "environmental", label: "Environmental — ISO 14001" },
  { id: "health-safety", label: "Health & safety — ISO 45001" },
  { id: "atex", label: "Hazardous areas — ATEX" },
  { id: "pressure-equipment", label: "Pressure equipment — PED" },
  { id: "sour-service", label: "Sour service — NACE" },
  { id: "traceability", label: "Material documentation — EN 10204" },
  { id: "design-standards", label: "Design & testing standards" },
  { id: "by-product-family", label: "By product family" },
]

const EN10204_TYPES = [
  { type: "2.1", text: "Declaration of compliance, no test results." },
  { type: "2.2", text: "Test report with results from non-specific inspection." },
  { type: "3.1", text: "Inspection certificate with results from specific inspection on the delivered item, validated by the manufacturer's authorised inspection representative, independent of the manufacturing department." },
  { type: "3.2", text: "As 3.1, but additionally validated by either the purchaser's authorised inspection representative or an inspector designated by official regulations." },
]

// One standard per row: number and heading on the left, content on the right (like a spec-sheet layout)
const StandardRow: React.FC<{ id: string; n: number; tag?: string; title: string; first?: boolean; children: React.ReactNode }> = ({ id, n, tag, title, first, children }) => (
  <Box
    id={id}
    component="article"
    sx={{
      scrollMarginTop: "130px",
      py: { xs: 5, md: 6 },
      borderTop: first ? "none" : `1px solid ${C.border}`,
      "&.is-active .num, &:hover .num": { WebkitTextStroke: "0px", backgroundImage: GRADIENT.number, transform: "scale(1.06)" },
      "&.is-active .dot-1": { bgcolor: C.brand },
      "&.is-active .dot-2": { bgcolor: "rgba(1,176,240,0.35)" },
    }}>
    <Grid container spacing={{ xs: 2.5, md: 5 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Stack direction="row" spacing={0.75} sx={{ mb: 1.5 }}>
          <Box className="dot-1" sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: C.border, transition: "background-color 0.3s ease" }} />
          <Box className="dot-2" sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: C.surface, border: `1px solid ${C.border}`, transition: "background-color 0.3s ease" }} />
        </Stack>
        <Typography aria-hidden className="num" sx={{ fontSize: { xs: "2.6rem", md: "3.2rem" }, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.05em", color: "transparent", WebkitTextStroke: `1.5px ${C.muted}`, backgroundImage: "none", WebkitBackgroundClip: "text", backgroundClip: "text", transformOrigin: "left bottom", transition: "all 0.35s ease", userSelect: "none", mb: 1.25 }}>
          {String(n).padStart(2, "0")}
        </Typography>
        <Typography component="h2" sx={{ fontSize: { xs: "1.45rem", md: "1.55rem" }, fontWeight: 800, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {title}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        {tag && (
          <Box component="span" sx={{ display: "inline-block", mb: 2, px: 1.25, py: 0.4, borderRadius: RADIUS.pill, bgcolor: C.brandTint, color: C.brandDark, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.03em" }}>
            {tag}
          </Box>
        )}
        {children}
      </Grid>
    </Grid>
  </Box>
)

export const CertificationSections: React.FC = () => {
  const [active, setActive] = useState(SECTION_NAV[0].id)

  // Scroll-spy: the section crossing the upper third of the viewport is the one being read
  useEffect(() => {
    const els = SECTION_NAV.map(s => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          e.target.classList.toggle("is-active", e.isIntersecting)
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Box component="section" sx={{ bgcolor: C.white, py: { xs: 5, md: 7 } }}>
      <Container maxWidth="lg">
        {/* Mobile: topic chips */}
        <Stack direction="row" sx={{ display: { xs: "flex", md: "none" }, gap: 1, overflowX: "auto", pb: 1, mb: 3, mx: -2, px: 2 }}>
          {SECTION_NAV.map(item => (
            <Box key={item.id} component="a" href={`#${item.id}`} sx={{ flex: "none", px: 1.5, py: 0.7, borderRadius: RADIUS.pill, border: `1px solid ${C.border}`, bgcolor: C.white, color: C.inkSoft, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
              {item.label}
            </Box>
          ))}
        </Stack>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* On this page — a slim line nav that follows the reader and marks the row in view */}
          <Grid size={{ md: 2.6 }} sx={{ display: { xs: "none", md: "block" } }}>
            <Box component="nav" aria-label="Certification topics" sx={{ position: "sticky", top: 130, pt: 6 }}>
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, mb: 2, pl: 2.5 }}>On this page</Typography>
              <Box sx={{ position: "relative", borderLeft: `2px solid ${C.border}` }}>
                {SECTION_NAV.map(item => {
                  const on = item.id === active
                  return (
                    <Box
                      key={item.id}
                      component="a"
                      href={`#${item.id}`}
                      aria-current={on ? "location" : undefined}
                      sx={{ position: "relative", display: "block", pl: 2.5, py: 1.1, ml: "-2px", borderLeft: `2px solid ${on ? C.brand : "transparent"}`, textDecoration: "none", fontSize: "0.9rem", fontWeight: on ? 700 : 500, color: on ? C.brandDark : C.muted, transition: "all 0.2s ease", "&:hover": { color: C.ink } }}>
                      {item.label}
                    </Box>
                  )
                })}
              </Box>
              <Button component={RouterLink} viewTransition to="/enquiry" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.secondary, mt: 3, ml: 2.5, py: 0.9, fontSize: "0.85rem" }}>
                Request Documentation
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 9.4 }}>
            <Box>
              {/* 8.1 */}
              <StandardRow id="management-systems" n={1} first tag="ISO 9001:2015" title="Quality management — ISO 9001:2015">
                <Body sx={{ mb: 0 }}>Panam operates a quality management system certified to ISO 9001:2015. In practice that means the things a buyer actually cares about are controlled and auditable rather than informal: incoming material verification, in-process and final inspection, calibration of test equipment, and a documented route for handling non-conformance and corrective action.</Body>
              </StandardRow>

              {/* 8.2 */}
              <StandardRow id="environmental" n={2} tag="ISO 14001:2015" title="Environmental management — ISO 14001:2015">
                <Body>Our environmental management system is certified to ISO 14001:2015. This covers how we identify and manage the environmental aspects of manufacturing and distribution — waste streams, material efficiency, and legal compliance obligations — under a framework of measurable objectives and regular internal audit.</Body>
                <Body sx={{ mb: 0 }}>If your organisation runs a supply chain sustainability assessment or requires environmental credentials as part of a tender response, this certificate is usually the document being asked for.</Body>
              </StandardRow>

              {/* 8.3 */}
              <StandardRow id="health-safety" n={3} tag="ISO 45001:2018" title="Occupational health and safety — ISO 45001:2018">
                <Body>Panam holds ISO 45001:2018 certification for occupational health and safety management. It is the international standard that replaced OHSAS 18001, and it covers hazard identification, risk assessment, worker consultation and incident investigation.</Body>
                <Body sx={{ mb: 0 }}>For main contractors and tier-one operators running supplier pre-qualification — the kind that feeds into a JOSCAR, Achilles or similar assessment — this sits alongside ISO 9001 and ISO 14001 as one of the three management system certificates most commonly requested as a set.</Body>
              </StandardRow>

              {/* 8.4 */}
              <StandardRow id="atex" n={4} tag="2014/34/EU" title="Hazardous area equipment — ATEX">
                <Body>Where equipment is installed in a potentially explosive atmosphere, the specification will usually ask for evidence against the ATEX Directive (2014/34/EU).</Body>
                <Body sx={{ mb: 0 }}>Panam holds an ATEX technical file deposit with LCIE covering instrumentation valves and fittings. The certificate is available to view on the type test reports page. Scope depends on the product and configuration, so send us your zone classification and required marking and we will confirm what applies to your items.</Body>
              </StandardRow>

              {/* 8.6 */}
              <StandardRow id="pressure-equipment" n={5} tag="2014/68/EU" title="Pressure equipment — PED">
                <Body sx={{ mb: 0 }}>The Pressure Equipment Directive (2014/68/EU) governs pressure-bearing equipment placed on the European market. Panam is recognised by TÜV NORD as a processor of metallic materials under PED Annex I (AD 2000 W series); the certificate is available to view on the type test reports page. Confirm PED requirements for specific items at enquiry.</Body>
              </StandardRow>

              {/* 8.7 */}
              <StandardRow id="sour-service" n={6} tag="NACE MR0175 / ISO 15156" title="Sour service materials — NACE MR0175 / ISO 15156">
                <Body>
                  In oil and gas service where hydrogen sulphide is present, standard stainless grades are vulnerable to sulphide stress cracking. NACE MR0175 — superseded internationally by ISO 15156, and published with identical text under both names — sets out which materials are acceptable for sour service and under what conditions — including limits on hardness, heat treatment condition and
                  chemical composition.
                </Body>
                <Body>A NACE MR-0175 option is listed in the configurators for our double block and bleed valves and 2-, 3- and 5-valve manifolds. For other products, tell us your sour service requirement at enquiry and we will confirm what can be supplied.</Body>
                <Stack direction="row" flexWrap="wrap" gap={1.25}>
                  <IndustryChip to="/industries/oil-gas">Oil &amp; Gas</IndustryChip>
                  <IndustryChip to="/industries/marine-subsea">Marine &amp; Subsea</IndustryChip>
                </Stack>
              </StandardRow>

              {/* 8.8 */}
              <StandardRow id="traceability" n={7} tag="EN 10204" title="Material documentation — EN 10204 inspection documents">
                <Body>EN 10204 defines the types of inspection document supplied with metallic products. The distinction procurement teams need to get right:</Body>
                <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
                  {EN10204_TYPES.map(item => (
                    <Grid size={{ xs: 12, sm: 6 }} key={item.type}>
                      <Stack direction="row" spacing={1.75} sx={{ height: "100%", p: 2, borderRadius: "12px", bgcolor: C.surface, border: `1px solid ${C.border}`, boxSizing: "border-box" }}>
                        <Box sx={{ flex: "none", minWidth: 48, height: 32, px: 1, borderRadius: "8px", bgcolor: C.white, border: `1px solid ${C.border}`, display: "grid", placeItems: "center", fontWeight: 800, color: C.brandDark, fontSize: "0.9rem" }}>{item.type}</Box>
                        <Typography sx={{ color: C.text, fontSize: "0.9rem", lineHeight: 1.6 }}>
                          <Box component="span" sx={{ fontWeight: 700, color: C.ink }}>
                            Type {item.type}
                          </Box>{" "}
                          — {item.text}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
                <Body sx={{ mb: 0 }}>Material certificates are available on request. Tell us at enquiry stage which document type your specification requires and we will confirm what can be supplied.</Body>
              </StandardRow>

              {/* 8.10 */}
              <StandardRow id="design-standards" n={8} title="Design and testing standards">
                <Body sx={{ mb: 0 }}>
                  Specifications often cite design, thread and testing standards directly. Tell us which standards your specification calls for and we will confirm what applies to the specific items at quotation. Materials across the range include SS316 and SS316L, duplex and super duplex, Inconel, Monel, Hastelloy, brass and carbon steel depending on product family, with other materials available
                  on request.
                </Body>
              </StandardRow>

              {/* 8.11 */}
              <StandardRow id="by-product-family" n={9} title="Specification by product family">
                <Body>Requirements are specified per item, not per supplier, so the table below summarises each product family's materials. Pressure ratings vary by model — see the product pages or confirm at quotation. Confirm documentation for specific items at quotation.</Body>
                <ProductFamilyTable />
                <Body sx={{ mb: 0 }}>Where your specification calls for something not shown — a material grade, a pressure class, a particular standard — send it with your enquiry and we will confirm what we can supply.</Body>
              </StandardRow>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Block 9 — Sector requirements                                       */
/* ------------------------------------------------------------------ */

const SECTOR_ROWS: { sector: string; to: string; requirement: React.ReactNode }[] = [
  { sector: "Oil & gas", to: "/industries/oil-gas", requirement: "NACE MR0175 / ISO 15156 sour service materials, hazardous area certification, EN 10204 material documentation, pressure class verification" },
  { sector: "Hydrogen", to: "/industries/hydrogen", requirement: "Material selection documented against embrittlement, ATEX where the zone requires it, pressure testing records at service pressure" },
  { sector: "Aerospace & defence", to: "/industries/aerospace-defense", requirement: "Full material traceability with EN 10204 3.1 certificates, first article inspection where specified, documented pressure and leak testing" },
  { sector: "Marine & subsea", to: "/industries/marine-subsea", requirement: "Classification society approval where applicable, NACE for sour service, corrosion-resistant material certification" },
  { sector: "Chemical & petrochemical", to: "/industries/chemicals-petrochemical", requirement: "ATEX for zoned areas, material compatibility documentation for the process media, PED conformity" },
  { sector: "Food & beverage", to: "/industries/food-beverages", requirement: "Food-contact materials to EC 1935/2004 or FDA, hygienic design where the process calls for it, surface finish documentation" },
]

const sectorImage = (to: string) => industryData.find(i => to.endsWith(i.id))?.image

export const SectorRequirements: React.FC = () => (
  <Box component="section" sx={sectionSx("surface")}>
    <Container maxWidth="lg">
      <SectionHeader eyebrow="By sector" title="Sector-specific approval requirements" subtitle="Different sectors weight these certifications differently, and some carry additional requirements:" />
      <Grid container spacing={2.5}>
        {SECTOR_ROWS.map(row => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={row.sector}>
            <Box component={RouterLink} viewTransition to={row.to} sx={{ ...cardSx, ...cardHoverSx, display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", textDecoration: "none", "&:hover .sector-img": { transform: "scale(1.06)" }, "&:hover .sector-arrow": { bgcolor: C.brand, color: C.white, transform: "translateX(2px)" } }}>
              {/* Industry photo with the sector name over it */}
              <Box sx={{ position: "relative", height: 150, flex: "none", overflow: "hidden", bgcolor: C.surface }}>
                <Box className="sector-img" sx={{ position: "absolute", inset: 0, backgroundImage: `url("${sectorImage(row.to)}")`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s ease" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,34,54,0) 30%, rgba(15,34,54,0.78) 100%)" }} />
                <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ position: "absolute", left: 20, right: 16, bottom: 14 }}>
                  <Typography component="h3" sx={{ fontWeight: 800, fontSize: "1.15rem", color: C.white, textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
                    {row.sector}
                  </Typography>
                  <Box className="sector-arrow" sx={{ flex: "none", width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: "rgba(255,255,255,0.92)", color: C.ink, transition: "all 0.25s ease" }}>
                    <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ p: 2.5, flexGrow: 1 }}>
                <Typography sx={{ color: C.text, fontSize: "0.92rem", lineHeight: 1.65 }}>{row.requirement}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 10 — How to request documentation                             */
/* ------------------------------------------------------------------ */

const REQUEST_CHECKLIST = ["The product code or codes, or the order number if the goods have shipped.", "Which document you need — management system certificate, material certificate or type test report.", "Any zone classification or material standard your specification calls for.", "Whether documentation is needed before order placement, for vendor qualification, or with the delivery."]

export const RequestDocumentation: React.FC = () => (
  <Box component="section" sx={{ bgcolor: C.white, py: { xs: 7, md: 9 } }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "28px",
          p: { xs: 3, md: 6 },
          background: `linear-gradient(135deg, ${C.tintBg} 0%, ${C.white} 55%, #E3F4FC 100%)`,
          border: "1px solid rgba(1,176,240,0.2)",
          "&::after": { content: '""', position: "absolute", width: 380, height: 380, borderRadius: "50%", right: -140, top: -180, border: "48px solid rgba(1,176,240,0.06)", pointerEvents: "none" },
        }}>
        <Box sx={{ position: "relative", maxWidth: 760 }}>
          <SectionHeading id="request-documentation">How to request certification documentation</SectionHeading>
          <Body>Certificates, declarations of conformity, test reports and material certificates are available on request.</Body>
          <Body sx={{ mb: 0 }}>Where documentation needs to be arranged before manufacture, flagging it at enquiry stage avoids delay. Lead times vary by product family, material and documentation requirements, and are confirmed at quotation.</Body>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 3.5 }}>
            <Button component={RouterLink} viewTransition to="/enquiry" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.primary, py: 1.4 }}>
              Request Documentation
            </Button>
            <Button component={RouterLink} viewTransition to="/enquiry" sx={{ ...btn.secondary, py: 1.4 }}>
              Speak to a technical specialist
            </Button>
          </Stack>
        </Box>

        <Typography sx={{ position: "relative", mt: { xs: 5, md: 6 }, mb: 3, fontWeight: 800, color: C.ink, fontSize: "1.05rem" }}>To get the right documents first time, include:</Typography>
        {/* Numbered steps joined by a line */}
        <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 2.5, md: 3 } }}>
          <Box aria-hidden sx={{ display: { xs: "none", md: "block" }, position: "absolute", left: 22, right: 22, top: 22, height: 2, background: `linear-gradient(90deg, ${C.brand}, rgba(1,176,240,0.15))` }} />
          {REQUEST_CHECKLIST.map((item, i) => (
            <Box key={item} sx={{ position: "relative" }}>
              <Box sx={{ width: 46, height: 46, borderRadius: "50%", display: "grid", placeItems: "center", background: GRADIENT.brand, color: C.white, fontWeight: 800, fontSize: "1rem", boxShadow: SHADOW.brand, border: `4px solid ${C.white}` }}>{String(i + 1).padStart(2, "0")}</Box>
              <Typography sx={{ mt: 2, color: C.text, lineHeight: 1.65, fontSize: "0.95rem" }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 11 — FAQ                                                       */
/* ------------------------------------------------------------------ */

const FAQS: { question: string; answer: string }[] = [
  {
    question: "Which certifications does Panam hold?",
    answer:
      "Panam holds ISO 9001:2015 for quality management, ISO 14001:2015 for environmental management and ISO 45001:2018 for occupational health and safety. We also hold an ATEX technical file deposit with LCIE covering instrumentation valves and fittings, and TÜV NORD recognition as a processor of metallic materials under the Pressure Equipment Directive. Certification scope varies by product, so confirm the documentation for a specific item at quotation.",
  },
  {
    question: "Are Panam products ATEX certified?",
    answer: "Panam holds an ATEX technical file deposit with LCIE under Directive 2014/34/EU covering instrumentation valves and fittings. Scope depends on the product and configuration, so send us your zone classification and required equipment marking and we will confirm what applies to your items.",
  },
  {
    question: "Can you supply material certificates?",
    answer: "Material certificates are available on request. Tell us at enquiry stage which EN 10204 document type your specification requires and we will confirm what can be supplied.",
  },
  {
    question: "What does NACE MR0175 compliance mean for valve selection?",
    answer:
      "NACE MR0175 was superseded by ISO 15156 and the two are published with identical text, so a specification may cite either name. The standard specifies which materials are acceptable for service in environments containing hydrogen sulphide, with limits on hardness, heat treatment condition and composition to guard against sulphide stress cracking. A NACE MR-0175 option is listed for our double block and bleed valves and 2-, 3- and 5-valve manifolds; for other products, tell us your sour service requirement at enquiry.",
  },
  {
    question: "Is Panam ISO 9001 certified?",
    answer: "Yes. Panam operates a quality management system certified to ISO 9001:2015. A copy of the certificate is available to view on this page and on request for vendor qualification.",
  },
]

// One icon per question, in the same order as FAQS
const FAQ_ICONS = [<VerifiedOutlinedIcon />, <LocalFireDepartmentOutlinedIcon />, <DescriptionOutlinedIcon />, <ScienceOutlinedIcon />, <FactCheckOutlinedIcon />]

// Same pattern as the homepage FAQ: sticky help card on the left, icon-led accordions on the right
export const CertificatesFAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(0)

  return (
    <Box component="section" id="faq" sx={{ ...sectionSx("surface"), scrollMarginTop: "96px" }}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
        })}
      </script>
      {/* Same @id as the homepage Organization, so search engines tie these certificates to one company */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.panamvalve.com/#organization",
          name: "PANAM Valves",
          url: "https://www.panamvalve.com/",
          logo: "https://www.panamvalve.com/p2.png",
        })}
      </script>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
              <Eyebrow>Certifications FAQ</Eyebrow>
              <Typography component="h2" sx={{ mt: 2, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.5rem" }, color: C.ink }}>
                Frequently Asked Questions
              </Typography>
              <Box sx={{ mt: 4, p: { xs: 3, md: 3.5 }, borderRadius: "20px", background: `linear-gradient(145deg, ${C.white} 0%, ${C.tintBg} 100%)`, border: "1px solid rgba(1,176,240,0.2)", boxShadow: SHADOW.card }}>
                <Box sx={{ width: 56, height: 56, borderRadius: "16px", background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`, color: C.white, display: "grid", placeItems: "center", mb: 2.5, boxShadow: "0 10px 24px rgba(1,176,240,0.35)", "& svg": { fontSize: 30 } }}>
                  <SupportAgentOutlinedIcon />
                </Box>
                <Typography sx={{ color: C.ink, fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.5 }}>Speak to a technical specialist about a specific approval requirement</Typography>
                <Button component={RouterLink} viewTransition to="/enquiry" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.primary, mt: 2.5, width: "100%" }}>
                  Request Documentation
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={1.5}>
              {FAQS.map((faq, index) => {
                const open = expanded === index
                return (
                  <Accordion
                    key={faq.question}
                    disableGutters
                    elevation={0}
                    expanded={open}
                    onChange={(_, isOpen) => setExpanded(isOpen ? index : false)}
                    sx={{ ...cardSx, boxShadow: open ? SHADOW.card : "none", borderRadius: "16px !important", overflow: "hidden", borderColor: open ? "rgba(1,176,240,0.45)" : C.border, "&:before": { display: "none" }, "&:hover": { borderColor: "rgba(1,176,240,0.35)" } }}>
                    <AccordionSummary
                      expandIcon={
                        <Box sx={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: open ? C.brand : C.surface, color: open ? C.white : C.brandDark, transition: "all 0.25s ease" }}>
                          <AddRoundedIcon sx={{ fontSize: 20 }} />
                        </Box>
                      }
                      aria-controls={`cert-faq-content-${index}`}
                      id={`cert-faq-header-${index}`}
                      sx={{ px: { xs: 2, md: 2.5 }, "& .MuiAccordionSummary-content": { my: 1.75, alignItems: "center", gap: 2 }, "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" } }}>
                      <Box sx={{ width: 44, height: 44, flex: "none", borderRadius: "12px", display: "grid", placeItems: "center", bgcolor: open ? C.brandTint : C.surface, color: C.brandDark, transition: "background-color 0.25s ease", "& svg": { fontSize: 23 } }}>{FAQ_ICONS[index]}</Box>
                      <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.98rem", md: "1.05rem" }, color: C.ink }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pl: { xs: 2, md: "92px" }, pr: { xs: 2, md: 5 }, pt: 0, pb: 3 }}>
                      <Typography sx={{ color: C.text, lineHeight: 1.8, fontSize: "0.97rem" }}>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Child pages — short intros (shown in the hero)                      */
/* ------------------------------------------------------------------ */

const CHILD_INTROS: Record<string, { text: React.ReactNode; anchor: string }> = {
  qms: {
    anchor: "management-systems",
    text: (
      <>
        Our quality, environmental and health and safety management systems are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. Certificates are available to download below, and are the three documents most commonly requested together as part of supplier pre-qualification. What each standard covers is explained on the{" "}
        <IndustryLink to="/certificates#management-systems">certifications overview</IndustryLink>.
      </>
    ),
  },
  "type-reports": {
    anchor: "atex",
    text: (
      <>
        Type test reports record the performance of a product design against a defined test standard, as distinct from a certificate covering a management system or an individual batch. The documents below cover our ATEX technical file deposit and PED material processor recognition. See the <IndustryLink to="/certificates#atex">certifications overview</IndustryLink>.
      </>
    ),
  },
}

export const ChildIntro: React.FC<{ tabKey: string }> = ({ tabKey }) => {
  const entry = CHILD_INTROS[tabKey]
  if (!entry) return null
  return <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.75 }}>{entry.text}</Typography>
}
