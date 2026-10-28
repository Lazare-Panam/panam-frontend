import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const SBBSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => (
  <SelectionGuide
    title="Which SBB Valve Do You Need?"
    subtitle="Start from the connection your installation requires — each connection style maps to one PANAM® Single Block & Bleed family. Use this to shortlist before requesting a quote."
    rows={rows}
    columns={["Your installation", "SBB family", "Pressure class", "Ends / faces"]}
  />
)

export default SBBSelector
