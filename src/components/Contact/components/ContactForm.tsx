import { Box, Container, TextField, Button, Typography, Stack } from "@mui/material"
import Grid from "@mui/material/Grid" // Note: MUI recommends Grid2 for the latest builds
import { useState } from "react"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const queryTypes = ["Existing Order", "Component Search", "Technical Support", "General Inquiry"]

const ContactForm = () => {
  const [selectedQuery, setSelectedQuery] = useState("General Inquiry")

  return (
    <Box sx={{ width: "100%", py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="xl">
        {/* ACTION BUTTONS (TOP) */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5, mb: 2 }}>
            WHAT IS YOUR QUERY REGARDING?
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap>
            {queryTypes.map(type => (
              <Button
                key={type}
                onClick={() => setSelectedQuery(type)}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "0px",
                  border: `2px solid ${selectedQuery === type ? BRAND_BLUE : "#e0e0e0"}`,
                  color: selectedQuery === type ? "white" : "#666",
                  bgcolor: selectedQuery === type ? BRAND_BLUE : "transparent",
                  fontWeight: 700,
                  fontFamily: PRIMARY_FONT,
                  "&:hover": {
                    bgcolor: selectedQuery === type ? BRAND_BLUE : "rgba(1, 176, 240, 0.05)",
                    borderColor: BRAND_BLUE,
                  },
                }}>
                {type}
              </Button>
            ))}
          </Stack>
        </Box>

        <Grid container spacing={0} sx={{ border: "1px solid #e0e0e0", overflow: "hidden", boxShadow: "0px 20px 40px rgba(0,0,0,0.05)" }}>
          {/* LEFT SIDE: FORM */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: "#ffffff", p: { xs: 4, md: 8 } }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, mb: 2 }}>
                Contact Form
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", fontFamily: PRIMARY_FONT }}>
                Fill in the details below and our team in Bicester will get back to you shortly.
              </Typography>
            </Box>

            <Box component="form" noValidate>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Full Name" variant="standard" required />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email Address" variant="standard" required />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label={selectedQuery === "Existing Order" ? "Order Number" : "Company Name"} variant="standard" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Message" placeholder={`Tell us more about your ${selectedQuery.toLowerCase()}...`} multiline rows={4} variant="standard" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 4,
                      px: 6,
                      py: 1.5,
                      bgcolor: BRAND_BLUE,
                      fontWeight: 800,
                      fontFamily: PRIMARY_FONT,
                      borderRadius: "0px",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#009bd1", boxShadow: "none" },
                    }}>
                    Send Request
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* RIGHT SIDE: PERCH COWORKING MAP */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: { xs: "400px", md: "auto" } }}>
            <Box sx={{ width: "100%", height: "100%", lineHeight: 0, position: "relative" }}>
              {/* Note: In production, use the actual Embed URL from Google Maps for Perch Coworking, Bicester */}
              <iframe title="Panam UK Location" width="100%" height="100%" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.672403623049!2d-1.1554566!3d51.899757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e9389e02377b%3A0x89796e6d5952e399!2sPerch%20Coworking!5e0!3m2!1sen!2suk!4v1700000000000" allowFullScreen></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactForm
