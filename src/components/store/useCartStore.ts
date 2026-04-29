import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  cartItemId: string 
  id: string 
  name: string
  image?: string
  quantity: number
  partNumber: string 
  notes?: string
  specs: Record<string, string>
  hasCertificates?: boolean // <--- Step 1: Add this optional property
}

interface CartStore {
  cart: CartItem[]
  addItem: (item: CartItem) => void
  // Step 1: Update these signatures to accept the optional boolean
  removeItem: (cartItemId: string, hasCertificates?: boolean) => void
  updateQuantity: (cartItemId: string, hasCertificates: boolean | undefined, delta: number) => void
  updateNotes: (cartItemId: string, hasCertificates: boolean | undefined, notes: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addItem: (newItem) =>
        set((state) => {
          // We treat 'undefined' or 'null' as 'false' for comparison
          const existingIndex = state.cart.findIndex(
            (item) =>
              item.cartItemId === newItem.cartItemId &&
              (item.hasCertificates ?? false) === (newItem.hasCertificates ?? false)
          )

          if (existingIndex > -1) {
            const newCart = [...state.cart]
            newCart[existingIndex].quantity += newItem.quantity
            return { cart: newCart }
          }
          return { cart: [...state.cart, newItem] }
        }),

      removeItem: (cartItemId, hasCertificates) =>
        set((state) => ({
          cart: state.cart.filter(
            (i) => !(i.cartItemId === cartItemId && (i.hasCertificates ?? false) === (hasCertificates ?? false))
          ),
        })),

      updateQuantity: (cartItemId, hasCertificates, delta) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId && (item.hasCertificates ?? false) === (hasCertificates ?? false)
              ? { ...item, quantity: Math.max(1, item.quantity + delta) }
              : item
          ),
        })),

      updateNotes: (cartItemId, hasCertificates, notes) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId && (item.hasCertificates ?? false) === (hasCertificates ?? false)
              ? { ...item, notes: notes.trim() === "" ? undefined : notes }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "panam-cart-storage" }
  )
)