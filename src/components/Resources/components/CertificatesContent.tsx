import React, { useState } from "react"
import { Box, Typography, Container, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link as RouterLink } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const INK = "#0A121A"
const MUTED = "#64748B"
const BORDER = "1px solid rgba(0,0,0,0.1)"

/** Bracketed values the build sheet marked as needing a real value from marketing before launch. */


const SectionHeading: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => (
  <Typography
    id={id}
    variant="h3"
    component="h2"
    sx={{
      fontSize: { xs: 24, md: 30 },
      fontWeight: 800,
      mb: 3,
      fontFamily: PRIMARY_FONT,
      color: INK,
      letterSpacing: "-0.02em",
      scrollMarginTop: "96px",
    }}>
    {children}
  </Typography>
)

const Body: React.FC<{ children: React.ReactNode; sx?: object }> = ({ children, sx }) => (
  <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#334155", lineHeight: 1.8, fontSize: "1rem", mb: 2, ...sx }}>{children}</Typography>
)

const IndustryLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Box component={RouterLink} viewTransition to={to} sx={{ color: BRAND_BLUE, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
    {children}
  </Box>
)

const StyledTable: React.FC<{ children: React.ReactNode; minWidth?: number }> = ({ children, minWidth = 640 }) => (
  <TableContainer component={Paper} elevation={0} sx={{ border: BORDER, borderRadius: 0, mb: 2 }}>
    <Table sx={{ minWidth }}>{children}</Table>
  </TableContainer>
)

const HeadCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TableCell sx={{ fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.08em", color: INK, backgroundColor: "#F2F4F7", fontFamily: PRIMARY_FONT }}>{children}</TableCell>
)

const BodyCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TableCell sx={{ fontSize: "0.875rem", color: "#334155", fontFamily: PRIMARY_FONT, verticalAlign: "top" }}>{children}</TableCell>
)

/* ------------------------------------------------------------------ */
/* Block 5 — Opening paragraphs                                        */
/* ------------------------------------------------------------------ */

export const CertificatesIntro: React.FC = () => (
  <Box sx={{ backgroundColor: "#fff" }}>
    <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 2, md: 3 } }}>
      <Body>
        Valves, fittings and manifolds are often signed off by someone who has to answer for them — a project engineer approving an installation, a procurement lead qualifying a new vendor, an inspector checking documentation against a purchase order.
      </Body>
      <Body sx={{ mb: 0 }}>
        This page brings the certificates we hold into one place. Certificates are available to view below, and anything not listed can be requested at the foot of the page — we will confirm what can be supplied for your specific items.
      </Body>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 7 — At a glance table                                         */
/* ------------------------------------------------------------------ */

const AT_A_GLANCE: { standard: string; covers: string; docs: string }[] = [
  { standard: "ISO 9001:2015", covers: "Quality management system", docs: "Certificate" },
  { standard: "ISO 14001:2015", covers: "Environmental management system", docs: "Certificate" },
  { standard: "ISO 45001:2018", covers: "Occupational health and safety management system", docs: "Certificate" },
  { standard: "ATEX (2014/34/EU)", covers: "Equipment for potentially explosive atmospheres", docs: "LCIE technical file deposit — instrumentation valves and fittings" },
  { standard: "PED (2014/68/EU)", covers: "Pressure equipment — processing of metallic materials", docs: "TÜV NORD material processor recognition" },
  { standard: "Material certificates", covers: "Material documentation for supplied items", docs: "On request" },
]

export const CertificationsAtGlance: React.FC = () => (
  <Box component="section" sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      <SectionHeading>Certifications and approvals at a glance</SectionHeading>
      <StyledTable minWidth={720}>
        <TableHead>
          <TableRow>
            <HeadCell>Standard / approval</HeadCell>
            <HeadCell>What it covers</HeadCell>
            <HeadCell>Documentation available</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AT_A_GLANCE.map(row => (
            <TableRow key={row.standard}>
              <BodyCell>
                <strong>{row.standard}</strong>
              </BodyCell>
              <BodyCell>{row.covers}</BodyCell>
              <BodyCell>{row.docs}</BodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <Typography sx={{ fontFamily: PRIMARY_FONT, color: MUTED, fontSize: "0.85rem", fontStyle: "italic" }}>
        Certification scope varies by product family, material and connection type. Confirm the exact documentation for your item at the point of quotation.
      </Typography>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 8 — Eleven certification sections                             */
/* ------------------------------------------------------------------ */

const PRODUCT_FAMILY_TABLE: { family: string; pressure: string; materials: string; notes: string }[] = [
  { family: "Tube fittings", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy, brass", notes: "Single & double ferrule; 1/16–2\" OD, 3–50mm OD" },
  { family: "37° JIC / flare fittings", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/16–2\"" },
  { family: "Pipe fittings", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, super duplex, Inconel, Monel, Hastelloy", notes: "1/8–2\"" },
  { family: "High pressure pipe fittings", pressure: "15,000 psig / 1,034 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/16–2\"" },
  { family: "Weld fittings", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/16–2\"" },
  { family: "Needle valves", pressure: "20,000 psig / 1,379 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "IB, HB, HP, SB & Mini series; to 538°C with graphoil packing" },
  { family: "Ball valves", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "2 & 3 port T and L; Delrin, PTFE, PEEK, KEL-F seats" },
  { family: "Check valves", pressure: "6,000 psig / 414 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "Cracking pressures 1/3 to 100 psig" },
  { family: "Relief valves", pressure: "15,000 psig / 1,034 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "4.8mm orifice; externally adjustable, lock wire secured" },
  { family: "Gauge root valves", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/2–3/4\"; to 538°C with graphoil packing" },
  { family: "2-3-5 valve manifolds", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "Pipe-to-pipe, pipe-to-flange, flange-to-flange" },
  { family: "Double block & bleed", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/2–3\", Class 150–2500" },
  { family: "Flange adapters", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "ASME, DIN, EN, JIS" },
  { family: "Swivel gauge adapters", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, super duplex, Monel, Hastelloy", notes: "360° positioning, silver plated swivel thread" },
  { family: "Filters", pressure: "—", materials: "SS316", notes: "T-type and in-line; nitrogen leak tested at 1000 psi" },
  { family: "Pressure regulators", pressure: "6,000 psig / 414 bar", materials: "SS316, brass", notes: "1/4\" NPT; piston sensed" },
  { family: "Air headers", pressure: "6,000 psig / 414 bar", materials: "SS316, carbon steel", notes: "Class 150–2500" },
  { family: "Condensate pots", pressure: "6,000 psig / 414 bar", materials: "SS316, carbon steel", notes: "Class 150–2500" },
  { family: "Pre-fabricated hookups", pressure: "6,000 psig / 414 bar", materials: "SS316/316L and alloys", notes: "Built to your specification" },
  { family: "Bellow sealed valves", pressure: "200 bar", materials: "316 SS", notes: "To 325°C" },
  { family: "Pressure transmitters", pressure: "—", materials: "Aluminium or stainless housing", notes: "Specification on request" },
  { family: "Temperature transmitters", pressure: "—", materials: "Aluminium or SS sensor head", notes: "Specification on request" },
  { family: "Pressure gauges", pressure: "—", materials: "SS316, SS316L, Monel sensing element", notes: "Specification on request" },
  { family: "Temperature gauges", pressure: "—", materials: "SS316 wetted parts", notes: "Specification on request" },
  { family: "Flow elements", pressure: "—", materials: "Wide range available", notes: "Specification on request" },
]

export const CertificationSections: React.FC = () => (
  <Box component="section" sx={{ backgroundColor: "#F2F4F7", py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      {/* 8.1 */}
      <SectionHeading id="management-systems">Quality management — ISO 9001:2015</SectionHeading>
      <Body>
        Panam operates a quality management system certified to ISO 9001:2015. In practice that means the things a buyer actually cares about are controlled and auditable rather than informal: incoming material verification, in-process and final inspection, calibration of test equipment, and a documented route for handling non-conformance and corrective action.
      </Body>
      

      {/* 8.2 */}
      <SectionHeading id="environmental">Environmental management — ISO 14001:2015</SectionHeading>
      <Body>
        Our environmental management system is certified to ISO 14001:2015. This covers how we identify and manage the environmental aspects of manufacturing and distribution — waste streams, material efficiency, and legal compliance obligations — under a framework of measurable objectives and regular internal audit.
      </Body>
      <Body sx={{ mb: 8 }}>
        If your organisation runs a supply chain sustainability assessment or requires environmental credentials as part of a tender response, this certificate is usually the document being asked for.
      </Body>

      {/* 8.3 */}
      <SectionHeading id="health-safety">Occupational health and safety — ISO 45001:2018</SectionHeading>
      <Body>
        Panam holds ISO 45001:2018 certification for occupational health and safety management. It is the international standard that replaced OHSAS 18001, and it covers hazard identification, risk assessment, worker consultation and incident investigation.
      </Body>
      <Body sx={{ mb: 8 }}>
        For main contractors and tier-one operators running supplier pre-qualification — the kind that feeds into a JOSCAR, Achilles or similar assessment — this sits alongside ISO 9001 and ISO 14001 as one of the three management system certificates most commonly requested as a set.
      </Body>

      {/* 8.4 */}
      <SectionHeading id="atex">Hazardous area equipment — ATEX</SectionHeading>
      <Body>
        Where equipment is installed in a potentially explosive atmosphere, the specification will usually ask for evidence against the ATEX Directive (2014/34/EU).
      </Body>
      <Body sx={{ mb: 8 }}>
        Panam holds an ATEX technical file deposit with LCIE covering instrumentation valves and fittings. The certificate is available to view on the type test reports page. Scope depends on the product and configuration, so send us your zone classification and required marking and we will confirm what applies to your items.
      </Body>

      {/* 8.6 */}
      <SectionHeading id="pressure-equipment">Pressure equipment — PED</SectionHeading>
      <Body sx={{ mb: 8 }}>
        The Pressure Equipment Directive (2014/68/EU) governs pressure-bearing equipment placed on the European market. Panam is recognised by TÜV NORD as a processor of metallic materials under PED Annex I (AD 2000 W series); the certificate is available to view on the type test reports page. Confirm PED requirements for specific items at enquiry.
      </Body>

      {/* 8.7 */}
      <SectionHeading id="sour-service">Sour service materials — NACE MR0175 / ISO 15156</SectionHeading>
      <Body>
        In oil and gas service where hydrogen sulphide is present, standard stainless grades are vulnerable to sulphide stress cracking. NACE MR0175 — superseded internationally by ISO 15156, and published with identical text under both names — sets out which materials are acceptable for sour service and under what conditions — including limits on hardness, heat treatment condition and chemical composition.
      </Body>
      <Body>
        A NACE MR-0175 option is listed in the configurators for our double block and bleed valves and 2-, 3- and 5-valve manifolds. For other products, tell us your sour service requirement at enquiry and we will confirm what can be supplied.
      </Body>

      <Stack direction="row" spacing={3} sx={{ mb: 8 }}>
        <IndustryLink to="/industries/oil-gas">Oil &amp; Gas</IndustryLink>
        <IndustryLink to="/industries/marine-subsea">Marine &amp; Subsea</IndustryLink>
      </Stack>

      {/* 8.8 */}
      <SectionHeading id="traceability">Material documentation — EN 10204 inspection documents</SectionHeading>
      <Body sx={{ mb: 1 }}>EN 10204 defines the types of inspection document supplied with metallic products. The distinction procurement teams need to get right:</Body>
      <Box component="ul" sx={{ pl: 3, mb: 2, color: "#334155", fontFamily: PRIMARY_FONT, lineHeight: 1.8 }}>
        <li>Type 2.1 — declaration of compliance, no test results.</li>
        <li>Type 2.2 — test report with results from non-specific inspection.</li>
        <li>Type 3.1 — inspection certificate with results from specific inspection on the delivered item, validated by the manufacturer's authorised inspection representative, independent of the manufacturing department.</li>
        <li>Type 3.2 — as 3.1, but additionally validated by either the purchaser's authorised inspection representative or an inspector designated by official regulations.</li>
      </Box>
      <Body sx={{ mb: 8 }}>
        Material certificates are available on request. Tell us at enquiry stage which document type your specification requires and we will confirm what can be supplied.
      </Body>

      {/* 8.10 */}
      <SectionHeading id="design-standards">Design and testing standards</SectionHeading>
      <Body sx={{ mb: 8 }}>
        Specifications often cite design, thread and testing standards directly. Tell us which standards your specification calls for and we will confirm what applies to the specific items at quotation. Materials across the range include SS316 and SS316L, duplex and super duplex, Inconel, Monel, Hastelloy, brass and carbon steel depending on product family, with other materials available on request.
      </Body>

      {/* 8.11 */}
      <SectionHeading id="by-product-family">Specification by product family</SectionHeading>
      <Body>
        Requirements are specified per item, not per supplier, so the table below summarises each product family's pressure rating and materials. Confirm documentation for specific items at quotation.
      </Body>
      <StyledTable minWidth={900}>
        <TableHead>
          <TableRow>
            <HeadCell>Product family</HeadCell>
            <HeadCell>Max working pressure</HeadCell>
            <HeadCell>Materials</HeadCell>
            <HeadCell>Notes</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PRODUCT_FAMILY_TABLE.map(row => (
            <TableRow key={row.family}>
              <BodyCell>
                <strong>{row.family}</strong>
              </BodyCell>
              <BodyCell>{row.pressure}</BodyCell>
              <BodyCell>{row.materials}</BodyCell>
              <BodyCell>{row.notes}</BodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      <Body sx={{ mb: 0 }}>Where your specification calls for something not shown — a material grade, a pressure class, a particular standard — send it with your enquiry and we will confirm what we can supply.</Body>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 9 — Sector requirements table                                 */
/* ------------------------------------------------------------------ */

const SECTOR_ROWS: { sector: string; to: string; requirement?: React.ReactNode }[] = [
  { sector: "Oil & gas", to: "/industries/oil-gas", requirement: "NACE MR0175 / ISO 15156 sour service materials, hazardous area certification, EN 10204 material documentation, pressure class verification" },
  { sector: "Hydrogen", to: "/industries/hydrogen", requirement: "Material selection documented against embrittlement, ATEX where the zone requires it, pressure testing records at service pressure" },
  {
    sector: "Aerospace & defence",
    to: "/industries/aerospace-defense",
     },
  { sector: "Marine & subsea", to: "/industries/marine-subsea", requirement: "Classification society approval where applicable, NACE for sour service, corrosion-resistant material certification" },
  { sector: "Chemical & petrochemical", to: "/industries/chemicals-petrochemical", requirement: "ATEX for zoned areas, material compatibility documentation for the process media, PED conformity" },
  {
    sector: "Food & beverage",
    to: "/industries/food-beverages",
     },
]

export const SectorRequirements: React.FC = () => (
  <Box component="section" sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      <SectionHeading>Sector-specific approval requirements</SectionHeading>
      <Body>Different sectors weight these certifications differently, and some carry additional requirements:</Body>
      <StyledTable minWidth={720}>
        <TableHead>
          <TableRow>
            <HeadCell>Sector</HeadCell>
            <HeadCell>What the specification usually demands</HeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SECTOR_ROWS.map(row => (
            <TableRow key={row.sector}>
              <BodyCell>
                <IndustryLink to={row.to}>{row.sector}</IndustryLink>
              </BodyCell>
              <BodyCell>{row.requirement}</BodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 10 — How to request documentation                             */
/* ------------------------------------------------------------------ */

export const RequestDocumentation: React.FC = () => (
  <Box component="section" sx={{ backgroundColor: "#F2F4F7", py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      <SectionHeading id="request-documentation">How to request certification documentation</SectionHeading>
      <Body sx={{ mb: 1 }}>Certificates, declarations of conformity, test reports and material certificates are available on request. To get the right documents first time, include:</Body>
      <Box component="ul" sx={{ pl: 3, mb: 2, color: "#334155", fontFamily: PRIMARY_FONT, lineHeight: 1.8 }}>
        <li>The product code or codes, or the order number if the goods have shipped.</li>
        <li>Which document you need — management system certificate, material certificate or type test report.</li>
        <li>Any zone classification or material standard your specification calls for.</li>
        <li>Whether documentation is needed before order placement, for vendor qualification, or with the delivery.</li>
      </Box>
      <Body>
        Where documentation needs to be arranged before manufacture, flagging it at enquiry stage avoids delay. Lead times vary by product family, material and documentation requirements, and are confirmed at quotation.
      </Body>
      <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" sx={{ mt: 3 }}>
        <Button
          component={RouterLink}
          viewTransition
          to="/enquiry"
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: BRAND_BLUE,
            color: "#fff",
            borderRadius: 0,
            px: 4,
            py: 1.5,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            "&:hover": { backgroundColor: "#0090c4" },
          }}>
          Request Documentation
        </Button>
        <Box component={RouterLink} viewTransition to="/enquiry" sx={{ color: BRAND_BLUE, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Speak to a technical specialist about a specific approval requirement
        </Box>
      </Stack>
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
    answer:
      "Panam holds an ATEX technical file deposit with LCIE under Directive 2014/34/EU covering instrumentation valves and fittings. Scope depends on the product and configuration, so send us your zone classification and required equipment marking and we will confirm what applies to your items.",
  },
  {
    question: "Can you supply material certificates?",
    answer:
      "Material certificates are available on request. Tell us at enquiry stage which EN 10204 document type your specification requires and we will confirm what can be supplied.",
  },
  {
    question: "What does NACE MR0175 compliance mean for valve selection?",
    answer:
      "NACE MR0175 was superseded by ISO 15156 and the two are published with identical text, so a specification may cite either name. The standard specifies which materials are acceptable for service in environments containing hydrogen sulphide, with limits on hardness, heat treatment condition and composition to guard against sulphide stress cracking. A NACE MR-0175 option is listed for our double block and bleed valves and 2-, 3- and 5-valve manifolds; for other products, tell us your sour service requirement at enquiry.",
  },
  {
    question: "Is Panam ISO 9001 certified?",
    answer:
      "Yes. Panam operates a quality management system certified to ISO 9001:2015. A copy of the certificate is available to view on this page and on request for vendor qualification.",
  },
]

export const CertificatesFAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false)

  return (
    <Box component="section" sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>

        <SectionHeading id="faq">Frequently asked questions</SectionHeading>

        <Paper elevation={0} sx={{ maxWidth: "900px", p: { xs: 2, md: 4 }, borderRadius: 0, border: BORDER, backgroundColor: "#fff" }}>
          {FAQS.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={(_, isExp) => setExpanded(isExp ? index : false)}
              disableGutters
              elevation={0}
              sx={{ borderBottom: index !== FAQS.length - 1 ? "1px solid #f0f0f0" : "none", "&:before": { display: "none" }, backgroundColor: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: BRAND_BLUE, fontSize: "1.8rem" }} />}
                aria-controls={`cert-faq-content-${index}`}
                id={`cert-faq-header-${index}`}
                sx={{ px: { xs: 1, md: 2 }, py: 1, "&:hover": { bgcolor: "rgba(1, 176, 240, 0.02)" }, "& .MuiAccordionSummary-content": { my: 2 } }}>
                <Typography sx={{ fontWeight: 700, fontFamily: PRIMARY_FONT, fontSize: { xs: "1rem", md: "1.1rem" }, color: "#222" }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 1, md: 2 }, pb: 4 }}>
                <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------------ */
/* Child pages — short intros above the existing document list         */
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
        Type test reports record the performance of a product design against a defined test standard, as distinct from a certificate covering a management system or an individual batch. The documents below cover our ATEX technical file deposit and PED material processor recognition. See the{" "}
        <IndustryLink to="/certificates#atex">certifications overview</IndustryLink>.
      </>
    ),
  },
}

export const ChildIntro: React.FC<{ tabKey: string }> = ({ tabKey }) => {
  const entry = CHILD_INTROS[tabKey]
  if (!entry) return null
  return (
    <Box sx={{ backgroundColor: "#fff", borderBottom: BORDER }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Body sx={{ mb: 0 }}>{entry.text}</Body>
      </Container>
    </Box>
  )
}
