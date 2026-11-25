import { Box, Typography, Button, Stack } from "@mui/material"
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { C, FONT, RADIUS } from "../Landing2/homeTokens"

// Reusable "related guide" callout. Used to add relevant internal links from product/category pages
// into supporting blog guides (e.g. fittings pages -> the thread-standards post), which helps both
// users and the SEO authority of the guide being linked to.
// It renders no Container of its own — wrap it in the caller's existing layout container.
interface RelatedGuideProps {
  eyebrow?: string
  title: string
  text: string
  to: string
  linkLabel?: string
}

const RelatedGuide = ({ eyebrow = "Related guide", title, text, to, linkLabel = "Read the guide" }: RelatedGuideProps) => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: 3,
          p: { xs: 3, md: 4 },
          borderRadius: RADIUS.card,
          border: `1px solid ${C.border}`,
          bgcolor: C.white,
        }}>
        <Box
          sx={{
            flexShrink: 0,
            width: 56,
            height: 56,
            borderRadius: RADIUS.card,
            display: "grid",
            placeItems: "center",
            bgcolor: C.brandTint,
            color: C.brandDark,
          }}>
          <MenuBookRoundedIcon />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: C.brand, mb: 0.5 }}>
            {eyebrow}
          </Typography>
          <Typography component="h3" sx={{ fontFamily: FONT, fontWeight: 800, color: C.ink, fontSize: { xs: "1.15rem", md: "1.3rem" }, lineHeight: 1.3 }}>
            {title}
          </Typography>
          <Typography sx={{ fontFamily: FONT, color: C.muted, fontSize: "0.95rem", lineHeight: 1.6, mt: 0.75 }}>
            {text}
          </Typography>
        </Box>

        <Stack sx={{ flexShrink: 0 }}>
          <Button
            component={RouterLink}
            to={to}
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              color: C.white,
              bgcolor: C.brand,
              px: 3,
              py: 1.25,
              borderRadius: RADIUS.button,
              boxShadow: "none",
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: C.brandDark },
            }}>
            {linkLabel}
          </Button>
        </Stack>
      </Box>
  )
}

export default RelatedGuide
