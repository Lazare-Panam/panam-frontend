import React from "react"
import { Box, Container, Typography, Link, Stack, Divider, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

const BRAND_BLUE = "#F9F9F9"
const FOOTER_DARK = "#01B0F0" // Deep charcoal

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: FOOTER_DARK, color: "white", pt: 8, pb: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* COLUMN 1: BRAND & MISSION */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, letterSpacing: 1 }}>
              PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Leading the global industry in precision-engineered instrumentation valves and fittings. Providing reliable flow control solutions for critical applications worldwide since 1999.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[LinkedInIcon, YouTubeIcon, FacebookIcon, TwitterIcon].map((Icon, index) => (
                <IconButton key={index} sx={{ color: "white", "&:hover": { color: BRAND_BLUE } }}>
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 2: QUICK LINKS */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Products
            </Typography>
            <Stack spacing={1.5}>
              {["Ball Valves", "Needle Valves", "DBB Valves", "Manifolds", "Fittings"].map(link => (
                <Link key={link} href="#" underline="none" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: BRAND_BLUE }, fontFamily: '"Inter", sans-serif', fontSize: "0.875rem" }}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 3: COMPANY */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3, fontFamily: '"Inter", sans-serif' }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              {["About Us", "Certifications", "Global Network", "Careers", "Contact"].map(link => (
                <Link key={link} href="#" underline="none" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: BRAND_BLUE }, fontFamily: '"Inter", sans-serif', fontSize: "0.875rem" }}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* COLUMN 4: CONTACT INFO */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3 }}>
              Global Headquarters
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 2, fontFamily: '"Inter", sans-serif', fontSize: "0.875rem" }}>
              Franklin's House,
              <br />
              Bicester, OX26 6JU
              <br />
              United Kingdom.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              <Link
                href="mailto:sales@panamvalves.co.uk"
                underline="hover"
                sx={{
                  color: BRAND_BLUE,
                  fontFamily: '"Inter", sans-serif',
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}>
                sales@panamvalves.co.uk
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* BOTTOM BAR */}
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Panam Engineers Ltd. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(item => (
              <Link key={item} href="#" variant="caption" underline="none" sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "white" } }}>
                {item}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
