import { useState, useRef, type ChangeEvent } from "react"
import { Box, Typography, TextField, Stack, Checkbox, FormControlLabel, Link, Autocomplete, IconButton, InputAdornment } from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined"
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import NotesRoundedIcon from "@mui/icons-material/NotesRounded"
import TermsModal from "./AccessTerms"
import { useNotificationStore } from "../../store/useNotficationStore"
import { registerWithEnquiry } from "../../../api/authApi"
import { useFormStartTracking } from "../../Common/useFormStartTracking"
import { EnquiryShell, Field, FormSection, SubmitButton, UploadZone } from "./enquiryUi"
import { inputSx } from "./enquiryTokens"
import { C } from "../../Landing2/homeTokens"

const countries = [
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "US", label: "United States", phone: "1" },
  { code: "IN", label: "India", phone: "91" },
  { code: "AE", label: "UAE", phone: "971" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "DE", label: "Germany", phone: "49" },
  { code: "FR", label: "France", phone: "33" },
  { code: "CA", label: "Canada", phone: "1" },
  { code: "AU", label: "Australia", phone: "61" },
]

export const EnquiryRegistration = () => {
  const trackFormStart = useFormStartTracking("enquiry-registration")
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const showNotification = useNotificationStore(state => state.showNotification)

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
  })

  const handleToggleTerms = () => setIsTermsOpen(prev => !prev)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "password" || name === "confirmPassword") {
      setPasswordError(null)
    }
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreed: e.target.checked }))
  }

  // Shared by the file picker and drag-and-drop
  const handleFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      showNotification({ message: "File size exceeds the 10MB limit.", severity: "error" })
      return
    }
    setSelectedFile(file)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0])
  }

  const clearFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleSubmit = async () => {
    setPasswordError(null)
    if (formData.password !== formData.confirmPassword) {
      showNotification({ message: "Passwords do not match.", severity: "warning" })
      return
    }

    if (!formData.email.includes("@")) {
      showNotification({ message: "Please enter a valid corporate email.", severity: "warning" })
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(formData.password)) {
      setPasswordError("Password must be 8+ characters, with a capital, number, and symbol.")
      return
    }

    if (!formData.email.includes("@")) {
      showNotification({ message: "Please enter a valid corporate email.", severity: "warning" })
      return
    }

    setLoading(true)

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
        selectedFile || undefined // ✅ pass the file here
      )

      showNotification({
        message: "Enquiry submitted successfully! Our engineers will review your account.",
        severity: "success",
      })

      setFormData({
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
      })
      setSelectedFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Registration failed."
      showNotification({ message: errorMsg, severity: "error" })
    } finally {
      setLoading(false)
    }
  }

  const passwordAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(v => !v)} edge="end" size="small" sx={{ color: C.muted }}>
          {showPassword ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
        </IconButton>
      </InputAdornment>
    ),
  }

  return (
    <>
      <EnquiryShell
        header={{
          overline: "Technical Enquiry",
          titleMain: "Talk to a Panam",
          titleAccent: "engineer",
          description: "Send us your specifications, drawings or part numbers and our engineers will come back with pricing, availability and technical guidance.",
        }}
        eyebrow="Partner Onboarding"
        title={
          <>
            Verified <Box component="span" sx={{ color: "#BFEFFF" }}>Industrial Network.</Box>
          </>
        }
        text="We manually verify all accounts to ensure our technical assets and CAD data remain secure for our professional partners."
        response="Within 24 hours"
        steps={["Submit your project specifications", "Our engineers review your enquiry", "Account verified within 24 hours"]}
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80">
        <Stack spacing={4} onFocusCapture={trackFormStart}>
          <Box>
            <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.5rem", md: "1.75rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Technical Enquiry & Partner Onboarding
            </Typography>
            <Typography sx={{ mt: 1, color: C.muted, lineHeight: 1.6, fontSize: "0.95rem" }}>
              Submit your project specifications below. Our engineers will review your enquiry and verify your account within 24 hours.
            </Typography>
          </Box>

          <FormSection step="01" title="Your details">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Field icon={<PersonOutlineRoundedIcon />} label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Jane" autoComplete="given-name" />
              <Field icon={<PersonOutlineRoundedIcon />} label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Smith" autoComplete="family-name" />
            </Stack>
            <Field icon={<MailOutlineRoundedIcon />} label="Corporate Email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="name@company.com" autoComplete="email" />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Field icon={<BusinessOutlinedIcon />} label="Company Name" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Company name" autoComplete="organization" />
              <Field icon={<BadgeOutlinedIcon />} label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="e.g. Instrument Engineer" optional autoComplete="organization-title" />
            </Stack>
            <Box>
              <Typography component="label" htmlFor="enquiry-phone" sx={{ display: "block", mb: 0.75, fontSize: "0.85rem", fontWeight: 600, color: C.ink }}>
                Phone Number
                <Box component="span" sx={{ color: C.brand, ml: 0.25 }}>
                  *
                </Box>
              </Typography>
              <Stack direction="row" spacing={1}>
                <Autocomplete
                  options={countries}
                  autoHighlight
                  getOptionLabel={option => `+${option.phone}`}
                  value={selectedCountry}
                  onChange={(_, newValue) => setSelectedCountry(newValue)}
                  disableClearable
                  sx={{ width: 132, flex: "none" }}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ fontSize: "0.85rem", "& > img": { mr: 1, flexShrink: 0 } }} {...props}>
                      <img loading="lazy" width="18" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" />
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
                        startAdornment: <Box component="img" src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt="" sx={{ width: 18, ml: 0.5, borderRadius: "2px" }} />,
                      }}
                      sx={{ ...inputSx, "& .MuiOutlinedInput-root": { ...inputSx["& .MuiOutlinedInput-root"], py: "3px !important" } }}
                    />
                  )}
                />
                <TextField id="enquiry-phone" fullWidth hiddenLabel required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="7000 000000" type="tel" autoComplete="tel-national" sx={inputSx} />
              </Stack>
            </Box>
          </FormSection>

          <FormSection step="02" title="Account security">
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Field
                icon={<LockOutlinedIcon />}
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={Boolean(passwordError)}
                helperText={passwordError}
                placeholder="8+ characters"
                autoComplete="new-password"
                InputProps={passwordAdornment}
              />
              <Field icon={<LockOutlinedIcon />} label="Confirm Password" type={showPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Repeat password" error={Boolean(passwordError)} autoComplete="new-password" />
            </Stack>
          </FormSection>

          <FormSection step="03" title="Project details">
            <Field icon={<NotesRoundedIcon />} label="Project/Enquiry Details" name="enquiry" multiline minRows={4} value={formData.enquiry} onChange={handleInputChange} placeholder="Tell us a bit about your current project or requirements..." />
            <UploadZone
              file={selectedFile}
              inputRef={fileInputRef}
              onChange={handleFileChange}
              onFile={handleFile}
              onClear={clearFile}
              title="Attach Technical Drawing / Specs"
              hint="Optional — Max 10MB · PDF, DWG, JPG, PNG, ZIP, DOCX"
            />
          </FormSection>

          <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretch", sm: "center" }} justifyContent="space-between" sx={{ gap: 2.5, pt: 3, borderTop: `1px solid ${C.border}` }}>
            <Stack spacing={1}>
              <FormControlLabel
                sx={{ m: 0 }}
                control={<Checkbox checked={formData.agreed} onChange={handleCheckboxChange} sx={{ p: 0, mr: 1.25, color: "#C9D5E1", "&.Mui-checked": { color: C.brand }, "& svg": { fontSize: 22 } }} />}
                label={
                  <Typography sx={{ fontSize: "0.9rem", color: C.text }}>
                    I agree to the
                    <Link component="button" type="button" onClick={handleToggleTerms} sx={{ ml: 0.5, color: C.brandDark, cursor: "pointer", verticalAlign: "baseline", textDecoration: "none", fontWeight: 600, font: "inherit", "&:hover": { textDecoration: "underline" } }}>
                      Access Terms
                    </Link>
                  </Typography>
                }
              />
              <Link href="/login" sx={{ color: C.brandDark, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", width: "fit-content", "&:hover": { textDecoration: "underline" } }}>
                Existing Partner?
              </Link>
            </Stack>

            <SubmitButton loading={loading} disabled={!formData.agreed} onClick={handleSubmit}>
              Submit Access Request
            </SubmitButton>
          </Stack>
        </Stack>
      </EnquiryShell>

      <TermsModal open={isTermsOpen} onClose={handleToggleTerms} />
    </>
  )
}
