import { Box, Typography, Container, TextField, Button, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export const RegistrationSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ borderRadius: 4, overflow: "hidden", border: "1px solid #eee" }}>
          <Grid container>
            {/* Left Side: Image/Branding */}
            <Grid size={{ xs: 12, md: 6 }} sx={{
              backgroundColor: "#1a1a1a",
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: 'white',
              backgroundImage: 'linear-gradient(rgba(1, 176, 240, 0.1), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80")',
              backgroundSize: 'cover'
            }}>
              <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 800, mb: 2 }}>
                You have to login to send qnuiry<span style={{ color: BRAND_BLUE }}>Network Now.</span>
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '400px' }}>
                Access our full technical catalog, CAD drawings, and real-time project tracking.
              </Typography>
            </Grid>

            {/* Right Side: Form */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: 'white' }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700 }}>Create Account</Typography>
                  <Typography variant="body2" color="text.secondary">Start your industrial partnership today.</Typography>
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Stack>
                <TextField fullWidth label="Corporate Email" variant="outlined" />
                <TextField fullWidth label="Password" type="password" variant="outlined" />
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: BRAND_BLUE,
                    py: 1.5,
                    fontWeight: 700,
                    fontFamily: PRIMARY_FONT,
                    '&:hover': { bgcolor: '#0090c5' }
                  }}
                >
                  Create Account
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};