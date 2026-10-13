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
  poreCodeNote:
    "Pore size code in part numbers: \"05\" = 0.5 μm; every other code is the rating in microns (e.g. \"2\" = 2 μm, \"40\" = 40 μm).",
  elementCodeNote:
    "Element code in part numbers: \"SS\" = sintered element, \"ST\" = mesh (strainer) element. Note this differs from housing part numbers, where a trailing \"-SS\" is the SS 316 body material.",
  performanceNote:
    "Filtration area by housing series: IA 350 mm² (sintered); IB, TA, TB 830 mm² sintered / 640 mm² mesh; IC, ID, TC, TD 1,280 mm² sintered / 1,090 mm² mesh. Maximum differential pressure with a clean element at 21°C: 2,250 psi (0.5–2 μm), 1,950 psi (7 μm), 1,750 psi (15 μm), 1,150 psi (40–60 μm), 1,000 psi (90–440 μm). Elements remove 95% of particles larger than the nominal pore size. Spare kits include a silver-plated SS 316 O-ring.",
  specs: [
    "Replacement Element",
    "Stainless Steel 316",
    "Sintered & Mesh",
    "0.5 – 440 μm Pore Size",
    "Fits PIF & PTF Housings",
  ],
}
