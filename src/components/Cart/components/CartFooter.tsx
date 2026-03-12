import { Stack, Button, CircularProgress } from "@mui/material"
import { useUserStore } from "../../store/useUserStore"

const BRAND_BLUE = "#01B0F0"
interface CartFooterProps {
  onSave? : ()=> void
  isSaving?: boolean
  saveLabel?: string
}

const CartFooter = ({  isSaving, onSave,  saveLabel = "Save Cart" }: CartFooterProps) => {
   const {  isAuthenticated } = useUserStore();
 return (
    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 6 }}>
      {onSave && (
        <Button
          variant="text"
          size="large"
          onClick={onSave}
          disabled={isSaving}
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
    </Stack>
  )
}

export default CartFooter