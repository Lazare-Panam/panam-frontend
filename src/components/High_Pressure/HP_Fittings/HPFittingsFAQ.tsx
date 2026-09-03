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
    question: "What's the difference between Medium Pressure and High Pressure fittings?",
    answer:
      "Medium Pressure (MP) Cone & Thread Female connections are rated to 20,000 psi; High Pressure (HP) Cone & Thread Female connections extend to 60,000 psi. Both are available across connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars.",
  },
  {
    question: "What sizes are available?",
    answer:
      "The full range covers tube ODs from 1/4\" to 1\" across all six fitting categories, with consistent connection geometry regardless of size.",
  },
  {
    question: "Can these fittings be used in hydrogen service?",
    answer:
      "Yes. The SS 316 construction and precision cone & thread sealing used across this range is engineered for high-pressure hydrogen infrastructure, where material embrittlement and micro-leakage are the key risks.",
  },
  {
    question: "What certifications are available?",
    answer:
      "NACE MR0175 certification is available across the range for sour service and offshore applications, in addition to our standard ISO 9001:2015 quality management certification.",
  },
  {
    question: "What's the lead time for HP Cone & Thread Fittings?",
    answer:
      "Our technical team responds to HP fitting enquiries within 24 hours. Standard sizes ship from UK stock within 24-48 hours; non-standard configurations get a firm lead time during quoting.",
  },
]

const HPFittingsFAQ: React.FC = () => {
  return (
    <Box component="section">
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
        HP Fittings FAQ
      </Typography>
      <Typography variant="h3" component="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 5, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
        Frequently Asked Questions
      </Typography>

      <Paper elevation={0} sx={{ maxWidth: "900px", p: { xs: 2, md: 4 }, borderRadius: 0, border: "1px solid #eef0f2", backgroundColor: "#fff" }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            sx={{ borderBottom: index !== faqs.length - 1 ? "1px solid #f0f0f0" : "none", "&:before": { display: "none" }, backgroundColor: "transparent" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: BRAND_BLUE, fontSize: "1.8rem" }} />}
              aria-controls={`hpf-faq-content-${index}`}
              id={`hpf-faq-header-${index}`}
              sx={{ px: { xs: 1, md: 2 }, py: 1, "&:hover": { bgcolor: "rgba(1, 176, 240, 0.02)" }, "& .MuiAccordionSummary-content": { my: 2 } }}>
              <Typography sx={{ fontWeight: 700, fontFamily: PRIMARY_FONT, fontSize: { xs: "1rem", md: "1.1rem" }, color: "#222" }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 1, md: 2 }, pb: 4 }}>
              <Typography sx={{ fontFamily: PRIMARY_FONT, color: "#555", lineHeight: 1.8, fontSize: "0.95rem" }}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>

      <Typography sx={{ mt: 4, color: "#64748B", fontFamily: PRIMARY_FONT }}>
        Need a spec we haven't covered?{" "}
        <Box component={RouterLink} viewTransition to="/enquiry" sx={{ color: BRAND_BLUE, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          Ask our technical team
        </Box>
        .
      </Typography>
    </Box>
  )
}

export default HPFittingsFAQ
