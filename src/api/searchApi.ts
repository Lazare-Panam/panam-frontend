// services/searchService.ts
import axiosClient from "./axiosClient"

export interface AutocompleteResultDTO {
  partNumber: string
  name: string
  imageUrl: string | null
  categoryId: number
  categoryName: string
  snippet: string
}

export interface SearchResultDTO {
  id: number
  partNumber: string
  name: string
  description: string | null
  imageUrl: string | null
  categoryName: string
}

export interface SearchResponseDTO {
  items: SearchResultDTO[]
  totalCount: number
  page: number
  pageSize: number
}

export const getAutocomplete = async (q: string): Promise<AutocompleteResultDTO[]> => {
  const response = await axiosClient.get<AutocompleteResultDTO[]>("/api/search/autocomplete", {
    params: { q },
  })
  return response.data
}

export const searchProducts = async (q: string, categoryId?: number, page = 1, pageSize = 20): Promise<SearchResponseDTO> => {
  const response = await axiosClient.get<SearchResponseDTO>("/api/search/products", {
    params: { q, categoryId, page, pageSize },
  })
  return response.data
}

export const getFilters = async (categoryId: number): Promise<FilterResultDTO> => {
  const response = await axiosClient.get<FilterResultDTO>("/api/search/filters", {
    params: { categoryId },
  })
  return response.data
}

export interface FilterResultDTO {
  filters: Record<string, string[]>
}
// api/searchApi.ts — add this
export interface ProductDetailDTO {
  partNumber: string
  name: string
  description: string | null
  imageUrl: string | null
  categoryName: string
  categoryId: number
  specs: Record<string, string>
}

export const getProductDetail = async (partNumber: string): Promise<ProductDetailDTO> => {
  const response = await axiosClient.get<ProductDetailDTO>(`/api/search/product/${partNumber}`)
  return response.data
}
