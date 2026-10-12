export interface PIFFilterDTO {
  id: string
  partNumber: string
  description: string
  series: 'IA' | 'IB' | 'IC' | 'ID'
  threadStandard: 'OD' | 'NPT' | 'Metric'
  threadSize: string
  endConnection: 'F' | 'M' | 'MF' | 'FM' | 'Tube Fitting'
  filterElement: 'Sintered' | 'Mesh'
  poreSize: number
  material: 'SS'
  imageUrl?: string
}

export interface PIFFilters {
  series: string[]
  threadStandards: string[]
  threadSizes: string[]
  endConnections: string[]
  filterElements: string[]
  poreSizes: number[]
}

export const EMPTY_PIF_FILTERS: PIFFilters = {
  series: [],
  threadStandards: [],
  threadSizes: [],
  endConnections: [],
  filterElements: [],
  poreSizes: [],
}

export const THREAD_SIZE_SORT_ORDER = [
  '3mm', '1/8"', '1/4"', '6mm', '3/8"', '1/2"', '8mm', '10mm', '12mm', 'M20x1.5',
]

export const END_CONNECTION_LABELS: Record<string, string> = {
  'F': 'Female (F)',
  'M': 'Male (M)',
  'MF': 'Male / Female (MF)',
  'FM': 'Female / Male (FM)',
  'Tube Fitting': 'Tube Fitting (OD)',
}

export const PIF_SERIES_DESCRIPTION = {
  title: "PIF Series — In-Line Filters",
  description:
    "Panam in-line filters for instrumentation, process, and analytical applications. Stainless steel 316 construction with sintered or mesh filter elements across 0.5μm to 440μm pore sizes. Available with OD tube fittings, NPT threads, and metric connections from 3mm to 12mm tube and 1/8\" to 1/2\" thread sizes.",
  poreCodeNote:
    "Pore size code in part numbers: \"05\" = 0.5 μm; every other code is the rating in microns (e.g. \"2\" = 2 μm, \"40\" = 40 μm).",
  specs: [
    "In-Line Configuration",
    "Stainless Steel 316",
    "Sintered & Mesh Elements",
    "0.5 – 440 μm Pore Size",
    "OD, NPT & Metric Connections",
    "Nitrogen leak tested at 1000 psi",
  ],
}