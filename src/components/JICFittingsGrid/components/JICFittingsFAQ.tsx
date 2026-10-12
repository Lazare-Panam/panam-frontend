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
    question: "What standards do PANAM® 37° JIC fittings conform to?",
    answer: "SAE J514 and ISO 8434-2.",
  },
  {
    question: "What thread standards are available?",
    answer:
      "NPT, ISO Tapered (BSPT), ISO Parallel (BSPP), SAE/MS Straight Thread, and Metric.",
  },
  {
    question: "What materials are JIC fittings available in?",
    answer:
      "SS316 as standard, with Duplex, Monel and Hastelloy available on request.",
  },
  {
    question: "What tube OD sizes are covered?",
    answer: '1/8" through 2" fractional, and 3mm through 50mm metric.',
  },
  {
    question: "What fitting categories does the range include?",
    answer:
      "Connectors, unions & swivel, adapters & reducers, elbows, tees, and plugs/caps/nuts — covering the full range of 37° flared connection geometries.",
  },
  {
    question: "Are material certificates available?",
    answer:
      "Material certificates are available on request. If your application needs sour service (NACE MR0175) materials, tell us at enquiry and we will confirm what can be supplied.",
  },
]

const JICFittingsFAQ: React.FC = () => {
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
        JIC Fittings FAQ
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
              aria-controls={`jic-faq-content-${index}`}
              id={`jic-faq-header-${index}`}
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

export default JICFittingsFAQ
