export interface PipeCouplingDTO {
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

export interface PipeCouplingFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_COUPLING_FILTERS: PipeCouplingFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsCoupling {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeCouplingDTO[],
  filters: PipeCouplingFilters,
  exclude: keyof PipeCouplingFilters | ''
): PipeCouplingDTO[] {
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

const IMG = 'https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure-pipe-fittings/hex-coupling.png'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  p2Size: string,
  p2Thread: string,
  pressureRating: string,
  pressurePsi: number,
): PipeCouplingDTO => ({
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

export const PIPE_COUPLING_DATA: PipeCouplingDTO[] = [

  // ── HEX COUPLING — NPT ────────────────────────────────────────────
  make('PHC-2N-SS-15K',  'Hex Coupling', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PHC-4N-SS-15K',  'Hex Coupling', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PHC-6N-SS-15K',  'Hex Coupling', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PHC-8N-SS-15K',  'Hex Coupling', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PHC-12N-SS-10K', 'Hex Coupling', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-SS-10K', 'Hex Coupling', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000),

  // ── REDUCING HEX COUPLING — NPT ───────────────────────────────────
  make('PRHC-2N-4N-SS-15K',  'Reducing Hex Coupling', '1/8"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PRHC-2N-6N-SS-15K',  'Reducing Hex Coupling', '1/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PRHC-2N-8N-SS-15K',  'Reducing Hex Coupling', '1/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PRHC-2N-12N-SS-10K', 'Reducing Hex Coupling', '1/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRHC-2N-16N-SS-10K', 'Reducing Hex Coupling', '1/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PRHC-4N-6N-SS-15K',  'Reducing Hex Coupling', '1/4"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PRHC-4N-8N-SS-15K',  'Reducing Hex Coupling', '1/4"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PRHC-4N-12N-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRHC-4N-16N-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PRHC-6N-8N-SS-15K',  'Reducing Hex Coupling', '3/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PRHC-6N-12N-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRHC-6N-16N-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PRHC-8N-12N-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PRHC-8N-16N-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),

  // ── HEX COUPLING — ISO Parallel ───────────────────────────────────
  make('PHC-2G-SS-15K',  'Hex Coupling', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000),
  make('PHC-4G-SS-15K',  'Hex Coupling', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000),
  make('PHC-6G-SS-15K',  'Hex Coupling', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000),
  make('PHC-8G-SS-15K',  'Hex Coupling', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000),
  make('PHC-12G-SS-10K', 'Hex Coupling', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-SS-10K', 'Hex Coupling', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000),

  // ── HEX REDUCING COUPLING — ISO Parallel ──────────────────────────
  make('PRHC-2G-4G-SS-15K',  'Reducing Hex Coupling', '1/8"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-2G-6G-SS-15K',  'Reducing Hex Coupling', '1/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-2G-8G-SS-15K',  'Reducing Hex Coupling', '1/8"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-2G-12G-SS-10K', 'Reducing Hex Coupling', '1/8"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-2G-16G-SS-10K', 'Reducing Hex Coupling', '1/8"', 'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-4G-6G-SS-15K',  'Reducing Hex Coupling', '1/4"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-4G-8G-SS-15K',  'Reducing Hex Coupling', '1/4"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-4G-12G-SS-10K', 'Reducing Hex Coupling', '1/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-4G-16G-SS-10K', 'Reducing Hex Coupling', '1/4"', 'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-6G-8G-SS-15K',  'Reducing Hex Coupling', '3/8"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000),
  make('PRHC-6G-12G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-6G-16G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-8G-12G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PRHC-8G-16G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000),

  // ── STANDARD PRESSURE (10K) ADDITIONS — NPT/BSPT/BSPP/JIC, incl. Swivel Union ──
  make('PHC-2N-SS-10K', 'Hex Coupling', '1/8"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-4N-2N-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-4N-SS-10K', 'Hex Coupling', '1/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-6N-2N-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-6N-4N-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-6N-SS-10K', 'Hex Coupling', '3/8"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-8N-2N-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-8N-4N-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-8N-6N-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-8N-SS-10K', 'Hex Coupling', '1/2"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PHC-12N-2N-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-12N-4N-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-12N-6N-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-12N-8N-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-2N-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-4N-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-6N-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-8N-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PHC-16N-12N-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PHC-2N-2R-SS-10K', 'Reducing Hex Coupling', '1/8"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-4N-2R-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-4N-4R-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6N-2R-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6N-4R-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6N-6R-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8N-2R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8N-4R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8N-6R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8N-8R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12N-2R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12N-4R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12N-6R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12N-8R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12N-12R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-2R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-4R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-6R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-8R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-12R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16N-16R-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1"', 'BSPT', '10,000 psi', 10000),
  make('PHC-2R-SS-10K', 'Hex Coupling', '1/8"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-4R-2R-SS-10K', 'Reducing Hex Coupling', '1/4"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-4R-SS-10K', 'Hex Coupling', '1/4"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6R-2R-SS-10K', 'Reducing Hex Coupling', '3/8"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6R-4R-SS-10K', 'Reducing Hex Coupling', '3/8"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-6R-SS-10K', 'Hex Coupling', '3/8"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8R-2R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8R-4R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8R-6R-SS-10K', 'Reducing Hex Coupling', '1/2"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-8R-SS-10K', 'Hex Coupling', '1/2"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12R-2R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12R-4R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12R-6R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12R-8R-SS-10K', 'Reducing Hex Coupling', '3/4"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-12R-SS-10K', 'Hex Coupling', '3/4"', 'BSPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-2R-SS-10K', 'Reducing Hex Coupling', '1"', 'BSPT', '1/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-4R-SS-10K', 'Reducing Hex Coupling', '1"', 'BSPT', '1/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-6R-SS-10K', 'Reducing Hex Coupling', '1"', 'BSPT', '3/8"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-8R-SS-10K', 'Reducing Hex Coupling', '1"', 'BSPT', '1/2"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-12R-SS-10K', 'Reducing Hex Coupling', '1"', 'BSPT', '3/4"', 'BSPT', '10,000 psi', 10000),
  make('PHC-16R-SS-10K', 'Hex Coupling', '1"', 'BSPT', '1"', 'BSPT', '10,000 psi', 10000),
  make('PHC-2N-2G-SS-10K', 'Reducing Hex Coupling', '1/8"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-4N-2G-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-4N-4G-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6N-2G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6N-4G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6N-6G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8N-2G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8N-4G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8N-6G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8N-8G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12N-2G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12N-4G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12N-6G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12N-8G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12N-12G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'NPT', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-2G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-4G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-6G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-8G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-12G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16N-16G-SS-10K', 'Reducing Hex Coupling', '1"', 'NPT', '1"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-2G-SS-10K', 'Hex Coupling', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-4G-2G-SS-10K', 'Reducing Hex Coupling', '1/4"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-4G-SS-10K', 'Hex Coupling', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6G-2G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6G-4G-SS-10K', 'Reducing Hex Coupling', '3/8"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-6G-SS-10K', 'Hex Coupling', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8G-2G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8G-4G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8G-6G-SS-10K', 'Reducing Hex Coupling', '1/2"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-8G-SS-10K', 'Hex Coupling', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12G-2G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12G-4G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12G-6G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-12G-8G-SS-10K', 'Reducing Hex Coupling', '3/4"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-2G-SS-10K', 'Reducing Hex Coupling', '1"', 'ISO Parallel', '1/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-4G-SS-10K', 'Reducing Hex Coupling', '1"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-6G-SS-10K', 'Reducing Hex Coupling', '1"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-8G-SS-10K', 'Reducing Hex Coupling', '1"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-16G-12G-SS-10K', 'Reducing Hex Coupling', '1"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PHC-2N-4J-SS-10K', 'Reducing Hex Coupling', '1/8"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-4N-4J-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-4N-6J-SS-10K', 'Reducing Hex Coupling', '1/4"', 'NPT', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-6N-4J-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-6N-6J-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-6N-8J-SS-10K', 'Reducing Hex Coupling', '3/8"', 'NPT', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8N-6J-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8N-8J-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8N-10J-SS-10K', 'Reducing Hex Coupling', '1/2"', 'NPT', '5/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-4J-SS-10K', 'Hex Coupling', '1/4"', '37° JIC', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-6J-4J-SS-10K', 'Reducing Hex Coupling', '3/8"', '37° JIC', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-6J-SS-10K', 'Hex Coupling', '3/8"', '37° JIC', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8J-4J-SS-10K', 'Reducing Hex Coupling', '1/2"', '37° JIC', '1/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8J-6J-SS-10K', 'Reducing Hex Coupling', '1/2"', '37° JIC', '3/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-8J-SS-10K', 'Hex Coupling', '1/2"', '37° JIC', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PHC-10J-8J-SS-10K', 'Reducing Hex Coupling', '5/8"', '37° JIC', '1/2"', '37° JIC', '10,000 psi', 10000),
  make('PHC-10J-SS-10K', 'Hex Coupling', '5/8"', '37° JIC', '5/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-12J-10J-SS-10K', 'Reducing Hex Coupling', '3/4"', '37° JIC', '5/8"', '37° JIC', '10,000 psi', 10000),
  make('PHC-12J-SS-10K', 'Hex Coupling', '3/4"', '37° JIC', '3/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-16J-12J-SS-10K', 'Reducing Hex Coupling', '1"', '37° JIC', '3/4"', '37° JIC', '10,000 psi', 10000),
  make('PHC-16J-SS-10K', 'Hex Coupling', '1"', '37° JIC', '1"', '37° JIC', '10,000 psi', 10000),
  make('PSU-4G-SWL-SS-10K', 'Swivel Union', '1/4"', 'ISO Parallel Swivel', '1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-6G-4G-SWL-SS-10K', 'Swivel Union', '3/8"', 'ISO Parallel Swivel', '1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-6G-SWL-SS-10K', 'Swivel Union', '3/8"', 'ISO Parallel Swivel', '3/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-8G-4G-SWL-SS-10K', 'Swivel Union', '1/2"', 'ISO Parallel Swivel', '1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-8G-6G-SWL-SS-10K', 'Swivel Union', '1/2"', 'ISO Parallel Swivel', '3/8"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-8G-SWL-SS-10K', 'Swivel Union', '1/2"', 'ISO Parallel Swivel', '1/2"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-12G-SWL-SS-10K', 'Swivel Union', '3/4"', 'ISO Parallel Swivel', '3/4"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PSU-16G-SWL-SS-10K', 'Swivel Union', '1"', 'ISO Parallel Swivel', '1"', 'ISO Parallel Swivel', '10,000 psi', 10000),
  make('PU-4J-4J-SWL-SS-10K', 'Swivel Union', '1/4"', '37° JIC Swivel', '1/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-4J-6J-SWL-SS-10K', 'Swivel Union', '1/4"', '37° JIC Swivel', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-4J-8J-SWL-SS-10K', 'Swivel Union', '1/4"', '37° JIC Swivel', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-6J-6J-SWL-SS-10K', 'Swivel Union', '3/8"', '37° JIC Swivel', '3/8"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-6J-8J-SWL-SS-10K', 'Swivel Union', '3/8"', '37° JIC Swivel', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-8J-8J-SWL-SS-10K', 'Swivel Union', '1/2"', '37° JIC Swivel', '1/2"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-12J-SWL-SS-10K', 'Swivel Union', '3/4"', '37° JIC Swivel', '3/4"', '37° JIC Swivel', '10,000 psi', 10000),
  make('PU-16J-SWL-SS-10K', 'Swivel Union', '1"', '37° JIC Swivel', '1"', '37° JIC Swivel', '10,000 psi', 10000),
]

export const PIPE_COUPLING_DESCRIPTION = {
  title: 'HP Pipe Fittings — Hex Couplings & Reducing Hex Couplings',
  description:
    'Panam High Pressure Hex Couplings and Reducing Hex Couplings in SS 316. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1".',
  specs: [
    'Hex Coupling · Reducing Hex Coupling',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO Parallel',
    '1/8" – 1"',
  ],
}