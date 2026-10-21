import type { SxProps, Theme } from "@mui/material"

// Shared design tokens for the homepage sections, so every block uses the same colours,
// radii, shadows, spacing and button styles instead of each file inventing its own.
export const C = {
  brand: "#01B0F0",
  brandDark: "#0089BD",
  brandTint: "#E6F7FE",
  brandDeep: "#0368A6",
  ink: "#0F2236", // text only — the homepage uses no dark background blocks
  inkSoft: "#1E3A55",
  text: "#334155",
  muted: "#64748B",
  border: "#E5EAF0",
  surface: "#F4F8FB",
  tintBg: "#EEF8FD",
  white: "#FFFFFF",
}

export const FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export const RADIUS = { card: "16px", button: "10px", pill: "999px" }

export const SHADOW = {
  card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
  hover: "0 2px 4px rgba(15,23,42,0.04), 0 18px 40px rgba(15,23,42,0.10)",
  brand: "0 10px 28px rgba(1,176,240,0.32)",
}

export const GRADIENT = {
  brand: `linear-gradient(120deg, ${C.brandDeep} 0%, ${C.brand} 60%, #3CC6F5 100%)`,
  heroBg: `radial-gradient(800px circle at 0% 0%, rgba(1,176,240,0.10), transparent 60%), radial-gradient(700px circle at 100% 30%, rgba(1,176,240,0.12), transparent 60%), linear-gradient(180deg, #F2FAFE 0%, #FFFFFF 100%)`,
}

export const sectionSx = (bg: "white" | "surface" | "tint" = "white"): SxProps<Theme> => ({
  py: { xs: 7, md: 9 },
  bgcolor: bg === "white" ? C.white : bg === "surface" ? C.surface : C.tintBg,
})

const btnBase = {
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
  borderRadius: RADIUS.button,
  px: 3,
  py: 1.25,
  whiteSpace: "nowrap",
  boxShadow: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
  "&:active": { transform: "translateY(0)" },
} as const

export const btn = {
  primary: {
    ...btnBase,
    bgcolor: C.brand,
    color: C.white,
    "&:hover": { bgcolor: C.brandDark, boxShadow: SHADOW.brand, transform: "translateY(-1px)" },
  },
  secondary: {
    ...btnBase,
    bgcolor: C.white,
    color: C.ink,
    border: `1px solid ${C.border}`,
    "&:hover": { borderColor: C.brand, color: C.brandDark, bgcolor: C.white, transform: "translateY(-1px)" },
  },
  onDark: {
    ...btnBase,
    color: C.white,
    border: "1px solid rgba(255,255,255,0.28)",
    bgcolor: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(6px)",
    "&:hover": { borderColor: "rgba(255,255,255,0.6)", bgcolor: "rgba(255,255,255,0.12)", transform: "translateY(-1px)" },
  },
  light: {
    ...btnBase,
    bgcolor: C.white,
    color: C.ink,
    "&:hover": { bgcolor: "#EEF6FA", transform: "translateY(-1px)" },
  },
}

export const cardSx = {
  boxSizing: "border-box", // no global CSS reset on this site, so padding would otherwise add to height: 100%
  bgcolor: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: RADIUS.card,
  boxShadow: SHADOW.card,
  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
} as const

export const cardHoverSx = {
  "&:hover": { transform: "translateY(-4px)", boxShadow: SHADOW.hover, borderColor: "rgba(1,176,240,0.35)" },
} as const

