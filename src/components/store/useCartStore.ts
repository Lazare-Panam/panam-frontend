import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  cartItemId: string // Unique ID (productId + partNumber)
  id: string // Base Product ID
  name: string
  image: string
  quantity: number
  partNumber: string // <--- Added for direct display
  notes?: string
  specs: Record<string, string>
}

interface CartStore {
  cart: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, delta: number) => void
  updateNotes: (cartItemId: string, notes: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      cart: [],

      addItem: newItem =>
        set(state => {
          // Check if this exact configuration already exists
          const existingIndex = state.cart.findIndex(item => item.cartItemId === newItem.cartItemId)

          if (existingIndex > -1) {
            const newCart = [...state.cart]
            newCart[existingIndex].quantity += newItem.quantity
            return { cart: newCart }
          }
          return { cart: [...state.cart, newItem] }
        }),

      removeItem: cartItemId =>
        set(state => ({
          cart: state.cart.filter(i => i.cartItemId !== cartItemId),
        })),

      updateQuantity: (cartItemId, delta) =>
        set(state => ({
          cart: state.cart.map(item => (item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
        })),
      updateNotes: (cartItemId: string, notes: string) =>
        set(state => ({
          cart: state.cart.map(item => (item.cartItemId === cartItemId ? { ...item, notes: notes.trim() === "" ? undefined : notes } : item)),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "panam-cart-storage" }
  )
)
