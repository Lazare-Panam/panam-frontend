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
  // Pure grey border, no shadows
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
  height: 320,
  width: "100%",
  borderRadius: 0,
  overflow: "hidden",
  // Subtle line between image and text
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  "&:hover .ImageSrc": {
    transform: "scale(1.05)",
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
      <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
        <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />

        {/* No grey overlay here - just the text with a shadow for legibility */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              color: "white",
              textAlign: "center",
              // Essential shadow so white text is visible on light images
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
            }}>
            {title}
          </Typography>
        </Box>
      </ImageButton>

      <DetailsSection>
        <Typography
          variant="overline"
          sx={{
            fontWeight: "800",
            color: BRAND_BLUE,
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
