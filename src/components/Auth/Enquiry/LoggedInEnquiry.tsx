import { useState, useRef } from "react";
import { 
  Box, Typography, Container, TextField, Button, Paper, Stack, CircularProgress, IconButton 
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Using modern Grid2
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useUserStore } from "../../store/useUserStore";
import { useNotificationStore } from "../../store/useNotficationStore";
import { submitAuthenticatedEnquiry } from "../../../api/authApi";
import { useFormStartTracking } from "../../Common/useFormStartTracking";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

export const LoggedInEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const trackFormStart = useFormStartTracking("enquiry-logged-in");

  // User details from Zustand store
  const { firstName, lastName, companyName, email, phoneNumber } = useUserStore();
  const showNotification = useNotificationStore(state => state.showNotification);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // 10MB Validation
      if (file.size > 10 * 1024 * 1024) {
        showNotification({ message: "File size exceeds the 10MB limit.", severity: "error" });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!message.trim()) {
      showNotification({ message: "Please enter your enquiry details.", severity: "warning" });
      return;
    }

    setLoading(true);
    try {
      // API call now accepts (string, File | undefined)
      await submitAuthenticatedEnquiry(message, selectedFile || undefined);

      showNotification({
        message: "Technical enquiry submitted! Our engineering team has been notified.",
        severity: "success",
      });

      // Reset form on success
      setMessage("");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Submission failed. Please check your connection.";
      showNotification({ message: errorMsg, severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  const readOnlyInputProps = {
    readOnly: true,
    sx: {
      pointerEvents: "none",
      bgcolor: "#f8f9fa",
      borderRadius: 0,
      fontFamily: PRIMARY_FONT,
      "& .MuiOutlinedInput-notchedOutline": { borderRadius: 0, border: "1px solid #eee" },
    },
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 0, overflow: "hidden" }}>
          <Grid container>
            
            {/* Left Side: Form Logic */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: "white" }} onFocusCapture={trackFormStart}>
              <Stack spacing={3}>
                <Box>
                  <Typography component="h1" variant="h5" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700 }}>
                    Technical Enquiry Form
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Verified Partner: <span style={{ color: BRAND_BLUE, fontWeight: 700 }}>{companyName}</span>
                  </Typography>
                </Box>

                {/* Read-Only User Information Section */}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="First Name" value={firstName} InputProps={readOnlyInputProps} variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Last Name" value={lastName} InputProps={readOnlyInputProps} variant="outlined" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="Corporate Email" value={email} InputProps={readOnlyInputProps} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Company" value={companyName} InputProps={readOnlyInputProps} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Phone" value={phoneNumber || "Not Provided"} InputProps={readOnlyInputProps} />
                  </Grid>
                </Grid>

                {/* Enquiry Message */}
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Enquiry / Project Specifications"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Describe your valve requirements, material specs, or CAD data needs..."
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: 0 },
                    "& .MuiInputLabel-root.Mui-focused": { color: BRAND_BLUE },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: BRAND_BLUE },
                  }}
                />

                {/* File Upload Section */}
                <Box
                  sx={{
                    border: "1px dashed #ccc",
                    p: 2.5,
                    textAlign: "center",
                    bgcolor: "#fafafa",
                    borderRadius: 0,
                    transition: "all 0.2s",
                    "&:hover": { borderColor: BRAND_BLUE, bgcolor: "#f0fbff" },
                  }}>
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
                        fontWeight: 600
                      }}
                    >
                      Attach Technical Drawing / Specs (Max 10MB)
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
                        }}>
                        <CloseIcon fontSize="small" sx={{ color: '#d32f2f' }} />
                      </IconButton>
                    </Stack>
                  )}
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{
                    bgcolor: BRAND_BLUE,
                    py: 2,
                    borderRadius: 0,
                    fontWeight: 700,
                    boxShadow: "none",
                    fontFamily: PRIMARY_FONT,
                    transition: "all 0.2s",
                    "&:hover": { bgcolor: "#0090c5", boxShadow: "none", transform: "translateY(-1px)" },
                    "&.Mui-disabled": { bgcolor: "#bae6f7", color: "white" },
                  }}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : "SUBMIT TECHNICAL REQUEST"}
                </Button>
              </Stack>
            </Grid>

            {/* Right Side: Engineering Info Branding */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                backgroundColor: "#1a1a1a",
                p: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <Typography variant="h4" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 800, mb: 2 }}>
                Engineering <span style={{ color: BRAND_BLUE }}>Support.</span>
              </Typography>
              <Typography sx={{ opacity: 0.8, fontSize: "1rem", lineHeight: 1.7, maxWidth: "400px", fontFamily: PRIMARY_FONT }}>
                Submitting this form creates a high-priority ticket for our flow-control specialists.
                <br /><br />
                Our engineers will analyze your specifications and provide technical drawings or documentation within 24 business hours.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};