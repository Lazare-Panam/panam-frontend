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
        Every valve, fitting and manifold Panam supplies is built and documented to be signed off by someone who has to answer for it — a project engineer approving a hazardous-area installation, a procurement lead qualifying a new vendor, an inspector checking material traceability against a purchase order.
      </Body>
      <Body sx={{ mb: 0 }}>
        This page brings our certifications, approvals and documentation into one place, so you can confirm we meet your specification without emailing to ask. Certificates and test reports are available to download below, the table further down sets out what applies to each product family, and anything not listed can be requested at the foot of the page.
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
  { standard: "ATEX (2014/34/EU)", covers: "Equipment for potentially explosive atmospheres", docs: "Transmitters; selected pressure gauges" },
  { standard: "IECEx", covers: "International certification scheme for Ex equipment", docs: "Pressure and temperature transmitters" },
  { standard: "SIL 2 / SIL 3 (IEC 61508)", covers: "Functional safety integrity level", docs: "Pressure transmitters, safety version" },
  { standard: "CE PED (2014/68/EU)", covers: "Pressure equipment conformity", docs: "Declaration of conformity" },
  { standard: "NACE MR0175 / ISO 15156", covers: "Materials for H₂S-containing (sour) service", docs: "On request across the range" },
  { standard: "EN 10204 Type 3.1", covers: "Material inspection certificate", docs: "Standard with flange adapters; on request elsewhere" },
  { standard: "Heat code traceability", covers: "Heat number, serial number and hologram stamped on the item", docs: "Every product, as standard" },
  { standard: "ASME B16.34", covers: "Valve design and testing", docs: "Double block and bleed, pre-fabricated hookups" },
  { standard: "Fugitive emission testing", covers: "Stem and seal leakage to atmosphere", docs: "Bellow sealed valves, pre-fabricated hookups" },
  { standard: "BFPA", covers: "British Fluid Power Association membership", docs: "Type test reports" },
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
        Certification scope varies by product family, material and connection type — see the product family table further down. Confirm the exact approvals for your item at the point of quotation.
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
  { family: "Double block & bleed", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "1/2–3\", Class 150–2500; to ANSI/ASME B16.34" },
  { family: "Flange adapters", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, Monel, Hastelloy", notes: "ASME, DIN, EN, JIS; EN 10204 3.1 certificates supplied" },
  { family: "Swivel gauge adapters", pressure: "10,000 psig / 689 bar", materials: "SS316, duplex, super duplex, Monel, Hastelloy", notes: "360° positioning, silver plated swivel thread" },
  { family: "Filters", pressure: "6,000 psig / 414 bar", materials: "SS316, brass", notes: "T-type and I-type; element replaceable in situ" },
  { family: "Pressure regulators", pressure: "6,000 psig / 414 bar", materials: "SS316, brass", notes: "1/4\" NPT; piston sensed" },
  { family: "Air headers", pressure: "6,000 psig / 414 bar", materials: "SS316, carbon steel", notes: "Class 150–2500; ANSI B2.1, ANSI B16.11, ASME BPVC V" },
  { family: "Condensate pots", pressure: "6,000 psig / 414 bar", materials: "SS316, carbon steel", notes: "Class 150–2500; ASME BPVC V weld testing" },
  { family: "Pre-fabricated hookups", pressure: "6,000 psig / 414 bar", materials: "SS316/316L and alloys", notes: "ASME B16.34 & B16.11; fugitive emissions; IBR where required" },
  { family: "Bellow sealed valves", pressure: "200 bar", materials: "316 SS", notes: "To 325°C; fugitive emission tested" },
  { family: "Pressure transmitters", pressure: "—", materials: "Aluminium or stainless housing", notes: "ATEX & IECEx intrinsic safety and explosion proof; SIL 2/SIL 3; IP66/67/68" },
  { family: "Temperature transmitters", pressure: "—", materials: "Aluminium or SS sensor head", notes: "ATEX & IECEx; RTD to IEC 60751, thermocouple to IEC 60584" },
  { family: "Pressure gauges", pressure: "—", materials: "SS316, SS316L, Monel sensing element", notes: "Class 1.0 & 1.6 to ASME B40.100; ATEX on selected models; IP54–67" },
  { family: "Temperature gauges", pressure: "—", materials: "SS316 wetted parts", notes: "Class 1 to EN 13190 / ASME B40.200; IP65–68" },
  { family: "Flow elements", pressure: "—", materials: "Wide range available", notes: "Designs based on ISO 5167-4; 0.5–80\" NB" },
]

export const CertificationSections: React.FC = () => (
  <Box component="section" sx={{ backgroundColor: "#F2F4F7", py: { xs: 6, md: 8 } }}>
    <Container maxWidth="lg">
      {/* 8.1 */}
      <SectionHeading id="management-systems">Quality management — ISO 9001:2015</SectionHeading>
      <Body>
        Panam operates a quality management system certified to ISO 9001:2015. In practice that means the things a buyer actually cares about are controlled and auditable rather than informal: incoming material verification, in-process and final inspection, calibration of test equipment, traceability from raw material through to the finished item, and a documented route for handling non-conformance and corrective action.
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
      <SectionHeading id="atex-iecex">Hazardous area equipment — ATEX and IECEx</SectionHeading>
      <Body>
        Where instrumentation is installed in a potentially explosive atmosphere — an oil and gas process area, a hydrogen refuelling site, a solvent handling plant — the equipment must be certified for the zone it sits in.
      </Body>
      <Body>
        Panam's pressure and temperature transmitters carry both intrinsic safety and explosion proof certification under ATEX and IECEx. ATEX is the European regime under Directive 2014/34/EU and is what a UK or EU project specification will normally call for; IECEx is the equivalent international scheme, often preferred on export projects or where a single certification needs recognition across several jurisdictions. ATEX certification is also available on selected pressure gauge models.
      </Body>
      <Body>
        These certifications apply to Panam's instrumentation rather than to the mechanical valve, fitting and manifold range — products without electrical components generally fall outside the directive's scope. Send us your zone classification and the equipment marking your specification requires, and we will confirm what we can supply against it.
      </Body>
      
      <Stack direction="row" spacing={3} sx={{ mb: 8 }}>
        <IndustryLink to="/industries/oil-gas">Oil &amp; Gas</IndustryLink>
        <IndustryLink to="/industries/hydrogen">Hydrogen</IndustryLink>
      </Stack>

      {/* 8.5 */}
      <SectionHeading id="functional-safety">Functional safety — SIL 2 and SIL 3</SectionHeading>
      <Body>
        Safety integrity level ratings under IEC 61508 describe how reliably a component performs its safety function within a safety instrumented system. Where a process safety loop is assessed at SIL 2 or SIL 3, every element in that loop — including the valves — has to be justified against the target.
      </Body>
  

      {/* 8.6 */}
      <SectionHeading id="pressure-equipment">Pressure equipment — CE PED</SectionHeading>
      <Body>
        The Pressure Equipment Directive (2014/68/EU) governs the design and manufacture of pressure-bearing equipment placed on the European market. Panam products are supplied with CE PED conformity where the directive applies, with a declaration of conformity available on request.
      </Body>
      

      {/* 8.7 */}
      <SectionHeading id="sour-service">Sour service materials — NACE MR0175 / ISO 15156</SectionHeading>
      <Body>
        In oil and gas service where hydrogen sulphide is present, standard stainless grades are vulnerable to sulphide stress cracking. NACE MR0175 — superseded internationally by ISO 15156, and published with identical text under both names — sets out which materials are acceptable for sour service and under what conditions — including limits on hardness, heat treatment condition and chemical composition.
      </Body>
      <Body>
        NACE certification is available on request across the Panam range — tube, pipe, weld and JIC fittings, needle, ball, check, relief and gauge root valves, 2-3-5 valve manifolds, double block and bleed valves, regulators, condensate pots, air headers and swivel gauge adapters. It is supplied on request rather than as standard, so ask for it at enquiry stage. The material in the item you receive then traces back to a certificate demonstrating it meets the standard, which is what matters on inspection: compliance is only meaningful if the paperwork ties the specific batch to the specific item.
      </Body>
     
      <Stack direction="row" spacing={3} sx={{ mb: 8 }}>
        <IndustryLink to="/industries/oil-gas">Oil &amp; Gas</IndustryLink>
        <IndustryLink to="/industries/marine-subsea">Marine &amp; Subsea</IndustryLink>
      </Stack>

      {/* 8.8 */}
      <SectionHeading id="traceability">Material traceability — EN 10204 inspection documents</SectionHeading>
      <Body sx={{ mb: 1 }}>EN 10204 defines the types of inspection document supplied with metallic products. The distinction procurement teams need to get right:</Body>
      <Box component="ul" sx={{ pl: 3, mb: 2, color: "#334155", fontFamily: PRIMARY_FONT, lineHeight: 1.8 }}>
        <li>Type 2.1 — declaration of compliance, no test results.</li>
        <li>Type 2.2 — test report with results from non-specific inspection.</li>
        <li>Type 3.1 — inspection certificate with results from specific inspection on the delivered item, validated by the manufacturer's authorised inspection representative, independent of the manufacturing department.</li>
        <li>Type 3.2 — as 3.1, but additionally validated by either the purchaser's authorised inspection representative or an inspector designated by official regulations.</li>
      </Box>
      <Body>
        Type 3.1 is the level most instrumentation specifications call for. Panam supplies Type 3.1 certificates as standard with flange adapters, and on request across the rest of the range. If your specification requires Type 3.2 with third-party witness, tell us at enquiry stage so it can be arranged before manufacture rather than retrospectively.
      </Body>
      <Body sx={{ mb: 8 }}>
        Separately from EN 10204 documentation, every Panam product carries heat code and serial number traceability, with the heat number, serial number and Panam hologram stamped on the item itself. Material test certificates are dispatched with each consignment, so the item in your hand can be tied to its paperwork without relying on the delivery note.
      </Body>

      {/* 8.9 */}
      <SectionHeading id="bfpa">Industry membership — BFPA</SectionHeading>
      <Body>
        Panam is a member of the British Fluid Power Association, the UK trade association for the hydraulics and pneumatics industry. The BFPA holds the external secretariat for the relevant British Standards Institution committees, which means its members sit close to the standards development work that shapes fluid power specifications nationally, in Europe and internationally.
      </Body>
      <Body sx={{ mb: 8 }}>
        Practically, membership gives us BFPA type test reporting for products where it applies, and access to the technical committee work behind the standards our customers specify against. Where a tender asks for evidence of industry body membership as part of supplier assessment, our BFPA membership is the relevant credential.
      </Body>

      {/* 8.10 */}
      <SectionHeading id="design-standards">Design and testing standards</SectionHeading>
      <Body sx={{ mb: 1 }}>Beyond certification, Panam products are designed and tested to recognised international standards. A specification will often cite these directly, so they are worth stating:</Body>
      <Box component="ul" sx={{ pl: 3, mb: 2, color: "#334155", fontFamily: PRIMARY_FONT, lineHeight: 1.8 }}>
        <li>Double block and bleed valves — designed to comply with the requirements of ANSI/ASME B16.34.</li>
        <li>Pre-fabricated hookups — designed to comply with ASME B16.34 and ASME B16.11.</li>
        <li>NPT threads to ANSI B2.1; socket weld ends to ANSI B16.11.</li>
        <li>Butt-welded joints on air headers and condensate pots — radiography and liquid penetrant testing to ASME BPVC Section V.</li>
        <li>Flow elements — designs based on ISO 5167-4.</li>
        <li>Pressure gauges — accuracy class to ASME B40.100. Temperature gauges to EN 13190 and ASME B40.200.</li>
        <li>RTDs to IEC 60751; thermocouples to IEC 60584.</li>
        <li>Bellow sealed valves and pre-fabricated hookups — fugitive emission testing.</li>
        <li>Ingress protection on instrumentation — IP54 to IP68 depending on model.</li>
      </Box>
      <Body>
        Materials across the range include SS316 and SS316L, duplex and super duplex, Inconel, Monel, Hastelloy, brass and carbon steel depending on product family, with exotic materials available on request. Raw materials are tested in-house for physical, chemical and heat endurance properties before use.
      </Body>
    

      {/* 8.11 */}
      <SectionHeading id="by-product-family">Certification and specification by product family</SectionHeading>
      <Body>
        Certification is specified per item, not per supplier, so the table below sets out what applies to each product family alongside its pressure rating and materials. NACE certification is available on request across the range; heat code and serial number traceability is standard on every product.
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
      <Body sx={{ mb: 0 }}>Where your specification calls for something not shown — a material grade, a pressure class, a certification against a particular edition of a standard — send it with your enquiry and we will confirm what we can supply.</Body>
    </Container>
  </Box>
)

/* ------------------------------------------------------------------ */
/* Block 9 — Sector requirements table                                 */
/* ------------------------------------------------------------------ */

const SECTOR_ROWS: { sector: string; to: string; requirement?: React.ReactNode }[] = [
  { sector: "Oil & gas", to: "/industries/oil-gas", requirement: "NACE MR0175 / ISO 15156 sour service materials, ATEX or IECEx for hazardous areas, EN 10204 3.1 or 3.2 traceability, pressure class verification" },
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
        <li>Which document you need — management system certificate, EN 10204 material certificate, declaration of conformity, type test report.</li>
        <li>Any zone classification, SIL target or material standard your specification calls for.</li>
        <li>Whether documentation is needed before order placement, for vendor qualification, or with the delivery.</li>
      </Box>
      <Body>
        Where documentation needs to be arranged before manufacture — Type 3.2 inspection with third-party witness, for example — flagging it at enquiry stage avoids delay. Standard lead times are typically 3–4 weeks depending on product family, material and certification requirements; larger volumes and non-standard requirements are confirmed at quotation.
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
      "Panam holds ISO 9001:2015 for quality management, ISO 14001:2015 for environmental management and ISO 45001:2018 for occupational health and safety. Products are available with ATEX and IECEx certification for hazardous areas, CE PED conformity for pressure equipment, and NACE MR0175 / ISO 15156 compliance for sour service. Panam is a member of the British Fluid Power Association. Certification scope varies by product family, so confirm the approvals for a specific item at quotation.",
  },
  {
    question: "Are Panam products ATEX certified?",
    answer:
      "ATEX and IECEx certification applies to Panam's instrumentation rather than to the mechanical valve range. Pressure and temperature transmitters carry both intrinsic safety and explosion proof certification under ATEX and IECEx, and ATEX certification is available on selected pressure gauge models. The valve, fitting and manifold range is not ATEX certified — products without electrical components generally fall outside the directive's scope. Send us your zone classification and required equipment marking and we will confirm what we can supply.",
  },
  {
    question: "Can you supply EN 10204 3.1 material certificates?",
    answer:
      "Yes. EN 10204 Type 3.1 inspection certificates are supplied with orders on request. Type 3.1 covers specific inspection on the delivered item, validated by an inspection representative independent of the manufacturing department, which is the level most instrumentation specifications require. If your specification calls for Type 3.2 with third-party or purchaser witness, request it at enquiry stage so it can be arranged before manufacture.",
  },
  {
    question: "What does NACE MR0175 compliance mean for valve selection?",
    answer:
      "NACE MR0175 was superseded by ISO 15156 and the two are published with identical text, so a specification may cite either name. The standard specifies which materials are acceptable for service in environments containing hydrogen sulphide, with limits on hardness, heat treatment condition and composition to guard against sulphide stress cracking. Panam offers NACE certification on request across the range rather than as standard, so request it at enquiry stage. For a valve to be genuinely compliant the traceability documentation has to tie the specific batch to the specific item — a general statement of compliance is not sufficient at inspection.",
  },
  {
    question: "Is Panam ISO 9001 certified?",
    answer:
      "Yes. Panam operates a quality management system certified to ISO 9001:2015, covering incoming material verification, in-process and final inspection, calibration of test equipment, material traceability and documented non-conformance handling. A copy of the certificate is available on request for vendor qualification.",
  },
  {
    question: "Do Panam products come with material traceability?",
    answer:
      "Yes. Every product carries heat code and serial number traceability, with the heat number, serial number and Panam hologram stamped on the item itself, and material test certificates are dispatched with each consignment. EN 10204 Type 3.1 inspection certificates are supplied as standard with flange adapters and on request across the rest of the range. Raw materials are tested in-house for physical, chemical and heat endurance properties before use.",
  },
  {
    question: "What is the difference between ATEX and IECEx?",
    answer:
      "Both certify equipment for use in potentially explosive atmospheres. ATEX is the European regime under Directive 2014/34/EU and is what UK and EU project specifications normally call for. IECEx is the international scheme operated under IEC standards, and is often preferred on export projects or where one certification needs recognition across several jurisdictions. Panam supplies products under both.",
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
    anchor: "bfpa",
    text: (
      <>
        Type test reports record the performance of a product design against a defined test standard, as distinct from a certificate covering a management system or an individual batch. Panam's reports are issued through our British Fluid Power Association membership. Where a specification asks for type test evidence rather than a material certificate, these are the documents to supply. See the{" "}
        <IndustryLink to="/certificates#bfpa">certifications overview</IndustryLink>.
      </>
    ),
  },
  registrations: {
    anchor: "atex-iecex",
    text: (
      <>
        Product-level certifications and conformity declarations, covering ATEX and IECEx for hazardous area equipment and CE PED for pressure equipment. These are specific to product family and configuration rather than blanket across the range, so check the approval against your item's code and required marking. The{" "}
        <IndustryLink to="/certificates#atex-iecex">certifications overview</IndustryLink> explains what each one covers.
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
