export interface JICFittingFilters {
  fittingTypes: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[]
  p2Types: string[]
  materials: string[]
}

export const EMPTY_JIC_FITTING_FILTERS: JICFittingFilters = {
  fittingTypes: [],
  p1Sizes: [],
  p1Types: [],
  p2Sizes: [],
  p2Types: [],
  materials: [],
}

export const JIC_FITTING_TYPE_LABELS: Record<string, string> = {
  MC:  'Male Connector',
  FC:  'Female Connector',
  U:   'Union',
  UL:  'Large Hex Union',
  SU:  'Swivel Union',
  RA:  'Reducing Adapter',
  S:   'Sleeve',
  BU:  'Bulkhead Union',
  BLN: 'Bulkhead Lock Nut',
  N:   'Nut',
  TC:  'Tube Cap',
  TCA: 'Tube Cap Assembly',
  TP:  'Tube Plug',
  ME:  'Male Elbow',
  AME: 'Adj. Male Elbow',
  LME: '45° Male Elbow',
  FE:  'Female Elbow',
  UE:  'Union Elbow',
  MBT: 'Male Branch Tee',
  AMBT:'Adj. Male Branch Tee',
  MRT: 'Male Run Tee',
  FBT: 'Female Branch Tee',
  FRT: 'Female Run Tee',
  UT:  'Union Tee',
  SRT: 'Swivel Run Tee',
  SBT: 'Swivel Branch Tee',
  UC:  'Union Cross',
}

export const JIC_P1_TYPE_LABELS: Record<string, string> = {
  J:    '37° JIC / UNF',
  JSWL: '37° JIC Swivel',
  N:    'NPT',
  R:    'ISO Tapered (BSPT)',
  G:    'ISO Parallel (BSPP)',
  S:    'SAE/MS Straight',
  M:    'Metric',
}