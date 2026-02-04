import React, { useState } from "react"
import { Box, Container, Typography, Stack, Button, CircularProgress, Snackbar, Alert } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { requestQuotation } from "../../api/orderApi"
import { useCartStore } from "../store/useCartStore"
import { useNavigate } from "react-router-dom"
import CartHeader from "./components/CartHeader"
import CartItem from "./components/CartItem"
import CartFooter from "./components/CartFooter"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface NotificationState {
  open: boolean
  message: string
  severity: "success" | "error"
}

const CartPage = () => {
  const navigate = useNavigate()
  const { cart, removeItem, updateQuantity } = useCartStore()
  const isHydrated = useCartStore.persist.hasHydrated()

  // --- Notification State ---
  const [notif, setNotif] = useState<NotificationState>({
    open: false,
    message: "",
    severity: "success",
  })

  // --- API Mutation ---
  const { mutate, isPending } = useMutation<any, Error>({
    mutationFn: requestQuotation,
    onSuccess: () => {
      setNotif({
        open: true,
        message: "Quotation request submitted successfully!",
        severity: "success",
      })
    },
    onError: () => {
      setNotif({
        open: true,
        message: "Unable to send request. Please try again later.",
        severity: "error",
      })
    },
    retry: false,
  })

  const handleCloseNotif = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return
    setNotif(prev => ({ ...prev, open: false }))
  }

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

      {/* Table Header Row */}
      <CartHeader />

      {/* Product Rows */}
      {cart.map(item => (
        <CartItem key={item.cartItemId} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
      ))}

      {/* Bottom Action Bar */}
      <CartFooter onProceed={() => mutate()} isPending={isPending} />

      {/* Notification System */}
      <Snackbar open={notif.open} autoHideDuration={5000} onClose={handleCloseNotif} anchorOrigin={{ vertical: "top", horizontal: "center" }} sx={{ mt: 5 }}>
        <Alert
          onClose={handleCloseNotif}
          severity={notif.severity}
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: notif.severity === "success" ? BRAND_BLUE : "#f44336",
            color: "#fff",
            fontWeight: 800,
            fontFamily: PRIMARY_FONT,
            borderRadius: 0,
            fontSize: "1.1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            px: 4,
            py: 2,
            "& .MuiAlert-icon": { fontSize: "2rem" },
          }}>
          {notif.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default CartPage
