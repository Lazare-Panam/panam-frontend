import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { type CategoryData2 } from "./CategoryData2";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const CATEGORY_ROUTES: Record<string, string> = {
  "instrumentation-fittings":       "/instrumentation-fittings",
  "filters":                        "/filters",
  "quick-coupling-and-hoses":       "/quick-coupling-and-tubing",
  "hydrogen":                       "/high-pressure",
  "valves":                         "/valves",
  "valve-manifolds":                "/manifolds",
  "double-block-and-bleed-valves":  "/double-block-and-bleed-valves",
  "tubing":                         "/quick-coupling-and-tubing/tubing",
  "pressure-regulator-transmitter": "/system-integration",
  "system-integration":             "/system-integration",
};

const RootCard = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 0,
  backgroundColor: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  transition: "all 0.25s ease-in-out",
  "&:hover": {
    borderColor: BRAND_BLUE,
    transform: "translateY(-5px)",
    boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
  },
  "&:hover .category-arrow": {
    transform: "translateX(4px)",
    opacity: 1,
  },
  "&:active": {
    transform: "translateY(-2px)",
    boxShadow: "0px 6px 16px rgba(0,0,0,0.1)",
  },
});

const ImageLink = styled(RouterLink)({
  position: "relative",
  height: 240,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "#fcfcfc",
  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
  textDecoration: "none",
  "& img": {
    width: "75%",
    height: "75%",
    objectFit: "contain",
    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});

export const CategoryButton2: React.FC<CategoryData2> = ({
  title,
  id,
  image,
  products,
  seoDescription,
}) => {
  const route = CATEGORY_ROUTES[id] ?? `/products/${id}`;

  return (
    <RootCard>
      <ImageLink to={route} viewTransition>
        <img src={image} alt={`${title} industrial component`} loading="lazy" />
      </ImageLink>

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography
          component={RouterLink}
          to={route}
          viewTransition
          variant="h6"
          sx={{
            display: "block",
            fontWeight: 800,
            textTransform: "uppercase",
            color: BRAND_BLUE,
            fontFamily: PRIMARY_FONT,
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
            mb: 1,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontSize: "0.8rem",
            lineHeight: 1.6,
            mb: 2,
            fontFamily: PRIMARY_FONT,
            minHeight: "40px",
          }}
        >
          {seoDescription}
        </Typography>

        {products && products.length > 1 && (
          <Typography
            variant="overline"
            sx={{
              fontWeight: 900,
              color: "#ccc",
              letterSpacing: 2,
              display: "block",
              mb: 1.5,
            }}
          >
            Featured Specs
          </Typography>
        )}

        <Stack spacing={1}>
          {products?.map((product, index) => (
            <Typography
              key={`${id}-prod-${index}`}
              component={RouterLink}
              to={product.link}
              viewTransition
              sx={{
                fontWeight: 500,
                color: "#444",
                fontSize: "0.85rem",
                fontFamily: PRIMARY_FONT,
                textDecoration: "none",
                display: "block",
                "&:hover": {
                  color: BRAND_BLUE,
                  textDecoration: "underline",
                },
              }}
            >
              {product.name}
            </Typography>
          ))}
        </Stack>

        <Stack
          component={RouterLink}
          to={route}
          viewTransition
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{ mt: 2, textDecoration: "none", width: "fit-content" }}
        >
          <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE }}>
            View Category
          </Typography>
          <ArrowForwardIcon
            className="category-arrow"
            sx={{ fontSize: 14, color: BRAND_BLUE, opacity: 0.7, transition: "transform 0.25s ease, opacity 0.25s ease" }}
          />
        </Stack>
      </Box>
    </RootCard>
  );
};