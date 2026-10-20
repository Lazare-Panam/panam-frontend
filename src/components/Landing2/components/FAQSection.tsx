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
