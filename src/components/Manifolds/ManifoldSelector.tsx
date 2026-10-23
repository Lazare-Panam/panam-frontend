import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const ManifoldSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => <SelectionGuide title="Which Manifold Do You Need?" subtitle="Start from what the manifold has to do at your transmitter or gauge — each function maps to one PANAM® family. Use this to shortlist before requesting a quote." rows={rows} columns={["Your application", "Manifold family", "Max pressure", "Sizes / outlets"]} />

export default ManifoldSelector
