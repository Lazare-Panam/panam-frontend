import { useState, type ChangeEvent } from "react";
import { 
  Box, Typography, Container, TextField, Button, Paper, Stack, 
  Checkbox, FormControlLabel, Link, CircularProgress
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Using Grid2 as requested
import TermsModal from "./AccessTerms";
import { useNotificationStore } from "../../store/useNotficationStore";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export const RegistrationSection = () => {
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Zustand Store
  const showNotification = useNotificationStore(state => state.showNotification);

  // Unified Form State (Added companyName)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "", 
    password: "",
    confirmPassword: "",
    enquiry: "",
    agreed: false
  });

  const handleToggleTerms = () => setIsTermsOpen((prev) => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const handleSubmit = async () => {
    // 1. Client-side Validation
    if (formData.password !== formData.confirmPassword) {
      showNotification({ message: "Passwords do not match.", severity: "warning" });
      return;
    }

    if (!formData.email.includes("@")) {
      showNotification({ message: "Please enter a valid corporate email.", severity: "warning" });
      return;
    }

    setLoading(true);

    try {
      // 2. Call API Service
      

      // 3. Success Feedback
      showNotification({ 
        message: "Request submitted! Our team will review your application within 24 hours.", 
        severity: "success" 
      });

      // 4. Reset Form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        password: "",
        confirmPassword: "",
        enquiry: "",
        agreed: false
      });

    } catch (error: any) {
      // 5. Error Feedback
      const errorMsg = error.response?.data?.message || "Registration failed. Please try again later.";
      showNotification({ message: errorMsg, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

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
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Submit your details below. Our team reviews all applications manually to maintain a secure professional network.
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField 
                    fullWidth label="First Name" name="firstName" 
                    value={formData.firstName} onChange={handleInputChange} 
                  />
                  <TextField 
                    fullWidth label="Last Name" name="lastName" 
                    value={formData.lastName} onChange={handleInputChange} 
                  />
                </Stack>

                <TextField 
                  fullWidth label="Corporate Email" name="email" type="email"
                  value={formData.email} onChange={handleInputChange} 
                />
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField 
                    fullWidth label="Company Name" name="companyName" 
                    value={formData.companyName} onChange={handleInputChange} 
                    />
                    <TextField 
                    fullWidth label="Phone Number" name="phone" 
                    value={formData.phone} onChange={handleInputChange} 
                    />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField 
                    fullWidth label="Password" type="password" name="password" 
                    value={formData.password} onChange={handleInputChange} 
                  />
                  <TextField 
                    fullWidth label="Confirm Password" type="password" name="confirmPassword" 
                    value={formData.confirmPassword} onChange={handleInputChange} 
                  />
                </Stack>

                <TextField 
                  fullWidth 
                  label="Project/Enquiry Details" 
                  name="enquiry"
                  multiline 
                  rows={3} 
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  placeholder="Tell us a bit about your current project or requirements..."
                />

                <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={formData.agreed}
                        onChange={handleCheckboxChange}
                        sx={{ '&.Mui-checked': { color: BRAND_BLUE } }} 
                      />
                    } 
                    label={
                      <Typography variant="body2">
                        I agree to the 
                        <Link 
                          component="button"
                          type="button"
                          onClick={handleToggleTerms}
                          sx={{ ml: 0.5, color: BRAND_BLUE, cursor: 'pointer', verticalAlign: 'baseline', textDecoration: 'none', fontWeight: 600 }}
                        >
                          Access Terms
                        </Link>
                      </Typography>
                    } 
                  />
                  <Link href="/login" sx={{ color: BRAND_BLUE, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Existing Partner?
                  </Link>
                </Stack>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  disabled={!formData.agreed || loading}
                  sx={{
                    bgcolor: BRAND_BLUE,
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: 700,
                    boxShadow: 'none',
                    fontFamily: PRIMARY_FONT,
                    '&:hover': { bgcolor: '#0090c5', boxShadow: 'none' },
                    '&.Mui-disabled': { bgcolor: '#bae6f7', color: 'white' }
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Access Request"}
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
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 800, mb: 2 }}>
                Verified <span style={{ color: BRAND_BLUE }}>Industrial Network.</span>
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>
                We manually verify all accounts to ensure our technical assets and CAD data remain secure for our professional partners.
              </Typography>
            </Grid>

          </Grid>
        </Paper>
      </Container>

      <TermsModal 
        open={isTermsOpen} 
        onClose={handleToggleTerms} 
      />
    </Box>
  );
};