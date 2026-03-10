import axiosClient from "./axiosClient"

const CART_BASE_PATH = "/api/cart"

export interface CartItemDTO {
  productCode: string
  productDescription: string
  quantity: number
  notes?: string
}

export interface CartItemResponseDTO {
  id: string // Guid from C#
  productCode: string
  productDescription: string
  quantity: number
  notes: string
}

// 1. Add/Update Item (The "Save" Logic)
export const addToCartApi = async (item: CartItemDTO): Promise<void> => {
  await axiosClient.post(`${CART_BASE_PATH}/addToCart`, item)
}

// 2. Fetch User's Saved Cart
export const getCartApi = async (): Promise<CartItemResponseDTO[]> => {
  const response = await axiosClient.get(`${CART_BASE_PATH}/getCart`)
  return response.data
}

// 3. Remove Item
export const removeFromCartApi = async (cartItemId: string): Promise<void> => {
  await axiosClient.delete(`${CART_BASE_PATH}/removeFromCart/${cartItemId}`)
}

// 4. Update Notes Only
export const updateCartItemApi = async (cartItemId: string, quantity: number, notes: string): Promise<void> => {
  await axiosClient.patch(`/api/cart/${cartItemId}/update`, {
    quantity,
    notes,
  })
}
