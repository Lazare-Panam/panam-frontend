import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { type CategoryData2 } from "./CategoryData2";
import { CATEGORY_ROUTES } from "./categoryRoutes";
import { C, cardSx, cardHoverSx } from "../../Landing2/homeTokens";

// Same card language as the homepage Core Products: fixed-ratio image stage, number badge, round arrow footer.
// `featured`: full-width horizontal layout (image left, details right) used for the lead category.
export const CategoryButton2: React.FC<CategoryData2 & { index?: number; featured?: boolean }> = ({
  title,
  id,
  image,
  products,
  seoDescription,
  index,
  featured = false,
}) => {
  const route = CATEGORY_ROUTES[id] ?? `/products/${id}`;

  return (
    <Box
      sx={{
        ...cardSx,
        ...cardHoverSx,
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: featured ? "row" : "column" },
        overflow: "hidden",
        "&:hover .cat-img": { transform: "scale(1.06)" },
        "&:hover .cat-bg": { opacity: 1 },
        "&:hover .cat-btn": { bgcolor: C.brand, borderColor: C.brand, color: C.white, transform: "rotate(-45deg)" },
      }}>
      <Box
        component={RouterLink}
        to={route}
        viewTransition
        aria-label={title}
        sx={{ position: "relative", display: "block", aspectRatio: "4 / 3", flex: "none", width: { md: featured ? "42%" : "auto" }, overflow: "hidden", background: `radial-gradient(circle at 50% 55%, #FFFFFF 0%, ${C.surface} 70%)` }}>
        <Box className="cat-bg" aria-hidden sx={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 55%, #FFFFFF 0%, ${C.tintBg} 60%, rgba(1,176,240,0.16) 100%)`, opacity: 0, transition: "opacity 0.4s ease" }} />
        {index !== undefined && (
          <Typography aria-hidden sx={{ position: "absolute", top: 14, left: 16, zIndex: 1, fontWeight: 700, fontSize: "0.78rem", color: C.muted, letterSpacing: "0.06em", fontVariantNumeric: "tabular-nums" }}>
            {String(index + 1).padStart(2, "0")}
          </Typography>
        )}
        <Box
          component="img"
          className="cat-img"
          src={image}
          alt={`${title} industrial component`}
          loading="lazy"
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", boxSizing: "border-box", p: { xs: 3, md: featured ? 6 : 4.5 }, objectFit: "contain", transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)", filter: "drop-shadow(0 16px 20px rgba(15,34,54,0.18))" }}
        />
      </Box>

      <Box sx={{ p: { xs: 2.5, md: featured ? 4.5 : 3 }, flexGrow: 1, display: "flex", flexDirection: "column", borderTop: { xs: `1px solid ${C.border}`, md: featured ? 0 : `1px solid ${C.border}` }, borderLeft: { md: featured ? `1px solid ${C.border}` : 0 } }}>
        <Typography
          component={RouterLink}
          to={route}
          viewTransition
          variant="h6"
          sx={{ display: "block", fontWeight: 700, color: C.ink, fontSize: featured ? { xs: "1.15rem", md: "1.6rem" } : "1.15rem", letterSpacing: "-0.01em", lineHeight: 1.3, mb: 1, textDecoration: "none", "&:hover": { color: C.brandDark } }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: C.muted, fontSize: featured ? { xs: "0.88rem", md: "1rem" } : "0.88rem", lineHeight: 1.65, mb: 2.5, maxWidth: 620 }}>
          {seoDescription}
        </Typography>

        {products && products.length > 1 && (
          <Typography sx={{ fontWeight: 700, color: C.brandDark, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", mb: 1 }}>
            Featured Specs
          </Typography>
        )}

        <Box sx={{ mb: 2.5, display: "grid", gridTemplateColumns: { xs: "1fr", sm: featured ? "1fr 1fr" : "1fr" }, columnGap: 3, rowGap: 0.5 }}>
          {products?.map((product, i) => (
            <Box
              key={`${id}-prod-${i}`}
              component={RouterLink}
              to={product.link}
              viewTransition
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                px: 1.25,
                py: 0.85,
                mx: -1.25,
                borderRadius: "10px",
                color: C.text,
                fontSize: "0.88rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
                "& svg": { fontSize: 18, color: C.brand, opacity: 0.4, transition: "all 0.2s ease" },
                "&:hover": { bgcolor: C.tintBg, color: C.brandDark, "& svg": { opacity: 1, transform: "translateX(2px)" } },
              }}>
              {product.name}
              <ChevronRightRoundedIcon />
            </Box>
          ))}
        </Box>

        <Stack
          component={RouterLink}
          to={route}
          viewTransition
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mt: "auto", pt: 2, borderTop: `1px solid ${C.border}`, textDecoration: "none" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: C.brandDark }}>View Category</Typography>
          <Box className="cat-btn" sx={{ width: 36, height: 36, flex: "none", borderRadius: "50%", border: `1px solid ${C.border}`, color: C.ink, display: "grid", placeItems: "center", transition: "all 0.3s ease" }}>
            <ArrowForwardIcon sx={{ fontSize: 17 }} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
