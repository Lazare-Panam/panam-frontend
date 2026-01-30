import React from "react"
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How long does shipping typically take?",
    answer: "For standard components, we typically dispatch within 24-48 hours. Bespoke engineering solutions vary based on project complexity, but our team will provide a firm timeline during the quoting process.",
  },
  {
    question: "Do you offer technical support for installation?",
    answer: "Yes, our global engineering team provides comprehensive technical documentation and remote support. For large-scale industrial projects, onsite consultation is available upon request.",
  },
  {
    question: "Can I request a custom flow control solution?",
    answer: "Absolutely. We specialize in precision engineering. Simply select 'Technical Support' in the contact form below and provide your specific requirements.",
  },
  {
    question: "What certifications do your products carry?",
    answer: "Our products meet international standards including ISO 9001, CE, and industry-specific safety certifications for flow control and pressure management.",
  },
]

const FAQSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fcfcfc",
        // Subtle dot pattern to make the background feel "engineered" and less empty
        backgroundImage: `radial-gradient(${BRAND_BLUE}22 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}>
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
      </Container>
    </Box>
  )
}

export default FAQSection
