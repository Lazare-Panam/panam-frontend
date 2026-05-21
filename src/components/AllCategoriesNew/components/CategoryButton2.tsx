import React from "react";
import { styled } from "@mui/material/styles";
import { Box, ButtonBase, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { type CategoryData2 } from "./CategoryData2";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

// ── EDIT ROUTES HERE ──────────────────────────────────────────────────────
const CATEGORY_ROUTES: Record<string, string> = {
  "instrumentation-fittings":       "/instrumentation-fittings",
  "filters":                        "/filters",
  "quick-coupling-and-hoses":       "/products/quick-coupling-and-hoses",
  "hydrogen":                       "/products/hydrogen",
  "valves":                         "/valves",
  "valve-manifolds":                "/manifolds",
  "double-block-and-bleed-valves":  "/products/double-block-and-bleed-valves",
  "tubing":                         "/products/tubing",
  "pressure-regulator-transmitter": "/products/pressure-regulator-transmitter",
  "system-integration":             "/products/system-integration",
};
// ─────────────────────────────────────────────────────────────────────────

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
});

const ImageWrapper = styled(ButtonBase)({
  position: "relative",
  height: 240,
  width: "100%",
  borderRadius: 0,
  overflow: "hidden",
  backgroundColor: "#fcfcfc",
  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
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
  const navigate = useNavigate();
  const route = CATEGORY_ROUTES[id] ?? `/products/${id}`;

  return (
    <RootCard>
      <ImageWrapper onClick={() => navigate(route)}>
        <img src={image} alt={`${title} industrial component`} />
      </ImageWrapper>

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            color: BRAND_BLUE,
            fontFamily: PRIMARY_FONT,
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
            mb: 1,
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

        <Stack spacing={1}>
          {products?.map((product, index) => (
            <Typography
              key={`${id}-prod-${index}`}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                navigate(product.link);
              }}
              sx={{
                fontWeight: 500,
                color: "#444",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontFamily: PRIMARY_FONT,
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
      </Box>
    </RootCard>
  );
};