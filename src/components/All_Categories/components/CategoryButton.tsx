import React from "react"
import { styled } from "@mui/material/styles"
import { Box, ButtonBase, Typography, Stack, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"

export interface ProductforHomePage {
  name: string
  link?: string
  isProduct?: boolean
  id?: string
}

interface CategoryButtonProps {
  title: string
  id: string
  image: string
  products: ProductforHomePage[]
  onProductClick: (productId: string) => void
}

const ImageButton = styled(ButtonBase)(({}) => ({
  position: "relative",
  height: 320,
  width: "100%",
  // White border creates the "stick together" grid look
  border: "2px solid white",
  overflow: "hidden",
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": { opacity: 0.2 }, // Lighten on hover for clarity
    "& .ImageSrc": { transform: "scale(1.05)" }, // Subtle zoom
  },
}))

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
})

const ImageBackdrop = styled("span")(({}) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#000",
  opacity: 0.4, // Balanced darkness for legibility
  transition: "opacity 0.3s",
}))

const ProductOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(1.5),
  right: theme.spacing(1.5),
  textAlign: "right",
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  // Always visible glass effect
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  zIndex: 2,
  transition: "transform 0.3s ease",
}))

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image, products, onProductClick }) => {
  const navigate = useNavigate()

  return (
    <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
      <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />

      {/* Centered Category Title */}
      <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", p: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}>
          {title}
        </Typography>
      </Box>

      {/* Always Visible Quick Links */}
      <ProductOverlay className="ProductOverlay">
        <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 800, display: "block", mb: 0.5, textTransform: "uppercase", fontSize: "0.65rem" }}>
          Quick Links
        </Typography>
        <Stack spacing={0.3}>
          {products.map((prod, idx) => (
            <Link
              key={idx}
              component="button"
              variant="body2"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                if (prod.isProduct && prod.id) {
                  onProductClick(prod.id)
                } else if (prod.link) {
                  navigate(prod.link)
                }
              }}
              sx={{
                color: "primary.main",
                fontWeight: 700,
                fontSize: "0.75rem",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}>
              {prod.name}
            </Link>
          ))}
        </Stack>
      </ProductOverlay>
    </ImageButton>
  )
}
