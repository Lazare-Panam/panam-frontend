import { Box, Typography, Stack, IconButton, TextField, Button } from "@mui/material"
import Grid from "@mui/material/Grid" // Updated to Grid2
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface CartItemData {
  cartItemId: string
  name: string
  image: string
  partNumber: string
  quantity: number
  specs: Record<string, string | number>
}

interface CartItemProps {
  item: CartItemData
  onUpdateQuantity: (id: string, delta: number) => void
  onRemove: (id: string) => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const fullDescription = Object.values(item.specs)
    .filter(val => val) // Remove any empty selections
    .join(", ")
  return (
    <Box sx={{ borderBottom: "2px solid #f0f0f0", py: 6 }}>
      <Grid container alignItems="center">
        {/* 1. Item Detail Section */}
        <Grid size={{ xs: 5 }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box component="img" src={item.image} sx={{ width: 140, height: 140, objectFit: "contain", p: 1 }} />
            <Box>
              <Typography variant="h6" fontWeight={600} color={BRAND_BLUE} sx={{ mb: 1, lineHeight: 1.1, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
                {fullDescription || item.name}
              </Typography>
              <Typography variant="h6" sx={{ color: "#444", display: "block", fontWeight: 700, mb: 1.5 }}>
                Part Number: {item.partNumber}
              </Typography>
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

        {/* 3. Quantity Section */}
        <Grid size={{ xs: 3 }}>
          <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
            <Stack direction="row" alignItems="center" sx={{ border: "2px solid #ccc", bgcolor: "#fff" }}>
              <IconButton onClick={() => onUpdateQuantity(item.cartItemId, -1)} sx={{ borderRadius: 0, p: 1.5 }}>
                <RemoveIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
              <Typography sx={{ width: 60, textAlign: "center", fontWeight: 900, fontSize: "1.4rem", color: "#2D3E50" }}>{item.quantity}</Typography>
              <IconButton onClick={() => onUpdateQuantity(item.cartItemId, 1)} sx={{ borderRadius: 0, p: 1.5 }}>
                <AddIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Stack>

            <IconButton
              onClick={() => onRemove(item.cartItemId)}
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
  )
}

export default CartItem
