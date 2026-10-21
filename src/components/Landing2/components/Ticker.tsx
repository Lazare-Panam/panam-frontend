import { Box, Typography } from "@mui/material"
import { keyframes } from "@mui/system"
import { C } from "../homeTokens"

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

// `onBrand`: logo is drawn in white, so it sits on a Panam-blue pill to stay visible.
// Entries without `img` show an initials badge; entries without `url` render without a link.
const partners: { name: string; img?: string; url?: string; onBrand?: boolean; initials?: string }[] = [
  { name: "Thales Group", img: "https://pblol2.blob.core.windows.net/panam-images/website-media/thales-logo.png", url: "https://www.thalesgroup.com/en" },
  { name: "R & G Group", img: "https://pblol2.blob.core.windows.net/panam-images/brands/logo.png", url: "https://www.rgfluidpower.com/", onBrand: true },
  { name: "Hydraulic Megastore", img: "https://pblol2.blob.core.windows.net/panam-images/brands/hydraulic-logo-white-320x79.webp", url: "https://www.hydraulicmegastore.com/", onBrand: true },
  { name: "Ram Universal", img: "https://pblol2.blob.core.windows.net/panam-images/brands/ram-logo.png", url: "https://www.ramuniversal.co.uk/" },
  { name: "UK Atomic Energy Authority", img: "https://pblol2.blob.core.windows.net/panam-images/brands/ukaea-logo.png", url: "https://www.ukaea.org/" },
  { name: "Excool", img: "https://pblol2.blob.core.windows.net/panam-images/brands/Excool-advanced-data-center-cooling.webp", url: "https://www.excool.com/" },
  { name: "Equisera", img: "https://pblol2.blob.core.windows.net/panam-images/brands/Equisera-logo-narrow-crop-1024x193.png", url: "https://equisera.com/", onBrand: true },
  { name: "SM Gauge", img: "https://pblol2.blob.core.windows.net/panam-images/brands/SM-Gauge-Logo-Red.webp", url: "https://www.smgauge.co.uk/" },
  { name: "Fluid Power Scotland", img: "https://pblol2.blob.core.windows.net/panam-images/brands/Fps.avif", url: "https://www.fluidpowerscotland.co.uk/" },
  { name: "Berkeley Stainless", img: "/brands/berkeley-stainless-logo.webp", url: "https://www.berkeleystainless.co.uk/", onBrand: true },
  { name: "Storm Procurement", img: "https://pblol2.blob.core.windows.net/panam-images/brands/storm-logo.webp", url: "https://www.storm-procurement.com/" },
  { name: "Domin", img: "/brands/domin-logo-dark.svg", url: "https://domin.com/" },
]

const Ticker = () => {
  const looped = [...partners, ...partners]

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: { xs: 3, md: 3.5 },
        bgcolor: C.surface,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}>
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          animation: `${scroll} 50s linear infinite`,
          "&:hover": { animationPlayState: "paused" },
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}>
        {looped.map((p, i) => {
          const linkProps = p.url ? { component: "a" as const, href: p.url, target: "_blank", rel: "noopener noreferrer" } : {}
          return (
            <Box
              key={i}
              {...linkProps}
              aria-hidden={i >= partners.length ? true : undefined}
              tabIndex={i >= partners.length ? -1 : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.75,
                mx: 1,
                pl: 1,
                pr: 2.5,
                py: 1,
                borderRadius: "999px",
                textDecoration: "none",
                bgcolor: C.white,
                border: `1px solid ${C.border}`,
                boxShadow: "0 1px 2px rgba(15,34,54,0.04), 0 6px 16px rgba(15,34,54,0.05)",
                transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": { borderColor: "rgba(1,176,240,0.45)", transform: "translateY(-2px)", boxShadow: "0 10px 24px rgba(1,176,240,0.15)" },
              }}>
              <Box
                sx={{
                  height: 46,
                  minWidth: p.img ? 96 : 46,
                  px: p.img ? 1.75 : 0,
                  borderRadius: "999px",
                  background: p.onBrand || !p.img ? `linear-gradient(120deg, ${C.brandDeep}, ${C.brand})` : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {p.img ? (
                  <Box component="img" src={p.img} alt={p.name} loading="lazy" sx={{ height: 32, maxWidth: 150, width: "auto", objectFit: "contain" }} />
                ) : (
                  <Typography sx={{ color: C.white, fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.02em" }}>{p.initials}</Typography>
                )}
              </Box>
              <Typography sx={{ fontWeight: 600, color: C.muted, whiteSpace: "nowrap", letterSpacing: "0.04em", fontSize: "0.72rem", textTransform: "uppercase" }}>
                {p.name}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Ticker
