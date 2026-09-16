import React from "react"
import { Box, Container, Typography, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"
import { CATEGORIES, type TechnicalFileCategory } from "./categories"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const CategoryCard: React.FC<TechnicalFileCategory> = ({ name, category, subtitle, description, image }) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #e8e8e8",
      transition: "box-shadow 0.2s",
      "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" },
    }}>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 220 }}>
      <CardMedia component="img" image={image} alt={name} loading="lazy" sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
        CAD & STEP Files
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 2, fontSize: "1.05rem" }}>
        {name} — {subtitle}
      </Typography>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
    </CardContent>

    <Box sx={{ p: 2 }}>
      <Button
        component={RouterLink}
        viewTransition
        to={`/cad-step-files/${encodeURIComponent(category)}`}
        variant="contained"
        fullWidth
        size="small"
        sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        BROWSE FILES
      </Button>
    </Box>
  </Card>
)

const CadStepFiles: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
          Technical Downloads
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 44 }, fontWeight: 900, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
          CAD & STEP Files
        </Typography>
        <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 620, lineHeight: 1.8 }}>
          Browse and download 3D STEP models and technical drawings by category — ready to drop straight into your CAD assembly.
        </Typography>

        <Grid container spacing={3}>
          {CATEGORIES.map(cat => (
            <Grid key={cat.category} size={{ xs: 12, sm: 6, md: 4 }}>
              <CategoryCard {...cat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CadStepFiles
