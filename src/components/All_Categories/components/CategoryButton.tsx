import React from "react"
import { styled } from "@mui/material/styles"
import { Box, ButtonBase, Typography, Paper, Stack, Divider } from "@mui/material"
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
const RootCard = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}))

const DetailsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  borderTop: "1px solid #eee",
}))

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

export const CategoryButton: React.FC<CategoryButtonProps> = ({ title, id, image }) => {
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
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textAlign: "center",
              textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            }}>
            {title}
          </Typography>
        </Box>
      </ImageButton>
      <DetailsSection>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography
            variant="overline"
            sx={{
              fontWeight: "700",
              color: "#01b0f0", // Your specific blue color
              letterSpacing: "1.2px",
            }}>
            Featured Collection
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Explore our premium selection of {title.toLowerCase()} curated for quality and performance.
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
          Explore our premium selection of {title.toLowerCase()} curated for quality and performance. Engineered for durability and modern aesthetics.
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
          Explore our premium selection of {title.toLowerCase()} curated for quality and performance. Engineered for durability and modern aesthetics.
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
          Explore our premium selection of {title.toLowerCase()} curated for quality and performance. Engineered for durability and modern aesthetics.
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.6 }}>
          Explore our premium selection of {title.toLowerCase()} curated for quality and performance. Engineered for durability and modern aesthetics.
        </Typography>

        <Divider sx={{ mb: 2 }} />
      </DetailsSection>
    </RootCard>
  )
}
