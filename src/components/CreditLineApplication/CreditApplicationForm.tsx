import React, { useState } from "react";
import { Box, Typography, TextField, Button, CircularProgress, Alert, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useCreditApplicationForm } from "./useCreditApplicationForm";
import { SUPPORTED_CURRENCIES } from "../../api/creditApi";

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

const sectionTitleSx = {
  fontFamily: PRIMARY_FONT,
  fontWeight: 700,
  mb: 2,
  color: TEXT_MAIN,
  letterSpacing: "0.05em",
};

interface CreditApplicationFormProps {
  onSuccess?: () => void;
}

const CreditApplicationForm: React.FC<CreditApplicationFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const { formData, loading, errors, error, handleChange, handleSubmit } =
    useCreditApplicationForm(() => {
      setSubmitted(true);
      onSuccess?.();
    });

  if (submitted) {
    return (
      <Box sx={{ flex: 1.5, backgroundColor: "#fff", p: { xs: 3, md: 8 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2 }}>
          Application Received
        </Typography>
        <Typography sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY }}>
          Thank you for submitting your credit line application. Our team will review it and get back to you shortly.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1.5, backgroundColor: "#fff", p: { xs: 3, md: 8 }, display: "flex", justifyContent: "center", position: "relative" }}>
      {loading && (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, bgcolor: "rgba(255,255,255,0.8)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
          <Typography sx={{ fontFamily: PRIMARY_FONT, fontWeight: 600, color: TEXT_MAIN }}>Submitting your application, don't refresh...</Typography>
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "900px" }}>
        <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" }, textAlign: "center" }}>
          Credit Line Application
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 6, textAlign: "center" }}>
          Complete this short form so we can assess your credit facility. Treated in strict confidence.
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 4, fontFamily: PRIMARY_FONT }}>{error}</Alert>}

        <Box component="form" id="credit-application" name="credit-application" onSubmit={handleSubmit} noValidate>
          {/* 1. Company Details */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>COMPANY DETAILS</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth required name="companyName" label="Company / Trading Name" value={formData.companyName} onChange={handleChange} error={Boolean(errors.companyName)} helperText={errors.companyName} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="registrationNumber" label="Company Registration Number" value={formData.registrationNumber} onChange={handleChange} error={Boolean(errors.registrationNumber)} helperText={errors.registrationNumber} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="vatNumber" label="VAT Number" value={formData.vatNumber} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="addressLine1" label="Registered Address (Line 1)" value={formData.addressLine1} onChange={handleChange} error={Boolean(errors.addressLine1)} helperText={errors.addressLine1} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="addressLine2" label="Address Line 2, City, Postcode" value={formData.addressLine2} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="website" label="Website" value={formData.website} onChange={handleChange} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="sector" label="Industry / Sector" value={formData.sector} onChange={handleChange} error={Boolean(errors.sector)} helperText={errors.sector} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="yearsInBusiness" label="Years in Business" value={formData.yearsInBusiness} onChange={handleChange} error={Boolean(errors.yearsInBusiness)} helperText={errors.yearsInBusiness} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="employees" label="Number of Employees" value={formData.employees} onChange={handleChange} sx={fieldSx} />
            </Grid>
          </Grid>

          {/* 2. Primary Contact */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>PRIMARY CONTACT</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="contactName" label="Full Name" value={formData.contactName} onChange={handleChange} error={Boolean(errors.contactName)} helperText={errors.contactName} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="jobTitle" label="Job Title" value={formData.jobTitle} onChange={handleChange} error={Boolean(errors.jobTitle)} helperText={errors.jobTitle} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth required name="email" label="Email Address" type="email"
                value={formData.email} onChange={handleChange}
                error={Boolean(errors.email)} helperText={errors.email} sx={fieldSx}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="phone" label="Phone Number" value={formData.phone} onChange={handleChange} error={Boolean(errors.phone)} helperText={errors.phone} sx={fieldSx} />
            </Grid>
          </Grid>

          {/* 3. Credit Request */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>CREDIT REQUEST</Typography>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField select fullWidth required name="currency" label="Currency" value={formData.currency} onChange={handleChange} error={Boolean(errors.currency)} helperText={errors.currency} sx={fieldSx}>
                {SUPPORTED_CURRENCIES.map(code => (
                  <MenuItem key={code} value={code}>{code}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="creditLimitRequested" label={`Credit Limit Requested (${formData.currency})`} type="number" value={formData.creditLimitRequested || ""} onChange={handleChange} error={Boolean(errors.creditLimitRequested)} helperText={errors.creditLimitRequested} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="paymentTerms" label="Preferred Payment Terms" placeholder="e.g. 30 days net" value={formData.paymentTerms} onChange={handleChange} error={Boolean(errors.paymentTerms)} helperText={errors.paymentTerms} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="monthlyOrderValue" label={`Estimated Monthly Order Value (${formData.currency})`} type="number" value={formData.monthlyOrderValue || ""} onChange={handleChange} error={Boolean(errors.monthlyOrderValue)} helperText={errors.monthlyOrderValue} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name="products" label="Primary Products to Purchase" placeholder="e.g. Needle valves, tube fittings" value={formData.products} onChange={handleChange} sx={fieldSx} />
            </Grid>
          </Grid>

          {/* 4. Declaration & Signature */}
          <Typography variant="subtitle2" sx={sectionTitleSx}>DECLARATION & SIGNATURE</Typography>
          <Box sx={{ backgroundColor: BRAND_BLUE_LIGHT, border: `1px solid ${BRAND_BLUE}`, p: 3, mb: 3 }}>
            <Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, color: TEXT_MAIN, mb: 1 }}>
              By signing below, I confirm that:
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_MAIN }} component="ul">
              <li>The information provided is accurate and complete to the best of my knowledge.</li>
              <li>I authorise Panam Valves Ltd to contact the trade references provided for verification.</li>
              <li>I understand Panam Valves Ltd reserves the right to approve, decline or amend the credit facility.</li>
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="signatoryName" label="Authorised Signatory (Full Name)" value={formData.signatoryName} onChange={handleChange} error={Boolean(errors.signatoryName)} helperText={errors.signatoryName} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="signatoryTitle" label="Position / Title" value={formData.signatoryTitle} onChange={handleChange} error={Boolean(errors.signatoryTitle)} helperText={errors.signatoryTitle} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="signature" label="Signature (type full name)" value={formData.signature} onChange={handleChange} error={Boolean(errors.signature)} helperText={errors.signature} sx={fieldSx} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth required name="declarationDate" label="Date" type="date" InputLabelProps={{ shrink: true }} value={formData.declarationDate} onChange={handleChange} error={Boolean(errors.declarationDate)} helperText={errors.declarationDate} sx={fieldSx} />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button type="submit" variant="contained" disabled={loading} endIcon={!loading && <ChevronRightIcon />} sx={{ backgroundColor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 8, py: 2, fontWeight: 700, boxShadow: "none", "&:hover": { backgroundColor: BRAND_BLUE_DARK } }}>
              {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreditApplicationForm;