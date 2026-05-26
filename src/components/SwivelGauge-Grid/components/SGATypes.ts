import { type SwivelGaugeAdaptorDTO } from '../hooks/swivelGaugeAdaptorsData'

export interface SGAFilters {
  types: string[]
  inlets: string[]
  outlets: string[]
}

export const EMPTY_SGA_FILTERS: SGAFilters = {
  types: [],
  inlets: [],
  outlets: [],
}

export interface AvailableCountsSGA {
  types: Record<string, number>
  inlets: Record<string, number>
  outlets: Record<string, number>
}

export function applyFilters(
  data: SwivelGaugeAdaptorDTO[],
  filters: SGAFilters,
  exclude: keyof SGAFilters | ''
): SwivelGaugeAdaptorDTO[] {
  return data.filter(c => {
    if (exclude !== 'types'   && filters.types.length   && !filters.types.includes(c.type))     return false
    if (exclude !== 'inlets'  && filters.inlets.length  && !filters.inlets.includes(c.inlet))   return false
    if (exclude !== 'outlets' && filters.outlets.length && !filters.outlets.includes(c.outlet)) return false
    return true
  })
}

export function countBy<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}