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
    question: "What materials are available across the catalog?",
    answer:
      "Our standard range covers SS316 for general process and utility service, with Duplex and Super Duplex available for higher strength and chloride/stress-corrosion resistance. For aggressive chemical service we also supply Monel, Hastelloy and Inconel across valves, manifolds and fittings.",
  },
  {
    question: "Can I get a custom configuration instead of a standard catalog item?",
    answer:
      "Yes. Most valve, manifold and fitting ranges support our online Product Configurator — choose end connections, materials, pressure ratings and certifications, then add your exact build straight to an order.",
  },
  {
    question: "What are the lead times for catalog items?",
    answer:
      "Lead times vary by product, material, documentation requirements and order volume, and are confirmed at quotation.",
  },
  {
    question: "What certifications come with catalog products?",
    answer:
      "Our quality management system is certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. We also hold ATEX and PED documents, which you can view on our certificates page. Material certificates are available on request.",
  },
  {
    question: "Can I set up a trade account for bulk or recurring orders?",
    answer:
      "Yes — apply for a trade credit account to streamline repeat ordering and invoicing. You can start an application any time from the 'Apply for Credit' link in the site header.",
  },
  {
    question: "Do you provide CAD files and technical drawings for catalog items?",
    answer:
      "Every order includes access to full technical documentation: our Catalog Library, 2D/3D drawings and CAD files ready for direct import into your design workflow.",
  },
]

const ProductsFAQ: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fcfcfc",
        borderTop: "1px solid #eee",
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
            CATALOG FAQ
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              fontFamily: PRIMARY_FONT,
              mt: 1,
              color: "#1a1a1a",
              fontSize: { xs: "2rem", md: "2.75rem" },
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
                aria-controls={`products-faq-content-${index}`}
                id={`products-faq-header-${index}`}
                sx={{
                  px: { xs: 1, md: 2 },
                  py: 1,
                  "&:hover": { bgcolor: "rgba(1, 176, 240, 0.02)" },
                  "& .MuiAccordionSummary-content": { my: 2 },
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

export default ProductsFAQ
