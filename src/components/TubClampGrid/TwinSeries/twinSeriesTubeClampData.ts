export interface TwinSeriesTubeClampItem {
  id: number
  dinGroup: number
  partNumber: string
  pipeOD: number
  a2: number
  a3: number
  a1: number
  g: number
  t: number
  h2: number
  boltSize: string
  imageUrl: string
}

const CLAMP_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Twin-Series-Tube-Clamp.jpeg'

export const TWIN_SERIES_CLAMP_DATA: TwinSeriesTubeClampItem[] = [
  // DIN GROUP 1
  { id: 1,  dinGroup: 1, partNumber: 'PTC-TS-6-MM',    pipeOD: 6,    a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 2,  dinGroup: 1, partNumber: 'PTC-TS-6.4-MM',  pipeOD: 6.4,  a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 3,  dinGroup: 1, partNumber: 'PTC-TS-8-MM',    pipeOD: 8,    a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 4,  dinGroup: 1, partNumber: 'PTC-TS-9.5-MM',  pipeOD: 9.5,  a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 5,  dinGroup: 1, partNumber: 'PTC-TS-10-MM',   pipeOD: 10,   a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 6,  dinGroup: 1, partNumber: 'PTC-TS-12-MM',   pipeOD: 12,   a2: 43,  a3: 37,  a1: 20, g: 0.6, t: 3, h2: 26.5, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 2
  { id: 7,  dinGroup: 2, partNumber: 'PTC-TS-12.7-MM', pipeOD: 12.7, a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 8,  dinGroup: 2, partNumber: 'PTC-TS-13.5-MM', pipeOD: 13.5, a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 9,  dinGroup: 2, partNumber: 'PTC-TS-14-MM',   pipeOD: 14,   a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 10, dinGroup: 2, partNumber: 'PTC-TS-15-MM',   pipeOD: 15,   a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 11, dinGroup: 2, partNumber: 'PTC-TS-16-MM',   pipeOD: 16,   a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 12, dinGroup: 2, partNumber: 'PTC-TS-17.2-MM', pipeOD: 17.2, a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 13, dinGroup: 2, partNumber: 'PTC-TS-18-MM',   pipeOD: 18,   a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 14, dinGroup: 2, partNumber: 'PTC-TS-19-MM',   pipeOD: 19,   a2: 55,  a3: 52,  a1: 29, g: 0.7, t: 5, h2: 26.5, boltSize: 'M8 x 35 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 3
  { id: 15, dinGroup: 3, partNumber: 'PTC-TS-20-MM',   pipeOD: 20,   a2: 70,  a3: 67,  a1: 36, g: 0.7, t: 5, h2: 36.5, boltSize: 'M8 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 16, dinGroup: 3, partNumber: 'PTC-TS-21.3-MM', pipeOD: 21.3, a2: 70,  a3: 67,  a1: 36, g: 0.7, t: 5, h2: 36.5, boltSize: 'M8 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 17, dinGroup: 3, partNumber: 'PTC-TS-22-MM',   pipeOD: 22,   a2: 70,  a3: 67,  a1: 36, g: 0.7, t: 5, h2: 36.5, boltSize: 'M8 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 18, dinGroup: 3, partNumber: 'PTC-TS-25-MM',   pipeOD: 25,   a2: 70,  a3: 67,  a1: 36, g: 0.7, t: 5, h2: 36.5, boltSize: 'M8 x 45 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 4
  { id: 19, dinGroup: 4, partNumber: 'PTC-TS-26.9-MM', pipeOD: 26.9, a2: 85,  a3: 80,  a1: 45, g: 0.7, t: 5, h2: 38,   boltSize: 'M8 x 50 mm', imageUrl: CLAMP_IMG },
  { id: 20, dinGroup: 4, partNumber: 'PTC-TS-28-MM',   pipeOD: 28,   a2: 85,  a3: 80,  a1: 45, g: 0.7, t: 5, h2: 38,   boltSize: 'M8 x 50 mm', imageUrl: CLAMP_IMG },
  { id: 21, dinGroup: 4, partNumber: 'PTC-TS-30-MM',   pipeOD: 30,   a2: 85,  a3: 80,  a1: 45, g: 0.7, t: 5, h2: 38,   boltSize: 'M8 x 50 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 5
  { id: 22, dinGroup: 5, partNumber: 'PTC-TS-32-MM',   pipeOD: 32,   a2: 110, a3: 106, a1: 56, g: 0.7, t: 5, h2: 52,   boltSize: 'M8 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 23, dinGroup: 5, partNumber: 'PTC-TS-33.7-MM', pipeOD: 33.7, a2: 110, a3: 106, a1: 56, g: 0.7, t: 5, h2: 52,   boltSize: 'M8 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 24, dinGroup: 5, partNumber: 'PTC-TS-35-MM',   pipeOD: 35,   a2: 110, a3: 106, a1: 56, g: 0.7, t: 5, h2: 52,   boltSize: 'M8 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 25, dinGroup: 5, partNumber: 'PTC-TS-38-MM',   pipeOD: 38,   a2: 110, a3: 106, a1: 56, g: 0.7, t: 5, h2: 52,   boltSize: 'M8 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 26, dinGroup: 5, partNumber: 'PTC-TS-42-MM',   pipeOD: 42,   a2: 110, a3: 106, a1: 56, g: 0.7, t: 5, h2: 52,   boltSize: 'M8 x 60 mm', imageUrl: CLAMP_IMG },
]