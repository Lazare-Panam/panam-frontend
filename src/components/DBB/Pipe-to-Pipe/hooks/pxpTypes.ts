export interface PXPValveDTO {
  id: string
  partNumber: string
  description: string
  connectionType: 'Pipe to Pipe'
  configuration: string
  sealMaterial: 'PTFE' | 'Grafoil' | 'PCTFE' | 'FKM'
  seatMaterial: 'Carbon Filled PTFE' | 'PCTFE' | 'Delrin (Soft Seat)' | 'PEEK'
  boreSize: string
  inletSize: string
  inletType: string
  outlet: string
  vent: string
  options: string[]
  imageUrl?: string
}

export interface PXPValveFilters {
  configurations: string[]
  sealMaterials: string[]
  seatMaterials: string[]
  boreSizes: string[]
  inletSizes: string[]
  inletTypes: string[]
  outlets: string[]
  vents: string[]
  options: string[]
}

export const EMPTY_PXP_FILTERS: PXPValveFilters = {
  configurations: [],
  sealMaterials: [],
  seatMaterials: [],
  boreSizes: [],
  inletSizes: [],
  inletTypes: [],
  outlets: [],
  vents: [],
  options: [],
}

export const PXP_BORE_SIZE_SORT_ORDER = [
  '10mm', '12mm', '14mm', '20mm', '25mm', '36mm', '50mm',
]

export const PXP_INLET_SIZE_SORT_ORDER = [
  '1/4" Thread', '1/2" Thread', '3/4" Thread', '1" Thread',
]

export const PXP_INLET_TYPE_SORT_ORDER = [
  'NPT (F)', 'BSPP (F)', 'BSPT (F)',
]

export const PXP_OUTLET_SORT_ORDER = [
  'Same as Inlet',
  '1/2" NPT Female', '3/4" NPT Female', '1" NPT Female',
  '1/2" BSPP Female', '3/4" BSPP Female', '1" BSPP Female',
  '1/2" BSPT Female', '3/4" BSPT Female', '1" BSPT Female',
  'M20 × 1.5 Female',
  '1/2" OD Tube Fitting', '12mm OD Tube Fitting',
]

export const PXP_VENT_SORT_ORDER = [
  '1/4" NPT', '1/2" NPT',
]

export const PXP_DESCRIPTION = {
  title: "Double Block & Bleed Valves — Pipe to Pipe",
  description:
    "Panam PDBB Double Block & Bleed valves with Pipe-to-Pipe threaded construction for instrument isolation and process bleed applications. Stainless Steel 316 body with ball, needle, and combination ball-needle internals. Available in NPT, BSPP, and BSPT thread forms across a range of bore sizes. Pressure rating depends on configuration — contact us to confirm for your application. Options include NACE MR-0175 (SG), Fire Safe (FS), and full seat/seal options.",
  specs: [
    "Double Block & Bleed",
    "Pipe to Pipe — Threaded",
    "Stainless Steel 316",
    "NPT / BSPP / BSPT",
    "Ball, Needle & Combination",
    "NACE MR-0175 / Fire Safe Options",
  ],
}