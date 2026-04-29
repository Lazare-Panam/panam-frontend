export interface PCVFilters {
  materials: string[]
  inlets: string[]
  inletTubeODs: string[]
  outlets: string[]
  outletTubeODs: string[]
}

export const EMPTY_PCV_FILTERS: PCVFilters = {
  materials: [],
  inlets: [],
  inletTubeODs: [],
  outlets: [],
  outletTubeODs: [],
}

export const INLET_OUTLET_LABELS: Record<string, string> = {
  OD: "Tube OD",
  "Female NPT": "Female NPT",
  "Male NPT": "Male NPT",
}

export const MATERIAL_LABELS: Record<string, string> = {
  SS: "Stainless Steel",
}