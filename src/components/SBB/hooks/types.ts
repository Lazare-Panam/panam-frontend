// Shared types for the Single Block & Bleed (SBB) feature. Unlike DBB, the three SBB families
// (Monoflange, Flange-to-Pipe, Block & Bleed) don't share one part-number scheme, so the rows are
// hand-authored in sbbValveData.ts rather than decoded. Each row carries a `family` so the three
// sub-pages can filter one dataset instead of maintaining three.

export type SBBFamily = "Monoflange" | "Flange to Pipe" | "Block & Bleed"

export interface SBBValveDTO {
  id: string
  partNumber: string
  description: string
  family: SBBFamily
  construction: string      // "Screwed Bonnet" | "Integral" | "Bar Stock"
  configuration: string     // "Block & Bleed" | "Isolate & Drain" | "Ball-Needle"
  boreSize: string          // "10mm" | "12mm" | "—"
  inletSize: string         // '1/2" Flange' | '1" BSPP Female' | …
  pressureClass: string     // "150" | "1500" | "PN16" | "—"
  endConnection: string     // "RF" | "BSPP" | "BSPT" | "—"  (flange face or thread form)
  outlet: string
  vent: string
  sealMaterial: string      // "PTFE" | "Grafoil"
  seatMaterial: string      // "PTFE" | "PEEK"
  options: string[]
  imageUrl?: string
}

export interface SBBValveFilters {
  constructions: string[]
  configurations: string[]
  boreSizes: string[]
  inletSizes: string[]
  pressureClasses: string[]
  endConnections: string[]
  outlets: string[]
  vents: string[]
  sealMaterials: string[]
  seatMaterials: string[]
  options: string[]
}

export const EMPTY_SBB_FILTERS: SBBValveFilters = {
  constructions: [],
  configurations: [],
  boreSizes: [],
  inletSizes: [],
  pressureClasses: [],
  endConnections: [],
  outlets: [],
  vents: [],
  sealMaterials: [],
  seatMaterials: [],
  options: [],
}

// Preferred display order; any value present but not listed falls to the end (see sortByOrder).
export const BORE_SIZE_SORT_ORDER = ["10mm", "12mm", "14mm", "20mm", "25mm", "—"]

export const INLET_SIZE_SORT_ORDER = [
  '1/2" Flange', '3/4" Flange', '1" Flange', '1-1/2" Flange', '2" Flange',
  '1/2" BSPP Female', '3/4" BSPP Female', '1" BSPP Female',
]

export const PRESSURE_CLASS_SORT_ORDER = ["150", "300", "600", "900", "1500", "2500", "PN16", "—"]

export const END_CONNECTION_SORT_ORDER = ["RF", "RTJ", "BSPP", "BSPT", "—"]

export const OUTLET_SORT_ORDER = [
  "Same as Inlet",
  '1/4" NPT Female', '1/2" NPT Female', '3/4" NPT Female', '1" NPT Female',
  '1/2" BSPP Female', '3/4" BSPP Female', '1" BSPP Female',
]

export const VENT_SORT_ORDER = [
  '1/4" NPT', '1/2" NPT',
  '1/2" BSPP Female',
]

// Copy for each sub-page header and its Product structured data.
export interface SBBDescriptor {
  title: string
  description: string
  specs: string[]
}

export const MONOFLANGE_DESCRIPTION: SBBDescriptor = {
  title: "Single Block & Bleed — Monoflange (Screwed Bonnet)",
  description:
    "Panam PSBB Single Block & Bleed monoflange valves with all-screwed-bonnet construction for primary instrument isolation and drain. Direct flange-mounted to the process with a threaded outlet to the instrument and an integral bleed/vent. Stainless steel 316 body with PTFE packing in Class 150 to 1500 and PN16 pressure classes. Flange face RF, outlet and vent in NPT. NACE MR-0175 (SG) option available.",
  specs: [
    "Single Block & Bleed",
    "Monoflange — All Screwed Bonnet",
    "Stainless Steel 316",
    "Class 150 – 1500 · PN16",
    "RF Flange · NPT Outlet & Vent",
    "PTFE Packing · NACE MR-0175 Option",
  ],
}

export const FXP_SBB_DESCRIPTION: SBBDescriptor = {
  title: "Single Block & Bleed — Flange to Pipe (Integral)",
  description:
    "Panam PSBB Single Block & Bleed valves with Flange-to-Pipe integral construction in a Ball-Needle arrangement for primary isolation and bleed. Stainless steel 316 body with PEEK seats and Grafoil seals. Class 150 RF flanged inlet with a threaded NPT outlet and vent. Fire Safe, Anti-Static, and Locking Handle options available.",
  specs: [
    "Single Block & Bleed",
    "Flange to Pipe — Integral",
    "Ball-Needle",
    "Stainless Steel 316",
    "PEEK Seat · Grafoil Seal",
    "Fire Safe / Anti-Static / Locking Handle",
  ],
}

export const BB_SBB_DESCRIPTION: SBBDescriptor = {
  title: "Single Block & Bleed — Block & Bleed (Threaded)",
  description:
    "Panam PSBB Block & Bleed valves in a compact threaded body for isolation and bleed on instrument lines. Stainless steel 316 body and trim with PEEK seats and Grafoil seals. BSPP female inlet, outlet, and vent (vent supplied with plug). Fire Safe and Locking Handle options available.",
  specs: [
    "Single Block & Bleed",
    "Block & Bleed — Threaded",
    "Stainless Steel 316 Body & Trim",
    "BSPP Female Connections",
    "PEEK Seat · Grafoil Seal",
    "Fire Safe · Locking Handle",
  ],
}
