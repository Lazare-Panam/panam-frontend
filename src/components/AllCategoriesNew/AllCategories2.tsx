import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { CategoryButton2 } from "./components/CategoryButton2";
import { CATEGORIES2, type CategoryData2 } from "./components/CategoryData2";
import ProductsFAQ from "./components/ProductsFAQ";
import TechnicalSpecs from "./components/TechnicalSpecs";
import ScrollReveal from "../Common/ScrollReveal";
import { Eyebrow } from "../Landing2/homeStyles";
import { C, GRADIENT } from "../Landing2/homeTokens";

const SEO_TAGS = "Technical Catalog • High Pressure Fluid Control • Instrumentation Standards";

const AllCategories2: React.FC = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: C.white }}>
      {/* PART 1: INTRO */}
      <Container maxWidth="lg" sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 4, md: 6 } }}>
        <ScrollReveal>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-end">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: { xs: "2.2rem", md: "3.1rem" } }}>
                Engineered{" "}
                <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Integrity
                </Box>
                <br />
                Product Catalog.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.8, pl: { md: 3 }, borderLeft: { md: `2px solid ${C.border}` } }}>
                Our comprehensive catalog defines the industry standard for
                leak-free performance. Explore technical specifications for
                high-pressure instrumentation components built for the
                world's most demanding fluid systems.
              </Typography>
            </Grid>
          </Grid>
        </ScrollReveal>
      </Container>

      {/* PART 2: CATEGORY GRID */}
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
        <ScrollReveal delay={0.15}>
          <Grid container spacing={3}>
            {CATEGORIES2.map((category: CategoryData2, i) => (
              // First category runs full width so the remaining nine sit in an even 3 x 3 grid
              <Grid key={category.id} size={i === 0 ? 12 : { xs: 12, sm: 6, md: 4 }}>
                <CategoryButton2 {...category} index={i} featured={i === 0} />
              </Grid>
            ))}
          </Grid>
        </ScrollReveal>
      </Container>

      {/* SEO STRIP */}
      <Box sx={{ bgcolor: C.tintBg, py: { xs: 2.5, md: 3 }, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <Container maxWidth="lg" sx={{ display: "flex", flexWrap: "wrap", gap: 1.25, justifyContent: "center" }}>
          {SEO_TAGS.split(" • ").map(tag => (
            <Eyebrow key={tag}>{tag}</Eyebrow>
          ))}
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
