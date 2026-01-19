import React from "react"
import { styled } from "@mui/material/styles"
import { Box, ButtonBase, Typography, Link } from "@mui/material"
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

const ImageButton = styled(ButtonBase)({
  position: "relative",
  height: 320,
  width: "100%",
  border: "2px solid white",
  borderRadius: 0,
  overflow: "hidden",
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": { opacity: 0.2 },
    "& .ImageSrc": { transform: "scale(1.05)" },
  },
})

const ImageSrc = styled("span")({
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
})

const ImageBackdrop = styled("span")({
  position: "absolute",
  inset: 0,
  backgroundColor: "#000",
  opacity: 0.4,
  transition: "opacity 0.3s",
})

const ProductOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  padding: theme.spacing(1.5),
  borderRadius: 0,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(8px)",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
  zIndex: 2,
  // Let the box grow with the content but cap it at the image width
  maxWidth: "100%",
}))

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image, products, onProductClick }) => {
  const navigate = useNavigate()

  return (
    <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
      <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />

      {/* Centered Category Title */}
      <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", p: 2, pb: 6 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
          }}>
          {title}
        </Typography>
      </Box>

      {/* Wrapping Quick Links Overlay */}
      <ProductOverlay className="ProductOverlay">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Items flow horizontally
            flexWrap: "wrap", // Items wrap to next line
            justifyContent: "flex-end", // Aligns links to the right
            gap: 1.5, // Space between the wrapped links
          }}>
          {products.slice(0, 8).map((prod, idx) => (
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
                fontSize: "0.7rem",
                textDecoration: "none",
                // Remove fixed width to allow natural wrapping
                width: "auto",
                whiteSpace: "nowrap", // Keeps individual names on one line
                "&:hover": { textDecoration: "underline" },
              }}>
              • {prod.name}
            </Link>
          ))}
        </Box>
      </ProductOverlay>
    </ImageButton>
  )
}
