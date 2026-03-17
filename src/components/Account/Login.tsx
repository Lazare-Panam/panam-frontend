import React, { useState } from "react"
import { Box, Container, Divider, Typography, Link } from "@mui/material"
import LoginForm from "./components/LoginForm"
import RegisterInfo from "./components/RegisterInfo"
import TermsModal from "../Auth/Enquiry/AccessTerms"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"
const BRAND_BLUE_LIGHT = "#E6F7FE"

const Login: React.FC = () => {

  const [showTerms, setShowTerms] = useState(false);

  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 12 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 8, md: 12 },
            alignItems: "stretch",
          }}>
          {/* --- LEFT: LOGIN + LEGAL TEXT --- */}
          <Box sx={{ flex: 1 }}>
            <LoginForm />

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 4,
                fontFamily: PRIMARY_FONT,
                color: "#888",
                lineHeight: 1.6,
              }}>
              By signing in or registering, you confirm that you are agreeing to the Panam Valves{" "}
              <Link
                component="button"
                onClick={() => setShowTerms(true)}
                sx={{
                  color: BRAND_BLUE,
                  fontWeight: 600,
                  fontSize: "inherit",
                  textDecoration: "underline",
                  verticalAlign: "baseline",
                }}>
                Terms of Use
              </Link>{" "}
              and Privacy Notice.
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              borderColor: BRAND_BLUE_LIGHT,
              borderWidth: 1,
            }}
          />
          <RegisterInfo />
        </Box>
      </Container>
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </Box>
  )
}

export default Login
