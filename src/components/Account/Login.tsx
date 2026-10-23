import React, { useState } from "react"
import { Box, Container, Grid, Typography, Link } from "@mui/material"
import LoginForm from "./components/LoginForm"
import RegisterInfo from "./components/RegisterInfo"
import TermsModal from "../Auth/Enquiry/AccessTerms"
import { useNavigate } from "react-router-dom"
import { C, FONT, GRADIENT } from "../Landing2/homeTokens"

// One split card in the homepage style (same shell as the enquiry page): sign-in form on white,
// new-customer pitch on the brand-blue panel. On phones the form comes first.
const Login: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false)
  const navigate = useNavigate()

  return (
    <Box component="section" sx={{ background: GRADIENT.heroBg, py: { xs: 4, md: 8 }, fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: C.white, borderRadius: "24px", border: `1px solid ${C.border}`, boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px rgba(15,34,54,0.10)", overflow: "hidden" }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6.5 }} sx={{ p: { xs: 3, sm: 5, md: 7 } }}>
              <LoginForm />

              <Typography sx={{ mt: 4, pt: 3, borderTop: `1px solid ${C.border}`, fontSize: "0.8rem", color: C.muted, lineHeight: 1.6 }}>
                By signing in or registering, you confirm that you are agreeing to the Panam Valves{" "}
                <Link component="button" type="button" onClick={() => setShowTerms(true)} sx={{ color: C.brandDark, fontWeight: 600, fontSize: "inherit", fontFamily: "inherit", textDecoration: "none", verticalAlign: "baseline", "&:hover": { textDecoration: "underline" } }}>
                  Terms of Use
                </Link>{" "}
                and Privacy Notice.
              </Typography>

              <Typography sx={{ mt: 1.5, fontSize: "0.8rem", color: "#94A3B8" }}>
                Are you an administrator?{" "}
                <Link component="button" type="button" onClick={() => navigate("/adminLogin")} sx={{ color: C.muted, fontSize: "inherit", fontFamily: "inherit", textDecoration: "none", verticalAlign: "baseline", "&:hover": { textDecoration: "underline", color: C.brandDark } }}>
                  Admin Login
                </Link>
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: "flex" }}>
              <RegisterInfo />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </Box>
  )
}

export default Login
