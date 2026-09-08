export interface FilterElementDTO {
  id: string
  partNumber: string
  description: string
  sizeGroup: 'Small (IA / IB / TA / TB)' | 'Large (IC / ID / TC / TD)'
  compatibleSeries: string[]
  filterElement: 'Sintered' | 'Mesh'
  poreSize: number
  material: 'SS'
  imageUrl?: string
}

export interface FilterElementFilters {
  sizeGroups: string[]
  filterElements: string[]
  poreSizes: number[]
}

export const EMPTY_FILTER_ELEMENT_FILTERS: FilterElementFilters = {
  sizeGroups: [],
  filterElements: [],
  poreSizes: [],
}

export const FILTER_ELEMENT_DESCRIPTION = {
  title: "PSE Series — Replacement Filter Elements",
  description:
    "Panam replacement filter elements (cartridges) for PIF In-Line and PTF T-Type filter housings. Stainless steel 316 sintered or mesh construction across 0.5μm to 440μm pore sizes. Small-bore elements (PSE-IA) fit IA/IB/TA/TB housings; large-bore elements (PSE-IC) fit IC/ID/TC/TD housings.",
  specs: [
    "Replacement Element",
    "Stainless Steel 316",
    "Sintered & Mesh",
    "0.5 – 440 μm Pore Size",
    "Fits PIF & PTF Housings",
  ],
}
