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
    question: "What ferrule designs does PANAM® offer?",
    answer:
      "Both single and double ferrule tube fitting designs, engineered to deliver secure, leak-tight performance in demanding instrumentation and process applications.",
  },
  {
    question: "What materials are PANAM® tube fittings available in?",
    answer:
      "SS316, Duplex, Monel, Hastelloy, and Brass as standard, with other alloys available upon request.",
  },
  {
    question: "What size range is covered?",
    answer:
      "1/16\" to 2\" OD in fractional sizes, and 3mm to 50mm OD in metric, covering both fractional and metric tubing.",
  },
  {
    question: "What end connections are available?",
    answer:
      "Male and female NPT, BSPP, BSPT, and 37° flare configurations.",
  },
  {
    question: "Is NACE certification available?",
    answer:
      "Yes — NACE certification is available upon request, with heat code traceability provided for full material verification and quality assurance.",
  },
  {
    question: "What test standard are tube fittings qualified to?",
    answer:
      "PANAM® tube fittings are type tested to ASTM F1387 and are designed for low torque assembly, requiring no special tools.",
  },
]

const TubeFittingsFAQ: React.FC = () => {
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
        Tube Fittings FAQ
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
              aria-controls={`tf-faq-content-${index}`}
              id={`tf-faq-header-${index}`}
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

export default TubeFittingsFAQ
