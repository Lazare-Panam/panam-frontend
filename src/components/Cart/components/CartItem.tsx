import { useState } from "react"
import { Box, Typography, Stack, IconButton, TextField, Button, Fade, Chip, Input } from "@mui/material"
import Grid from "@mui/material/Grid"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import VerifiedIcon from "@mui/icons-material/Verified"

const BRAND_BLUE = "#01B0F0"

interface CartItemProps {
  item: any
  // Updated: Now accepts hasCertificates as the second argument
  onUpdateQuantity: (id: string, hasCertificates: boolean | undefined, delta: number) => void
  onRemove: (id: string, hasCertificates: boolean | undefined) => void
  onUpdateNotes: (id: string, hasCertificates: boolean | undefined, notes: string) => void
}

const CartItem = ({ item, onUpdateQuantity, onRemove, onUpdateNotes }: CartItemProps) => {
  const [localNotes, setLocalNotes] = useState(item.notes || "")
  const [isSaved, setIsSaved] = useState(false)

  const fullDescription = Object.values(item.specs).filter(v => v).join(", ")

  const handleSaveNotes = () => {
    // Pass the item's certificate status so the store finds the right entry
    onUpdateNotes(item.cartItemId, item.hasCertificates, localNotes)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <Box sx={{ borderBottom: "2px solid #f0f0f0", py: 6 }}>
      <Grid container alignItems="center">
        {/* 1. Details */}
        <Grid size={{ xs: 5 }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box component="img" src={item.image} sx={{ width: 140, height: 140, objectFit: "contain" }} />
            <Box>
              <Typography variant="h6" fontWeight={600} color={BRAND_BLUE} sx={{ mb: 1 }}>
                {fullDescription || item.name}
              </Typography>
              
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                 <Typography variant="h6" sx={{ color: "#444", fontWeight: 700 }}>
                    Part Number: {item.partNumber}
                 </Typography>
                 
                 {/* Certificate Badge - Shows only if item has certificates */}
                 {item.hasCertificates && (
                    <Chip 
                        icon={<VerifiedIcon style={{ color: 'white' }} />} 
                        label="3.1 Cert" 
                        size="small"
                        sx={{ bgcolor: BRAND_BLUE, color: 'white', fontWeight: 700 }} 
                    />
                 )}
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* 2. Notes & Feedback */}
        <Grid size={{ xs: 4 }} sx={{ px: 4 }}>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1, color: "#2D3E50" }}>Notes</Typography>
          <TextField
            fullWidth multiline rows={4}
            value={localNotes}
            onChange={(e) => { setLocalNotes(e.target.value); setIsSaved(false); }}
            placeholder="Add specific instructions..."
            sx={{ "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc", borderWidth: "2px" } }}
          />
          <Box sx={{ mt: 1, height: "32px", display: "flex", alignItems: "center" }}>
            {isSaved ? (
              <Fade in={isSaved}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: "1.1rem" }} />
                  <Typography variant="body2" sx={{ color: "#4CAF50", fontWeight: 700 }}>Changes saved</Typography>
                </Stack>
              </Fade>
            ) : (
              <Button onClick={handleSaveNotes} size="small" sx={{ color: BRAND_BLUE, fontWeight: 600, textTransform: "none" }}>
                Save Changes {">"}
              </Button>
            )}
          </Box>
        </Grid>

        {/* 3. Quantity */}
        <Grid size={{ xs: 3 }}>
  <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
    <Stack direction="row" alignItems="center" sx={{ border: "2px solid #ccc", borderRadius: 1 }}>
      {/* Minus Button */}
      <IconButton onClick={() => onUpdateQuantity(item.cartItemId, item.hasCertificates, -1)}>
        <RemoveIcon />
      </IconButton>

      {/* Manual Input Field */}
      <Input
        value={item.quantity}
        disableUnderline
        inputProps={{
          style: { textAlign: "center", fontWeight: 900, width: 40 },
          type: "number",
          min: 1,
        }}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          // Only update if it's a valid number; you might need a specific handleSetQuantity function
          if (!isNaN(val)) {
            onUpdateQuantity(item.cartItemId, item.hasCertificates, val - item.quantity);
          }
        }}
      />

      {/* Plus Button */}
      <IconButton onClick={() => onUpdateQuantity(item.cartItemId, item.hasCertificates, 1)}>
        <AddIcon />
      </IconButton>
    </Stack>

    {/* Remove Button */}
    <IconButton 
      onClick={() => onRemove(item.cartItemId, item.hasCertificates)} 
      sx={{ "&:hover": { color: "#ff4d4d" } }}
    >
      <CloseIcon sx={{ fontSize: "2rem" }} />
    </IconButton>
  </Stack>
</Grid>
      </Grid>
    </Box>
  )
}

export default CartItem