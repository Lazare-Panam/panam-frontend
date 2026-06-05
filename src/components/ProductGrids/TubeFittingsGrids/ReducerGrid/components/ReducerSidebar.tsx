import { Divider, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { type ReducerFilters, EMPTY_REDUCER_FILTERS, FITTING_TYPE_LABELS, IMPERIAL_ODS, METRIC_ODS } from "../hook/types"
import { ProductSidebar } from "../../Common/ProductSidebar"
import { FilterGroup } from "../../Common/FilterGroup"
import { SmartCheckList } from "../../Common/SmartCheckList"
import { UnitToggle } from "../../Common/UnitToggle"

const toggleSx = {
  "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
  "& .Mui-selected": { bgcolor: "#01B0F0 !important", color: "#fff !important" },
}

interface FilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD2Units: string[]
}

interface Props {
  filters: ReducerFilters
  setFilters: React.Dispatch<React.SetStateAction<ReducerFilters>>
  filterOptions: FilterOptions
  counts: Record<string, Record<string, number>>
  activeCount: number
}

export function ReducerSidebar({ filters, setFilters, filterOptions, counts, activeCount }: Props) {
  const toggle = (key: keyof ReducerFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_REDUCER_FILTERS)}>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <SmartCheckList options={filterOptions.fittingTypes} selected={filters.fittingTypes} onChange={v => toggle("fittingTypes", v)} counts={counts.fittingTypes} labelMap={FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD (Primary)" count={filters.tubeODs.length || undefined}>
        <UnitToggle value={selectedUnit} onChange={val => setFilters(prev => ({ ...prev, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] }))} />
        <SmartCheckList options={visibleODs} selected={filters.tubeODs} onChange={v => toggle("tubeODs", v)} counts={counts.tubeODs} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD 2 (Secondary)" count={filters.tubeOD2s.length || undefined}>
        <SmartCheckList options={filterOptions.tubeOD2s} selected={filters.tubeOD2s} onChange={v => toggle("tubeOD2s", v)} counts={counts.tubeOD2s} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="OD 2 UNIT" count={filters.tubeOD2Units.length || undefined}>
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.tubeOD2Units[0] ?? "all"}
          onChange={(_, val) => { if (!val) return; setFilters(prev => ({ ...prev, tubeOD2Units: val === "all" ? [] : [val] })) }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </ProductSidebar>
  )
}