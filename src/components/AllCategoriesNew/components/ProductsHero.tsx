import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, GRADIENT, SHADOW } from "../../Landing2/homeTokens"
import { CATEGORIES2 } from "./CategoryData2"
import { CATEGORY_ROUTES } from "./categoryRoutes"

interface Props {
  overline: string
  titleMain: string
  titleAccent: string
  titleEnd: string
  description: string
  backgroundImage: string
}

// Light split hero in the homepage style: copy on the left, the banner photo framed on the right,
// and quick links to every category so the range is one click away from the top of the page.
const ProductsHero = ({ overline, titleMain, titleAccent, titleEnd, description, backgroundImage }: Props) => (
  <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 9 } }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            <Box>
              <Eyebrow>{overline}</Eyebrow>
            </Box>
            <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.9rem" } }}>
              {titleMain}{" "}
              <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {titleAccent}
              </Box>{" "}
              {titleEnd}
            </Typography>
            <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.15rem" }, lineHeight: 1.75, maxWidth: 560 }}>{description}</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 1 }}>
              {CATEGORIES2.map(c => (
                <Box
                  key={c.id}
                  component={RouterLink}
                  to={CATEGORY_ROUTES[c.id] ?? `/products/${c.id}`}
                  viewTransition
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: "999px",
                    border: `1px solid ${C.border}`,
                    bgcolor: "rgba(255,255,255,0.85)",
                    color: C.text,
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    "& svg": { fontSize: 14, opacity: 0, width: 0, transition: "all 0.2s ease" },
                    "&:hover": { borderColor: C.brand, color: C.brandDark, bgcolor: C.white, "& svg": { opacity: 1, width: 14 } },
                  }}>
                  {c.title}
                  <ArrowForwardRoundedIcon />
                </Box>
              ))}
            </Box>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", pl: { md: 2 } }}>
            <Box aria-hidden sx={{ position: "absolute", inset: { xs: "-12px", md: "-18px -18px -18px 0" }, borderRadius: "32px", background: "linear-gradient(135deg, rgba(1,176,240,0.18), rgba(1,176,240,0) 60%)" }} />
            <Box
              role="img"
              aria-label="Precision engineered components"
              sx={{
                position: "relative",
                aspectRatio: { xs: "4 / 3", md: "5 / 4" },
                borderRadius: "26px",
                overflow: "hidden",
                boxShadow: SHADOW.hover,
                backgroundColor: C.surface,
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::after": { content: '""', position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(1,176,240,0.18) 100%)" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default ProductsHero
