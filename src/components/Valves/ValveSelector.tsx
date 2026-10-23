import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const ValveSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => <SelectionGuide title="Which Valve Do You Need?" subtitle="Start from what the valve has to do in your system — each function maps to one PANAM® valve family. Use this to shortlist before requesting a quote." rows={rows} columns={["Your application", "Valve family", "Max pressure", "Sizes"]} />

export default ValveSelector
