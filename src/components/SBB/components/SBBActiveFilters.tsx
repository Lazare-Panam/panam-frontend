import { Stack, Chip, Typography } from "@mui/material"
import { type SBBValveFilters } from "../hooks/types"

const BRAND_BLUE = "#01B0F0"

interface Props {
  filters: SBBValveFilters
  setFilters: React.Dispatch<React.SetStateAction<SBBValveFilters>>
}

export function SBBActiveFilters({ filters, setFilters }: Props) {
  const chips: { label: string; onDelete: () => void }[] = []

  filters.constructions.forEach(v => chips.push({ label: `Build: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, constructions: prev.constructions.filter(x => x !== v) })) }))
  filters.configurations.forEach(v => chips.push({ label: `Config: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, configurations: prev.configurations.filter(x => x !== v) })) }))
  filters.boreSizes.forEach(v => chips.push({ label: `Bore: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, boreSizes: prev.boreSizes.filter(x => x !== v) })) }))
  filters.inletSizes.forEach(v => chips.push({ label: `Inlet: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, inletSizes: prev.inletSizes.filter(x => x !== v) })) }))
  filters.pressureClasses.forEach(v => chips.push({ label: `Class: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, pressureClasses: prev.pressureClasses.filter(x => x !== v) })) }))
  filters.endConnections.forEach(v => chips.push({ label: `Conn: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, endConnections: prev.endConnections.filter(x => x !== v) })) }))
  filters.outlets.forEach(v => chips.push({ label: `Outlet: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, outlets: prev.outlets.filter(x => x !== v) })) }))
  filters.vents.forEach(v => chips.push({ label: `Vent: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, vents: prev.vents.filter(x => x !== v) })) }))
  filters.sealMaterials.forEach(v => chips.push({ label: `Seal: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, sealMaterials: prev.sealMaterials.filter(x => x !== v) })) }))
  filters.seatMaterials.forEach(v => chips.push({ label: `Seat: ${v}`, onDelete: () => setFilters(prev => ({ ...prev, seatMaterials: prev.seatMaterials.filter(x => x !== v) })) }))
  filters.options.forEach(v => chips.push({ label: v, onDelete: () => setFilters(prev => ({ ...prev, options: prev.options.filter(x => x !== v) })) }))

  if (chips.length === 0) return null

  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c, i) => (
        <Chip key={i} label={c.label} size="small" variant="outlined"
          sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
          onDelete={c.onDelete}
        />
      ))}
    </Stack>
  )
}
