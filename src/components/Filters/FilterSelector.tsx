import React from "react"
import { SelectionGuide, type SelectorRow } from "../Common/CategoryIndexKit"

const FilterSelector: React.FC<{ rows: SelectorRow[] }> = ({ rows }) => <SelectionGuide title="Which Filter Do You Need?" subtitle="Start from the configuration your line needs — each maps to one PANAM® filter family. Use this to shortlist before requesting a quote." rows={rows} columns={["Your application", "Filter family", "Pressure", "Sizes"]} />

export default FilterSelector
