import React from "react"
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link as RouterLink } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How long does shipping typically take?",
    answer:
      "Standard components ship from UK stock within 24-48 hours. For bespoke engineering solutions or configured products, our team confirms a firm lead time during the quoting process based on materials, certification requirements and order volume. We dispatch globally to 52+ countries.",
  },
  {
    question: "Can I request a custom flow control solution?",
    answer:
      "Yes. Our online Product Configurator lets you specify end connections, materials, pressure ratings and certifications for valves, manifolds and fittings, and add your exact build directly to an order. For fully bespoke engineering outside our standard ranges, select 'Technical Support' in the enquiry form and our engineers will scope it with you.",
  },
  {
    question: "What materials are available for valves and fittings?",
    answer:
      "Our standard range covers SS316 for general process and utility service, with Duplex and Super Duplex available for higher strength and chloride/stress-corrosion resistance in offshore and marine applications. For aggressive chemical service we also supply Monel, Hastelloy and Inconel. Material selection is matched to your application during quoting.",
  },
  {
    question: "Which industries do you supply?",
    answer:
      "We supply precision valves, manifolds and fittings across Oil & Gas, Marine & Subsea, Hydrogen infrastructure, Aerospace & Defence, Chemicals & Petrochemical, and Food & Beverage. Each range is engineered and certified to the standards relevant to that sector — see our Industries pages for sector-specific specifications.",
  },
  {
    question: "What certifications do your products carry?",
    answer:
      "Our quality management system is certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. We hold ATEX and CE PED marking for tube fittings, and are a registered BFPA member. Full certificates and type test reports are available on our Certifications page.",
  },
  {
    question: "Do you offer technical support for installation?",
    answer:
      "Yes — our global engineering team provides comprehensive technical documentation and remote support for installation and commissioning. For large-scale industrial projects, onsite consultation is available on request through our enquiry form.",
  },
]

const FAQSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fcfcfc",
        // Subtle dot pattern to make the background feel "engineered" and less empty
        backgroundImage: `radial-gradient(${BRAND_BLUE}22 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}>
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
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              fontWeight: 800,
              letterSpacing: 3,
              fontFamily: PRIMARY_FONT,
              display: "block",
            }}>
            SUPPORT CENTER
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontFamily: PRIMARY_FONT,
              mt: 1,
              color: "#1a1a1a",
              fontSize: { xs: "2.25rem", md: "3rem" },
            }}>
            Frequently Asked Questions
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            maxWidth: "900px",
            mx: "auto",
            p: { xs: 2, md: 4 },
            borderRadius: "4px",
            border: "1px solid #eef0f2",
            backgroundColor: "#ffffff",
            // This box shadow gives it that premium "Paper" feel
            boxShadow: "0px 20px 50px rgba(0,0,0,0.04)",
          }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                borderBottom: index !== faqs.length - 1 ? "1px solid #f0f0f0" : "none",
                "&:before": { display: "none" },
                backgroundColor: "transparent",
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: BRAND_BLUE, fontSize: "1.8rem" }} />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                sx={{
                  px: { xs: 1, md: 2 },
                  py: 1,
                  "&:hover": { bgcolor: "rgba(1, 176, 240, 0.02)" },
                  "& .MuiAccordionSummary-content": {
                    my: 2,
                  },
                }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontFamily: PRIMARY_FONT,
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    color: "#222",
                  }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 1, md: 2 }, pb: 4 }}>
                <Typography
                  sx={{
                    fontFamily: PRIMARY_FONT,
                    color: "#555",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    maxWidth: "800px",
                  }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>

        <Typography sx={{ textAlign: "center", mt: 4, color: "#64748B", fontFamily: PRIMARY_FONT }}>
          Can't find what you're looking for?{" "}
          <Box component={RouterLink} viewTransition to="/enquiry" sx={{ color: BRAND_BLUE, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Ask our engineering team
          </Box>
          .
        </Typography>
      </Container>
    </Box>
  )
}

export default FAQSection
