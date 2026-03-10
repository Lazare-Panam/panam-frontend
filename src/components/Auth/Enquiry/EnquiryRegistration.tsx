import { useState, useRef, type ChangeEvent } from "react";
import { 
  Box, Typography, Container, TextField, Button, Paper, Stack, 
  Checkbox, FormControlLabel, Link, CircularProgress, Autocomplete, IconButton 
} from "@mui/material";
import Grid from "@mui/material/Grid"; 
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TermsModal from "./AccessTerms";
import { useNotificationStore } from "../../store/useNotficationStore";
import { registerWithEnquiry } from "../../../api/authApi";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const countries = [
  { code: "US", label: "United States", phone: "1" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  { code: "AE", label: "UAE", phone: "971" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "DE", label: "Germany", phone: "49" },
  { code: "FR", label: "France", phone: "33" },
  { code: "CA", label: "Canada", phone: "1" },
  { code: "AU", label: "Australia", phone: "61" },
];

export const EnquiryRegistration = () => {
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[1]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showNotification = useNotificationStore(state => state.showNotification);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    jobTitle: "",
    password: "",
    confirmPassword: "",
    enquiry: "",
    agreed: false,
  });

  const handleToggleTerms = () => setIsTermsOpen((prev) => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        showNotification({ message: "File size exceeds the 10MB limit.", severity: "error" });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
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
      await registerWithEnquiry(
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          companyName: formData.companyName,
          phoneNumber: `+${selectedCountry.phone}${formData.phone}`,
          enquiryMessage: formData.enquiry,
          jobTitle: formData.jobTitle || "Technical Partner",
          country: selectedCountry.label,
        },
        selectedFile || undefined  // ✅ pass the file here
      );

      showNotification({ 
        message: "Enquiry submitted successfully! Our engineers will review your account.", 
        severity: "success" 
      });

      setFormData({
        firstName: "", lastName: "", email: "", phone: "", 
        companyName: "", jobTitle: "", password: "", 
        confirmPassword: "", enquiry: "", agreed: false
      });
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Registration failed.";
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
                  <Typography variant="h5" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Technical Enquiry & Partner Onboarding
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
                    Submit your project specifications below. Our engineers will review your enquiry and verify your account within 24 hours.
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                </Stack>

                <TextField fullWidth label="Corporate Email" name="email" type="email" value={formData.email} onChange={handleInputChange} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="Company Name" name="companyName" value={formData.companyName} onChange={handleInputChange} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  <TextField fullWidth label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                </Stack>

                <Stack direction="row" spacing={0}>
                  <Autocomplete
                    options={countries}
                    autoHighlight
                    getOptionLabel={option => `+${option.phone}`}
                    value={selectedCountry}
                    onChange={(_, newValue: any) => newValue && setSelectedCountry(newValue)}
                    disableClearable
                    sx={{ 
                        width: 140, 
                        "& .MuiOutlinedInput-root": { 
                            borderRadius: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        } 
                    }}
                    renderOption={(props, option) => (
                      <Box component="li" sx={{ fontSize: "0.85rem", "& > img": { mr: 1, flexShrink: 0 } }} {...props}>
                        <img loading="lazy" width="18" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" />
                        {option.label} (+{option.phone})
                      </Box>
                    )}
                    renderInput={params => <TextField {...params} label="Code" />}
                  />
                  <TextField 
                    fullWidth required
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    sx={{ 
                        "& .MuiOutlinedInput-root": { 
                            borderRadius: 0, 
                            borderTopLeftRadius: 0, 
                            borderBottomLeftRadius: 0,
                            marginLeft: "-1px"
                        } 
                    }} 
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField fullWidth label="Password" type="password" name="password" value={formData.password} onChange={handleInputChange} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                  <TextField fullWidth label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
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
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                />

                {/* ✅ File Upload Section */}
                <Box
                  sx={{
                    border: "1px dashed #ccc",
                    p: 2.5,
                    textAlign: "center",
                    bgcolor: "#fafafa",
                    borderRadius: 0,
                    transition: "all 0.2s",
                    "&:hover": { borderColor: BRAND_BLUE, bgcolor: "#f0fbff" },
                  }}
                >
                  <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.dwg,.zip,.docx"
                  />

                  {!selectedFile ? (
                    <Button
                      startIcon={<CloudUploadIcon />}
                      onClick={() => fileInputRef.current?.click()}
                      sx={{
                        color: "#555",
                        textTransform: "none",
                        fontFamily: PRIMARY_FONT,
                        fontWeight: 600,
                      }}
                    >
                      Attach Technical Drawing / Specs (Optional — Max 10MB)
                    </Button>
                  ) : (
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                      <AttachFileIcon sx={{ color: BRAND_BLUE, fontSize: 20 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                        {selectedFile.name}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                      >
                        <CloseIcon fontSize="small" sx={{ color: "#d32f2f" }} />
                      </IconButton>
                    </Stack>
                  )}
                </Box>

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
                          component="button" type="button" onClick={handleToggleTerms}
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
                  fullWidth variant="contained" size="large" onClick={handleSubmit}
                  disabled={!formData.agreed || loading}
                  sx={{
                    bgcolor: BRAND_BLUE, py: 1.5, borderRadius: 0, fontWeight: 700, boxShadow: 'none',
                    fontFamily: PRIMARY_FONT, '&:hover': { bgcolor: '#0090c5' },
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

      <TermsModal open={isTermsOpen} onClose={handleToggleTerms} />
    </Box>
  );
};