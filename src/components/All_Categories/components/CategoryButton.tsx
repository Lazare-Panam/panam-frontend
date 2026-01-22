import React from "react"
import { styled } from "@mui/material/styles"
import { Box, ButtonBase, Typography, Paper } from "@mui/material"
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
const RootCard = styled(Paper)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: 0,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}))

const DetailsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  borderTop: "1px solid #eee",
  flexGrow: 1, // This is the key change
  display: "flex",
  flexDirection: "column",
  textAlign: "center", // <--- ADD THIS
  alignItems: "center",
}))

const ImageButton = styled(ButtonBase)({
  position: "relative",
  height: 320,
  width: "100%",
  border: "1px solid white",
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

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image, products, onProductClick }) => {
  const navigate = useNavigate()
  return (
    <RootCard elevation={2}>
      <ImageButton focusRipple onClick={() => navigate(`/products/${id}`)}>
        <ImageSrc className="ImageSrc" style={{ backgroundImage: `url(${image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", p: 2, pb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0em",
              textAlign: "center",
              textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            }}>
            {title}
          </Typography>
        </Box>
      </ImageButton>
      <DetailsSection>
        {/* <Typography
            variant="overline"
            sx={{
              fontWeight: "800",
              color: "#01b0f0", // Your specific blue color
              letterSpacing: "1.2px",
            }}>
            Featured Collection
          </Typography> */}
        <Typography
          variant="overline"
          sx={{
            fontWeight: "800",
            color: "#01b0f0",
            letterSpacing: "1.2px",
            display: "block",
            mb: 1,
          }}>
          Our Features
        </Typography>

        {products?.map((product, index) => (
          <Box key={index} sx={{ mb: 2, justifyContent: "center" }}>
            <Typography
              variant="subtitle2"
              onClick={() => {
                if (product.isProduct && product.id) {
                  // Logic for MODAL
                  onProductClick(product.id)
                } else if (product.link) {
                  // Logic for REDIRECT
                  navigate(product.link)
                }
              }}
              sx={{
                fontWeight: 500,
                color: "#444", // Different color (Dark Grey)
                cursor: "pointer",

                fontSize: "0.9rem", // Slightly larger/cleaner font
                fontFamily: "Inter, Roboto, Arial, sans-serif", // Clean modern font
                "&:hover": {
                  color: "#050505", // Highlights to blue on hover
                  textDecoration: "underline",
                },
              }}>
              {product.name}
            </Typography>
            {/* <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ 
          lineHeight: 1.4, 
          mt: 0.5,
          fontSize: "0.85rem" 
        }}
      >
        {product.description || `High-quality ${product.name.toLowerCase()} for industrial applications.`}
      </Typography> */}
          </Box>
        ))}
      </DetailsSection>
    </RootCard>
  )
}
