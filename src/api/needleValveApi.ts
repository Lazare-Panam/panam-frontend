import axiosClient from "./axiosClient"

export interface NeedleValveIBDTO {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  threadType: string
  endConnection: string
  connectionSize: string
  configuration: string
  stemSeal: string
  stepTip: string
  handle: string
  options: string
  imageUrl: string
}

export interface NeedleValveIBFilterOptions {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  stemSeals: string[]
  stepTips: string[]
  handles: string[]
  options: string[]
}

export interface NeedleValveIBFilterParams {
  bodyMaterials?: string[]
  threadTypes?: string[]
  endConnections?: string[]
  connectionSizes?: string[]
  configurations?: string[]
  stemSeals?: string[]
  stepTips?: string[]
  handles?: string[]
  options?: string[]
}

export interface NeedleValveHBDTO {
  id: number
  partNumber: string
  valveType: string
  series: string
  seat: string
  bodyMaterial: string
  endConnection: string
  connectionSize: string
  workingPressure: string
  options: string
  imageUrl: string
}

export interface NeedleValveHBFilterOptions {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
  options: string[]
}

export interface NeedleValveHBFilterParams {
  valveTypes?: string[]
  seats?: string[]
  bodyMaterials?: string[]
  endConnections?: string[]
  connectionSizes?: string[]
  workingPressures?: string[]
  options?: string[]
}

export interface NeedleValveHPDTO {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  threadType: string
  endConnection: string
  connectionSize: string
  configuration: string
  workingPressure: string
  options: string
  imageUrl: string
}

export interface NeedleValveHPFilterOptions {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  workingPressures: string[]
  options: string[]
}

export interface NeedleValveHPFilterParams {
  bodyMaterials?: string[]
  threadTypes?: string[]
  endConnections?: string[]
  connectionSizes?: string[]
  configurations?: string[]
  workingPressures?: string[]
  options?: string[]
}

// IB
export const getNeedleValvesIB = async (filters: NeedleValveIBFilterParams) => {
  const response = await axiosClient.post("/api/needle-valves/ib/filter", filters)
  return response.data as NeedleValveIBDTO[]
}
export const getNeedleValveIBFilterOptions = async () => {
  const response = await axiosClient.get("/api/needle-valves/ib/filter-options")
  return response.data as NeedleValveIBFilterOptions
}

// HB
export const getNeedleValvesHB = async (filters: NeedleValveHBFilterParams) => {
  const response = await axiosClient.post("/api/needle-valves/hb/filter", filters)
  return response.data as NeedleValveHBDTO[]
}
export const getNeedleValveHBFilterOptions = async () => {
  const response = await axiosClient.get("/api/needle-valves/hb/filter-options")
  return response.data as NeedleValveHBFilterOptions
}

// HP
export const getNeedleValvesHP = async (filters: NeedleValveHPFilterParams) => {
  const response = await axiosClient.post("/api/needle-valves/hp/filter", filters)
  return response.data as NeedleValveHPDTO[]
}
export const getNeedleValveHPFilterOptions = async () => {
  const response = await axiosClient.get("/api/needle-valves/hp/filter-options")
  return response.data as NeedleValveHPFilterOptions
}
export interface NeedleValveSBDTO {
  id: number
  partNumber: string
  valveType: string
  series: string
  seat: string
  bodyMaterial: string
  threadType: string
  endConnection: string
  connectionSize: string
  workingPressure: string
  options: string
  imageUrl: string
}

export interface NeedleValveSBFilterOptions {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
  options: string[]
}

export interface NeedleValveSBFilterParams {
  valveTypes?: string[]
  seats?: string[]
  bodyMaterials?: string[]
  threadTypes?: string[]
  endConnections?: string[]
  connectionSizes?: string[]
  workingPressures?: string[]
  options?: string[]
}

export interface MiniValveDTO {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  threadType: string
  endConnection: string
  connectionSize: string
  steamSeal: string
  options: string
  imageUrl: string
}

export interface MiniValveFilterOptions {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  steamSeals: string[]
  options: string[]
}

export interface MiniValveFilterParams {
  bodyMaterials?: string[]
  threadTypes?: string[]
  endConnections?: string[]
  connectionSizes?: string[]
  steamSeals?: string[]
  options?: string[]
}

export const getNeedleValvesSB = async (filters: NeedleValveSBFilterParams) => {
  const response = await axiosClient.post("/api/needle-valves/sb/filter", filters)
  return response.data as NeedleValveSBDTO[]
}
export const getNeedleValveSBFilterOptions = async () => {
  const response = await axiosClient.get("/api/needle-valves/sb/filter-options")
  return response.data as NeedleValveSBFilterOptions
}

export const getMiniValves = async (filters: MiniValveFilterParams) => {
  const response = await axiosClient.post("/api/needle-valves/mini/filter", filters)
  return response.data as MiniValveDTO[]
}
export const getMiniValveFilterOptions = async () => {
  const response = await axiosClient.get("/api/needle-valves/mini/filter-options")
  return response.data as MiniValveFilterOptions
}