import React from "react"
import { Box, Container, Grid, Typography, Link, Stack, Divider, IconButton, useMediaQuery, useTheme } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

const BRAND_BLUE = "#F9F9F9"
const FOOTER_DARK = "#01B0F0"

const SOCIAL_LINKS = [
  { Icon: LinkedInIcon, name: "LinkedIn", url: "https://uk.linkedin.com/company/panamvalves-ltd" },
  { Icon: YouTubeIcon, name: "YouTube", url: "https://www.youtube.com/@panamengineersltd" },
  { Icon: FacebookIcon, name: "Facebook", url: "https://www.facebook.com/PanamEngineers/" },
  { Icon: TwitterIcon, name: "Twitter", url: "https://twitter.com/panamvalves" },
]

const PRODUCT_LINKS = ["Valves", "Manifolds", "Hydrogen", "Double Block & Bleed", "Fittings", "Filters"]

const sectionHeading = {
  fontWeight: 700,
  mb: 2,
  fontFamily: '"Inter", sans-serif',
  textTransform: "uppercase" as const,
  letterSpacing: 1,
  fontSize: "0.72rem",
  color: "rgba(255,255,255,0.45)",
}

const bodyText = {
  color: "rgba(255,255,255,0.65)",
  fontFamily: '"Inter", sans-serif',
  fontSize: "0.82rem",
  lineHeight: 1.7,
}

const MapEmbed = ({ height }: { height: number }) => (
  <Box sx={{ width: "100%", height, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
    <iframe
      title="Panam UK Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.672403623049!2d-1.1554566!3d51.899757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e9389e02377b%3A0x89796e6d5952e399!2sPerch%20Coworking!5e0!3m2!1sen!2suk!4v1700000000000"
      allowFullScreen
    />
  </Box>
)

const SocialIcons = () => (
  <Stack direction="row" spacing={0.5}>
    {SOCIAL_LINKS.map(({ Icon, name, url }) => (
      <IconButton
        key={name}
        aria-label={name}
        size="small"
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: BRAND_BLUE, transform: "translateY(-2px)", transition: "all 0.2s" } }}
      >
        <Icon fontSize="small" />
      </IconButton>
    ))}
  </Stack>
)

const Footer: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))        // < 640px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")) // 640–1280px

  return (
    <Box sx={{ bgcolor: FOOTER_DARK, color: "white", pt: { xs: 6, sm: 8, md: 10 }, pb: { xs: 4, md: 5 }, mt: 8 }}>
      <Container
        maxWidth={false}
        sx={{ px: { xs: 3, sm: 5, md: 8, lg: 14, xl: 22 } }}
      >

        {/* ── MOBILE (< 600px) ─────────────────────────────── */}
        {isMobile && (
          <Box>
            {/* Brand block */}
            <Box sx={{ mb: 5 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png"
                alt="Panam Valves Logo"
                sx={{ height: 65, width: "auto", mb: 2, filter: "brightness(0) invert(1)", display: "block" }}
              />
              <Typography sx={{ ...bodyText, mb: 2, fontSize: "0.78rem" }}>
                Precision-engineered instrumentation solutions for critical global infrastructure.
              </Typography>
              <SocialIcons />
            </Box>

            {/* 2-col: Products | Contact */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mb: 5 }}>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
                <Stack spacing={0.75}>
                  {PRODUCT_LINKS.map(link => (
                    <Link key={link} href="#" underline="none" sx={{ ...bodyText, fontSize: "0.78rem", "&:hover": { color: "white" } }}>
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Contact</Typography>
                <Typography sx={{ ...bodyText, mb: 1.5, fontSize: "0.78rem" }}>
                  St Edburgs Hall<br />Bicester, OX26 6BL<br />United Kingdom
                </Typography>
                <Link href="tel:+441869226300" underline="none" sx={{ display: "block", color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", fontWeight: 600, mb: 0.5 }}>
                  +44 (0) 7369243459
                </Link>
                <Link href="mailto:marketing@panamvalve.com" underline="none" sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", fontWeight: 600, wordBreak: "break-all" }}>
                  marketing@panamvalve.com
                </Link>
              </Box>
            </Box>

            {/* Map full width */}
            <Box sx={{ mb: 5 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Where are we?</Typography>
              <MapEmbed height={190} />
            </Box>
          </Box>
        )}

        {/* ── TABLET (600–900px) ───────────────────────────── */}
        {isTablet && (
          <Box>
            {/* Row 1: Logo + tagline side by side */}
            <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 5, alignItems: "flex-start", mb: 6 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png"
                alt="Panam Valves Logo"
                sx={{ height: 85, width: "auto", filter: "brightness(0) invert(1)", display: "block" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, fontSize: "1rem", fontFamily: '"Inter", sans-serif' }}>
                  PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
                </Typography>
                <Typography sx={{ ...bodyText, mb: 2, fontSize: "0.8rem" }}>
                  Precision-engineered instrumentation solutions for critical global infrastructure.
                </Typography>
                <SocialIcons />
              </Box>
            </Box>

            {/* Row 2: 3 columns */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, mb: 5 }}>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
                <Stack spacing={0.9}>
                  {PRODUCT_LINKS.map(link => (
                    <Link key={link} href="#" underline="none" sx={{ ...bodyText, "&:hover": { color: "white" } }}>
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Headquarters</Typography>
                <Typography sx={{ ...bodyText, mb: 1.5 }}>
                  Ground Floor, St Edburgs Hall<br />Priory Road, Bicester<br />OX26 6BL, United Kingdom
                </Typography>
                <Link href="tel:+441869226300" underline="none" sx={{ display: "block", color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, mb: 0.5 }}>
                  +44 (0) 7369243459
                </Link>
                <Link href="mailto:marketing@panamvalve.com" underline="none" sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700 }}>
                  marketing@panamvalve.com
                </Link>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Where are we?</Typography>
                <MapEmbed height={150} />
              </Box>
            </Box>
          </Box>
        )}

        {/* ── DESKTOP (> 900px) ────────────────────────────── */}
        {!isMobile && !isTablet && (
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid size={{ md: 2 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png"
                alt="Panam Valves Logo"
                sx={{ height: 110, width: "auto", filter: "brightness(0) invert(1)", display: "block" }}
              />
            </Grid>

            <Grid size={{ md: 2.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5, fontSize: "1rem", fontFamily: '"Inter", sans-serif', letterSpacing: 0.5 }}>
                PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
              </Typography>
              <Typography sx={{ ...bodyText, mb: 2.5, fontSize: "0.78rem" }}>
                Precision-engineered instrumentation solutions for critical global infrastructure.
              </Typography>
              <SocialIcons />
              <Box sx={{ mt: 4 }}>
    <Typography variant="subtitle2" sx={{ ...sectionHeading, mb: 1.5, color: "#ffff" }}>
      Accreditations
    </Typography>
    
    <Stack spacing={2}>
      {/* Accreditation Item 1 */}
      <Stack direction="row" alignItems="center" spacing={1.5}>
        <Box 
          component="img"
          src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743216/BFPA_300-removebg-preview_ee8kgx.png"
          sx={{ height: 65, width: "auto", }}
        />
        <Box 
          component="img"
          src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1773743101/HEA_SumbolAsset-13_etp9iy.svg"
          sx={{ height: 32, width: "auto" }}
        />
        
      </Stack>

    </Stack>
  </Box>
            </Grid>

            <Grid size={{ md: 2 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
              <Stack spacing={1}>
                {PRODUCT_LINKS.map(link => (
                  <Link key={link} href="#" underline="none" sx={{ ...bodyText, "&:hover": { color: "white" } }}>
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ md: 2.5 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Headquarters</Typography>
              <Typography sx={{ ...bodyText, mb: 2 }}>
                Ground Floor, St Edburgs Hall<br />Priory Road, Bicester, OX26 6BL<br />United Kingdom
              </Typography>
              <Link href="tel:+441869226300" underline="none" sx={{ display: "block", color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, mb: 0.5, "&:hover": { textDecoration: "underline" } }}>
                +44 (0) 7369243459
              </Link>
              <Link href="mailto:marketing@panamvalve.com" underline="none" sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, "&:hover": { textDecoration: "underline" } }}>
                marketing@panamvalve.com
              </Link>
            </Grid>

            <Grid size={{ md: 3 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Where are we?</Typography>
              <MapEmbed height={150} />
            </Grid>
          </Grid>
        )}

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1.5}
          sx={{ mt: 3 }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}>
            © {new Date().getFullYear()} Panam Valves Ltd. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(item => (
              <Link key={item} href="#" variant="caption" underline="none" sx={{ color: "rgba(255,255,255,0.35)", "&:hover": { color: "white" }, fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}>
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