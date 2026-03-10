import { Box, Typography, Button, Container, Stack } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const DARK_NAVY = "#2D3E50"

const EmptyCartView = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          py: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}>
        {/* Animated Icon Container */}
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            bgcolor: "#f0f9ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
            border: "1px solid #e0f2fe",
          }}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: BRAND_BLUE, opacity: 0.8 }} />
        </Box>

        <Typography variant="h4" fontWeight={700} sx={{ color: DARK_NAVY, mb: 2, letterSpacing: "-0.02em" }}>
          YOUR CART IS EMPTY
        </Typography>

        <Typography variant="body1" sx={{ color: "#666", mb: 5, lineHeight: 1.6, maxWidth: 350 }}>
          You haven't added any configurations to your request yet. Explore our catalog to find the right components for your project.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/products")}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: BRAND_BLUE,
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 0, // Industrial square look
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#0090c4",
                boxShadow: "0 4px 12px rgba(1, 176, 240, 0.3)",
              },
            }}>
            BROWSE PRODUCTS
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/")}
            sx={{
              borderColor: "#ccc",
              color: DARK_NAVY,
              px: 4,
              py: 1.5,
              borderRadius: 0,
              fontWeight: 700,
              fontSize: "1rem",
              "&:hover": {
                borderColor: DARK_NAVY,
                bgcolor: "transparent",
              },
            }}>
            RETURN HOME
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default EmptyCartView
