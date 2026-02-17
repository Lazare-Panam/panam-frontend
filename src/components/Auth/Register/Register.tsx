import { useState } from "react";
import { 
  Box, Typography, Container, TextField, Button, Paper, Stack, 
  Checkbox, FormControlLabel, Link, Dialog, DialogTitle, 
  DialogContent, DialogActions 
} from "@mui/material";
import Grid from "@mui/material/Grid";


const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export const RegistrationSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ borderRadius: 0, overflow: "hidden", border: "1px solid #eee" }}>
          <Grid container>
            
            {/* Left Side: Form */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: 'white' }}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700 }}>
                    Request Portal Access
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Submit your details below. Our team reviews all applications within 24 hours to maintain a secure professional network.
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Stack>

                <TextField fullWidth label="Corporate Email" variant="outlined" />
                <TextField fullWidth label="Phone Number" variant="outlined" />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="Password" type="password" variant="outlined" />
                  <TextField fullWidth label="Confirm Password" type="password" variant="outlined" />
                </Stack>

                <TextField 
                  fullWidth 
                  label="Project/Enquiry Details" 
                  variant="outlined" 
                  multiline 
                  rows={3} 
                  placeholder="Tell us a bit about your current project..."
                />

                <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                  <FormControlLabel 
                    control={<Checkbox sx={{ '&.Mui-checked': { color: BRAND_BLUE } }} />} 
                    label={
                      <Typography variant="body2">
                        I agree to the 
                        <Link 
                          component="button"
                          onClick={handleOpen}
                          sx={{ ml: 0.5, color: BRAND_BLUE, cursor: 'pointer', verticalAlign: 'baseline' }}
                        >
                          Access Terms
                        </Link>
                      </Typography>
                    } 
                  />
                  <Link href="#" sx={{ color: BRAND_BLUE, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Existing Partner?
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: BRAND_BLUE,
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#0090c5' }
                  }}
                >
                  Submit Access Request
                </Button>
              </Stack>
            </Grid>

            {/* Right Side: Image/Branding */}
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
                Verified <span style={{ color: BRAND_BLUE }}>Industrial Network.</span>
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '400px' }}>
                We manually verify all accounts to ensure our technical assets and CAD data remain secure for our professional partners.
              </Typography>
            </Grid>

          </Grid>
        </Paper>
      </Container>

      {/* --- Updated Terms Modal --- */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>Portal Access Terms</DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
            1. Manual Verification
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            To prevent unauthorized access and minimize spam, all registration requests are subject to manual approval by our administration team.
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
            2. Professional Use Only
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Account access is granted exclusively to corporate partners. Please use a valid company email address to expedite the verification process.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} variant="contained" sx={{ borderRadius: 0, bgcolor: BRAND_BLUE }}>
            I Understand
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};