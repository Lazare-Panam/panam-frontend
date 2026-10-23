import { C, FONT, SHADOW } from "../../Landing2/homeTokens"

// Primary CTA shared by the sign-in and reset-password forms
export const primaryButtonSx = {
  py: 1.6,
  borderRadius: "12px",
  bgcolor: C.brand,
  fontFamily: FONT,
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: SHADOW.brand,
  transition: "all 0.2s ease",
  "&:hover": { bgcolor: C.brandDark, boxShadow: SHADOW.brand, transform: "translateY(-1px)" },
  "& .MuiButton-endIcon": { transition: "transform 0.2s ease" },
  "&:hover .MuiButton-endIcon": { transform: "translateX(3px)" },
  "&.Mui-disabled": { bgcolor: "#CDEBF7", color: C.white, boxShadow: "none" },
} as const
