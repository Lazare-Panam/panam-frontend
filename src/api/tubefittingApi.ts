import axiosClient from "./axiosClient"

// ── Types ──────────────────────────────────────────────────────

export interface AdapterDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  threadSize: string
  threadType: string
  imageUrl?: string
}
export interface AdapterFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadSizes: string[]
  threadTypes: string[]
}
export interface AdapterFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  threadSizes?: string[]
  threadTypes?: string[]
}

export interface ConnectorElbowDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  threadDimension: string
  threadType: string
  isPositionable?: boolean
  hasORingSeal?: boolean
  imageUrl?: string
}
export interface ConnectorElbowFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadDimensions: string[]
  threadTypes: string[]
}
export interface ConnectorElbowFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  threadDimensions?: string[]
  threadTypes?: string[]
  isPositionable?: boolean | null
  hasORingSeal?: boolean | null
}

export interface ReducerDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  tubeOD2: string
  tubeOD2Unit: string
  imageUrl?: string
}
export interface ReducerFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD2Units: string[]
}
export interface ReducerFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  tubeOD2s?: string[]
  tubeOD2Units?: string[]
}

export interface UnionDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  tubeOD2?: string
  tubeOD3?: string
  imageUrl?: string
}
export interface UnionFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD3s: string[]
}
export interface UnionFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  tubeOD2s?: string[]
  tubeOD3s?: string[]
}

// ── API calls ──────────────────────────────────────────────────

const BASE = "/api/tube-fittings"

export const getAdapters = async (f: AdapterFilterParams) => (await axiosClient.post(`${BASE}/adapters/filter`, f)).data as AdapterDto[]
export const getAdapterFilterOptions = async () => (await axiosClient.get(`${BASE}/adapters/filter-options`)).data as AdapterFilterOptions

export const getConnectorElbows = async (f: ConnectorElbowFilterParams) => (await axiosClient.post(`${BASE}/connector-elbows/filter`, f)).data as ConnectorElbowDto[]
export const getConnectorElbowFilterOptions = async () => (await axiosClient.get(`${BASE}/connector-elbows/filter-options`)).data as ConnectorElbowFilterOptions

export const getReducers = async (f: ReducerFilterParams) => (await axiosClient.post(`${BASE}/reducers/filter`, f)).data as ReducerDto[]
export const getReducerFilterOptions = async () => (await axiosClient.get(`${BASE}/reducers/filter-options`)).data as ReducerFilterOptions

export const getUnions = async (f: UnionFilterParams) => (await axiosClient.post(`${BASE}/unions/filter`, f)).data as UnionDto[]
export const getUnionFilterOptions = async () => (await axiosClient.get(`${BASE}/unions/filter-options`)).data as UnionFilterOptions
