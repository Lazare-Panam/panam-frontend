import axiosClient from "./axiosClient"

export interface PipeFittingDTO {
  id: number
  partNo: string
  fittingType: string
  material: string
  p1Size: string
  p1Type: string
  p2Size: string | null
  p2Type: string | null
  lengthVariant: string | null
  imageUrl: string
}

export interface PipeFittingFilterOptions {
  fittingTypes: string[]
  materials: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[] | null
  p2Types: string[] | null
  lengthVariants: string[] | null
}

export interface PipeFittingFilterParams {
  fittingTypes?: string[]
  materials?: string[]
  p1Sizes?: string[]
  p1Types?: string[]
  p2Sizes?: string[]
  p2Types?: string[]
  lengthVariants?: string[]
}

export const getPipeFittings = async (filters: PipeFittingFilterParams) => {
  const response = await axiosClient.post("/api/pipe-fittings/filter", filters)
  return response.data as PipeFittingDTO[]
}

export const getPipeFittingFilterOptions = async () => {
  const response = await axiosClient.get("/api/pipe-fittings/filter-options")
  return response.data as PipeFittingFilterOptions
}