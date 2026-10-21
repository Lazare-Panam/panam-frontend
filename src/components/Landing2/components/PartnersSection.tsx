import { Box, Container, Typography, Grid } from "@mui/material"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import { C, SHADOW, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const PartnersSection = () => {
  const partners: { name: string; logo: string; url: string; onBrand?: boolean }[] = [
    { name: "Thales Group", logo: "https://pblol2.blob.core.windows.net/panam-images/website-media/thales-logo.png", url: "https://www.thalesgroup.com/en" },
    { name: "UK Atomic Energy Authority", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/ukaea-logo.png", url: "https://www.ukaea.org/" },
    { name: "Excool", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/Excool-advanced-data-center-cooling.webp", url: "https://www.excool.com/" },
    { name: "Equisera", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/equisera-logo.png", url: "https://equisera.com/" },
    { name: "SM Gauge", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/SM-Gauge-Logo-Red.webp", url: "https://www.smgauge.co.uk/" },
    { name: "Fluid Power Scotland", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/Fps.avif", url: "https://www.fluidpowerscotland.co.uk/" },

    { name: "Storm Procurement", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/storm-logo.webp", url: "https://www.storm-procurement.com/" },
    { name: "R & G Group", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/logo.png", url: "https://www.rgfluidpower.com/", onBrand: true },
    { name: "Hydraulic Megastore", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/hydraulic-logo-white-320x79.webp", url: "https://www.hydraulicmegastore.com/" },
    { name: "Ram Universal", logo: "https://pblol2.blob.core.windows.net/panam-images/brands/ram-logo.png", url: "https://www.ramuniversal.co.uk/" },
    { name: "Domin", logo: "/brands/domin-logo-dark.svg", url: "https://domin.com/" },
    // Silver logo on transparent — shown on a Panam-blue backing so it stays visible on the white tile.
    { name: "Berkeley Stainless", logo: "/brands/berkeley-stainless-logo.webp", url: "https://www.berkeleystainless.co.uk/", onBrand: true },
  ]

  return (
    <Box component="section" sx={sectionSx("white")}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 3 }}>
            <Eyebrow>Our Partners</Eyebrow>
            <Typography variant="h2" sx={{ mt: 2, fontWeight: 800, color: C.ink, fontSize: { xs: "2.2rem", md: "2.7rem" }, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Trusted By
              <br />
              <Box component="span" sx={{ color: C.brand }}>
                Industry Leaders
              </Box>
            </Typography>
            <Box sx={{ mt: 3, width: 56, height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${C.brand}, ${C.brandDeep})` }} />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            {/* Logo wall: one rounded panel split by hairlines (gap shows the border colour) */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
                gap: "1px",
                bgcolor: C.border,
                border: `1px solid ${C.border}`,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: SHADOW.card,
              }}>
              {partners.map((partner, i) => (
                <Box
                  key={i}
                  component="a"
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    px: 2.5,
                    py: { xs: 3, md: 3.5 },
                    minHeight: { xs: 130, md: 150 },
                    bgcolor: C.white,
                    textDecoration: "none",
                    transition: "background-color 0.25s ease",
                    "&:hover": { bgcolor: C.tintBg },
                    "&:hover .partner-logo": { transform: "scale(1.06)" },
                    "&:hover .partner-name": { color: C.brandDark },
                    "&:hover .partner-arrow": { opacity: 1, transform: "none" },
                  }}>
                  <NorthEastRoundedIcon
                    className="partner-arrow"
                    sx={{ position: "absolute", top: 14, right: 14, fontSize: 18, color: C.brand, opacity: 0, transform: "translate(-4px, 4px)", transition: "all 0.25s ease" }}
                  />
                  <Box
                    className="partner-logo"
                    sx={{
                      width: partner.onBrand ? "auto" : "100%",
                      height: 60,
                      px: partner.onBrand ? 2.25 : 0,
                      borderRadius: "12px",
                      background: partner.onBrand ? `linear-gradient(120deg, ${C.brandDeep}, ${C.brand})` : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}>
                    <Box component="img" src={partner.logo} alt={partner.name} loading="lazy" sx={{ maxWidth: "100%", maxHeight: partner.onBrand ? "80%" : "100%", objectFit: "contain" }} />
                  </Box>
                  <Typography
                    className="partner-name"
                    sx={{ fontWeight: 600, color: C.muted, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.68rem", transition: "color 0.2s ease" }}>
                    {partner.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PartnersSection
