import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link as MuiLink, Stack, Autocomplete, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid"; // Note: MUI recommends Grid2 for newer versions
import { Link as RouterLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRegisterForm, countries } from "../hooks/useRegisterForm";
import TermsModal from "../../Auth/Enquiry/AccessTerms";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const TEXT_MAIN = "#1a1a1a";
const TEXT_SECONDARY = "#555555";
const BRAND_BLUE = "#01B0F0";
const BRAND_BLUE_LIGHT = "#E6F7FE";
const BRAND_BLUE_DARK = "#0088BA";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: BRAND_BLUE_LIGHT,
    borderRadius: 0,
    "& fieldset": { borderColor: "transparent" },
    "&.Mui-error fieldset": { borderColor: "#d32f2f" },
  },
  "& .MuiFormHelperText-root": { fontFamily: PRIMARY_FONT, fontWeight: 600, ml: 0 },
};

const RegisterForm: React.FC = () => {
  
  const {
    formData,
    loading,
    emailError,
    passwordError,
    selectedCountry,
    setSelectedCountry,
    handleChange,
    handleRegister,
  } = useRegisterForm();
const [termsOpen, setTermsOpen] = useState(false);
  return (
    <Box sx={{ flex: 1.5, backgroundColor: "#fff", p: { xs: 3, md: 8 }, display: "flex", justifyContent: "center", position: "relative" }}>
      {loading && (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, bgcolor: "rgba(255,255,255,0.8)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
          <Typography sx={{ fontFamily: PRIMARY_FONT, fontWeight: 600, color: TEXT_MAIN }}>Wait a few seconds, don't refresh...</Typography>
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "900px" }}>
        <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" }, textAlign: "center" }}>
          Register
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 6, textAlign: "center" }}>
          Create your Panam Valves account to access our collaborative engineering tools.
        </Typography>

        <Box component="form" onSubmit={handleRegister} noValidate>
          <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: TEXT_MAIN, letterSpacing: "0.05em" }}>
            USER ID / EMAIL ADDRESS
          </Typography>
          <TextField
            fullWidth required name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@company.com"
            error={Boolean(emailError)}
            helperText={emailError}
            sx={{ ...fieldSx, mb: 5 }}
          />

          <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 2, color: TEXT_MAIN }}>PERSONAL INFORMATION</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} sx={fieldSx} />
            </Grid>
          </Grid>

          <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 2, color: TEXT_MAIN }}>BUSINESS INFORMATION</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="companyName" label="Company Name" value={formData.companyName} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="jobTitle" label="Job Title" value={formData.jobTitle} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Stack direction="row">
                <Autocomplete
                  options={countries}
                  getOptionLabel={o => `+${o.phone}`}
                  value={selectedCountry}
                  onChange={(_, val) => val && setSelectedCountry(val)}
                  disableClearable
                  sx={{ width: 140, "& .MuiOutlinedInput-root": { borderRadius: 0, backgroundColor: BRAND_BLUE_LIGHT, "& fieldset": { borderRight: "1px solid rgba(0,0,0,0.1)", borderColor: "transparent" } } }}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ fontSize: "0.85rem" }} {...props}>
                      <img loading="lazy" width="18" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" style={{ marginRight: 8 }} />
                      {option.label} (+{option.phone})
                    </Box>
                  )}
                  renderInput={params => <TextField {...params} label="Code" />}
                />
                <TextField fullWidth required name="phoneNumber" label="Phone Number" value={formData.phoneNumber} onChange={handleChange} sx={fieldSx} />
              </Stack>
            </Grid>
          </Grid>

          <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 2, color: TEXT_MAIN }}>ACCOUNT SECURITY</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="password" type="password" label="Password" value={formData.password} onChange={handleChange} error={Boolean(passwordError)} helperText={passwordError} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="confirmPassword" type="password" label="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={Boolean(passwordError)} sx={fieldSx} />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", gap: 3, mt: 6 }}>
            <Button component={RouterLink} to="/login" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE, borderRadius: 0, px: 8, py: 2, fontWeight: 700, "&:hover": { backgroundColor: BRAND_BLUE_LIGHT } }}>CANCEL</Button>
            <Button type="submit" variant="contained" disabled={loading} endIcon={!loading && <ChevronRightIcon />} sx={{ backgroundColor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 8, py: 2, fontWeight: 700, boxShadow: "none", "&:hover": { backgroundColor: BRAND_BLUE_DARK } }}>
              {loading ? "CREATING..." : "CREATE ACCOUNT"}
            </Button>
          </Box>

          <Typography variant="caption" sx={{ display: "block", mt: 6, color: TEXT_SECONDARY, fontStyle: "italic", textAlign: "center" }}>
            By submitting, I agree to Panam Valves'{" "}
            <MuiLink 
              component="button" 
              type="button" 
              onClick={() => setTermsOpen(true)}
              sx={{ color: BRAND_BLUE, fontWeight: 600, cursor: 'pointer', verticalAlign: 'baseline', textDecoration: 'underline' }}
            >
              Terms of Use
            </MuiLink>{" "}
            and Privacy Notice.
          </Typography>
        </Box>
      </Box>
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </Box>
  );
};

export default RegisterForm;