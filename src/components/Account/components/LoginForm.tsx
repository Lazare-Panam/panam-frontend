import React, { useState } from "react"
import { Box, Typography, Button, Link, CircularProgress, Stack } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import ForgotPasswordForm from "./ForgotPasswordForm"
import { useLoginForm } from "../hooks/useLoginForm"
import { Field } from "../../Auth/Enquiry/enquiryUi"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, FONT, btn } from "../../Landing2/homeTokens"
import { primaryButtonSx } from "./authStyles"

const LoginForm: React.FC = () => {
  const { credentials, loading, isForgot, setIsForgot, handleChange, handleLogin, navigate } = useLoginForm()
  const [showPassword, setShowPassword] = useState(false)
  if (isForgot) {
    return <ForgotPasswordForm onBack={() => setIsForgot(false)} />
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Eyebrow>Customer portal</Eyebrow>
      <Typography component="h1" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: { xs: "2.1rem", md: "2.6rem" } }}>
        Sign In
      </Typography>
      <Typography sx={{ mt: 1.25, mb: 4, color: C.muted, fontSize: "1.02rem", lineHeight: 1.6 }}>Welcome back. Please sign in to your Panam Valves account.</Typography>

      <Box component="form" id="account-login" name="account-login" onSubmit={handleLogin} noValidate>
        <Stack spacing={2.5}>
          <Field required label="User ID / Email" name="email" autoComplete="email" value={credentials.email} onChange={handleChange} placeholder="your@email.com" icon={<MailOutlineRoundedIcon />} />

          <Box>
            <Field
              required
              label="Password"
              name="password"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              icon={<LockOutlinedIcon />}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(p => !p)} edge="end" sx={{ color: C.muted }}>
                      {showPassword ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ mt: 1, textAlign: "right" }}>
              <Link component="button" type="button" onClick={() => setIsForgot(true)} sx={{ color: C.brandDark, fontFamily: FONT, fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                Forgot your password?
              </Link>
            </Box>
          </Box>

          <Button fullWidth type="submit" variant="contained" disabled={loading} endIcon={!loading && <ArrowForwardRoundedIcon />} sx={primaryButtonSx}>
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign in"}
          </Button>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ color: "#94A3B8", fontSize: "0.8rem" }}>
            <Box sx={{ flex: 1, height: "1px", bgcolor: C.border }} />
            <span>or</span>
            <Box sx={{ flex: 1, height: "1px", bgcolor: C.border }} />
          </Stack>

          <Button fullWidth onClick={() => navigate("/enquiry")} startIcon={<HeadsetMicOutlinedIcon />} sx={{ ...btn.secondary, py: 1.4, borderRadius: "12px" }}>
            Request technical support
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default LoginForm
