import type { ReactNode } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { C, RADIUS } from "./homeTokens"

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <Box
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 1,
      px: 1.5,
      py: 0.5,
      borderRadius: RADIUS.pill,
      bgcolor: dark ? "rgba(255,255,255,0.16)" : C.brandTint,
      color: dark ? C.white : C.brandDark,
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      "&::before": { content: '""', width: 6, height: 6, borderRadius: "50%", bgcolor: dark ? C.white : C.brand },
    }}>
    {children}
  </Box>
)

interface SectionHeaderProps {
  eyebrow: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  align?: "left" | "center"
  action?: ReactNode
  dark?: boolean
  titleComponent?: "h2" | "h3"
}

export const SectionHeader = ({ eyebrow, title, subtitle, align = "left", action, dark = false, titleComponent = "h2" }: SectionHeaderProps) => (
  <Stack
    direction={{ xs: "column", md: action ? "row" : "column" }}
    justifyContent="space-between"
    alignItems={{ xs: align === "center" ? "center" : "flex-start", md: action ? "flex-end" : align === "center" ? "center" : "flex-start" }}
    spacing={3}
    sx={{ mb: { xs: 5, md: 7 }, textAlign: align }}>
    <Box sx={{ maxWidth: 720 }}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <Typography
        component={titleComponent}
        sx={{
          mt: 2,
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.12,
          fontSize: { xs: "2rem", md: "2.75rem" },
          color: dark ? C.white : C.ink,
        }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.7, color: dark ? "rgba(255,255,255,0.85)" : C.muted }}>
          {subtitle}
        </Typography>
      )}
    </Box>
    {action}
  </Stack>
)
