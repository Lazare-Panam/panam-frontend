export interface TubingDTO {
  id: string
  partNumber: string
  productType: 'Standard Tubing' | 'High Pressure Tubing'
  material: string
  tubingType: string
  outerDiameter: string
  wallThickness: string
  unit: 'imperial' | 'metric'
  workingPressurePsi: number
  workingPressureBar: number
  imageUrl: string
  description: string
}

export interface TubingFilters {
  productTypes: string[]
  materials: string[]
  units: string[]
  outerDiameters: string[]
  wallThicknesses: string[]
}

export const EMPTY_TUBING_FILTERS: TubingFilters = {
  productTypes: [],
  materials: [],
  units: [],
  outerDiameters: [],
  wallThicknesses: [],
}

export interface AvailableCountsTubing {
  productTypes: Record<string, number>
  materials: Record<string, number>
  units: Record<string, number>
  outerDiameters: Record<string, number>
  wallThicknesses: Record<string, number>
}

export function applyFilters(
  data: TubingDTO[],
  filters: TubingFilters,
  exclude: keyof TubingFilters | ''
): TubingDTO[] {
  return data.filter(c => {
    if (exclude !== 'productTypes'    && filters.productTypes.length    && !filters.productTypes.includes(c.productType))      return false
    if (exclude !== 'materials'       && filters.materials.length       && !filters.materials.includes(c.material))            return false
    if (exclude !== 'units'           && filters.units.length           && !filters.units.includes(c.unit))                    return false
    if (exclude !== 'outerDiameters'  && filters.outerDiameters.length  && !filters.outerDiameters.includes(c.outerDiameter))  return false
    if (exclude !== 'wallThicknesses' && filters.wallThicknesses.length && !filters.wallThicknesses.includes(c.wallThickness)) return false
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

const MATERIALS = [
  { code: 'SS', label: 'SS 316 Stainless Steel' },
  { code: 'MO', label: 'Monel Alloy' },
  { code: 'CU', label: 'Copper' },
  { code: 'D1', label: 'Duplex 31803' },
  { code: 'D2', label: 'Duplex 32550' },
  { code: 'D3', label: 'Duplex 32760' },
  { code: 'D4', label: 'Duplex 32750' },
  { code: 'D5', label: 'Duplex 32205' },
  { code: 'I6', label: 'Inconel 625' },
  { code: 'I8', label: 'Inconel 825' },
  { code: '6M', label: '6Mo' },
  { code: 'HC', label: 'Hastelloy Alloy' },
]

const STANDARD_IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tubing/tubing-1.jpg'
const HP_IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tubing/tubing-2.png'

const IMPERIAL_COMBOS: { od: string; odCode: string; wall: string; wallCode: string; psi: number; bar: number }[] = [
  { od: '1/16"', odCode: '01', wall: '0.010"', wallCode: '010', psi: 5600,  bar: 386 },
  { od: '1/16"', odCode: '01', wall: '0.012"', wallCode: '012', psi: 6800,  bar: 469 },
  { od: '1/16"', odCode: '01', wall: '0.014"', wallCode: '014', psi: 8100,  bar: 559 },
  { od: '1/16"', odCode: '01', wall: '0.016"', wallCode: '016', psi: 9400,  bar: 648 },
  { od: '1/16"', odCode: '01', wall: '0.020"', wallCode: '020', psi: 12000, bar: 828 },
  { od: '1/8"',  odCode: '02', wall: '0.028"', wallCode: '028', psi: 8500,  bar: 586 },
  { od: '1/8"',  odCode: '02', wall: '0.035"', wallCode: '035', psi: 10900, bar: 752 },
  { od: '3/16"', odCode: '03', wall: '0.028"', wallCode: '028', psi: 5400,  bar: 372 },
  { od: '3/16"', odCode: '03', wall: '0.035"', wallCode: '035', psi: 7000,  bar: 483 },
  { od: '3/16"', odCode: '03', wall: '0.049"', wallCode: '049', psi: 10200, bar: 703 },
  { od: '1/4"',  odCode: '04', wall: '0.028"', wallCode: '028', psi: 4000,  bar: 276 },
  { od: '1/4"',  odCode: '04', wall: '0.035"', wallCode: '035', psi: 5100,  bar: 352 },
  { od: '1/4"',  odCode: '04', wall: '0.049"', wallCode: '049', psi: 7500,  bar: 517 },
  { od: '1/4"',  odCode: '04', wall: '0.065"', wallCode: '065', psi: 10200, bar: 703 },
  { od: '5/16"', odCode: '05', wall: '0.035"', wallCode: '035', psi: 4000,  bar: 276 },
  { od: '5/16"', odCode: '05', wall: '0.049"', wallCode: '049', psi: 5800,  bar: 400 },
  { od: '5/16"', odCode: '05', wall: '0.065"', wallCode: '065', psi: 8000,  bar: 552 },
  { od: '3/8"',  odCode: '06', wall: '0.035"', wallCode: '035', psi: 3300,  bar: 228 },
  { od: '3/8"',  odCode: '06', wall: '0.049"', wallCode: '049', psi: 4800,  bar: 331 },
  { od: '3/8"',  odCode: '06', wall: '0.065"', wallCode: '065', psi: 6500,  bar: 448 },
  { od: '3/8"',  odCode: '06', wall: '0.083"', wallCode: '083', psi: 7500,  bar: 517 },
  { od: '1/2"',  odCode: '08', wall: '0.035"', wallCode: '035', psi: 2600,  bar: 179 },
  { od: '1/2"',  odCode: '08', wall: '0.049"', wallCode: '049', psi: 3700,  bar: 255 },
  { od: '1/2"',  odCode: '08', wall: '0.065"', wallCode: '065', psi: 5100,  bar: 352 },
  { od: '1/2"',  odCode: '08', wall: '0.083"', wallCode: '083', psi: 6200,  bar: 428 },
  { od: '5/8"',  odCode: '10', wall: '0.049"', wallCode: '049', psi: 2900,  bar: 200 },
  { od: '5/8"',  odCode: '10', wall: '0.065"', wallCode: '065', psi: 4000,  bar: 276 },
  { od: '5/8"',  odCode: '10', wall: '0.083"', wallCode: '083', psi: 5200,  bar: 359 },
  { od: '5/8"',  odCode: '10', wall: '0.095"', wallCode: '095', psi: 6000,  bar: 414 },
  { od: '3/4"',  odCode: '12', wall: '0.049"', wallCode: '049', psi: 2400,  bar: 166 },
  { od: '3/4"',  odCode: '12', wall: '0.065"', wallCode: '065', psi: 3300,  bar: 228 },
  { od: '3/4"',  odCode: '12', wall: '0.083"', wallCode: '083', psi: 4200,  bar: 290 },
  { od: '3/4"',  odCode: '12', wall: '0.095"', wallCode: '095', psi: 4900,  bar: 338 },
  { od: '3/4"',  odCode: '12', wall: '0.109"', wallCode: '109', psi: 5800,  bar: 400 },
  { od: '7/8"',  odCode: '14', wall: '0.049"', wallCode: '049', psi: 2000,  bar: 138 },
  { od: '7/8"',  odCode: '14', wall: '0.065"', wallCode: '065', psi: 2800,  bar: 193 },
  { od: '7/8"',  odCode: '14', wall: '0.083"', wallCode: '083', psi: 3600,  bar: 248 },
  { od: '7/8"',  odCode: '14', wall: '0.095"', wallCode: '095', psi: 4200,  bar: 290 },
  { od: '7/8"',  odCode: '14', wall: '0.109"', wallCode: '109', psi: 4800,  bar: 331 },
  { od: '1"',    odCode: '16', wall: '0.065"', wallCode: '065', psi: 2400,  bar: 166 },
  { od: '1"',    odCode: '16', wall: '0.083"', wallCode: '083', psi: 3100,  bar: 214 },
  { od: '1"',    odCode: '16', wall: '0.095"', wallCode: '095', psi: 3600,  bar: 248 },
  { od: '1"',    odCode: '16', wall: '0.109"', wallCode: '109', psi: 4200,  bar: 290 },
  { od: '1"',    odCode: '16', wall: '0.120"', wallCode: '120', psi: 4700,  bar: 324 },
  { od: '1-1/4"',odCode: '20', wall: '0.083"', wallCode: '083', psi: 2400,  bar: 166 },
  { od: '1-1/4"',odCode: '20', wall: '0.095"', wallCode: '095', psi: 2800,  bar: 193 },
  { od: '1-1/4"',odCode: '20', wall: '0.109"', wallCode: '109', psi: 3300,  bar: 228 },
  { od: '1-1/4"',odCode: '20', wall: '0.120"', wallCode: '120', psi: 3600,  bar: 248 },
  { od: '1-1/4"',odCode: '20', wall: '0.134"', wallCode: '134', psi: 4100,  bar: 283 },
  { od: '1-1/4"',odCode: '20', wall: '0.156"', wallCode: '156', psi: 4900,  bar: 338 },
  { od: '1-1/2"',odCode: '24', wall: '0.095"', wallCode: '095', psi: 2400,  bar: 166 },
  { od: '1-1/2"',odCode: '24', wall: '0.109"', wallCode: '109', psi: 2700,  bar: 186 },
  { od: '1-1/2"',odCode: '24', wall: '0.120"', wallCode: '120', psi: 3000,  bar: 207 },
  { od: '1-1/2"',odCode: '24', wall: '0.134"', wallCode: '134', psi: 2400,  bar: 166 },
  { od: '1-1/2"',odCode: '24', wall: '0.156"', wallCode: '156', psi: 4000,  bar: 276 },
  { od: '1-1/2"',odCode: '24', wall: '0.188"', wallCode: '188', psi: 4900,  bar: 338 },
  { od: '2"',    odCode: '32', wall: '0.109"', wallCode: '109', psi: 2000,  bar: 138 },
  { od: '2"',    odCode: '32', wall: '0.120"', wallCode: '120', psi: 2200,  bar: 152 },
  { od: '2"',    odCode: '32', wall: '0.134"', wallCode: '134', psi: 2500,  bar: 172 },
  { od: '2"',    odCode: '32', wall: '0.156"', wallCode: '156', psi: 2900,  bar: 200 },
  { od: '2"',    odCode: '32', wall: '0.188"', wallCode: '188', psi: 3600,  bar: 248 },
]

const METRIC_COMBOS: { od: string; odCode: string; wall: string; wallCode: string; psi: number; bar: number }[] = [
  { od: '3 mm',  odCode: '3',  wall: '0.8 mm', wallCode: '0.8', psi: 9715,  bar: 670 },
  { od: '6 mm',  odCode: '6',  wall: '0.8 mm', wallCode: '0.8', psi: 4495,  bar: 310 },
  { od: '6 mm',  odCode: '6',  wall: '1.0 mm', wallCode: '1.0', psi: 6090,  bar: 420 },
  { od: '6 mm',  odCode: '6',  wall: '1.2 mm', wallCode: '1.2', psi: 7830,  bar: 540 },
  { od: '6 mm',  odCode: '6',  wall: '1.5 mm', wallCode: '1.5', psi: 10295, bar: 710 },
  { od: '8 mm',  odCode: '8',  wall: '1.0 mm', wallCode: '1.0', psi: 4495,  bar: 310 },
  { od: '8 mm',  odCode: '8',  wall: '1.2 mm', wallCode: '1.2', psi: 5655,  bar: 390 },
  { od: '8 mm',  odCode: '8',  wall: '1.5 mm', wallCode: '1.5', psi: 7540,  bar: 520 },
  { od: '10 mm', odCode: '10', wall: '1.0 mm', wallCode: '1.0', psi: 3480,  bar: 240 },
  { od: '10 mm', odCode: '10', wall: '1.2 mm', wallCode: '1.2', psi: 4350,  bar: 300 },
  { od: '10 mm', odCode: '10', wall: '1.5 mm', wallCode: '1.5', psi: 5800,  bar: 400 },
  { od: '10 mm', odCode: '10', wall: '1.8 mm', wallCode: '1.8', psi: 7395,  bar: 510 },
  { od: '10 mm', odCode: '10', wall: '2.0 mm', wallCode: '2.0', psi: 8410,  bar: 580 },
  { od: '12 mm', odCode: '12', wall: '1.0 mm', wallCode: '1.0', psi: 2900,  bar: 200 },
  { od: '12 mm', odCode: '12', wall: '1.2 mm', wallCode: '1.2', psi: 3625,  bar: 250 },
  { od: '12 mm', odCode: '12', wall: '1.5 mm', wallCode: '1.5', psi: 4785,  bar: 330 },
  { od: '12 mm', odCode: '12', wall: '1.8 mm', wallCode: '1.8', psi: 5945,  bar: 410 },
  { od: '12 mm', odCode: '12', wall: '2.0 mm', wallCode: '2.0', psi: 6815,  bar: 470 },
]

// High pressure threshold — anything >= 10000 psi goes in high pressure too
const HP_PSI_THRESHOLD = 10000

function buildRows(
  combos: typeof IMPERIAL_COMBOS,
  unit: 'imperial' | 'metric'
): TubingDTO[] {
  return MATERIALS.flatMap(mat =>
    combos.flatMap(combo => {
      const isHP = combo.psi >= HP_PSI_THRESHOLD
      const types: Array<'Standard Tubing' | 'High Pressure Tubing'> = isHP
        ? ['Standard Tubing', 'High Pressure Tubing']
        : ['Standard Tubing']

      return types.map(productType => {
        const typeCode = productType === 'High Pressure Tubing' ? 'HP' : 'ST'
        const partNumber = `${mat.code}-${typeCode}-${combo.odCode}-${combo.wallCode}`
        return {
          id: `${partNumber}-${unit}`,
          partNumber,
          productType,
          material: mat.label,
          tubingType: "Seamless Tubing",
          outerDiameter: combo.od,
          wallThickness: combo.wall,
          unit,
          workingPressurePsi: combo.psi,
          workingPressureBar: combo.bar,
          imageUrl: productType === 'High Pressure Tubing' ? HP_IMAGE : STANDARD_IMAGE,
          description: `${mat.label} Seamless ${productType}, OD ${combo.od}, Wall ${combo.wall}, Working Pressure ${combo.psi.toLocaleString()} psi (${combo.bar} bar).`,
        }
      })
    })
  )
}

export const TUBING_DATA: TubingDTO[] = [
  ...buildRows(IMPERIAL_COMBOS, 'imperial'),
  ...buildRows(METRIC_COMBOS, 'metric'),
]

export const TUBING_DESCRIPTION = {
  title: 'Seamless Tubing',
  description:
    'Panam seamless tubing in standard and high-pressure ratings. Available in SS 316, Monel, Copper, Duplex, Inconel, 6Mo and Hastelloy. Imperial OD from 1/16" to 2" and metric OD from 3mm to 12mm. Fully compatible with Panam twin-ferrule tube fittings.',
  specs: [
    'Standard & High Pressure',
    'SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy',
    '1/16" – 2" Imperial',
    '3mm – 12mm Metric',
    'Seamless Construction',
  ],
}