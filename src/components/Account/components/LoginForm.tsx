import React, { useState } from "react"
import { Box, Typography, TextField, Button, Link, CircularProgress } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { useNavigate, useSearchParams } from "react-router-dom"

// API and Store Imports
import { loginUser, type LoginDto } from "../../../api/authApi"
import { useNotificationStore } from "../../store/useNotficationStore"
import { useUserStore } from "../../store/useUserStore"
import ForgotPasswordForm from "./ForgotPasswordForm"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_MAIN = "#1a1a1a"
const TEXT_SECONDARY = "#555555"
const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"
const BRAND_BLUE_DARK = "#0088BA"

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const showNotification = useNotificationStore(state => state.showNotification)
  const setUser = useUserStore(state => state.setUser)
  const [loading, setLoading] = useState(false)
  const [isForgot, setIsForgot] = useState(false)
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
    const [credentials, setCredentials] = useState<LoginDto>({
      email: "",
      password: ""
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic Client-side Check
    if (!credentials.email || !credentials.password) {
      showNotification({ message: "Please enter your email and password.", severity: "warning" })
      return
    }

    setLoading(true)
    try {
      const data = await loginUser(credentials)
      console.log("login data", data )
      setUser({
          id: data.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          companyName: data.companyName,
          jobTitle: data.jobTitle,
          phoneNumber:data.phoneNumber,
        })
       //console.log("Store Update Triggered with:", data)

      showNotification({ message: `Welcome back, ${data.firstName}!`, severity: "success" })
      showNotification({ message: "Login Successful!", severity: "success" })
      navigate(redirectTo) 
      
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Invalid credentials. Please try again."
      showNotification({ message: errorMsg, severity: "error" })
    } finally {
      setLoading(false)
    }
  }

  if (isForgot) {
    return <ForgotPasswordForm onBack={() => setIsForgot(false)} />
  }
  return (
    <Box sx={{ flex: 1, position: "relative" }}>
      
      {/* Loading Spinner Overlay */}
      {loading && (
        <Box sx={{ 
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
          bgcolor: "rgba(255,255,255,0.7)", zIndex: 10, 
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1
        }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
          <Typography variant="caption" sx={{ color: TEXT_MAIN, fontWeight: 600 }}>Authenticating...</Typography>
        </Box>
      )}

      <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}>
        Sign In
      </Typography>
      
      <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY, fontSize: "1.1rem", mb: 5 }}>
        Welcome back. Please sign in to your Panam Valves account:
      </Typography>

      <Box component="form" onSubmit={handleLogin} noValidate>
        <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: TEXT_MAIN, letterSpacing: "0.05em" }}>
          USER ID / EMAIL
        </Typography>
        <TextField
          fullWidth required
          name="email"
          value={credentials.email}
          onChange={handleChange}
          variant="outlined"
          placeholder="your@email.com"
          sx={{ mb: 4, "& .MuiOutlinedInput-root": { backgroundColor: BRAND_BLUE_LIGHT, borderRadius: 0, "& fieldset": { borderColor: "transparent" } } }}
        />

        <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: TEXT_MAIN, letterSpacing: "0.05em" }}>
          PASSWORD
        </Typography>
        <TextField
          fullWidth required
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          variant="outlined"
          sx={{ mb: 1, "& .MuiOutlinedInput-root": { backgroundColor: BRAND_BLUE_LIGHT, borderRadius: 0, "& fieldset": { borderColor: "transparent" } } }}
        />

        <Link href="#" underline="hover" onClick={() => setIsForgot(true)} sx={{ display: "inline-block", mb: 4, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "0.9rem" }}>
          Forgot your password?
        </Link>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          endIcon={!loading && <ChevronRightIcon />}
          sx={{ backgroundColor: BRAND_BLUE, "&:hover": { backgroundColor: BRAND_BLUE_DARK }, py: 2, fontWeight: 700, borderRadius: 0, fontFamily: PRIMARY_FONT, boxShadow: "none" }}
        >
          {loading ? "SIGNING IN..." : "SIGN IN"}
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={()=>navigate("/enquiry")}
          sx={{ mt: 3, borderColor: BRAND_BLUE, color: BRAND_BLUE, py: 1.5, fontWeight: 600, borderRadius: 0, fontFamily: PRIMARY_FONT, "&:hover": { backgroundColor: BRAND_BLUE_LIGHT, borderColor: BRAND_BLUE_DARK } }}
        >
          Request Technical Support
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm