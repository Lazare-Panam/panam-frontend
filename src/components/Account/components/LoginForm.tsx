import React from "react"
import { Box, Typography, TextField, Button, Link, CircularProgress } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ForgotPasswordForm from "./ForgotPasswordForm"
import { useLoginForm } from "../hooks/useLoginForm"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_MAIN = "#1a1a1a"
const TEXT_SECONDARY = "#555555"
const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"
const BRAND_BLUE_DARK = "#0088BA"

const inputSx = {
  mb: 4,
  "& .MuiOutlinedInput-root": {
    backgroundColor: BRAND_BLUE_LIGHT,
    borderRadius: 0,
    "& fieldset": { borderColor: "transparent" },
  },
}

const labelSx = {
  fontFamily: PRIMARY_FONT,
  fontWeight: 700,
  mb: 1,
  color: TEXT_MAIN,
  letterSpacing: "0.05em",
}

const LoginForm: React.FC = () => {
  const { credentials, loading, isForgot, setIsForgot, handleChange, handleLogin, navigate } = useLoginForm()

  if (isForgot) {
    return <ForgotPasswordForm onBack={() => setIsForgot(false)} />
  }

  return (
    <Box sx={{ flex: 1, position: "relative" }}>
      {/* Loading Overlay */}
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(255,255,255,0.7)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
          <Typography variant="caption" sx={{ color: TEXT_MAIN, fontWeight: 600 }}>
            Authenticating...
          </Typography>
        </Box>
      )}

      <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}>
        Sign In
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 5 }}>
        Welcome back. Please sign in to your Panam Valves account:
      </Typography>

      <Box component="form" onSubmit={handleLogin} noValidate>
        <Typography variant="subtitle2" sx={labelSx}>
          USER ID / EMAIL
        </Typography>
        <TextField fullWidth required name="email" value={credentials.email} onChange={handleChange} placeholder="your@email.com" sx={inputSx} />

        <Typography variant="subtitle2" sx={labelSx}>
          PASSWORD
        </Typography>
        <TextField fullWidth required name="password" type="password" value={credentials.password} onChange={handleChange} sx={{ ...inputSx, mb: 1 }} />

        <Link component="button" type="button" onClick={() => setIsForgot(true)} sx={{ display: "inline-block", mb: 4, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "0.9rem", border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          Forgot your password?
        </Link>

        <Button fullWidth type="submit" variant="contained" disabled={loading} endIcon={!loading && <ChevronRightIcon />} sx={{ backgroundColor: BRAND_BLUE, "&:hover": { backgroundColor: BRAND_BLUE_DARK }, py: 2, fontWeight: 700, borderRadius: 0, fontFamily: PRIMARY_FONT, boxShadow: "none" }}>
          {loading ? "SIGNING IN..." : "SIGN IN"}
        </Button>

        <Button fullWidth variant="outlined" onClick={() => navigate("/enquiry")} sx={{ mt: 3, borderColor: BRAND_BLUE, color: BRAND_BLUE, py: 1.5, fontWeight: 600, borderRadius: 0, fontFamily: PRIMARY_FONT, "&:hover": { backgroundColor: BRAND_BLUE_LIGHT, borderColor: BRAND_BLUE_DARK } }}>
          Request Technical Support
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm
