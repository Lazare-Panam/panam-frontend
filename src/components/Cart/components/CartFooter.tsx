import { Stack, Button, CircularProgress } from "@mui/material"

const BRAND_BLUE = "#01B0F0"

interface CartFooterProps {
  onProceed: () => void
  isSubmitting?: boolean
  label?: string // New optional prop for dynamic text
}

const CartFooter = ({ onProceed, isSubmitting, label = "Proceed to quote" }: CartFooterProps) => {
  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ mt: 6 }}>
      <Button
        variant="outlined"
        size="large"
        onClick={onProceed}
        disabled={isSubmitting}
        sx={{
          borderRadius: "50px",
          px: 4,
          py: 1.5,
          fontWeight: 700,
          textTransform: "uppercase",
          color: BRAND_BLUE,
          borderColor: BRAND_BLUE,
          borderWidth: 2,
          minWidth: "240px", // Slightly wider to accommodate "Sign In" text
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(0,176,240,0.05)",
            borderColor: BRAND_BLUE,
          },
          "&.Mui-disabled": {
            borderWidth: 2,
            borderColor: "rgba(0, 176, 240, 0.3)",
          }
        }}>
        {isSubmitting ? (
          <CircularProgress size={24} sx={{ color: BRAND_BLUE }} />
        ) : (
          label
        )}
      </Button>
    </Stack>
  )
}

export default CartFooter