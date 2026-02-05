import { Box, Container, Typography, Stack, CircularProgress } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { requestQuotation } from "../../api/orderApi"
import { useCartStore } from "../store/useCartStore"
import CartHeader from "./components/CartHeader"
import CartItem from "./components/CartItem"
import CartFooter from "./components/CartFooter"
import { useNotificationStore } from "../store/useNotficationStore"
import EmptyCartView from "./components/EmptyCart"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface QuotationPayload {
  customerEmail: string
  customerName: string
  orderNumber: string
  items: {
    description: string
    partNumber: string
    quantity: number
  }[]
}
const CartPage = () => {
  const { cart, removeItem, updateQuantity } = useCartStore()
  const isHydrated = useCartStore.persist.hasHydrated()
  const showNotification = useNotificationStore(state => state.showNotification)
  const { mutate, isPending } = useMutation<any, Error, QuotationPayload>({
    mutationFn: requestQuotation,
    onSuccess: () => {
      showNotification({
        message: "Quotation request submitted successfully, you will recieve a mail soon!",
        severity: "success",
      })
    },
    onError: () => {
      showNotification({
        message: "Unable to send request. Please try again later.",
        severity: "error",
      })
    },
    retry: false,
  })
  const handleProceed = () => {
    // This payload matches your .NET QuotationRequest DTO exactly
    const payload = {
      customerEmail: "panamvalves@gmail.com",
      customerName: "Lazare",
      orderNumber: `PV-${Math.floor(1000 + Math.random() * 9000)}`,
      items: cart.map(item => ({
        description:
          Object.values(item.specs)
            .filter(v => v)
            .join(", ") || item.name,
        partNumber: item.partNumber,
        quantity: item.quantity,
        // Notes omitted as requested
      })),
    }

    mutate(payload)
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
      {cart.map(item => (
        <CartItem key={item.cartItemId} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
      ))}
      <CartFooter onProceed={handleProceed} isPending={isPending} />
    </Container>
  )
}

export default CartPage
