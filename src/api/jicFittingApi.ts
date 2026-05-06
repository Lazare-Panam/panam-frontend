import axiosClient from "./axiosClient"

export interface JICFittingDTO {
  id: number
  partNo: string
  fittingType: string
  p1Size: string
  p1Type: string
  p2Size?: string
  p2Type?: string
  material: string
  imageUrl?: string
}

export interface JICFittingFilterOptions {
  fittingTypes: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[]
  p2Types: string[]
  materials: string[]
}

export interface JICFittingFilterParams {
  fittingTypes?: string[]
  p1Sizes?: string[]
  p1Types?: string[]
  p2Sizes?: string[]
  p2Types?: string[]
  materials?: string[]
}

export const getJICFittings = async (filters: JICFittingFilterParams) => {
  const response = await axiosClient.post('/api/jic-fittings/filter', filters)
  return response.data as JICFittingDTO[]
}

export const getJICFittingFilterOptions = async () => {
  const response = await axiosClient.get('/api/jic-fittings/filter-options')
  return response.data as JICFittingFilterOptions
}