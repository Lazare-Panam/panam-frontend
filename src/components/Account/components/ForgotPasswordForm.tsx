import React, { useState } from "react"
import { Box, Typography, TextField, Button, CircularProgress, Link } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useMutation } from "@tanstack/react-query"
import { useNotificationStore } from "../../store/useNotficationStore"
import { forgotPassword } from "../../../api/authApi"

const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"
const BRAND_BLUE_DARK = "#0088BA"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface ForgotPasswordProps {
  onBack: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({ onBack }) => {
  const [email, setEmail] = useState("")
  const showNotification = useNotificationStore(state => state.showNotification)


  const { mutate, isPending } = useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onSuccess: () => {
      showNotification({ 
        message: "If an account exists, a reset link has been sent to your email.", 
        severity: "success" 
      })
    },
    onError: (err: any) => {
      const errorMsg = err.response?.data?.message || "An error occurred. Please try again."
      showNotification({ message: errorMsg, severity: "error" })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      showNotification({ message: "Please enter your email address.", severity: "warning" })
      return
    }
    mutate(email)
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: PRIMARY_FONT, color: BRAND_BLUE, fontWeight: 800, mb: 2, fontSize: { xs: "2.2rem", md: "3rem" } }}>
        Reset Password
      </Typography>
      
      <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: "#555", fontSize: "1.1rem", mb: 5 }}>
        Enter your email address and we'll send you a link to reset your password.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: "#1a1a1a", letterSpacing: "0.05em" }}>
          EMAIL ADDRESS
        </Typography>
        <TextField
          fullWidth required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          placeholder="your@email.com"
          disabled={isPending}
          sx={{ mb: 4, "& .MuiOutlinedInput-root": { backgroundColor: BRAND_BLUE_LIGHT, borderRadius: 0, "& fieldset": { borderColor: "transparent" } } }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={isPending}
          endIcon={!isPending && <ChevronRightIcon />}
          sx={{ backgroundColor: BRAND_BLUE, "&:hover": { backgroundColor: BRAND_BLUE_DARK }, py: 2, fontWeight: 700, borderRadius: 0, fontFamily: PRIMARY_FONT, boxShadow: "none" }}
        >
          {isPending ? <CircularProgress size={24} sx={{ color: "white" }} /> : "SEND RESET LINK"}
        </Button>

        <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link 
                component="button" 
                type="button"
                onClick={onBack} 
                disabled={isPending}
                sx={{ color: "#888", fontFamily: PRIMARY_FONT, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none" }}
            >
                <ArrowBackIcon fontSize="small" /> Back to Sign In
            </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgotPasswordForm