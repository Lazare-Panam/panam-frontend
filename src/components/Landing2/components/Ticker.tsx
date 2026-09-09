import { Box, Typography, Link as MuiLink } from "@mui/material"
import { keyframes } from "@mui/system"

const BRAND_BLUE = "#01B0F0"
// A slightly lighter, softer tint of your brand blue
const LIGHT_BRAND_BLUE = "#E6F7FF"
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const partners = [
  { name: "Thales Group", img: "https://pblol2.blob.core.windows.net/panam-images/website-media/thales-logo.png", url: "https://www.thalesgroup.com/en" },
  { name: "R & G Group", img: "https://pblol2.blob.core.windows.net/panam-images/brands/logo.png", url: "https://www.rgfluidpower.com/" },
  { name: "Hydraulic Megastore", img: "https://pblol2.blob.core.windows.net/panam-images/brands/hydraulic-logo-white-320x79.webp", url: "https://www.hydraulicmegastore.com/" },
  { name: "Ram Universal", img: "https://pblol2.blob.core.windows.net/panam-images/brands/ram-logo.png", url: "https://www.ramuniversal.co.uk/" },
  { name: "UK Atomic Energy Authority", img: "https://pblol2.blob.core.windows.net/panam-images/brands/ukaea-logo.png", url: "https://www.ukaea.org/" },
  { name: "Excool", img: "https://pblol2.blob.core.windows.net/panam-images/brands/excool-logo-white.webp", url: "https://www.excool.com/" },
  { name: "Equisera", img: "https://pblol2.blob.core.windows.net/panam-images/brands/Equisera-logo-narrow-crop-1024x193.png", url: "https://equisera.com/" },
  { name: "SM Gauge", img: "https://pblol2.blob.core.windows.net/panam-images/brands/SM-Gauge-Logo-Red.webp", url: "https://www.smgauge.co.uk/" },
  { name: "Fluid Power Scotland", img: "https://pblol2.blob.core.windows.net/panam-images/brands/Fps.avif", url: "https://www.fluidpowerscotland.co.uk/" },
  { name: "Rubix", img: "https://pblol2.blob.core.windows.net/panam-images/brands/rubix-logo.svg", url: "https://rubix.com/" },
  { name: "Storm Procurement", img: "https://pblol2.blob.core.windows.net/panam-images/brands/storm-logo.webp", url: "https://www.storm-procurement.com/" },
]


const Ticker = () => {
  const duplicatedPartners = [...partners, ...partners]

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        bgcolor: BRAND_BLUE, // Lightest shade of Panam blue
        py: 2.5,
        borderTop: `1px solid ${BRAND_BLUE}`,
        borderBottom: `1px solid ${BRAND_BLUE}`,
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          width: 100,
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
        },
        "&::before": { left: 0, background: `linear-gradient(to right, ${LIGHT_BRAND_BLUE}, transparent)` },
        "&::after": { right: 0, background: `linear-gradient(to left, ${LIGHT_BRAND_BLUE}, transparent)` },
      }}>
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          animation: `${scroll} 40s linear infinite`,
          "&:hover": { animationPlayState: "paused" },
        }}>
        {duplicatedPartners.map((partner, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <MuiLink
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                px: 5,
                gap: 2,
                textDecoration: "none",
                filter: "grayscale(0%)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  cursor: "pointer",
                },
              }}>
              <Box
                component="img"
                src={partner.img}
                alt={partner.name}
                loading="lazy"
                sx={{
                  height: 72,
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 800,
                  color: "#ffff", // Dark blue for contrast on light blue
                  whiteSpace: "nowrap",
                  letterSpacing: 0.5,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                }}>
                {partner.name}
              </Typography>
            </MuiLink>

            <Typography
              sx={{
                color: BRAND_BLUE,
                fontSize: "10px",
                userSelect: "none",
                opacity: 0.5,
              }}>
              &#9670;
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Ticker
