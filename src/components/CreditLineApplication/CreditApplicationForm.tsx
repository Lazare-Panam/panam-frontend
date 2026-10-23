import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Typography, Button, CircularProgress, Alert, MenuItem, Container, Grid, Stack } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined"
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined"
import EventOutlinedIcon from "@mui/icons-material/EventOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined"
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined"
import { useCreditApplicationForm } from "./useCreditApplicationForm"
import { SUPPORTED_CURRENCIES } from "../../api/creditApi"
import { Field, FormSection } from "../Auth/Enquiry/enquiryUi"
import { Eyebrow } from "../Landing2/homeStyles"
import { C, FONT, GRADIENT, btn } from "../Landing2/homeTokens"
import { primaryButtonSx } from "../Account/components/authStyles"

// Information the applicant should have to hand, shown in the side panel
const HAVE_READY = ["Company registration and VAT numbers", "Registered business address", "Expected monthly order value", "Primary contact details"]
const STEPS = ["Submit this application", "Our accounts team reviews it", "We confirm your credit facility"]

const cardShellSx = {
  bgcolor: C.white,
  borderRadius: "24px",
  border: `1px solid ${C.border}`,
  boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(15,34,54,0.10)",
  overflow: "clip",
}

interface CreditApplicationFormProps {
  onSuccess?: () => void
}

const CreditApplicationForm: React.FC<CreditApplicationFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false)
  const { formData, loading, errors, error, handleChange, handleSubmit } = useCreditApplicationForm(() => {
    setSubmitted(true)
    onSuccess?.()
  })

  return (
    <Box component="section" sx={{ background: GRADIENT.heroBg, py: { xs: 4, md: 8 }, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      <Container maxWidth="lg">
        {/* Page header */}
        <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 4, md: 6 } }}>
          <Eyebrow>Trade accounts</Eyebrow>
          <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.08, fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" } }}>
            Credit Line{" "}
            <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Application
            </Box>
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, maxWidth: 640 }}>Complete this short form so we can assess your credit facility. Treated in strict confidence.</Typography>
          <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap", gap: 1, pt: 0.5 }}>
            {[
              { icon: <LockOutlinedIcon />, label: "Strictly confidential" },
              { icon: <EventRepeatOutlinedIcon />, label: "30-day payment terms" },
              { icon: <TimerOutlinedIcon />, label: "Takes about 5 minutes" },
              { icon: <GppGoodOutlinedIcon />, label: "Reviewed by our accounts team" },
            ].map(chip => (
              <Stack key={chip.label} direction="row" alignItems="center" sx={{ gap: 0.75, px: 1.5, py: 0.75, borderRadius: "999px", border: `1px solid ${C.border}`, bgcolor: "rgba(255,255,255,0.85)", color: C.text, fontSize: "0.84rem", fontWeight: 500, "& svg": { fontSize: 17, color: C.brand } }}>
                {chip.icon}
                {chip.label}
              </Stack>
            ))}
          </Stack>
        </Stack>

        {submitted ? (
          <Box sx={{ ...cardShellSx, maxWidth: 640, mx: "auto", p: { xs: 4, md: 6 }, textAlign: "center" }}>
            <Box sx={{ width: 72, height: 72, mx: "auto", borderRadius: "50%", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center", mb: 3 }}>
              <CheckCircleRoundedIcon sx={{ fontSize: 44 }} />
            </Box>
            <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.6rem", md: "1.9rem" }, letterSpacing: "-0.02em" }}>
              Application Received
            </Typography>
            <Typography sx={{ mt: 1.5, color: C.muted, fontSize: "1rem", lineHeight: 1.7 }}>Thank you for submitting your credit line application. Our team will review it and get back to you shortly.</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
              <Button component={RouterLink} to="/products" sx={btn.primary}>
                Browse products
              </Button>
              <Button component={RouterLink} to="/" sx={btn.secondary}>
                Back to home
              </Button>
            </Stack>
          </Box>
        ) : (
          <Box sx={cardShellSx}>
            <Grid container>
              {/* Context panel (sticky on desktop so it stays beside the long form) */}
              <Grid size={{ xs: 12, md: 4.25 }} order={{ xs: 2, md: 1 }} sx={{ position: "relative", color: C.white, background: `linear-gradient(160deg, ${C.brand} 0%, ${C.brandDark} 45%, ${C.brandDeep} 100%)`, overflow: "clip" }}>
                <Box aria-hidden sx={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", bottom: -190, left: -120, border: "40px solid rgba(255,255,255,0.06)" }} />
                <Box aria-hidden sx={{ position: "absolute", width: 240, height: 240, borderRadius: "50%", top: -120, right: -90, border: "32px solid rgba(255,255,255,0.05)" }} />
                <Box sx={{ position: { md: "sticky" }, top: { md: 120 }, zIndex: 1, p: { xs: 3, sm: 4, md: 5 } }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.2)", display: "grid", placeItems: "center", mb: 3 }}>
                    <AccountBalanceWalletOutlinedIcon />
                  </Box>
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>Open a trade account</Typography>
                  <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, fontSize: { xs: "1.6rem", md: "1.85rem" } }}>
                    Buy now, pay on account
                  </Typography>
                  <Typography sx={{ mt: 1.5, opacity: 0.9, fontSize: "0.95rem", lineHeight: 1.65 }}>A credit facility lets your team order Panam products now and pay on account.</Typography>

                  {/* Payment terms policy */}
                  <Stack direction="row" alignItems="center" spacing={1.75} sx={{ mt: 3, p: 2, borderRadius: "16px", bgcolor: C.white, color: C.ink, boxShadow: "0 10px 24px rgba(3,40,70,0.22)" }}>
                    {/* Calendar-page badge: coloured header with binder rings, "30" on the page */}
                    <Box aria-hidden sx={{ position: "relative", flex: "none", width: 54, height: 58, mt: "6px", borderRadius: "12px", bgcolor: C.white, border: `1.5px solid ${C.border}`, boxShadow: "0 4px 12px rgba(15,34,54,0.10)", overflow: "visible" }}>
                      <Box sx={{ height: 18, borderRadius: "10px 10px 0 0", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", fontSize: "0.56rem", fontWeight: 800, letterSpacing: "0.12em" }}>DAYS</Box>
                      {[14, 34].map(left => (
                        <Box key={left} sx={{ position: "absolute", top: -6, left, width: 5, height: 11, borderRadius: "3px", bgcolor: C.ink, border: `1.5px solid ${C.white}` }} />
                      ))}
                      <Typography sx={{ textAlign: "center", fontWeight: 800, fontSize: "1.45rem", lineHeight: "38px", color: C.ink, letterSpacing: "-0.03em" }}>30</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 800, fontSize: "0.95rem" }}>30-day credit terms only</Typography>
                      <Typography sx={{ mt: 0.25, fontSize: "0.82rem", color: C.muted, lineHeight: 1.45 }}>Approved accounts are offered a maximum of 30 days to pay.</Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ mt: 4, borderTop: "1px solid rgba(255,255,255,0.2)", pt: 3 }}>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.75, mb: 1.75 }}>How it works</Typography>
                    <Stack spacing={1.25}>
                      {STEPS.map((step, i) => (
                        <Stack key={step} direction="row" alignItems="center" sx={{ gap: 1.5 }}>
                          <Box sx={{ width: 26, height: 26, flex: "none", borderRadius: "50%", bgcolor: i === STEPS.length - 1 ? C.white : "rgba(255,255,255,0.16)", color: i === STEPS.length - 1 ? C.brandDark : C.white, display: "grid", placeItems: "center", fontSize: "0.75rem", fontWeight: 700 }}>{i === STEPS.length - 1 ? <CheckRoundedIcon sx={{ fontSize: 16 }} /> : i + 1}</Box>
                          <Typography sx={{ fontSize: "0.92rem", opacity: 0.95 }}>{step}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ mt: 4, p: 2.25, borderRadius: "16px", bgcolor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", mb: 1.25 }}>Have these ready</Typography>
                    <Stack spacing={1}>
                      {HAVE_READY.map(item => (
                        <Stack key={item} direction="row" alignItems="flex-start" sx={{ gap: 1 }}>
                          <CheckCircleRoundedIcon sx={{ fontSize: 17, flex: "none", mt: "2px", opacity: 0.9 }} />
                          <Typography sx={{ fontSize: "0.86rem", lineHeight: 1.5, opacity: 0.92 }}>{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              {/* Form */}
              <Grid size={{ xs: 12, md: 7.75 }} order={{ xs: 1, md: 2 }} sx={{ p: { xs: 2.5, sm: 4, md: 5 } }}>
                {error && (
                  <Alert severity="error" sx={{ mb: 3, borderRadius: "12px", fontFamily: FONT }}>
                    {error}
                  </Alert>
                )}

                <Box component="form" id="credit-application" name="credit-application" onSubmit={handleSubmit} noValidate>
                  <Stack spacing={4.5}>
                    <FormSection step="01" title="Company details">
                      <Field required label="Company / Trading name" name="companyName" placeholder="Registered company name" icon={<BusinessOutlinedIcon />} value={formData.companyName} onChange={handleChange} error={Boolean(errors.companyName)} helperText={errors.companyName} />
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Company registration number" name="registrationNumber" placeholder="e.g. 12345678" icon={<AssignmentOutlinedIcon />} value={formData.registrationNumber} onChange={handleChange} error={Boolean(errors.registrationNumber)} helperText={errors.registrationNumber} />
                        <Field optional label="VAT number" name="vatNumber" placeholder="e.g. GB123456789" icon={<ReceiptLongOutlinedIcon />} value={formData.vatNumber} onChange={handleChange} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Registered address (line 1)" name="addressLine1" placeholder="Street address" icon={<PlaceOutlinedIcon />} value={formData.addressLine1} onChange={handleChange} error={Boolean(errors.addressLine1)} helperText={errors.addressLine1} />
                        <Field optional label="Address line 2, city, postcode" name="addressLine2" placeholder="City, postcode" icon={<PlaceOutlinedIcon />} value={formData.addressLine2} onChange={handleChange} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field optional label="Website" name="website" placeholder="www.company.com" icon={<LanguageOutlinedIcon />} value={formData.website} onChange={handleChange} />
                        <Field required label="Industry / Sector" name="sector" placeholder="e.g. Oil & gas" icon={<FactoryOutlinedIcon />} value={formData.sector} onChange={handleChange} error={Boolean(errors.sector)} helperText={errors.sector} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Years in business" name="yearsInBusiness" placeholder="e.g. 10" icon={<CalendarMonthOutlinedIcon />} value={formData.yearsInBusiness} onChange={handleChange} error={Boolean(errors.yearsInBusiness)} helperText={errors.yearsInBusiness} />
                        <Field optional label="Number of employees" name="employees" placeholder="e.g. 50" icon={<GroupsOutlinedIcon />} value={formData.employees} onChange={handleChange} />
                      </Stack>
                    </FormSection>

                    <FormSection step="02" title="Primary contact">
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Full name" name="contactName" placeholder="Jane Smith" icon={<PersonOutlineRoundedIcon />} value={formData.contactName} onChange={handleChange} error={Boolean(errors.contactName)} helperText={errors.contactName} />
                        <Field required label="Job title" name="jobTitle" placeholder="e.g. Purchasing Manager" icon={<BadgeOutlinedIcon />} value={formData.jobTitle} onChange={handleChange} error={Boolean(errors.jobTitle)} helperText={errors.jobTitle} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Email address" name="email" type="email" placeholder="jane@company.com" icon={<MailOutlineRoundedIcon />} value={formData.email} onChange={handleChange} error={Boolean(errors.email)} helperText={errors.email} />
                        <Field required label="Phone number" name="phone" type="tel" placeholder="+44 7000 000000" icon={<PhoneOutlinedIcon />} value={formData.phone} onChange={handleChange} error={Boolean(errors.phone)} helperText={errors.phone} />
                      </Stack>
                    </FormSection>

                    <FormSection step="03" title="Credit request">
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field select required label="Currency" name="currency" icon={<CurrencyExchangeOutlinedIcon />} value={formData.currency} onChange={handleChange} error={Boolean(errors.currency)} helperText={errors.currency}>
                          {SUPPORTED_CURRENCIES.map(code => (
                            <MenuItem key={code} value={code}>
                              {code}
                            </MenuItem>
                          ))}
                        </Field>
                        <Field required label={`Credit limit requested (${formData.currency})`} name="creditLimitRequested" type="number" placeholder="e.g. 10000" icon={<AccountBalanceWalletOutlinedIcon />} value={formData.creditLimitRequested || ""} onChange={handleChange} error={Boolean(errors.creditLimitRequested)} helperText={errors.creditLimitRequested} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Preferred payment terms" name="paymentTerms" placeholder="e.g. 30 days net" icon={<EventRepeatOutlinedIcon />} value={formData.paymentTerms} onChange={handleChange} error={Boolean(errors.paymentTerms)} helperText={errors.paymentTerms || "We offer 30-day credit terms only."} />
                        <Field required label={`Estimated monthly order value (${formData.currency})`} name="monthlyOrderValue" type="number" placeholder="e.g. 2500" icon={<TrendingUpRoundedIcon />} value={formData.monthlyOrderValue || ""} onChange={handleChange} error={Boolean(errors.monthlyOrderValue)} helperText={errors.monthlyOrderValue} />
                      </Stack>
                      <Field optional label="Primary products to purchase" name="products" placeholder="e.g. Needle valves, tube fittings" icon={<Inventory2OutlinedIcon />} value={formData.products} onChange={handleChange} />
                    </FormSection>

                    <FormSection step="04" title="Declaration & signature">
                      <Box sx={{ p: 2.5, borderRadius: "16px", bgcolor: C.tintBg, border: "1px solid rgba(1,176,240,0.25)" }}>
                        <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.92rem", mb: 1.5 }}>By signing below, I confirm that:</Typography>
                        <Stack spacing={1.1}>
                          {["The information provided is accurate and complete to the best of my knowledge.", "I authorise Panam Valves Ltd to contact the trade references provided for verification.", "I understand Panam Valves Ltd reserves the right to approve, decline or amend the credit facility."].map(item => (
                            <Stack key={item} direction="row" alignItems="flex-start" sx={{ gap: 1.25 }}>
                              <CheckCircleRoundedIcon sx={{ color: C.brand, fontSize: 19, flex: "none", mt: "1px" }} />
                              <Typography sx={{ fontSize: "0.88rem", color: C.text, lineHeight: 1.55 }}>{item}</Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field required label="Authorised signatory (full name)" name="signatoryName" placeholder="Full name" icon={<PersonOutlineRoundedIcon />} value={formData.signatoryName} onChange={handleChange} error={Boolean(errors.signatoryName)} helperText={errors.signatoryName} />
                        <Field required label="Position / Title" name="signatoryTitle" placeholder="e.g. Director" icon={<BadgeOutlinedIcon />} value={formData.signatoryTitle} onChange={handleChange} error={Boolean(errors.signatoryTitle)} helperText={errors.signatoryTitle} />
                      </Stack>
                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Field
                          required
                          label="Signature (type full name)"
                          name="signature"
                          placeholder="Type your full name"
                          icon={<DrawOutlinedIcon />}
                          value={formData.signature}
                          onChange={handleChange}
                          error={Boolean(errors.signature)}
                          helperText={errors.signature}
                          sx={{ "& .MuiOutlinedInput-input": { fontStyle: formData.signature ? "italic" : "normal", fontWeight: formData.signature ? 600 : 400 } }}
                        />
                        <Field required label="Date" name="declarationDate" type="date" icon={<EventOutlinedIcon />} value={formData.declarationDate} onChange={handleChange} error={Boolean(errors.declarationDate)} helperText={errors.declarationDate} />
                      </Stack>
                    </FormSection>

                    <Box sx={{ pt: 3, borderTop: `1px solid ${C.border}` }}>
                      <Stack direction={{ xs: "column-reverse", sm: "row" }} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between" spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ color: C.muted, fontSize: "0.82rem", justifyContent: { xs: "center", sm: "flex-start" } }}>
                          <LockOutlinedIcon sx={{ fontSize: 16 }} />
                          <span>Your details are treated in strict confidence.</span>
                        </Stack>
                        <Button type="submit" variant="contained" disabled={loading} endIcon={!loading && <ArrowForwardRoundedIcon />} sx={{ ...primaryButtonSx, px: 3.5 }}>
                          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit application"}
                        </Button>
                      </Stack>
                      {loading && <Typography sx={{ mt: 1.5, fontSize: "0.85rem", fontWeight: 600, color: C.brandDark, textAlign: { xs: "center", sm: "right" } }}>Submitting your application, please don't refresh.</Typography>}
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default CreditApplicationForm
