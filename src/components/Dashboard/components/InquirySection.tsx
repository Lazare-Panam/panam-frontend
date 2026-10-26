import { Box, Typography, Container, Stack, TextField, Button } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

export const InquirySection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: "#111", color: "white" }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontWeight: 800 }}>
            Technical Support
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 800 }}>
            Submit a Project Inquiry
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px" }}>
            Need custom flow control specifications? Our technical team is ready to assist with your specific hydrogen or traditional energy requirements.
          </Typography>
        </Stack>

        <Box
          component="form"
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Company Name"
                variant="filled"
                sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 1 }}
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                inputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Project Type (e.g. Hydrogen, LNG)"
                variant="filled"
                sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 1 }}
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                inputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Project Details & Specifications"
                variant="filled"
                sx={{ bgcolor: "rgba(255,255,255,0.05)", borderRadius: 1 }}
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                inputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: BRAND_BLUE,
                  color: BRAND_BLUE,
                  px: 6,
                  py: 1.5,
                  fontWeight: 700,
                  "&:hover": { borderColor: "white", color: "white" },
                }}>
                Send Technical Inquiry
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}