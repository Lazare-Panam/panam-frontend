export interface PipeAdapterDTO {
  id: string
  partNumber: string
  fittingType: string
  p1Size: string
  p1Thread: string
  p2Size: string
  p2Thread: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

export interface PipeAdapterFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_ADAPTER_PIPE_FILTERS: PipeAdapterFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsPipeAdapter {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeAdapterDTO[],
  filters: PipeAdapterFilters,
  exclude: keyof PipeAdapterFilters | ''
): PipeAdapterDTO[] {
  return data.filter(c => {
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))      return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'p1Threads'       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))            return false
    if (exclude !== 'p1Sizes'         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                return false
    if (exclude !== 'p2Threads'       && filters.p2Threads.length       && !filters.p2Threads.includes(c.p2Thread))            return false
    if (exclude !== 'p2Sizes'         && filters.p2Sizes.length         && !filters.p2Sizes.includes(c.p2Size))                return false
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

const IMG = 'https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure-pipe-fittings/adapters.jpg'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  p2Size: string,
  p2Thread: string,
  pressureRating: string,
  pressurePsi: number,
): PipeAdapterDTO => ({
  id: `${pn}-${p1Size}-${p2Size}`,
  partNumber: pn,
  fittingType,
  p1Size,
  p1Thread,
  p2Size,
  p2Thread,
  pressureRating,
  pressurePsi,
  material: 'SS 316',
  imageUrl: IMG,
  description: `Panam ${fittingType} ${pn}, P1: ${p1Size} ${p1Thread}, P2: ${p2Size} ${p2Thread}, SS 316, ${pressureRating}.`,
})

export const PIPE_ADAPTER_DATA: PipeAdapterDTO[] = [

  // ── ADAPTERS — NPT ────────────────────────────────────────────────
  make('PA-2N-4N-SS-15K',  'Adapter', '1/8"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-6N-SS-15K',  'Adapter', '1/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-8N-SS-15K',  'Adapter', '1/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-12N-SS-10K', 'Adapter', '1/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-2N-16N-SS-10K', 'Adapter', '1/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-4N-2N-SS-15K',  'Adapter', '1/4"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-6N-SS-15K',  'Adapter', '1/4"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-8N-SS-15K',  'Adapter', '1/4"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-12N-SS-10K', 'Adapter', '1/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-4N-16N-SS-10K', 'Adapter', '1/4"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-6N-2N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-4N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-8N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-12N-SS-10K', 'Adapter', '3/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-6N-16N-SS-10K', 'Adapter', '3/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-8N-2N-SS-15K',  'Adapter', '1/2"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-4N-SS-15K',  'Adapter', '1/2"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-6N-SS-15K',  'Adapter', '1/2"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-12N-SS-10K', 'Adapter', '1/2"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-8N-16N-SS-10K', 'Adapter', '1/2"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-12N-2N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-4N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-6N-SS-10K', 'Adapter', '3/4"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-8N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-16N-SS-10K','Adapter', '3/4"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-16N-2N-SS-10K', 'Adapter', '1"',   'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-4N-SS-10K', 'Adapter', '1"',   'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-6N-SS-10K', 'Adapter', '1"',   'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-8N-SS-10K', 'Adapter', '1"',   'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-12N-SS-10K','Adapter', '1"',   'NPT', '3/4"', 'NPT', '10,000 psi', 10000),

  // ── ADAPTERS — ISO Parallel ───────────────────────────────────────
  make('PA-2G-4G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '1/4"',  'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-6G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '3/8"',  'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-8G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '1/2"',  'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-10G-SS-10K', 'Adapter', '1/8"', 'ISO Parallel', '5/8"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-4G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '1/4"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-6G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '3/8"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-8G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '1/2"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-4G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '1/4"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-6G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '3/8"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-8G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '1/2"',  'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-12G-SS-10K','Adapter', '1"',   'ISO Parallel', '3/4"',  'ISO Parallel', '10,000 psi', 10000),

  // ── STANDARD PRESSURE (10K) ADDITIONS — NPT/BSPT/BSPP/JIC, incl. Swivel Male Connector, Reducing Bushing, Reducing Adaptor ──
  make('PMC-2SWL-2N-SS-10K', 'Swivel Male Connector', '1/8"', '37° JIC Swivel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-3SWL-2N-SS-10K', 'Swivel Male Connector', '3/16"', '37° JIC Swivel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-4SWL-2N-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC Swivel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-4SWL-4N-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC Swivel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-5SWL-2N-SS-10K', 'Swivel Male Connector', '5/16"', '37° JIC Swivel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-5SWL-4N-SS-10K', 'Swivel Male Connector', '5/16"', '37° JIC Swivel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-6SWL-4N-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC Swivel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-6SWL-6N-SS-10K', 'Swivel Male Connector', '3/8"', '37° JIC Swivel', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-8SWL-6N-SS-10K', 'Swivel Male Connector', '1/2"', '37° JIC Swivel', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PMC-10SWL-8N-SS-10K', 'Swivel Male Connector', '5/8"', '37° JIC Swivel', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PMC-12SWL-8N-SS-10K', 'Swivel Male Connector', '3/4"', '37° JIC Swivel', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PMC-12SWL-12N-SS-10K', 'Swivel Male Connector', '3/4"', '37° JIC Swivel', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-14SWL-12N-SS-10K', 'Swivel Male Connector', '7/8"', '37° JIC Swivel', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-16SWL-12N-SS-10K', 'Swivel Male Connector', '1"', '37° JIC Swivel', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PMC-16SWL-16N-SS-10K', 'Swivel Male Connector', '1"', '37° JIC Swivel', '1"', 'NPT', '10,000 psi', 10000),
  make('PMC-4G-4J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4G-5J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '5/16"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4G-6J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6G-6J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8G-6J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6G-8J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8G-8J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6G-10J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '5/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8G-10J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '5/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-12G-10J-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '5/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8G-12J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-12G-12J-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-16G-12J-SWL-SS-10K', 'Swivel Male Connector', '1"', 'ISO Parallel', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-12G-16J-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '1"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-16G-16J-SWL-SS-10K', 'Swivel Male Connector', '1"', 'ISO Parallel', '1"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4G-4G-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-4G-5G-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '5/16"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-4G-6G-SWL-SS-10K', 'Swivel Male Connector', '1/4"', 'ISO Parallel', '3/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-6G-6G-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-8G-6G-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '3/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-6G-8G-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '1/2"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-8G-8G-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-6G-10G-SWL-SS-10K', 'Swivel Male Connector', '3/8"', 'ISO Parallel', '5/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-8G-10G-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '5/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-12G-10G-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '5/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-8G-12G-SWL-SS-10K', 'Swivel Male Connector', '1/2"', 'ISO Parallel', '3/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-12G-12G-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-16G-12G-SWL-SS-10K', 'Swivel Male Connector', '1"', 'ISO Parallel', '3/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-12G-16G-SWL-SS-10K', 'Swivel Male Connector', '3/4"', 'ISO Parallel', '1"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-16G-16G-SWL-SS-10K', 'Swivel Male Connector', '1"', 'ISO Parallel', '1"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PMC-2J-2J-SWL-SS-10K', 'Swivel Male Connector', '1/8"', '37° JIC', '1/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-3J-2J-SWL-SS-10K', 'Swivel Male Connector', '3/16"', '37° JIC', '1/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4J-2J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC', '1/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4J-4J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4J-6J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-4J-8J-SWL-SS-10K', 'Swivel Male Connector', '1/4"', '37° JIC', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-5J-2J-SWL-SS-10K', 'Swivel Male Connector', '5/16"', '37° JIC', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-5J-4J-SWL-SS-10K', 'Swivel Male Connector', '5/16"', '37° JIC', '5/16"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6J-4J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', '37° JIC', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6J-6J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', '37° JIC', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-6J-8J-SWL-SS-10K', 'Swivel Male Connector', '3/8"', '37° JIC', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8J-4J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', '37° JIC', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8J-6J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', '37° JIC', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-8J-8J-SWL-SS-10K', 'Swivel Male Connector', '1/2"', '37° JIC', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-10J-8J-SWL-SS-10K', 'Swivel Male Connector', '5/8"', '37° JIC', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-12J-8J-SWL-SS-10K', 'Swivel Male Connector', '3/4"', '37° JIC', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-12J-12J-SWL-SS-10K', 'Swivel Male Connector', '3/4"', '37° JIC', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-14J-12J-SWL-SS-10K', 'Swivel Male Connector', '7/8"', '37° JIC', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-16J-12J-SWL-SS-10K', 'Swivel Male Connector', '1"', '37° JIC', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PMC-16J-16J-SWL-SS-10K', 'Swivel Male Connector', '1"', '37° JIC', '1"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PA-2N-SS-10K', 'Adapter', '1/8"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PA-4N-SS-10K', 'Adapter', '1/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PA-6N-SS-10K', 'Adapter', '3/8"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PA-8N-SS-10K', 'Adapter', '1/2"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-SS-10K', 'Adapter', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-SS-10K', 'Adapter', '1"', 'NPT', '1"', 'NPT', '10,000 psi', 10000),
  make('PA-2R-SS-10K', 'Adapter', '1/8"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PA-4R-SS-10K', 'Adapter', '1/4"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PA-6R-SS-10K', 'Adapter', '3/8"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PA-8R-SS-10K', 'Adapter', '1/2"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PA-12R-SS-10K', 'Adapter', '3/4"', 'BSPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PA-16R-SS-10K', 'Adapter', '1"', 'BSPT', '1"', 'BSPT', '10,000 psi', 10000),
  make('PA-2N-2R-SS-10K', 'Adapter', '1/8"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PA-4N-4R-SS-10K', 'Adapter', '1/4"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PA-6N-6R-SS-10K', 'Adapter', '3/8"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PA-8N-8R-SS-10K', 'Adapter', '1/2"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PA-12N-12R-SS-10K', 'Adapter', '3/4"', 'NPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PA-16N-16R-SS-10K', 'Adapter', '1"', 'NPT', '1"', 'BSPT', '10,000 psi', 10000),
  make('PA-2G-SS-10K', 'Adapter', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-4G-SS-10K', 'Adapter', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-6G-SS-10K', 'Adapter', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-8G-SS-10K', 'Adapter', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-SS-10K', 'Adapter', '1"', 'ISO Parallel', '1"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-2G-2N-SS-10K', 'Adapter', '1/8"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-4G-4N-SS-10K', 'Adapter', '1/4"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-6G-6N-SS-10K', 'Adapter', '3/8"', 'NPT', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-8G-8N-SS-10K', 'Adapter', '1/2"', 'NPT', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-12N-SS-10K', 'Adapter', '3/4"', 'NPT', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-16N-SS-10K', 'Adapter', '1"', 'NPT', '1"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-4N-2N-SS-10K', 'Reducing Bushing', '1/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-6N-2N-SS-10K', 'Reducing Bushing', '3/8"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-6N-4N-SS-10K', 'Reducing Bushing', '3/8"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRB-8N-2N-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-8N-4N-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRB-8N-6N-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-12N-2N-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-12N-4N-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRB-12N-6N-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-12N-8N-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRB-16N-2N-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-16N-4N-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRB-16N-6N-SS-10K', 'Reducing Bushing', '1"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRB-16N-8N-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRB-16N-12N-SS-10K', 'Reducing Bushing', '1"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRB-4N-2R-SS-10K', 'Reducing Bushing', '1/4"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-6N-2R-SS-10K', 'Reducing Bushing', '3/8"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-6N-4R-SS-10K', 'Reducing Bushing', '3/8"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8N-2R-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8N-4R-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8N-6R-SS-10K', 'Reducing Bushing', '1/2"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12N-2R-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12N-4R-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12N-6R-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12N-8R-SS-10K', 'Reducing Bushing', '3/4"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16N-2R-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16N-4R-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16N-6R-SS-10K', 'Reducing Bushing', '1"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16N-8R-SS-10K', 'Reducing Bushing', '1"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16N-12R-SS-10K', 'Reducing Bushing', '1"', 'NPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-4R-2R-SS-10K', 'Reducing Bushing', '1/4"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-6R-2R-SS-10K', 'Reducing Bushing', '3/8"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-6R-4R-SS-10K', 'Reducing Bushing', '3/8"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8R-2R-SS-10K', 'Reducing Bushing', '1/2"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8R-4R-SS-10K', 'Reducing Bushing', '1/2"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-8R-6R-SS-10K', 'Reducing Bushing', '1/2"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12R-2R-SS-10K', 'Reducing Bushing', '1/2"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12R-4R-SS-10K', 'Reducing Bushing', '3/4"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12R-6R-SS-10K', 'Reducing Bushing', '3/4"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-12R-8R-SS-10K', 'Reducing Bushing', '3/4"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16R-2R-SS-10K', 'Reducing Bushing', '1"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16R-4R-SS-10K', 'Reducing Bushing', '1"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16R-6R-SS-10K', 'Reducing Bushing', '1"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16R-8R-SS-10K', 'Reducing Bushing', '1"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRB-16R-12R-SS-10K', 'Reducing Bushing', '1"', 'BSPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PRB-4G-2G-SS-10K', 'Reducing Bushing', '1/4"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-6G-2G-SS-10K', 'Reducing Bushing', '3/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-6G-4G-SS-10K', 'Reducing Bushing', '3/8"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-8G-2G-SS-10K', 'Reducing Bushing', '1/2"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-8G-4G-SS-10K', 'Reducing Bushing', '1/2"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-8G-6G-SS-10K', 'Reducing Bushing', '1/2"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-12G-2G-SS-10K', 'Reducing Bushing', '1/2"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-12G-4G-SS-10K', 'Reducing Bushing', '3/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-12G-6G-SS-10K', 'Reducing Bushing', '3/4"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-12G-8G-SS-10K', 'Reducing Bushing', '3/4"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-16G-2G-SS-10K', 'Reducing Bushing', '1"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-16G-4G-SS-10K', 'Reducing Bushing', '1"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-16G-6G-SS-10K', 'Reducing Bushing', '1"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-16G-8G-SS-10K', 'Reducing Bushing', '1"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRB-16G-12G-SS-10K', 'Reducing Bushing', '1"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-4N-2N-SS-10K', 'Reducing Adaptor', '1/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-6N-2N-SS-10K', 'Reducing Adaptor', '3/8"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-8N-2N-SS-10K', 'Reducing Adaptor', '1/2"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12N-2N-SS-10K', 'Reducing Adaptor', '3/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-6N-4N-SS-10K', 'Reducing Adaptor', '3/8"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-8N-4N-SS-10K', 'Reducing Adaptor', '1/2"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-12N-4N-SS-10K', 'Reducing Adaptor', '3/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-16N-4N-SS-10K', 'Reducing Adaptor', '1"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-8N-6N-SS-10K', 'Reducing Adaptor', '1/2"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12N-6N-SS-10K', 'Reducing Adaptor', '3/4"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-16N-6N-SS-10K', 'Reducing Adaptor', '1"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12N-8N-SS-10K', 'Reducing Adaptor', '3/4"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRA-16N-8N-SS-10K', 'Reducing Adaptor', '1"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRA-16N-12N-SS-10K', 'Reducing Adaptor', '1"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-4R-2N-SS-10K', 'Reducing Adaptor', '1/4"', 'BSPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-6R-2N-SS-10K', 'Reducing Adaptor', '3/8"', 'BSPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-8R-2N-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12R-2N-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-6R-4N-SS-10K', 'Reducing Adaptor', '3/8"', 'BSPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-8R-4N-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-12R-4N-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-16R-4N-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-8R-6N-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12R-6N-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-16R-6N-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PRA-12R-8N-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRA-16R-8N-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PRA-16R-12N-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PGA-4G-2N-SS-10K', 'Reducing Adaptor', '1/4"', 'ISO Parallel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-6G-2N-SS-10K', 'Reducing Adaptor', '3/8"', 'ISO Parallel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-8G-2N-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-12G-2N-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-6G-4N-SS-10K', 'Reducing Adaptor', '3/8"', 'ISO Parallel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PGA-8G-4N-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PGA-12G-4N-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PGA-16G-4N-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PGA-8G-6N-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-12G-6N-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-16G-6N-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PGA-12G-8N-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PGA-16G-8N-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PGA-16G-12N-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRA-4R-2R-SS-10K', 'Reducing Adaptor', '1/4"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-6R-2R-SS-10K', 'Reducing Adaptor', '3/8"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-8R-2R-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-12R-2R-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-6R-4R-SS-10K', 'Reducing Adaptor', '3/8"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRA-8R-4R-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRA-12R-4R-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRA-16R-4R-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PRA-8R-6R-SS-10K', 'Reducing Adaptor', '1/2"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-12R-6R-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-16R-6R-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PRA-12R-8R-SS-10K', 'Reducing Adaptor', '3/4"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRA-16R-8R-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PRA-16R-12R-SS-10K', 'Reducing Adaptor', '1"', 'BSPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PRA-4G-2G-SS-10K', 'Reducing Adaptor', '1/4"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-6G-2G-SS-10K', 'Reducing Adaptor', '3/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-8G-2G-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-12G-2G-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-6G-4G-SS-10K', 'Reducing Adaptor', '3/8"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-8G-4G-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-12G-4G-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-16G-4G-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-8G-6G-SS-10K', 'Reducing Adaptor', '1/2"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-12G-6G-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-16G-6G-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-12G-8G-SS-10K', 'Reducing Adaptor', '3/4"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-16G-8G-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRA-16G-12G-SS-10K', 'Reducing Adaptor', '1"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-2N-4J-SS-10K', 'Adapter', '1/8"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PA-4N-4J-SS-10K', 'Adapter', '1/4"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PA-4N-6J-SS-10K', 'Adapter', '1/4"', 'NPT', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PA-6N-4J-SS-10K', 'Adapter', '3/8"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PA-6N-6J-SS-10K', 'Adapter', '3/8"', 'NPT', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PA-6N-8J-SS-10K', 'Adapter', '3/8"', 'NPT', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PA-8N-8J-SS-10K', 'Adapter', '1/2"', 'NPT', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PA-8N-10J-SS-10K', 'Adapter', '1/2"', 'NPT', '5/8"', '37° JIC', '10,000 psi', 10000),
  make('PA-8N-12J-SS-10K', 'Adapter', '1/2"', 'NPT', '3/4"', '37° JIC', '10,000 psi', 10000),
  make('PA-12N-12J-SS-10K', 'Adapter', '3/4"', 'NPT', '3/4"', '37° JIC', '10,000 psi', 10000),
  make('PA-16N-16J-SS-10K', 'Adapter', '1"', 'NPT', '1"', '37° JIC', '10,000 psi', 10000),
]

export const PIPE_ADAPTER_DESCRIPTION = {
  title: 'HP Pipe Fittings — Adapters',
  description:
    'Panam High Pressure Adapters in SS 316. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1".',
  specs: [
    'Adapter',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO Parallel',
    '1/8" – 1"',
  ],
}