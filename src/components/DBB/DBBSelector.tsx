import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const DBBSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => <SelectionGuide title="Which DBB Valve Do You Need?" subtitle="Start from the connection your installation requires — each connection style maps to one PANAM® DBB family. Use this to shortlist before requesting a quote." rows={rows} columns={["Your installation", "DBB family", "Pressure class", "Ends / faces"]} />

export default DBBSelector
