import React from "react"
import { styled } from "@mui/material/styles"
import { Box, ButtonBase, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export interface ProductforHomePage {
  name: string
  link?: string
  isProduct?: boolean
  id?: string
  description?: string
}

interface CategoryButtonProps {
  title: string
  id: string
  image: string
  products: ProductforHomePage[]
  onProductClick: (productId: string) => void
}

const BRAND_BLUE = "#33C1FF"

const RootCard = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: 0,
  backgroundColor: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  transition: "all 0.2s ease-in-out",
  margin: 0,
}))

const DetailsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "#fff",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
}))

const ImageButton = styled(ButtonBase)({
  position: "relative",
  height: 220,
  width: "100%",
  borderRadius: 0,
  overflow: "hidden",
  // Keeping your original border below the image
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  "&:hover .ImageSrc": {
    transform: "scale(1.03)",
  },
})

const ImageSrc = styled("span")({
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
})

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image, products, onProductClick }) => {
  const navigate = useNavigate()

  return (
    <RootCard>
      {/* 1. Image only - no text overlay */}
      <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
        <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />
      </ImageButton>

      <DetailsSection>
        {/* 2. Title moved here: Smaller, Brand Blue, and Bold */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            color: BRAND_BLUE,
            textAlign: "center",
            mb: 1, // Space before the "Our Features" label
            fontSize: "0.95rem", // Making it a little smaller as requested
            letterSpacing: "0.5px",
          }}>
          {title}
        </Typography>

        <Typography
          variant="overline"
          sx={{
            fontWeight: "800",
            color: "#999", // Subdued slightly so it doesn't compete with the main title
            letterSpacing: "1.2px",
            display: "block",
            mb: 2,
          }}>
          Our Features
        </Typography>

        {products?.map((product, index) => (
          <Box key={index} sx={{ mb: 1.5 }}>
            <Typography
              variant="subtitle2"
              onClick={e => {
                e.stopPropagation()
                if (product.isProduct && product.id) {
                  onProductClick(product.id)
                } else if (product.link) {
                  navigate(product.link)
                }
              }}
              sx={{
                fontWeight: 500,
                color: "#666",
                cursor: "pointer",
                fontSize: "0.85rem",
                "&:hover": {
                  color: "#000",
                  textDecoration: "underline",
                },
              }}>
              {product.name}
            </Typography>
          </Box>
        ))}
      </DetailsSection>
    </RootCard>
  )
}
