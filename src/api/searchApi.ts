// api/searchApi.ts
import axiosClient from './axiosClient'

export interface SearchRequest {
  q?: string
  productFamily?: string
  series?: string
  pressureRating?: string
  configuration?: string
  connectionSize?: string
  connectionType?: string
  page?: number
  hitsPerPage?: number
}

export interface ProductDocument {
  id: string
  partNumber: string
  productFamily: string
  category: string
  series: string
  pressureRating: string
  pressurePsi: number
  configuration: string
  material: string
  connectionSize: string
  connectionType: string
  productUrl: string
  imageUrl: string
  description: string
}

export interface SearchResult {
  hits: ProductDocument[]
  facetDistribution: Record<string, Record<string, number>>
  totalHits: number
}

export const searchApi = {
  search: (params: SearchRequest) =>
    axiosClient.get<SearchResult>('/api/search', { params }),
}