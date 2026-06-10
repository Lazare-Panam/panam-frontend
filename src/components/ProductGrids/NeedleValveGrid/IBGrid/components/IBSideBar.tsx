"use client"
import { Divider } from "@mui/material"
import { type NeedleValveIBFilters, EMPTY_IB_FILTERS, BODY_MATERIAL_LABELS, END_CONNECTION_LABELS } from "../../hooks/types"
import { ProductSidebar } from "../../../Common/ProductSidebar"
import { FilterGroup } from "../../../Common/FilterGroup"
import { SmartCheckList } from "../../../Common/SmartCheckList"

interface FilterOptions {
  bodyMaterials: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  stemSeals: string[]
  stepTips: string[]
  handles: string[]
  options: string[]
}

interface Props {
  filters: NeedleValveIBFilters
  setFilters: React.Dispatch<React.SetStateAction<NeedleValveIBFilters>>
  filterOptions: FilterOptions
  counts: Record<string, Record<string, number>>
  activeCount: number
}

export function IBSidebar({ filters, setFilters, filterOptions, counts, activeCount }: Props) {
  const toggle = (key: keyof NeedleValveIBFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  return (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_IB_FILTERS)}>
      <FilterGroup title="BODY MATERIAL" count={filters.bodyMaterials.length || undefined}>
        <SmartCheckList options={filterOptions.bodyMaterials} selected={filters.bodyMaterials} onChange={v => toggle("bodyMaterials", v)} counts={counts.bodyMaterials} labelMap={BODY_MATERIAL_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <SmartCheckList options={filterOptions.threadTypes} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} counts={counts.threadTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="END CONNECTION" count={filters.endConnections.length || undefined}>
        <SmartCheckList options={filterOptions.endConnections} selected={filters.endConnections} onChange={v => toggle("endConnections", v)} counts={counts.endConnections} labelMap={END_CONNECTION_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <SmartCheckList options={filterOptions.connectionSizes} selected={filters.connectionSizes} onChange={v => toggle("connectionSizes", v)} counts={counts.connectionSizes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CONFIGURATION" count={filters.configurations.length || undefined}>
        <SmartCheckList options={filterOptions.configurations} selected={filters.configurations} onChange={v => toggle("configurations", v)} counts={counts.configurations} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="STEM SEAL" count={filters.stemSeals.length || undefined}>
        <SmartCheckList options={filterOptions.stemSeals} selected={filters.stemSeals} onChange={v => toggle("stemSeals", v)} counts={counts.stemSeals} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="STEP TIP" count={filters.stepTips.length || undefined}>
        <SmartCheckList options={filterOptions.stepTips} selected={filters.stepTips} onChange={v => toggle("stepTips", v)} counts={counts.stepTips} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="HANDLE" count={filters.handles.length || undefined}>
        <SmartCheckList options={filterOptions.handles} selected={filters.handles} onChange={v => toggle("handles", v)} counts={counts.handles} />
      </FilterGroup>
      {filterOptions.options.length > 0 && (
        <>
          <Divider sx={{ my: 0.5 }} />
          <FilterGroup title="OPTIONS" count={filters.options.length || undefined}>
            <SmartCheckList options={filterOptions.options} selected={filters.options} onChange={v => toggle("options", v)} counts={counts.options} />
          </FilterGroup>
        </>
      )}
    </ProductSidebar>
  )
}