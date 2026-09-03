import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const BRAND_BLUE = "#01B0F0"

const testimonials = [
  {
    quote:
      "Panam consistently hits tight lead times on stock items — often quicker than the big-name suppliers we compared them against.",
    role: "Procurement Manager",
    company: "Major UK Industrial Distributor",
  },
  {
    quote:
      "Their pricing on high-volume orders lets us protect margin without compromising on certification or traceability.",
    role: "Operations Director",
    company: "Leading UK Oil & Gas Distributor",
  },
  {
    quote:
      "We buy in real volume and Panam has never missed a delivery window. That reliability is worth more than a few pence on unit price.",
    role: "Buyer",
    company: "National Fluid Power Distributor",
  },
]

const Testimonials = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center", maxWidth: 700, mx: "auto" }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
            Trusted By Distributors
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "2rem", md: "2.5rem" }, mt: 1 }}>
            What Our Partners Say
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Stack
                spacing={2}
                sx={{
                  height: "100%",
                  p: 4,
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: BRAND_BLUE,
                    boxShadow: "0 15px 30px rgba(1,176,240,0.08)",
                    transform: "translateY(-4px)",
                    "& .quote-icon": { transform: "scale(1.15) rotate(-6deg)", opacity: 0.9 },
                  },
                }}>
                <FormatQuoteIcon
                  className="quote-icon"
                  sx={{ color: BRAND_BLUE, fontSize: "2.5rem", opacity: 0.5, transition: "transform 0.3s ease, opacity 0.3s ease" }}
                />
                <Typography sx={{ color: "#334155", lineHeight: 1.8, flexGrow: 1, fontStyle: "italic" }}>
                  “{t.quote}”
                </Typography>
                <Box sx={{ pt: 1, borderTop: "1px solid #F1F5F9" }}>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: "0.9rem" }}>{t.role}</Typography>
                  <Typography variant="caption" sx={{ color: "#64748B" }}>{t.company}</Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
