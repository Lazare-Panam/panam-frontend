import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useNotificationStore } from "./useNotficationStore"

export interface CartItem {
  cartItemId: string
  id: string
  name: string
  image?: string
  quantity: number
  partNumber: string
  notes?: string
  specs: Record<string, string>
  hasCertificates?: boolean
}

interface CartStore {
  cart: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (cartItemId: string, hasCertificates?: boolean) => void
  updateQuantity: (cartItemId: string, hasCertificates: boolean | undefined, delta: number) => void
  updateNotes: (cartItemId: string, hasCertificates: boolean | undefined, notes: string) => void
  clearCart: () => void
}

const notify = (message: string, severity: "success" | "error" | "info" | "warning", partNumber?: string) =>
  useNotificationStore.getState().showNotification({ message, severity, partNumber })

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addItem: (newItem) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (item) =>
              item.cartItemId === newItem.cartItemId &&
              (item.hasCertificates ?? false) === (newItem.hasCertificates ?? false)
          )

          if (existingIndex > -1) {
            const newCart = [...state.cart]
            newCart[existingIndex].quantity += newItem.quantity
            notify("Quantity updated", "success", newItem.partNumber)
            return { cart: newCart }
          }

          notify("Added to cart", "success", newItem.partNumber)
          return { cart: [...state.cart, newItem] }
        }),

      removeItem: (cartItemId, hasCertificates) =>
        set((state) => {
          const item = state.cart.find(
            (i) => i.cartItemId === cartItemId && (i.hasCertificates ?? false) === (hasCertificates ?? false)
          )
          if (item) notify("Removed from cart", "info", item.partNumber)
          return {
            cart: state.cart.filter(
              (i) => !(i.cartItemId === cartItemId && (i.hasCertificates ?? false) === (hasCertificates ?? false))
            ),
          }
        }),

      updateQuantity: (cartItemId, hasCertificates, delta) =>
        set((state) => ({
          cart: state.cart.map((item) => {
            if (item.cartItemId === cartItemId && (item.hasCertificates ?? false) === (hasCertificates ?? false)) {
              notify("Quantity updated", "success", item.partNumber)
              return { ...item, quantity: Math.max(1, item.quantity + delta) }
            }
            return item
          }),
        })),

      updateNotes: (cartItemId, hasCertificates, notes) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId && (item.hasCertificates ?? false) === (hasCertificates ?? false)
              ? { ...item, notes: notes.trim() === "" ? undefined : notes }
              : item
          ),
        })),

      clearCart: () => {
        notify("Cart cleared", "info")
        set({ cart: [] })
      },
    }),
    { name: "panam-cart-storage" }
  )
)