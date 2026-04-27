export type NeedleValveSeries = 'IB' | 'HB' | 'HP' | 'SB' | 'Mini'

export interface NeedleValveIBFilters {
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

export const EMPTY_IB_FILTERS: NeedleValveIBFilters = {
  bodyMaterials: [], threadTypes: [], endConnections: [],
  connectionSizes: [], configurations: [], stemSeals: [],
  stepTips: [], handles: [], options: [],
}

export const BODY_MATERIAL_LABELS: Record<string, string> = {
  S: '316 Stainless Steel',
  C: 'Carbon Steel A105',
  M: 'Monel',
  H: 'Hastelloy',
  B: 'Brass',
}

export const END_CONNECTION_LABELS: Record<string, string> = {
  OD: 'Tube Fitting (OD)',
  FF: 'Female / Female',
  MF: 'Male / Female',
  MM: 'Male / Male',
  MOD: 'Male / Tube Fitting',
}
export const SERIES_DESCRIPTIONS: Record<NeedleValveSeries, { title: string; description: string; specs: string[] }> = {
  IB: {
    title: 'IB Series — Inline Body',
    description: 'Compact inline body design with tube fitting and threaded connections. Available in straight and angular configurations with multiple stem seal and step tip options.',
    specs: ['316 Stainless Steel body', 'Straight & Angular', 'NPT · ISO Tapered · ISO Parallel · Metric', 'OD · FF · MF · MM · MOD'],
  },
  HB: {
    title: 'HB Series — Hex Body',
    description: 'Heavy duty hex body with hard and soft seat options. Available as needle valve or block & bleed valve. Rated to 10,000 psi with exotic material options.',
    specs: ['Hard & Soft Seat', 'Needle Valve & Block & Bleed', 'Up to 10,000 psi', 'SS · CS · Monel · Hastelloy'],
  },
  HP: {
    title: 'HP Series — High Pressure',
    description: 'Engineered for extreme pressure applications at 10K and 20K psi. Available in straight, angular, 3-way and manifold configurations with PANAM tube fittings.',
    specs: ['10,000 & 20,000 psi rated', 'Straight · Angular · 3-Way · Manifold', 'PANAM HP Tube Fittings', 'Panel mount available'],
  },
  SB: {
    title: 'SB Series — Square Body',
    description: 'Square body design with hard and soft seat options. Available as needle valve or block & bleed. Tube fitting inch and metric, threaded connections.',
    specs: ['Hard & Soft Seat', 'Needle Valve & Block & Bleed', 'OD inch & metric', 'NPT · Metric'],
  },
  Mini: {
    title: 'Mini Valve — PMV Series',
    description: 'Compact mini valve for tight spaces. Hard seat only. FKM, PTFE and Grafoil packing bonnet options. 1/4" and 6mm sizes.',
    specs: ['Hard Seat', 'FKM · PTFE · Grafoil Bonnet', '1/4" & 6mm', 'NPT · BSPT · BSPP'],
  },
}
export interface NeedleValveHBFilters {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
  options: string[]
}

export const EMPTY_HB_FILTERS: NeedleValveHBFilters = {
  valveTypes: [], seats: [], bodyMaterials: [],
  endConnections: [], connectionSizes: [], workingPressures: [], options: [],
}

export const VALVE_TYPE_LABELS: Record<string, string> = {
  PNV: 'Needle Valve',
  PBB: 'Block & Bleed',
}

export const SEAT_LABELS: Record<string, string> = {
  H: 'Hard Seat',
  S: 'Soft Seat - Delrin',
  S1: 'Soft Seat - PCTFE',
  S2: 'Soft Seat - PEEK',
}
export interface NeedleValveHPFilters {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  workingPressures: string[]
  options: string[]
}

export const EMPTY_HP_FILTERS: NeedleValveHPFilters = {
  bodyMaterials: [], threadTypes: [], endConnections: [],
  connectionSizes: [], configurations: [], workingPressures: [], options: [],
}

export const CONFIGURATION_LABELS: Record<string, string> = {
  'Straight': 'Straight',
  'Angular': 'Angular',
  '3-Way 2 Inlets': '3-Way — 2 Inlets',
  '3-Way 2 Outlets': '3-Way — 2 Outlets',
  '2-Way Manifold': '2-Way Manifold',
}
export interface NeedleValveSBFilters {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
  options: string[]
}

export interface MiniValveFilters {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  steamSeals: string[]
  options: string[]
}

export const EMPTY_SB_FILTERS: NeedleValveSBFilters = {
  valveTypes: [], seats: [], bodyMaterials: [], threadTypes: [],
  endConnections: [], connectionSizes: [], workingPressures: [], options: [],
}

export const EMPTY_MINI_FILTERS: MiniValveFilters = {
  bodyMaterials: [], threadTypes: [], endConnections: [],
  connectionSizes: [], steamSeals: [], options: [],
}

export const SB_SEAT_LABELS: Record<string, string> = {
  H: 'Hard Seat',
  S: 'Soft Seat - Delrin',
  S1: 'Soft Seat - PCTFE',
  S2: 'Soft Seat - PEEK',
  ST: 'Soft Tip - PEEK (Std.)',
  ST1: 'Soft Tip - PTFE',
  ST2: 'Soft Tip - PCTFE',
}

export const STEAM_SEAL_LABELS: Record<string, string> = {
  V: 'FKM Packing Bonnet',
  T: 'PTFE Packing Bonnet',
  HT: 'Grafoil Packing Bonnet',
}