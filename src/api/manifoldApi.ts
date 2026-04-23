import axiosClient from "./axiosClient"

export interface TwoWayValveManifoldDTO {
  id: number
  partNumber: string
  material: string
  connectionSize: string
  connectionSizeCode: string
  connectionType: string
  connectionTypeCode: string
  mounting: string
  mountingCode: string
  configuration: string
  configurationCode: string
  ventHoleSize: string
  ventHoleSizeCode: string
  maxPressure: string
  maxPressureCode: string
  optional: string | null
  mountingBrackets: string | null
  imageUrl: string
}

export interface TwoWayManifoldFilterOptions {
  connectionSizes: string[]
  connectionTypes: string[]
  mountings: string[]
  maxPressures: string[]
  configurations: string[]
  ventHoleSizes: string[]
}

export interface TwoWayManifoldFilterParams {
  connectionSizes?: string[]
  connectionTypes?: string[]
  mountings?: string[]
  maxPressures?: string[]
  configurations?: string[]
  ventHoleSizes?: string[]
}
export const getTwoWayManifolds = async (filters: TwoWayManifoldFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach(v => params.append(key, v))
    else if (value !== undefined) params.append(key, String(value))
  })
  const response = await axiosClient.get("/api/manifolds/2way", { params })
  return response.data as TwoWayValveManifoldDTO[]
}

export const getTwoWayManifoldFilters = async () => {
  const response = await axiosClient.get("/api/manifolds/2way/filters")
  return response.data as TwoWayManifoldFilterOptions
}
