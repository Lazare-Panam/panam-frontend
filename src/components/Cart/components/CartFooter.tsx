import { Stack, Button, CircularProgress } from "@mui/material"
import { useUserStore } from "../../store/useUserStore"

const BRAND_BLUE = "#01B0F0"

interface CartFooterProps {
  onProceed: () => void
  onSave? : ()=> void
  isSubmitting?: boolean
  isSaving?: boolean
  label?: string // New optional prop for dynamic text
  saveLabel?: string
}

const CartFooter = ({ onProceed, isSubmitting,isSaving, onSave, label = "Proceed to quote", saveLabel = "Save Cart" }: CartFooterProps) => {
   const {  isAuthenticated } = useUserStore();
 return (
    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 6 }}>
      {/* Save Cart Button - Only shows if onSave is passed */}
      {onSave && (
        <Button
          variant="text"
          size="large"
          onClick={onSave}
          disabled={isSaving || isSubmitting}
          sx={{
            fontWeight: 700,
            color: isAuthenticated ? "#666" : BRAND_BLUE, // Highlight it if they need to login
            textTransform: "uppercase",
            px: 4,
          }}
        >
          {isSaving ? <CircularProgress size={24} color="inherit" /> : saveLabel}
        </Button>
      )}

      <Button
        variant="outlined"
        size="large"
        onClick={onProceed}
        disabled={isSubmitting || isSaving}
        sx={{
          borderRadius: "50px",
          px: 4,
          py: 1.5,
          fontWeight: 700,
          textTransform: "uppercase",
          color: BRAND_BLUE,
          borderColor: BRAND_BLUE,
          borderWidth: 2,
          minWidth: "240px",
          "&:hover": {
            borderWidth: 2,
            backgroundColor: "rgba(0,176,240,0.05)",
            borderColor: BRAND_BLUE,
          },
        }}
      >
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