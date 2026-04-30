export interface UnionFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD3s: string[]
}

export const EMPTY_UNION_FILTERS: UnionFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  tubeOD2s: [],
  tubeOD3s: [],
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Union": "Union (PU)",
  "Reducing Union": "Reducing Union (PRU)",
  "Bulkhead Union": "Bulkhead Union (PBU)",
  "Union Elbow": "Union Elbow (PUE)",
  "Reducing Union Elbow": "Reducing Union Elbow (PRUE)",
  "Union Tee": "Union Tee (PUT)",
  "Reducing Union Tee": "Reducing Union Tee (PRUT)",
  "Union Cross": "Union Cross (PUC)",
}

export const TUBE_OD_UNIT_LABELS: Record<string, string> = {
  Imperial: "Imperial (inch)",
  Metric: "Metric (mm)",
}