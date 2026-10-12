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
    question: "What thread standards do HP Pipe Fittings meet?",
    answer:
      "NPT, ISO Parallel, and 37° JIC thread connections, with Standard and Swivel variants available depending on the fitting type. All pipe threads meet ANSI/ASME B1.20.1 for tapered pipe threads.",
  },
  {
    question: "What pressure rating do pipe fittings cover?",
    answer:
      "10,000 to 15,000 psi, with working pressure rated to ANSI/ASME B31.3 at ambient temperature across the full range.",
  },
  {
    question: "How are these fittings marked?",
    answer:
      "Fittings are marked with size and material, and material certificates are available on request. Threads are capped for protection during transit and storage.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Sizes range from 1/8\" to 2\" depending on the fitting type — hex nipples and plugs/caps extend to 2\", while elbows and tees cover up to 1 1/2\" and 1 1/4\" respectively.",
  },
  {
    question: "What's the lead time for HP Pipe Fittings?",
    answer:
      "Our technical team responds to pipe fitting enquiries within 24 hours. Lead times vary by product and are confirmed at quotation.",
  },
]

const HPPipeFittingsFAQ: React.FC = () => {
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
        HP Pipe Fittings FAQ
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
              aria-controls={`hppf-faq-content-${index}`}
              id={`hppf-faq-header-${index}`}
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

export default HPPipeFittingsFAQ
