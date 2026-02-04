import { Box, Container, Typography, Stack, Button, IconButton, CircularProgress, TextField } from "@mui/material"
import Grid from "@mui/material/Grid"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useCartStore } from "../store/useCartStore"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, removeItem, updateQuantity } = useCartStore()
  const isHydrated = useCartStore.persist.hasHydrated()

  if (!isHydrated) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )
  }

  if (cart.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 15, textAlign: "center", fontFamily: PRIMARY_FONT }}>
        <Typography variant="h3" fontWeight={500} sx={{ mb: 2, color: "#2D3E50" }}>
          YOUR CART IS EMPTY
        </Typography>
        <Button variant="contained" onClick={() => navigate("/products")} sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, px: 6, py: 2, fontWeight: 700, fontSize: "1.1rem" }}>
          PRODUCT CATALOG
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8, fontFamily: PRIMARY_FONT }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={600} color="#2D3E50" sx={{ letterSpacing: "-0.02em" }}>
          Shopping Cart
        </Typography>
      </Stack>

      {/* Table Header Row - Increased Font Weight and Size */}
      <Grid container sx={{ bgcolor: BRAND_BLUE, p: 2, color: "white", mb: 3 }}>
        <Grid size={{ xs: 5 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 2, textTransform: "uppercase", fontSize: "0.9rem" }}>
            Item
          </Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ textTransform: "uppercase", fontSize: "0.9rem" }}>
            Customer Info
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ textAlign: "center", display: "block", textTransform: "uppercase", fontSize: "0.9rem" }}>
            Quantity
          </Typography>
        </Grid>
      </Grid>

      {/* Product Rows */}
      {cart.map(item => (
        <Box key={item.cartItemId} sx={{ borderBottom: "2px solid #f0f0f0", py: 6 }}>
          <Grid container alignItems="center">
            {/* 1. Item Detail Section - Using Brand Blue and Bigger Text */}
            <Grid size={{ xs: 5 }}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Box component="img" src={item.image} sx={{ width: 140, height: 140, objectFit: "contain", p: 1 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} color={BRAND_BLUE} sx={{ mb: 1, lineHeight: 1.1, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                    {item.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#444", display: "block", fontWeight: 700, mb: 1.5 }}>
                    Part Number: {item.partNumber}
                  </Typography>

                  {/* Specifications - More legible */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {Object.entries(item.specs).map(([key, value]) => (
                      <Typography key={key} sx={{ fontSize: "0.85rem", color: "#666", fontWeight: 500, bgcolor: "#f5f5f5", px: 1 }}>
                        {value}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Stack>
            </Grid>

            {/* 2. Customer Info / Notes Section */}
            <Grid size={{ xs: 4 }} sx={{ px: 4 }}>
              <Typography variant="body1" fontWeight={600} sx={{ display: "block", mb: 1, color: "#2D3E50" }}>
                Notes
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Add specific instructions for this configuration..."
                sx={{
                  "& .MuiInputBase-root": { fontSize: "1rem", borderRadius: 0, bgcolor: "#fff", fontFamily: PRIMARY_FONT },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc", borderWidth: "2px" },
                }}
              />
              <Button size="large" sx={{ color: BRAND_BLUE, textTransform: "none", mt: 1, fontSize: "0.9rem", fontWeight: 600, p: 0 }}>
                Save Changes {">"}
              </Button>
            </Grid>

            {/* 3. Quantity Section - Bigger Controls */}
            <Grid size={{ xs: 3 }}>
              <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
                <Stack direction="row" alignItems="center" sx={{ border: "2px solid #ccc", bgcolor: "#fff" }}>
                  <IconButton onClick={() => updateQuantity(item.cartItemId, -1)} sx={{ borderRadius: 0, p: 1.5 }}>
                    <RemoveIcon sx={{ fontSize: "1.5rem" }} />
                  </IconButton>
                  <Typography sx={{ width: 60, textAlign: "center", fontWeight: 900, fontSize: "1.4rem", color: "#2D3E50" }}>{item.quantity}</Typography>
                  <IconButton onClick={() => updateQuantity(item.cartItemId, 1)} sx={{ borderRadius: 0, p: 1.5 }}>
                    <AddIcon sx={{ fontSize: "1.5rem" }} />
                  </IconButton>
                </Stack>

                <IconButton
                  onClick={() => removeItem(item.cartItemId)}
                  sx={{
                    color: "#ccc",
                    transition: "color 0.2s",
                    "&:hover": { color: "#ff4d4d" },
                  }}>
                  <CloseIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Optional Bottom Action Bar for long carts */}
      <Stack direction="row" justifyContent="flex-end" sx={{ mt: 6 }}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderRadius: "50px",
            px: 4,
            py: 1.5,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#01B0F0",
            borderColor: "#01B0F0",
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
              backgroundColor: "rgba(0,85,150,0.05)",
            },
          }}>
          Procceed to quote
        </Button>
      </Stack>
    </Container>
  )
}

export default CartPage
