import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const FittingsSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => <SelectionGuide title="Which Fitting Do You Need?" subtitle="Start from the connection your system needs — each one maps to one PANAM® fitting family. Use this to shortlist before requesting a quote." rows={rows} columns={["Your connection", "Fitting family", "Rating", "Sizes"]} />

export default FittingsSelector
