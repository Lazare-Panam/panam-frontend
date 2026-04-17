import React, { useState } from "react"
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  InputAdornment, 
  IconButton, 
  Alert, 
  CircularProgress 
} from "@mui/material"
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { loginAdmin } from "../../../api/adminClient"// Adjust path as needed

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const AdminLogin: React.FC = () => {
  const navigate = useNavigate()

  // State for form visibility and data
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "" })

  // TanStack Query Mutation
  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      // With cookie-based auth, browser handles the cookie automatically
      console.log("Admin login success:", data)
      navigate("/adminDashboard")
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData)
  }

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 0,
            border: "1px solid #E2E8F0",
            textAlign: "center",
          }}>
          {/* Admin Icon Area */}
          <Box
            sx={{
              backgroundColor: BRAND_BLUE,
              width: 56,
              height: 56,
              borderRadius: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}>
            <LockOutlined sx={{ color: "#fff" }} />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: PRIMARY_FONT,
              fontWeight: 800,
              color: "#1E293B",
              mb: 1,
            }}>
            Admin Portal
          </Typography>

          <Typography variant="body2" sx={{ color: "#64748B", mb: 4, fontFamily: PRIMARY_FONT }}>
            Please enter your credentials to access the management dashboard.
          </Typography>

          {/* TanStack Query handles the error state */}
          {isError && (
            <Alert severity="error" sx={{ mb: 3, textAlign: "left" }}>
              {(error as any)?.response?.data?.message || "Invalid administrator credentials."}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField 
              fullWidth 
              label="Email Address" 
              name="email" 
              type="email" 
              variant="outlined" 
              margin="normal" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} 
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isPending}
              sx={{
                mt: 4,
                py: 1.8,
                backgroundColor: BRAND_BLUE,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                borderRadius: 0,
                boxShadow: `0 4px 14px 0 rgba(1, 176, 240, 0.39)`,
                "&:hover": {
                  backgroundColor: "#0190c8",
                  boxShadow: `0 6px 20px rgba(1, 176, 240, 0.23)`,
                },
              }}>
              {isPending ? <CircularProgress size={24} color="inherit" /> : "Sign In to Admin"}
            </Button>
          </Box>
        </Paper>

        <Typography variant="caption" sx={{ display: "block", mt: 3, textAlign: "center", color: "#94A3B8" }}>
          © {new Date().getFullYear()} Panam Valves Admin System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default AdminLogin