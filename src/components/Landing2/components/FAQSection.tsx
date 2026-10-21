import React, { useState } from "react"
import { Box, Button, Container, Grid, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined"
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import { Link as RouterLink } from "react-router-dom"

import { C, SHADOW, btn, cardSx, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What valves and fittings are available?",
    answer:
      "Panam Valves manufactures and supplies instrumentation fittings and valves. The range covers tube, pipe, 37° JIC, weld and high-pressure pipe fittings; needle, ball, check, relief and gauge root valves; 2, 3 and 5 valve manifolds; double block and bleed valves; filters; and swivel gauge and flange adapters. Panam also supplies pressure and temperature instrumentation, air headers, condensate pots and pre-fabricated hookups.",
  },
  {
    question: "Which industries do you supply?",
    answer:
      "Panam supplies oil and gas, marine and subsea, chemicals, aerospace, food and beverage, and hydrogen applications, and its product range extends to the power and nuclear sectors, with bellow sealed valves specified for oil and gas, marine and nuclear service. Application-specific requirements can be scoped with Panam's engineers through the enquiry form.",
  },
  {
    question: "What materials are available?",
    answer:
      "Material options include SS316 and 316L, Duplex, Super Duplex, Inconel, Monel and Hastalloy, with brass and carbon steel in selected families such as filters, pressure regulators, air headers and condensate pots. Availability varies by product family — Super Duplex and Inconel are listed for pipe fittings and swivel gauge adapters. Confirm material options for a specific series at enquiry.",
  },
  {
    question: "What are typical lead times?",
    answer:
      "Lead times depend on product family, material and certification requirements and are confirmed at quotation. Panam responds to a specification or bill of materials confirming availability and delivery for the items requested. Submit an RFQ or contact the sales team for a lead time against your requirement.",
  },
  {
    question: "Can you support custom or project-specific requirements?",
    answer:
      "Yes. Panam's R&D function offers customisation of products to client requirement, adhering to international standards, and the company describes itself as a complete system solution provider rather than a product-only supplier. Pre-fabricated hookups and grab sampling systems are built to configuration. An online configurator covers end connections, materials, pressure ratings and certifications; for bespoke engineering, select \"Technical Support\" in the enquiry form.",
  },
  {
    question: "What technical documentation is available?",
    answer:
      "Material certificates are available on request. Panam's management systems are certified to ISO 9001, ISO 14001 and ISO 45001, and we hold ATEX and PED documents, which you can view on our certificates page. Tell us your documentation requirements at enquiry and we will confirm what can be supplied.",
  },
  {
    question: "How do I request a quote or technical review?",
    answer:
      "Submit an RFQ through the enquiry form with your specification or bill of materials, and Panam will respond within 24 hours. For bespoke engineering outside the standard ranges, select \"Technical Support\" in the enquiry form to have the requirement scoped by Panam's engineers. An online configurator is available for standard builds. Contact: marketing@panamvalve.com or +44 (0) 7369 243459.",
  },
]

// One icon per question, in the same order as `faqs`.
const faqIcons = [
  <Inventory2OutlinedIcon />,
  <FactoryOutlinedIcon />,
  <ScienceOutlinedIcon />,
  <ScheduleOutlinedIcon />,
  <EngineeringOutlinedIcon />,
  <DescriptionOutlinedIcon />,
  <RequestQuoteOutlinedIcon />,
]

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(0)

  return (
    <Box component="section" sx={sectionSx("surface")}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        })}
      </script>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
              <Eyebrow>SUPPORT CENTER</Eyebrow>
              <Typography component="h2" sx={{ mt: 2, fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.5rem" }, color: C.ink }}>
                Frequently Asked Questions
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "20px",
                  background: `linear-gradient(145deg, ${C.white} 0%, ${C.tintBg} 100%)`,
                  border: "1px solid rgba(1,176,240,0.2)",
                  boxShadow: SHADOW.card,
                }}>
                <Box sx={{ width: 56, height: 56, borderRadius: "16px", background: `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})`, color: C.white, display: "grid", placeItems: "center", mb: 2.5, boxShadow: "0 10px 24px rgba(1,176,240,0.35)", "& svg": { fontSize: 30 } }}>
                  <SupportAgentOutlinedIcon />
                </Box>
                <Typography sx={{ color: C.ink, fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.5 }}>
                  Can't find what you're looking for?
                </Typography>
                <Button component={RouterLink} viewTransition to="/enquiry" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, mt: 2.5, width: "100%" }}>
                  Ask our engineering team
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={1.5}>
              {faqs.map((faq, index) => {
                const open = expanded === index
                return (
                  <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    expanded={open}
                    onChange={(_, isOpen) => setExpanded(isOpen ? index : false)}
                    sx={{
                      ...cardSx,
                      boxShadow: open ? SHADOW.card : "none",
                      borderRadius: "16px !important",
                      overflow: "hidden",
                      borderColor: open ? "rgba(1,176,240,0.45)" : C.border,
                      "&:before": { display: "none" },
                      "&:hover": { borderColor: "rgba(1,176,240,0.35)" },
                    }}>
                    <AccordionSummary
                      expandIcon={
                        <Box sx={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: open ? C.brand : C.surface, color: open ? C.white : C.brandDark, transition: "all 0.25s ease" }}>
                          <AddRoundedIcon sx={{ fontSize: 20 }} />
                        </Box>
                      }
                      aria-controls={`faq-content-${index}`}
                      id={`faq-header-${index}`}
                      sx={{
                        px: { xs: 2, md: 2.5 },
                        "& .MuiAccordionSummary-content": { my: 1.75, alignItems: "center", gap: 2 },
                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" },
                      }}>
                      <Box sx={{ width: 44, height: 44, flex: "none", borderRadius: "12px", display: "grid", placeItems: "center", bgcolor: open ? C.brandTint : C.surface, color: C.brandDark, transition: "background-color 0.25s ease", "& svg": { fontSize: 23 } }}>
                        {faqIcons[index]}
                      </Box>
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

export default FAQSection
