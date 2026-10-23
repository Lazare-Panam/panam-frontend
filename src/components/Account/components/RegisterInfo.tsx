import React from "react"
import { Box, Typography, Button, Stack } from "@mui/material"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined"
import { useNavigate } from "react-router-dom"
import { C } from "../../Landing2/homeTokens"

// Brand-blue panel beside the sign-in form (same gradient and rings as the enquiry side panel)
const RegisterInfo: React.FC = () => {
  const navigate = useNavigate()
  const benefits = ["Expedited procurement and order tracking", "Customizable engineering specifications", "Full access to technical data sheets and CAD files", "Direct connection to our global network of experts", "Historical quote and project management tools"]

  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        color: C.white,
        p: { xs: 3, sm: 5, md: 6 },
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(160deg, ${C.brand} 0%, ${C.brandDark} 45%, ${C.brandDeep} 100%)`,
        "&::before": { content: '""', position: "absolute", width: 260, height: 260, borderRadius: "50%", top: -130, right: -100, border: "36px solid rgba(255,255,255,0.06)" },
        "&::after": { content: '""', position: "absolute", width: 320, height: 320, borderRadius: "50%", bottom: -190, left: -120, border: "40px solid rgba(255,255,255,0.06)" },
      }}>
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.85 }}>Don't have an account?</Typography>
        <Typography component="h2" sx={{ mt: 1.5, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, fontSize: { xs: "1.7rem", md: "2rem" } }}>
          New Customer
        </Typography>
        <Typography sx={{ mt: 1.25, opacity: 0.9, fontSize: "0.98rem", lineHeight: 1.65 }}>Join the Panam Valves ecosystem for engineering excellence.</Typography>

        <Stack spacing={1.5} sx={{ mt: 3.5 }}>
          {benefits.map(text => (
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
          <Button
            fullWidth
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={() => navigate("/register")}
            sx={{
              py: 1.5,
              borderRadius: "12px",
              bgcolor: C.white,
              color: C.brandDeep,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 10px 24px rgba(3,40,70,0.25)",
              transition: "all 0.2s ease",
              "&:hover": { bgcolor: "#F2FAFE", transform: "translateY(-1px)" },
              "& .MuiButton-endIcon": { transition: "transform 0.2s ease" },
              "&:hover .MuiButton-endIcon": { transform: "translateX(3px)" },
            }}>
            Create account
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterInfo
