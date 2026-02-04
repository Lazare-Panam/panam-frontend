import { Typography, Grid } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

const CartHeader = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: BRAND_BLUE,
        p: 2,
        color: "white",
        mb: 3,
        // Ensures the header aligns perfectly with the Item rows
        display: { xs: "none", md: "flex" },
      }}>
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
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            textAlign: "center",
            display: "block",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}>
          Quantity
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CartHeader
