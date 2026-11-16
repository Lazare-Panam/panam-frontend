export interface PCVFilters {
  materials: string[]
  inlets: string[]
  inletTubeODs: string[]
  outlets: string[]
  outletTubeODs: string[]
  pressureRatings: number[]
}

export const EMPTY_PCV_FILTERS: PCVFilters = {
  materials: [],
  inlets: [],
  inletTubeODs: [],
  outlets: [],
  outletTubeODs: [],
  pressureRatings: [],
}

export const INLET_OUTLET_LABELS: Record<string, string> = {
  OD: "Tube OD",
  "Female NPT": "Female NPT",
  "Male NPT": "Male NPT",
}

export const MATERIAL_LABELS: Record<string, string> = {
  SS: "Stainless Steel",
  B: "Brass",
}

export const formatPressure = (psi: number) => `${psi.toLocaleString()} psig`