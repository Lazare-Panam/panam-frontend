import React from "react"
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Stack } from "@mui/material"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined"
import TuneRoundedIcon from "@mui/icons-material/TuneRounded"
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { Link as RouterLink } from "react-router-dom"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C, GRADIENT, cardSx, sectionSx } from "../../Landing2/homeTokens"

// One icon per question, in the same order as `faqs`
const ICONS = [<CategoryOutlinedIcon />, <TuneRoundedIcon />, <ScheduleRoundedIcon />, <VerifiedOutlinedIcon />, <AccountBalanceWalletOutlinedIcon />, <ArchitectureRoundedIcon />]

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
  const [open, setOpen] = React.useState<number | false>(0)

  return (
    <Box component="section" sx={sectionSx("white")}>
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
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 120 } }}>
              <SectionHeader eyebrow="CATALOG FAQ" title="Frequently Asked Questions" />
              <Box sx={{ ...cardSx, mt: { xs: -2, md: -3 }, p: 3, background: `linear-gradient(160deg, ${C.tintBg} 0%, ${C.white} 70%)` }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: "12px", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center" }}>
                    <SupportAgentOutlinedIcon />
                  </Box>
                </Stack>
                <Typography sx={{ color: C.text, lineHeight: 1.6 }}>
                  Can't find what you're looking for?{" "}
                  <Box
                    component={RouterLink}
                    viewTransition
                    to="/enquiry"
                    sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: C.brandDark, fontWeight: 700, textDecoration: "none", "& svg": { fontSize: 17, transition: "transform 0.2s ease" }, "&:hover svg": { transform: "translateX(3px)" } }}>
                    Ask our technical team
                    <ArrowForwardRoundedIcon />
                  </Box>
                  .
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7.5 }}>
            <Stack spacing={1.5}>
              {faqs.map((faq, index) => {
                const isOpen = open === index
                return (
                  <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    expanded={isOpen}
                    onChange={(_, exp) => setOpen(exp ? index : false)}
                    sx={{
                      ...cardSx,
                      boxShadow: isOpen ? cardSx.boxShadow : "none",
                      borderColor: isOpen ? "rgba(1,176,240,0.4)" : C.border,
                      borderRadius: "16px !important",
                      overflow: "hidden",
                      "&:before": { display: "none" },
                    }}>
                    <AccordionSummary
                      expandIcon={
                        <Box sx={{ width: 30, height: 30, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: isOpen ? C.brand : C.surface, color: isOpen ? C.white : C.ink, transition: "all 0.25s ease" }}>
                          <AddRoundedIcon sx={{ fontSize: 20 }} />
                        </Box>
                      }
                      aria-controls={`products-faq-content-${index}`}
                      id={`products-faq-header-${index}`}
                      sx={{
                        px: { xs: 2, md: 2.5 },
                        "& .MuiAccordionSummary-content": { my: 2, alignItems: "center", gap: 2 },
                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "rotate(45deg)" },
                      }}>
                      <Box sx={{ width: 40, height: 40, flex: "none", borderRadius: "12px", bgcolor: isOpen ? C.tintBg : C.surface, color: isOpen ? C.brandDark : C.muted, display: { xs: "none", sm: "grid" }, placeItems: "center", transition: "all 0.25s ease", "& svg": { fontSize: 21 } }}>
                        {ICONS[index]}
                      </Box>
                      <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.98rem", md: "1.05rem" }, color: C.ink, lineHeight: 1.4 }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: { xs: 2, md: 2.5 }, pl: { sm: 9.5 }, pt: 0, pb: 3 }}>
                      <Typography sx={{ color: C.muted, lineHeight: 1.75, fontSize: "0.96rem" }}>{faq.answer}</Typography>
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

export default ProductsFAQ
