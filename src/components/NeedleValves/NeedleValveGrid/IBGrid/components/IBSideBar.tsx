"use client"
import { Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { type NeedleValveIBFilters, EMPTY_IB_FILTERS, BODY_MATERIAL_LABELS, END_CONNECTION_LABELS } from "../../hooks/types"
import {type  NeedleValveIBFilterOptions } from "../../../../../api/needleValveApi"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: NeedleValveIBFilters
  setFilters: React.Dispatch<React.SetStateAction<NeedleValveIBFilters>>
  filterOptions?: NeedleValveIBFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">
            {title}
          </Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_BLUE, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({ options, selected, onChange, loading, labelMap }: { options: string[]; selected: string[]; onChange: (v: string) => void; loading?: boolean; labelMap?: Record<string, string> }) {
  if (loading) return <Skeleton height={50} />
  if (!options?.length)
    return (
      <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>
        No options
      </Typography>
    )
  return (
    <>
      {options.map(opt => (
        <FormControlLabel
          key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
          label={
            <Typography variant="body2" fontSize="0.8rem">
              {labelMap?.[opt] ?? opt}
            </Typography>
          }
        />
      ))}
    </>
  )
}

export function IBSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const toggle = (key: keyof NeedleValveIBFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        p: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        maxHeight: "100vh",
        overflowY: "auto",
        boxSizing: "border-box",
      }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FILTER
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE }} onClick={() => setFilters(EMPTY_IB_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="BODY MATERIAL" count={filters.bodyMaterials.length || undefined}>
        <MultiCheckbox options={filterOptions?.bodyMaterials ?? []} selected={filters.bodyMaterials} onChange={v => toggle("bodyMaterials", v)} loading={filtersLoading} labelMap={BODY_MATERIAL_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <MultiCheckbox options={filterOptions?.threadTypes ?? []} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="END CONNECTION" count={filters.endConnections.length || undefined}>
        <MultiCheckbox options={filterOptions?.endConnections ?? []} selected={filters.endConnections} onChange={v => toggle("endConnections", v)} loading={filtersLoading} labelMap={END_CONNECTION_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <MultiCheckbox options={filterOptions?.connectionSizes ?? []} selected={filters.connectionSizes} onChange={v => toggle("connectionSizes", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONFIGURATION" count={filters.configurations.length || undefined}>
        <MultiCheckbox options={filterOptions?.configurations ?? []} selected={filters.configurations} onChange={v => toggle("configurations", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="STEM SEAL" count={filters.stemSeals.length || undefined}>
        <MultiCheckbox options={filterOptions?.stemSeals ?? []} selected={filters.stemSeals} onChange={v => toggle("stemSeals", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="STEP TIP" count={filters.stepTips.length || undefined}>
        <MultiCheckbox options={filterOptions?.stepTips ?? []} selected={filters.stepTips} onChange={v => toggle("stepTips", v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="HANDLE" count={filters.handles.length || undefined}>
        <MultiCheckbox options={filterOptions?.handles ?? []} selected={filters.handles} onChange={v => toggle("handles", v)} loading={filtersLoading} />
      </FilterGroup>
    </Box>
  )
}
