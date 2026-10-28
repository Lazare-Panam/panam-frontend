import React, { useState } from "react"
import { Box, Typography, TextField, Button, Link as MuiLink, Stack, Autocomplete, CircularProgress, InputAdornment, IconButton, Container, Grid } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import { useRegisterForm, countries } from "../hooks/useRegisterForm"
import TermsModal from "../../Auth/Enquiry/AccessTerms"
import { Field, FormSection } from "../../Auth/Enquiry/enquiryUi"
import { inputSx } from "../../Auth/Enquiry/enquiryTokens"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, FONT, GRADIENT, btn } from "../../Landing2/homeTokens"
import { primaryButtonSx } from "./authStyles"

const BENEFITS = ["Expedited procurement and order tracking", "Full access to technical data sheets and CAD files", "Direct connection to our global network of experts", "Historical quote and project management tools"]

const PasswordToggle = ({ shown, onToggle }: { shown: boolean; onToggle: () => void }) => (
  <InputAdornment position="end">
    <IconButton aria-label={shown ? "Hide password" : "Show password"} onClick={onToggle} edge="end" sx={{ color: C.muted }}>
      {shown ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
    </IconButton>
  </InputAdornment>
)

// Same split-card shell as the sign-in page: brand-blue context panel beside the form (form first on phones).
const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { formData, loading, emailError, passwordError, selectedCountry, setSelectedCountry, handleChange, handleRegister } = useRegisterForm()
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <Box component="section" sx={{ background: GRADIENT.heroBg, py: { xs: 4, md: 8 }, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: C.white, borderRadius: "24px", border: `1px solid ${C.border}`, boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(15,34,54,0.10)", overflow: "hidden" }}>
          <Grid container>
            {/* Context panel */}
            <Grid
              size={{ xs: 12, md: 4.5 }}
              order={{ xs: 2, md: 1 }}
              sx={{
                position: "relative",
                overflow: "hidden",
                color: C.white,
                p: { xs: 3, sm: 5 },
                display: "flex",
                flexDirection: "column",
                background: `linear-gradient(160deg, ${C.brand} 0%, ${C.brandDark} 45%, ${C.brandDeep} 100%)`,
                "&::before": { content: '""', position: "absolute", width: 260, height: 260, borderRadius: "50%", top: -130, right: -100, border: "36px solid rgba(255,255,255,0.06)" },
                "&::after": { content: '""', position: "absolute", width: 320, height: 320, borderRadius: "50%", bottom: -190, left: -120, border: "40px solid rgba(255,255,255,0.06)" },
              }}>
              <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>Why create an account</Typography>
                <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
                  Your engineering hub with Panam
                </Typography>

                <Stack spacing={1.5} sx={{ mt: 3.5 }}>
                  {BENEFITS.map(text => (
                    <Stack key={text} direction="row" alignItems="flex-start" sx={{ gap: 1.5 }}>
                      <Box sx={{ width: 22, height: 22, flex: "none", mt: "1px", borderRadius: "50%", bgcolor: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center" }}>
                        <CheckRoundedIcon sx={{ fontSize: 15 }} />
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.5, opacity: 0.95 }}>{text}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.5} sx={{ mt: 4, p: 2, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <BusinessCenterOutlinedIcon sx={{ fontSize: 22, flex: "none", mt: "1px" }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.9rem" }}>Official Business Email Required</Typography>
                    <Typography sx={{ mt: 0.5, fontSize: "0.84rem", lineHeight: 1.55, opacity: 0.88 }}>For security and verification, generic email providers are not accepted for corporate accounts.</Typography>
                  </Box>
                </Stack>

                <Box sx={{ mt: "auto", pt: 4 }}>
                  <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.2)", pt: 3 }}>
                    <Typography sx={{ fontSize: "0.9rem", opacity: 0.9 }}>Already have an account?</Typography>
                    <Button component={RouterLink} to="/login" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.onDark, mt: 1.5, borderRadius: "12px" }}>
                      Sign in
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Form */}
            <Grid size={{ xs: 12, md: 7.5 }} order={{ xs: 1, md: 2 }} sx={{ p: { xs: 3, sm: 5 } }}>
              <Eyebrow>New customer</Eyebrow>
              <Typography component="h1" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: { xs: "2.1rem", md: "2.6rem" } }}>
                Register
              </Typography>
              <Typography sx={{ mt: 1.25, mb: 4, color: C.muted, fontSize: "1.02rem", lineHeight: 1.6 }}>Create your Panam Valves account to access our collaborative engineering tools.</Typography>

              <Box component="form" id="account-register" name="account-register" onSubmit={handleRegister} noValidate>
                <Stack spacing={4}>
                  <FormSection step="01" title="Account">
                    <Field required label="User ID / Email address" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="email@company.com" icon={<MailOutlineRoundedIcon />} error={Boolean(emailError)} helperText={emailError} />
                  </FormSection>

                  <FormSection step="02" title="Personal information">
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Field required label="First name" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} placeholder="Jane" icon={<PersonOutlineRoundedIcon />} />
                      <Field required label="Last name" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} placeholder="Smith" icon={<PersonOutlineRoundedIcon />} />
                    </Stack>
                  </FormSection>

                  <FormSection step="03" title="Business information">
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Field required label="Company name" name="companyName" autoComplete="organization" value={formData.companyName} onChange={handleChange} placeholder="Company name" icon={<BusinessOutlinedIcon />} />
                      <Field required label="Job title" name="jobTitle" autoComplete="organization-title" value={formData.jobTitle} onChange={handleChange} placeholder="e.g. Instrument Engineer" icon={<BadgeOutlinedIcon />} />
                    </Stack>
                    <Box>
                      <Typography component="label" htmlFor="register-phone" sx={{ display: "block", mb: 0.75, fontSize: "0.85rem", fontWeight: 600, color: C.ink }}>
                        Phone number
                        <Box component="span" sx={{ color: C.brand, ml: 0.25 }}>
                          *
                        </Box>
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Autocomplete
                          options={countries}
                          autoHighlight
                          getOptionLabel={o => `+${o.phone}`}
                          value={selectedCountry}
                          onChange={(_, val) => val && setSelectedCountry(val)}
                          disableClearable
                          sx={{ width: 132, flex: "none" }}
                          renderOption={(props, option) => (
                            <Box component="li" sx={{ fontSize: "0.85rem", "& > img": { mr: 1, flexShrink: 0 } }} {...props}>
                              <img loading="lazy" width="18" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt={`${option.label} flag`} />
                              {option.label} (+{option.phone})
                            </Box>
                          )}
                          renderInput={params => (
                            <TextField
                              {...params}
                              hiddenLabel
                              inputProps={{ ...params.inputProps, "aria-label": "Country dial code" }}
                              InputProps={{
                                ...params.InputProps,
                                startAdornment: <Box component="img" src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={`${selectedCountry.label} flag`} sx={{ width: 18, ml: 0.5, borderRadius: "2px" }} />,
                              }}
                              sx={{ ...inputSx, "& .MuiOutlinedInput-root": { ...inputSx["& .MuiOutlinedInput-root"], py: "3px !important" } }}
                            />
                          )}
                        />
                        <TextField id="register-phone" fullWidth hiddenLabel required name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="7000 000000" type="tel" autoComplete="tel-national" sx={inputSx} />
                      </Stack>
                    </Box>
                  </FormSection>

                  <FormSection step="04" title="Account security">
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Field
                        required
                        label="Password"
                        name="password"
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        icon={<LockOutlinedIcon />}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                        InputProps={{ endAdornment: <PasswordToggle shown={showPassword} onToggle={() => setShowPassword(p => !p)} /> }}
                      />
                      <Field
                        required
                        label="Confirm password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Repeat password"
                        icon={<LockOutlinedIcon />}
                        error={Boolean(passwordError)}
                        InputProps={{ endAdornment: <PasswordToggle shown={showConfirmPassword} onToggle={() => setShowConfirmPassword(p => !p)} /> }}
                      />
                    </Stack>
                  </FormSection>

                  <Box sx={{ pt: 3, borderTop: `1px solid ${C.border}` }}>
                    <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={1.5} justifyContent="flex-end">
                      <Button component={RouterLink} to="/login" sx={{ ...btn.secondary, py: 1.5, px: 3.5, borderRadius: "12px" }}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained" disabled={loading} endIcon={!loading && <ArrowForwardRoundedIcon />} sx={{ ...primaryButtonSx, px: 3.5 }}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Create account"}
                      </Button>
                    </Stack>
                    {loading && <Typography sx={{ mt: 1.5, fontSize: "0.85rem", fontWeight: 600, color: C.brandDark, textAlign: { xs: "center", sm: "right" } }}>Creating your account, this can take a few seconds. Please don't refresh.</Typography>}
                    <Typography sx={{ mt: 2.5, fontSize: "0.8rem", color: C.muted, lineHeight: 1.6, textAlign: { xs: "center", sm: "right" } }}>
                      By submitting, I agree to Panam Valves'{" "}
                      <MuiLink component="button" type="button" onClick={() => setTermsOpen(true)} sx={{ color: C.brandDark, fontWeight: 600, fontSize: "inherit", fontFamily: "inherit", verticalAlign: "baseline", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                        Terms of Use
                      </MuiLink>{" "}
                      and Privacy Notice.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </Box>
  )
}

export default RegisterForm
