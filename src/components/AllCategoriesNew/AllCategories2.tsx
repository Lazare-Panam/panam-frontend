import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CategoryButton2 } from "./components/CategoryButton2";
import { CATEGORIES2, type CategoryData2 } from "./components/CategoryData2";
import ProductsFAQ from "./components/ProductsFAQ";
import TechnicalSpecs from "./components/TechnicalSpecs";
import ScrollReveal from "../Common/ScrollReveal";

const AllCategories2: React.FC = () => {
  const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff", minHeight: "100vh" }}>
      {/* PART 1: HERO/INTRO AREA */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
        <ScrollReveal>
          <Box sx={{ maxWidth: "850px" }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                fontFamily: PRIMARY_FONT,
                color: "#1a1a1a",
                mb: 3,
                letterSpacing: "-0.03em",
                fontSize: { xs: "2.5rem", md: "3.8rem" },
              }}
            >
              Engineered <span style={{ color: "#01B0F0" }}>Integrity</span>
              <br />
              Product Catalog.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: PRIMARY_FONT,
                color: "#555",
                fontSize: "1.15rem",
                lineHeight: 1.8,
                maxWidth: "750px",
              }}
            >
              Our comprehensive catalog defines the industry standard for
              leak-free performance. Explore technical specifications for
              high-pressure instrumentation components built for the
              world's most demanding fluid systems.
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>

      {/* PART 2: CATEGORY GRID */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, pb: 15 }}>
        <ScrollReveal delay={0.2}>
          <Grid container spacing={3}>
            {CATEGORIES2.map((category: CategoryData2) => (
              <Grid key={category.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <CategoryButton2 {...category} />
              </Grid>
            ))}
          </Grid>
        </ScrollReveal>
      </Container>

      {/* SUBTLE SEO FOOTER BLOCK */}
      <Box sx={{ bgcolor: "#fafafa", py: 4, borderTop: "1px solid #eee" }}>
        <Container maxWidth="lg">
          <Typography
            variant="caption"
            sx={{ color: "#aaa", letterSpacing: 1, textTransform: "uppercase" }}
          >
            Technical Catalog • High Pressure Fluid Control • Instrumentation Standards
          </Typography>
        </Container>
      </Box>

      <ScrollReveal delay={0.1}>
        <TechnicalSpecs />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <ProductsFAQ />
      </ScrollReveal>
    </Box>
  );
};

export default AllCategories2;