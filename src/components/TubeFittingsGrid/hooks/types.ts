export interface ConnectorElbowFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadDimensions: string[]
  threadTypes: string[]
  isPositionable: boolean | null
  hasORingSeal: boolean | null
}

export const EMPTY_CONNECTOR_ELBOW_FILTERS: ConnectorElbowFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  threadDimensions: [],
  threadTypes: [],
  isPositionable: null,
  hasORingSeal: null,
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Connector": "Male Connector (MC)",
  "Male Bore Through Connector": "Male Bore Through Connector (MCBT)",
  "Bulkhead Male Connector": "Bulkhead Male Connector (BMC)",
  "Male Elbow": "Male Elbow (ME)",
  "Male Elbow 45": "Male Elbow 45° (LME)",
  "Male Run Tee": "Male Run Tee (MRT)",
  "Male Branch Tee": "Male Branch Tee (MBT)",
  "Female Connector": "Female Connector (FC)",
  "Bulkhead Female Connector": "Bulkhead Female Connector (BFC)",
  "Female Elbow": "Female Elbow (FE)",
  "Female Run Tee": "Female Run Tee (FRT)",
  "Female Branch Tee": "Female Branch Tee (FBT)",
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  NPT: "NPT",
  BSPT: "BSPT",
  BSPP: "BSPP",
  RP: "RP",
  Metric: "Metric",
  "SAE/MS": "SAE/MS",
  Flare37: "Flare 37°",
}

export const TUBE_OD_UNIT_LABELS: Record<string, string> = {
  Imperial: "Imperial (inch)",
  Metric: "Metric (mm)",
}