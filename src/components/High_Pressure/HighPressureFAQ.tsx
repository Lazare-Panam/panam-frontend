import React from "react"
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material"
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
    question: "What's the maximum pressure rating available?",
    answer:
      "Our High Pressure range covers 10,000 to 60,000 psi. HP Cone & Thread connections reach the full 60,000 psi class across needle valves and cone & threaded nipples; MP Cone & Thread covers 20,000 psi; standard NPT connections cover 10,000 to 15,000 psi depending on the product family.",
  },
  {
    question: "Are these products hydrogen compatible?",
    answer:
      "Yes. The High Pressure range is manufactured in SS 316 and engineered for hydrogen service, with material compatibility and certification support available for electrolyser and refuelling infrastructure projects.",
  },
  {
    question: "What certifications are available?",
    answer:
      "NACE MR0175 certification is available across the High Pressure range for sour service and offshore applications, alongside our standard ISO 9001:2015 quality management certification.",
  },
  {
    question: "What connection types do you offer?",
    answer:
      "NPT, MP Cone & Thread (20,000 psi) and HP Cone & Thread (60,000 psi). Configurations include straight, angle, 3-way and 2-stem manifold across the needle valve range, and 2-way, 3-way 180° and 90° diverter across ball valves.",
  },
  {
    question: "Can I get a custom configuration or connection size?",
    answer:
      "Yes — our engineering team can match pressure series, connection type and length to your exact application. Submit your specification through our enquiry form and we'll respond with a matched configuration.",
  },
  {
    question: "What's the typical lead time for high pressure orders?",
    answer:
      "Our technical team responds to high pressure enquiries within 24 hours. Standard components ship from UK stock within 24-48 hours; bespoke pressure series or configurations get a firm lead time during quoting.",
  },
]

const HighPressureFAQ: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
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

      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
        High Pressure FAQ
      </Typography>
      <Typography variant="h3" component="h2" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
        Frequently Asked Questions
      </Typography>

      <Paper
        elevation={0}
        sx={{
          maxWidth: "900px",
          p: { xs: 2, md: 4 },
          borderRadius: 0,
          border: "1px solid #eef0f2",
          backgroundColor: "#fff",
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
              aria-controls={`hp-faq-content-${index}`}
              id={`hp-faq-header-${index}`}
              sx={{
                px: { xs: 1, md: 2 },
                py: 1,
                "&:hover": { bgcolor: "rgba(1, 176, 240, 0.02)" },
                "& .MuiAccordionSummary-content": { my: 2 },
              }}>
              <Typography sx={{ fontWeight: 700, fontFamily: PRIMARY_FONT, fontSize: { xs: "1rem", md: "1.1rem" }, color: "#222" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 1, md: 2 }, pb: 4 }}>
              <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      <Typography sx={{ mt: 4, color: "#64748B", fontFamily: PRIMARY_FONT }}>
        Have a spec we haven't covered?{" "}
        <Box component={RouterLink} viewTransition to="/enquiry" sx={{ color: BRAND_BLUE, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Ask our technical team
        </Box>
        .
      </Typography>
    </Box>
  )
}

export default HighPressureFAQ
