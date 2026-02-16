import { Stack, Button } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

interface CartFooterProps {
  onProceed: () => void
}

const CartFooter = ({ onProceed }: CartFooterProps) => {
  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ mt: 6 }}>
      <Button
        variant="outlined"
        size="large"
        onClick={onProceed}
        sx={{
          borderRadius: "50px",
          px: 4,
          py: 1.5,
          fontWeight: 700,
          textTransform: "uppercase",
          color: BRAND_BLUE,
          borderColor: BRAND_BLUE,
          borderWidth: 2,
          minWidth: "220px",
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(0,176,240,0.05)",
          },
        }}>
        Proceed to quote
      </Button>
    </Stack>
  )
}

export default CartFooter
