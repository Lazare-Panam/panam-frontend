import React, { useState, useEffect } from "react"
import { Box, Container, Typography, TextField, Button, CircularProgress, Paper } from "@mui/material"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { resetPassword } from "../../../api/authApi"
import { useNotificationStore } from "../../store/useNotficationStore"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"
const BRAND_BLUE_DARK = "#0088BA"

const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const showNotification = useNotificationStore(state => state.showNotification)
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const email = searchParams.get("email") || ""
  const token = searchParams.get("token") || ""
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  useEffect(() => {
    if (!email || !token) {
      showNotification({ 
        message: "Invalid reset link. Please request a new one.", 
        severity: "error" 
      })
      navigate("/login")
    }
  }, [email, token, navigate, showNotification])

  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => resetPassword(data),
    onSuccess: () => {
      showNotification({ message: "Password updated successfully!", severity: "success" })
      navigate("/login")
    },
    onError: (err: any) => {
      const errorMsg = err.response?.data?.message || "Reset failed. The link may have expired."
      showNotification({ message: errorMsg, severity: "error" })
    }
  })

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (newPassword.length < 8) {
    showNotification({ message: "Password must be at least 8 characters.", severity: "warning" })
    return
  }
  if (!/[A-Z]/.test(newPassword)) {
    showNotification({ message: "Password must contain at least one uppercase letter.", severity: "warning" })
    return
  }
  if (!/[0-9]/.test(newPassword)) {
    showNotification({ message: "Password must contain at least one number.", severity: "warning" })
    return
  }
  if (newPassword !== confirmPassword) {
    showNotification({ message: "Passwords do not match.", severity: "warning" })
    return
  }
  mutate({ email, token, newPassword })
}

  return (
    <Box sx={{ 
      minHeight: "80vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "#fff" 
    }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 } }}>
          <Typography variant="h3" sx={{ 
            fontFamily: PRIMARY_FONT, 
            color: BRAND_BLUE, 
            fontWeight: 800, 
            mb: 2, 
            textAlign: "center" 
          }}>
            New Password
          </Typography>
          
          <Typography variant="body1" sx={{ 
            fontFamily: PRIMARY_FONT, 
            color: "#555", 
            mb: 5, 
            textAlign: "center" 
          }}>
            Setting new password for: <br/>
            <strong>{email}</strong>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: "#1a1a1a" }}>
              NEW PASSWORD
            </Typography>
            <TextField
  fullWidth required
  type={showNewPassword ? "text" : "password"}
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  variant="outlined"
  sx={{ mb: 4, "& .MuiOutlinedInput-root": { backgroundColor: BRAND_BLUE_LIGHT, borderRadius: 0, "& fieldset": { borderColor: "transparent" } } }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowNewPassword(p => !p)} edge="end">
          {showNewPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

            <Typography variant="subtitle2" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 700, mb: 1, color: "#1a1a1a" }}>
              CONFIRM PASSWORD
            </Typography>
           <TextField
  fullWidth required
  type={showConfirmPassword ? "text" : "password"}
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  variant="outlined"
  sx={{ mb: 6, "& .MuiOutlinedInput-root": { backgroundColor: BRAND_BLUE_LIGHT, borderRadius: 0, "& fieldset": { borderColor: "transparent" } } }}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setShowConfirmPassword(p => !p)} edge="end">
          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={isPending}
              endIcon={!isPending && <ChevronRightIcon />}
              sx={{ 
                backgroundColor: BRAND_BLUE, 
                "&:hover": { backgroundColor: BRAND_BLUE_DARK }, 
                py: 2, 
                fontWeight: 700, 
                borderRadius: 0, 
                fontFamily: PRIMARY_FONT, 
                boxShadow: "none" 
              }}
            >
              {isPending ? <CircularProgress size={24} sx={{ color: "white" }} /> : "UPDATE PASSWORD"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default ResetPasswordPage