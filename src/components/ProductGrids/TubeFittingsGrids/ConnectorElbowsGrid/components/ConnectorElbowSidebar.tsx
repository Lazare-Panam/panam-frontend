import { Divider, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { type ConnectorElbowFilters, EMPTY_CONNECTOR_ELBOW_FILTERS, FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, IMPERIAL_ODS, METRIC_ODS } from "../hooks/types"
import { ProductSidebar } from "../../../Common/ProductSidebar"
import { FilterGroup } from "../../../Common/FilterGroup"
import { SmartCheckList } from "../../../Common/SmartCheckList"
import { UnitToggle } from "../../../Common/UnitToggle"

const toggleSx = {
  "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
  "& .Mui-selected": { bgcolor: "#01B0F0 !important", color: "#fff !important" },
}

interface FilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadDimensions: string[]
  threadTypes: string[]
}

interface Props {
  filters: ConnectorElbowFilters
  setFilters: React.Dispatch<React.SetStateAction<ConnectorElbowFilters>>
  filterOptions: FilterOptions
  counts: Record<string, Record<string, number>>
  activeCount: number
}

export function ConnectorElbowSidebar({ filters, setFilters, filterOptions, counts, activeCount }: Props) {
  const toggle = (key: keyof ConnectorElbowFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val) ? (prev[key] as string[]).filter(v => v !== val) : [...(prev[key] as string[]), val],
    }))

  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_CONNECTOR_ELBOW_FILTERS)}>
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
      <FilterGroup title="THREAD DIMENSION" count={filters.threadDimensions.length || undefined}>
        <SmartCheckList options={filterOptions.threadDimensions} selected={filters.threadDimensions} onChange={v => toggle("threadDimensions", v)} counts={counts.threadDimensions} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="POSITIONABLE">
        <ToggleButtonGroup
          exclusive
          size="small"
          sx={{ mt: 0.5, ...toggleSx }}
          value={filters.isPositionable === null ? "all" : filters.isPositionable ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, isPositionable: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">Standard</ToggleButton>
          <ToggleButton value="yes">Positionable</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="O-RING SEAL">
        <ToggleButtonGroup
          exclusive
          size="small"
          sx={{ mt: 0.5, ...toggleSx }}
          value={filters.hasORingSeal === null ? "all" : filters.hasORingSeal ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, hasORingSeal: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">Standard</ToggleButton>
          <ToggleButton value="yes">With O-Ring</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </ProductSidebar>
  )
}
