import React from "react"
import { Box, Container, Grid, Typography, Link, Stack, Divider, IconButton } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

const BRAND_BLUE = "#F9F9F9"
const FOOTER_DARK = "#01B0F0"

const SOCIAL_LINKS = [
  {
    Icon: LinkedInIcon,
    name: "LinkedIn",
    url: "https://uk.linkedin.com/company/panamvalves-ltd",
  },
  {
    Icon: YouTubeIcon,
    name: "YouTube",
    url: "https://www.youtube.com/@panamengineersltd",
  },
  {
    Icon: FacebookIcon,
    name: "Facebook",
    url: "https://www.facebook.com/PanamEngineers/",
  },
  {
    Icon: TwitterIcon,
    name: "Twitter",
    url: "https://twitter.com/panamvalves",
  },
]

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: FOOTER_DARK, color: "white", pt: 8, pb: 4, mt: 8 }}>
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 6, md: 24 },
          width: "100%",
        }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png"
              alt="Panam Valves Logo"
              sx={{
                height: 120,
                width: "auto",
                mb: 3,
                filter: "brightness(0) invert(1)",
                display: "block",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, fontSize: "1.1rem", fontFamily: '"Inter", sans-serif' }}>
              PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, mb: 2, fontFamily: '"Inter", sans-serif', fontSize: "0.75rem" }}>
              Precision-engineered instrumentation solutions for critical global infrastructure.
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {SOCIAL_LINKS.map(({ Icon, name, url }) => (
                <IconButton
                  key={name}
                  aria-label={name}
                  size="small"
                  component="a" // This makes the button behave like an <a> tag
                  href={url}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "#01B0F0", // Use the blue for hover
                      transform: "translateY(-2px)", // Subtle lift effect
                      transition: "all 0.2s",
                    },
                  }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 2.4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, fontFamily: '"Inter", sans-serif', textTransform: "uppercase", letterSpacing: 1 }}>
              Products
            </Typography>
            <Stack spacing={1}>
              {["Valves", "Manifolds", "Hydrogen", "Double Block And Bleed", "Fittings", "Filters"].map(link => (
                <Link key={link} href="#" underline="none" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: BRAND_BLUE }, fontFamily: '"Inter", sans-serif', fontSize: "0.8rem" }}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, fontFamily: '"Inter", sans-serif', textTransform: "uppercase", letterSpacing: 1 }}>
              Support
            </Typography>
            <Stack spacing={1}>
              {["Contact Us", "Global Network", "Find a Distributor", "Training", "Quality", "Careers"].map(link => (
                <Link key={link} href="#" underline="none" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: BRAND_BLUE }, fontFamily: '"Inter", sans-serif', fontSize: "0.8rem" }}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid> */}

          <Grid size={{ xs: 12, sm: 4, md: 2.4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 1, fontFamily: '"Inter", sans-serif' }}>
              Headquarters
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 2, fontFamily: '"Inter", sans-serif', fontSize: "0.8rem", lineHeight: 1.6 }}>
              Ground Floor, St Edburgs Hall
              <br />
              Priory Road, Bicester, OX26 6BL
              <br />
              United Kingdom.
            </Typography>
            <Box sx={{ mb: 1 }}>
              <Link
                href="tel:+441869226300"
                underline="none"
                sx={{
                  color: BRAND_BLUE,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  "&:hover": { textDecoration: "underline" },
                }}>
                +44 (0) 7369243459
              </Link>
            </Box>
            <Link
              href="mailto:sales@panamvalves.co.uk"
              underline="hover"
              sx={{
                color: BRAND_BLUE,
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.8rem",
                fontWeight: 700,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}>
              sales@panamvalves.co.uk
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 2.4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 1, fontFamily: '"Inter", sans-serif' }}>
              Where are we?
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "120px",
                borderRadius: "0",
                overflow: "hidden",
                mb: 2,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
              <iframe title="Panam UK Location" width="100%" height="100%" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.672403623049!2d-1.1554566!3d51.899757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e9389e02377b%3A0x89796e6d5952e399!2sPerch%20Coworking!5e0!3m2!1sen!2suk!4v1700000000000" allowFullScreen></iframe>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}>
            © {new Date().getFullYear()} Panam Valves Ltd. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(item => (
              <Link key={item} href="#" variant="caption" underline="none" sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "white" }, fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}>
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
