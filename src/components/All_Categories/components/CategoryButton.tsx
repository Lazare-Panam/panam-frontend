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
  maxWidth: "100%",
}))

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image, products, onProductClick }) => {
  const navigate = useNavigate()
  return (
    <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
      <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
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
      <ProductOverlay className="ProductOverlay">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: 1.5,
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
                width: "auto",
                whiteSpace: "nowrap",
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
