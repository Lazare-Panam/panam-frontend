import { Divider } from "@mui/material"
import { type AdapterFilters, EMPTY_ADAPTER_FILTERS, FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, IMPERIAL_ODS, METRIC_ODS } from "../hooks/types"
import { ProductSidebar } from "../../../Common/ProductSidebar"
import { FilterGroup } from "../../../Common/FilterGroup"
import { SmartCheckList } from "../../../Common/SmartCheckList"
import { UnitToggle } from "../../../Common/UnitToggle"

interface FilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadSizes: string[]
  threadTypes: string[]
}

interface Props {
  filters: AdapterFilters
  setFilters: React.Dispatch<React.SetStateAction<AdapterFilters>>
  filterOptions: FilterOptions
  counts: Record<string, Record<string, number>>
  activeCount: number
}

export function AdapterSidebar({ filters, setFilters, filterOptions, counts, activeCount }: Props) {
  const toggle = (key: keyof AdapterFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val) ? (prev[key] as string[]).filter(v => v !== val) : [...(prev[key] as string[]), val],
    }))

  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_ADAPTER_FILTERS)}>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <SmartCheckList options={filterOptions.fittingTypes} selected={filters.fittingTypes} onChange={v => toggle("fittingTypes", v)} counts={counts.fittingTypes} labelMap={FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <UnitToggle value={selectedUnit} onChange={val => setFilters(prev => ({ ...prev, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] }))} />
        <SmartCheckList options={visibleODs} selected={filters.tubeODs} onChange={v => toggle("tubeODs", v)} counts={counts.tubeODs} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <SmartCheckList options={filterOptions.threadTypes} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} counts={counts.threadTypes} labelMap={THREAD_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD SIZE" count={filters.threadSizes.length || undefined}>
        <SmartCheckList options={filterOptions.threadSizes} selected={filters.threadSizes} onChange={v => toggle("threadSizes", v)} counts={counts.threadSizes} />
      </FilterGroup>
    </ProductSidebar>
  )
}
