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
  category?: string
  tubeSize?: string
  tubeUnit?: string
  portThread?: string
  portSize?: string
  page?: number
  hitsPerPage?: number
}

export interface ProductDocument {
  id: string
  partNumber: string
  productFamily: string
  category: string
  series?: string
  pressureRating?: string
  pressurePsi?: number
  configuration?: string
  material: string
  connectionSize?: string
  connectionType?: string
  tubeSize?: string
  tubeUnit?: string
  portSize?: string
  portThread?: string
  productUrl: string
  imageUrl: string
  description: string
}

export interface SearchResult {
  hits: ProductDocument[]
  facetDistribution: Record<string, Record<string, number>>
  totalHits: number
}

// Meilisearch treats `"` as a phrase-search delimiter, so inch marks like
// 3/4" get read as "match this exact phrase" and return zero hits.
// Strip them before the query leaves the frontend.
const sanitizeQuery = (q: string) => q.replace(/"/g, ' ').replace(/\s+/g, ' ').trim()

export const searchApi = {
  search: (params: SearchRequest) =>
    axiosClient.get<SearchResult>('/api/search', {
      params: { ...params, q: params.q ? sanitizeQuery(params.q) : params.q },
    }),
}