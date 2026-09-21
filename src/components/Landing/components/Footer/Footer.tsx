import React from "react"
import { Box, Container, Grid, Typography, Link, Stack, Divider, IconButton, useMediaQuery, useTheme } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

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

const LocationLink = () => (
  <Box
    component="a"
    href="https://maps.google.com/?q=St+Edburgs+Hall,+Priory+Road,+Bicester,+OX26+6BL"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, textDecoration: "none", "&:hover": { opacity: 0.8 } }}
  >
    <LocationOnIcon sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }} />
    <Typography sx={{ ...bodyText, color: "rgba(255,255,255,0.6)", fontSize: "0.78rem" }}>Bicester, United Kingdom</Typography>
  </Box>
)

const SocialIcons = () => (
  <Stack direction="row" spacing={0.5}>
    {SOCIAL_LINKS.map(({ Icon, name, url }) => (
      <IconButton
        key={name}
        aria-label={`Panam Valves on ${name}`}
        title={`Panam Valves on ${name}`}
        size="small"
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: BRAND_BLUE, transform: "translateY(-2px)", transition: "all 0.2s" } }}
      >
        <Icon fontSize="small" />
        {/* Real anchor text for crawlers (SE Ranking flags icon-only links as empty anchors);
            visually hidden so the footer still shows just the icon. */}
        <Box
          component="span"
          sx={{ position: "absolute", width: 1, height: 1, p: 0, m: "-1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}
        >
          Panam Valves on {name}
        </Box>
      </IconButton>
    ))}
  </Stack>
)

const Footer: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  return (
    <Box id="site-footer" sx={{ bgcolor: FOOTER_DARK, color: "white", pt: { xs: 6, sm: 8, md: 10 }, pb: { xs: 4, md: 5 }, mt: 8 }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 5, md: 8, lg: 14, xl: 22 } }}>

        {/* ── MOBILE (< 600px) ─────────────────────────────── */}
        {isMobile && (
          <Box>
            <Box sx={{ mb: 5 }}>
              <Box component="img" src="https://pblol2.blob.core.windows.net/panam-images/website-media/panam-no-bg.png" alt="Panam Valves Logo" sx={{ height: 65, width: "auto", mb: 2, filter: "brightness(0) invert(1)", display: "block" }} />
              <Typography sx={{ ...bodyText, mb: 2, fontSize: "0.78rem" }}>Precision-engineered instrumentation solutions for critical global infrastructure.</Typography>
              <SocialIcons />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mb: 5 }}>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
                <Stack spacing={0.75}>
                  {PRODUCT_LINKS.map(link => (
                    <Link key={link} href="#" underline="none" sx={{ ...bodyText, fontSize: "0.78rem", "&:hover": { color: "white" } }}>{link}</Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Contact</Typography>
                <Typography sx={{ ...bodyText, mb: 1.5, fontSize: "0.78rem" }}>
                  St Edburgs Hall<br />Bicester, OX26 6BL<br />United Kingdom
                </Typography>
                <LocationLink />
                <Box sx={{ mt: 1.5 }}>
                  <Link href="tel:+447369243459" underline="none" sx={{ display: "block", color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", fontWeight: 600, mb: 0.5 }}>
                    +44 (0) 7369243459
                  </Link>
                  <Link href="mailto:marketing@panamvalve.com" underline="none" sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", fontWeight: 600, wordBreak: "break-all", textTransform: "none" }}>
                    marketing@panamvalve.com
                  </Link>
                </Box>
                <Link href="/delivery-returns" underline="none" sx={{ display: "inline-block", mt: 1.5, ...bodyText, fontSize: "0.78rem", "&:hover": { color: "white" } }}>
                  Delivery & Returns
                </Link>
              </Box>
            </Box>
          </Box>
        )}

        {/* ── TABLET (600–1280px) ───────────────────────────── */}
        {isTablet && (
          <Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 5, alignItems: "flex-start", mb: 6 }}>
              <Box component="img" src="https://pblol2.blob.core.windows.net/panam-images/website-media/panam-no-bg.png" alt="Panam Valves Logo" sx={{ height: 85, width: "auto", filter: "brightness(0) invert(1)", display: "block" }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 1, fontSize: "1rem", fontFamily: '"Inter", sans-serif' }}>
                  PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
                </Typography>
                <Typography sx={{ ...bodyText, mb: 2, fontSize: "0.8rem" }}>Precision-engineered instrumentation solutions for critical global infrastructure.</Typography>
                <SocialIcons />
              </Box>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, mb: 5 }}>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
                <Stack spacing={0.9}>
                  {PRODUCT_LINKS.map(link => (
                    <Link key={link} href="#" underline="none" sx={{ ...bodyText, "&:hover": { color: "white" } }}>{link}</Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={sectionHeading}>Headquarters</Typography>
                <Typography sx={{ ...bodyText, mb: 1.5 }}>
                  Ground Floor, St Edburgs Hall<br />Priory Road, Bicester<br />OX26 6BL, United Kingdom
                </Typography>
                <LocationLink />
                <Box sx={{ mt: 1.5 }}>
                  <Link href="tel:+447369243459" underline="none" sx={{ display: "block", color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, mb: 0.5 }}>
                    +44 (0) 7369243459
                  </Link>
                  <Link href="mailto:marketing@panamvalve.com" underline="none" sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, textTransform: "none" }}>
                    marketing@panamvalve.com
                  </Link>
                </Box>
                <Link href="/delivery-returns" underline="none" sx={{ display: "inline-block", mt: 1.5, ...bodyText, "&:hover": { color: "white" } }}>
                  Delivery & Returns
                </Link>
              </Box>
            </Box>
          </Box>
        )}

        {/* ── DESKTOP (> 1280px) ────────────────────────────── */}
        {!isMobile && !isTablet && (
          <Grid container spacing={3} sx={{ mb: 6 }}>

            {/* Col 1 — Logo */}
            <Grid size={{ md: 3 }}>
              <Box component="img" src="https://pblol2.blob.core.windows.net/panam-images/website-media/panam-no-bg.png" alt="Panam Valves Logo" sx={{ height: 110, width: "auto", filter: "brightness(0) invert(1)", display: "block" }} />
            </Grid>

            {/* Col 2 — Brand + Socials */}
            <Grid size={{ md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5, fontSize: "1rem", fontFamily: '"Inter", sans-serif', letterSpacing: 0.5 }}>
                PANAM <span style={{ color: BRAND_BLUE }}>VALVES</span>
              </Typography>
              <Typography sx={{ ...bodyText, mb: 2.5, fontSize: "0.78rem" }}>
                Precision-engineered instrumentation solutions for critical global infrastructure.
              </Typography>
              <SocialIcons />
              {/* <Box sx={{ mt: 2 }}>
                <Box component="img" src="https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/certificates/HEA_SumbolAsset-13%20(1).png" sx={{ height: 40, width: "auto", filter: "brightness(0) invert(1) opacity(0.8)" }} />
              </Box> */}
            </Grid>

            {/* Col 3 — Products */}
            <Grid size={{ md: 3 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Products</Typography>
              <Stack spacing={1}>
                {PRODUCT_LINKS.map(link => (
                  <Link key={link} href="#" underline="none" sx={{ ...bodyText, "&:hover": { color: "white" } }}>{link}</Link>
                ))}
              </Stack>
            </Grid>

            {/* Col 4 — Headquarters with icons */}
            <Grid size={{ md: 3 }}>
              <Typography variant="subtitle2" sx={sectionHeading}>Headquarters</Typography>
              <Typography sx={{ ...bodyText, mb: 2 }}>
                Ground Floor, St Edburgs Hall<br />
                Priory Road, Bicester, OX26 6BL<br />
                United Kingdom
              </Typography>

              <Stack spacing={1.25}>
                {/* Location */}
                <Box
                  component="a"
                  href="https://maps.google.com/?q=St+Edburgs+Hall,+Priory+Road,+Bicester,+OX26+6BL"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", "&:hover": { opacity: 0.8 } }}
                >
                  <LocationOnIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }} />
                  <Typography sx={{ ...bodyText, color: "rgba(255,255,255,0.7)", fontSize: "0.78rem" }}>
                    Bicester, United Kingdom
                  </Typography>
                </Box>

                {/* Phone */}
                <Box
                  component="a"
                  href="tel:+447369243459"
                  sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", "&:hover": { opacity: 0.8 } }}
                >
                  <PhoneIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }} />
                  <Typography sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700 }}>
                    +44 (0) 7369243459
                  </Typography>
                </Box>

                {/* Email */}
                <Box
                  component="a"
                  href="mailto:marketing@panamvalve.com"
                  sx={{ display: "inline-flex", alignItems: "center", gap: 1, textDecoration: "none", "&:hover": { opacity: 0.8 } }}
                >
                  <EmailIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }} />
                  <Typography sx={{ color: "white", fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", fontWeight: 700, textTransform: "none" }}>
                    marketing@panamvalve.com
                  </Typography>
                </Box>

                {/* Delivery & Returns */}
                <Link href="/delivery-returns" underline="none" sx={{ ...bodyText, fontSize: "0.78rem", "&:hover": { color: "white" } }}>
                  Delivery & Returns
                </Link>
              </Stack>
            </Grid>

          </Grid>
        )}

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={1.5} sx={{ mt: 3 }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}>
            © {new Date().getFullYear()} Panam Valves Ltd. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {["Privacy Policy", "Terms of Use", "Delivery & Returns", "Sitemap"].map(item => (
              <Link
                key={item}
                href={item === "Delivery & Returns" ? "/delivery-returns" : item === "Sitemap" ? "/sitemap" : "#"}
                variant="caption"
                underline="none"
                sx={{ color: "rgba(255,255,255,0.35)", "&:hover": { color: "white" }, fontSize: "0.7rem", fontFamily: '"Inter", sans-serif' }}
              >
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