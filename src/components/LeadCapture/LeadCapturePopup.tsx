import { useEffect, useRef, useState } from "react"
import { Box, Checkbox, Dialog, DialogContent, FormControlLabel, IconButton, Stack, Typography } from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import { useLocation } from "react-router-dom"
import { Field, SubmitButton } from "../Auth/Enquiry/enquiryUi"
import { C, FONT } from "../Landing2/homeTokens"
import { useLeadForm } from "./useLeadForm"

// Persisted flag: once a visitor submits OR dismisses the popup we never show it
// again on this device. Bump the suffix to re-show it to everyone (e.g. new offer).
const STORAGE_KEY = "panam_lead_popup_v1"

// Trigger thresholds — whichever fires first opens the popup, once.
const SCROLL_TRIGGER_PX = 1100 // visitor has scrolled well into the page (i.e. engaged)
const SHOW_AFTER_MS = 25000 // fallback for touch devices, where exit-intent has no mouse to detect

// Pages where a marketing popup would be noise or redundant (they already capture
// details, or are transactional). Mirrors StickyQuoteButton's exclusion list.
const HIDDEN_ON_PREFIXES = ["/enquiry", "/admin", "/dashboard", "/cart", "/login", "/register", "/leave-a-review", "/credit-application"]

// TODO: point this at the real privacy policy page once it exists. While empty,
// the consent line renders as plain text (no link).
const PRIVACY_URL = ""

const alreadyHandled = () => {
  try {
    return typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}
const markHandled = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1")
  } catch {
    /* private mode / storage disabled: ignore */
  }
}

const LeadCapturePopup = () => {
  const location = useLocation()
  const hiddenHere = HIDDEN_ON_PREFIXES.some(prefix => location.pathname.startsWith(prefix))

  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const armed = useRef(false) // guard so the triggers only ever fire once

  const { formData, loading, errors, error, handleChange, handleConsentChange, handleSubmit } = useLeadForm(() => {
    markHandled()
    setDone(true)
  })

  // Client-only: arm scroll / exit-intent / timer triggers. All window/document
  // access is inside the effect so SSR/prerender never touches it.
  useEffect(() => {
    if (hiddenHere || armed.current || alreadyHandled()) return

    const trigger = () => {
      if (armed.current) return
      armed.current = true
      setOpen(true)
      cleanup()
    }
    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER_PX) trigger()
    }
    // Cursor leaving through the top of the viewport is the classic exit-intent signal.
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }
    const timer = window.setTimeout(trigger, SHOW_AFTER_MS)

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("mouseleave", onMouseLeave)
      window.clearTimeout(timer)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("mouseleave", onMouseLeave)
    return cleanup
  }, [hiddenHere])

  const handleClose = () => {
    setOpen(false)
    markHandled() // a dismissal counts as "seen" — don't nag again on this device
  }

  if (hiddenHere) return null

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      slotProps={{ paper: { sx: { borderRadius: "18px", overflow: "hidden", fontFamily: FONT } } }}>
      <IconButton onClick={handleClose} aria-label="Close" sx={{ position: "absolute", right: 10, top: 10, color: C.muted, zIndex: 1 }}>
        <CloseRoundedIcon />
      </IconButton>

      {done ? (
        <DialogContent sx={{ p: 4, textAlign: "center" }}>
          <CheckCircleRoundedIcon sx={{ fontSize: 56, color: C.brand, mb: 1.5 }} />
          <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", color: C.ink, mb: 0.5 }}>Thank you!</Typography>
          <Typography sx={{ color: C.muted, fontSize: "0.95rem" }}>We've got your details — our team will be in touch shortly.</Typography>
        </DialogContent>
      ) : (
        <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography component="h2" sx={{ fontWeight: 800, fontSize: "1.4rem", color: C.ink, letterSpacing: "-0.02em", pr: 4 }}>
            Let's talk valves
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: "0.95rem", mt: 0.75, mb: 2.5 }}>
            Leave your details and our team will reach out with pricing, availability and technical support.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2}>
              <Field label="Name" name="name" required value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} placeholder="Your name" icon={<PersonOutlineRoundedIcon />} />
              <Field label="Email" name="email" type="email" required value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} placeholder="you@company.com" icon={<MailOutlineRoundedIcon />} />
              <Field label="Phone" name="phone" optional value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} placeholder="+44 …" icon={<PhoneOutlinedIcon />} />

              {/* Honeypot: off-screen, not tabbable, autofill-off. Real users never see or fill it;
                  bots that fill every field populate it and the API silently drops the submission. */}
              <Box aria-hidden sx={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
              </Box>

              <Box>
                <FormControlLabel
                  sx={{ alignItems: "flex-start", m: 0 }}
                  control={
                    <Checkbox
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleConsentChange}
                      sx={{ pt: 0, color: errors.marketingConsent ? "#E5484D" : undefined, "&.Mui-checked": { color: C.brand } }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.5 }}>
                      I agree to be contacted by Panam Valve about my enquiry and related products.
                      {PRIVACY_URL && (
                        <>
                          {" "}
                          See our{" "}
                          <Box component="a" href={PRIVACY_URL} target="_blank" rel="noopener" sx={{ color: C.brand }}>
                            privacy policy
                          </Box>
                          .
                        </>
                      )}
                    </Typography>
                  }
                />
                {errors.marketingConsent && (
                  <Typography sx={{ color: "#E5484D", fontSize: "0.75rem", mt: 0.25, ml: "34px" }}>{errors.marketingConsent}</Typography>
                )}
              </Box>

              {error && <Typography sx={{ color: "#E5484D", fontSize: "0.85rem" }}>{error}</Typography>}

              <SubmitButton loading={loading} onClick={handleSubmit}>
                Submit
              </SubmitButton>
            </Stack>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default LeadCapturePopup
