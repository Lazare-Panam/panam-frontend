import { Divider } from "@mui/material"
import { type UnionFilters, EMPTY_UNION_FILTERS, FITTING_TYPE_LABELS, IMPERIAL_ODS, METRIC_ODS } from "../hooks/types"
import { ProductSidebar } from "../../Common/ProductSidebar"
import { FilterGroup } from "../../Common/FilterGroup"
import { SmartCheckList } from "../../Common/SmartCheckList"
import { UnitToggle } from "../../Common/UnitToggle"

interface FilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD3s: string[]
}

interface Props {
  filters: UnionFilters
  setFilters: React.Dispatch<React.SetStateAction<UnionFilters>>
  filterOptions: FilterOptions
  counts: Record<string, Record<string, number>>
  activeCount: number
}

export function UnionSidebar({ filters, setFilters, filterOptions, counts, activeCount }: Props) {
  const toggle = (key: keyof UnionFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_UNION_FILTERS)}>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <SmartCheckList options={filterOptions.fittingTypes} selected={filters.fittingTypes} onChange={v => toggle("fittingTypes", v)} counts={counts.fittingTypes} labelMap={FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <UnitToggle value={selectedUnit} onChange={val => setFilters(prev => ({ ...prev, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] }))} />
        <SmartCheckList options={visibleODs} selected={filters.tubeODs} onChange={v => toggle("tubeODs", v)} counts={counts.tubeODs} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD 2 (Reducing)" count={filters.tubeOD2s.length || undefined}>
        <SmartCheckList options={filterOptions.tubeOD2s} selected={filters.tubeOD2s} onChange={v => toggle("tubeOD2s", v)} counts={counts.tubeOD2s} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD 3 (Branch)" count={filters.tubeOD3s.length || undefined}>
        <SmartCheckList options={filterOptions.tubeOD3s} selected={filters.tubeOD3s} onChange={v => toggle("tubeOD3s", v)} counts={counts.tubeOD3s} />
      </FilterGroup>
    </ProductSidebar>
  )
}