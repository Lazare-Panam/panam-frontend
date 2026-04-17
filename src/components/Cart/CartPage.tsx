import { Box, Container, Typography, Stack, CircularProgress } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { useCartStore } from "../store/useCartStore"
import { useUserStore } from "../store/useUserStore"
import { useNotificationStore } from "../store/useNotficationStore"
import { addToCartApi, type CartItemDTO } from "../../api/cartApi" // Ensure this path is correct
import CartHeader from "./components/CartHeader"
import CartItem from "./components/CartItem"
import CartFooter from "./components/CartFooter"
import EmptyCartView from "./components/EmptyCart"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, removeItem, updateQuantity, updateNotes } = useCartStore()
  const isHydrated = useCartStore.persist.hasHydrated()
  const { isAuthenticated } = useUserStore()
  const showNotification = useNotificationStore(state => state.showNotification)


  // 2. Mutation for saving the cart to the database
  const { mutate: saveCart, isPending: isSaving } = useMutation({
    mutationFn: async () => {
      const promises = cart.map(item => {
        const dto: CartItemDTO = {
          productCode: item.partNumber,
          productDescription: Object.values(item.specs).filter(v => v).join(", ") || item.name,
          quantity: item.quantity,
          notes: item.notes || ""
        }
        return addToCartApi(dto)
      })
      return Promise.all(promises)
    },
    onSuccess: () => {
      showNotification({ message: "Cart successfully saved to your account!", severity: "success" })
    },
    onError: () => {
      showNotification({ message: "Could not save cart. Please check your connection.", severity: "error" })
    }
  })

  const handleSaveAction = () => {
    if (!isAuthenticated) {
      navigate("/login?redirect=/cart")
    } else {
      saveCart()
    }
  }



  if (!isHydrated) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )
  }

  if (cart.length === 0) {
    return <EmptyCartView />
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8, fontFamily: PRIMARY_FONT }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={600} color="#2D3E50" sx={{ letterSpacing: "-0.02em" }}>
          Shopping Cart
        </Typography>
      </Stack>

      <CartHeader />

      <Stack spacing={0}>
        {cart.map(item => (
          <CartItem 
            key={`${item.cartItemId}-${item.hasCertificates}`} 
            item={item} 
            onUpdateQuantity={updateQuantity} 
            onRemove={removeItem}
            onUpdateNotes={updateNotes}
          />
        ))}
      </Stack>
      
      <CartFooter 
        onSave={handleSaveAction}
        isSaving={isSaving}
        saveLabel={isAuthenticated ? "Save Cart" : "Login to Save Cart"}
       
      />
    </Container>
  )
}

export default CartPage