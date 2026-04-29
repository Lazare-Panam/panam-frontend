export interface ReliefValveFilters {
  series: string[]
  bodyMaterials: string[]
  connectionSizes: string[]
  threadTypes: string[]
  connectionTypes: string[]
  springs: string[]
  sealMaterials: string[]
}

export const EMPTY_RELIEF_VALVE_FILTERS: ReliefValveFilters = {
  series: [],
  bodyMaterials: [],
  connectionSizes: [],
  threadTypes: [],
  connectionTypes: [],
  springs: [],
  sealMaterials: [],
}

export const SERIES_LABELS: Record<string, string> = {
  RVL: "RVL — Low Pressure Relief Valve",
  RVH: "RVH — High Pressure Relief Valve",
  "PRVH-10K": "PRVH-10K — High Pressure (10,000 psi)",
  "PRVH-15K": "PRVH-15K — High Pressure (15,000 psi)",
}

export const BODY_MATERIAL_LABELS: Record<string, string> = {
  SS: "SS 316",
  SSL: "SS 316L",
  B: "Brass",
}

export const CONNECTION_TYPE_LABELS: Record<string, string> = {
  OD: "OD — Tube Fitting",
  FF: "FF — Female x Female",
  MF: "MF — Male x Female",
  MM: "MM — Male x Male",
  MOD: "MOD — Male x OD",
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  NPT: "NPT",
  BSPT: "BSPT",
  BSPP: "BSPP",
}

export const SEAL_MATERIAL_LABELS: Record<string, string> = {
  FKM: "FKM (Fluorocarbon)",
  NBR: "NBR (Buna-N)",
  EPDM: "EPDM (Ethylene Propylene)",
  KZ: "KZ (Kalrez FFKM)",
}

export const SPRING_LABELS: Record<string, string> = {
  L: "L — Purple (10–225 psi)",
  A: "A — White (50–350 psi)",
  B: "B — Blue (350–750 psi)",
  C: "C — Gold (750–1500 psi)",
  D: "D — Black (1500–2250 psi)",
  E: "E — Green (2250–3000 psi)",
  F: "F — Yellow (3000–4000 psi)",
  G: "G — Brown (4000–5000 psi)",
  H: "H — Orange (5000–6000 psi)",
  I: "I — Pink (5000–10000 psi)",
  J: "J — Red (7500–15000 psi)",
}

export const CONNECTION_SIZE_LABELS: Record<string, string> = {
  "04": '1/4"',
  "06": '3/8"',
  "08": '1/2"',
  "10": '5/8"',
  "12": '3/4"',
  "16": '1"',
  M06: "6mm",
  M08: "8mm",
  M10: "10mm",
  M12: "12mm",
  "20M": "M20x1.5",
}