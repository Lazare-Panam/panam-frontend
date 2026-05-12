export interface SingleLayerTubeClampItem {
  id: number
  dinGroup: number
  partNumber: string
  pipeOD: number
  a2: number
  a3: number
  a1: number
  b1: number
  g: number
  s: number
  h1: string
  h2: number
  boltSize: string
  imageUrl: string
}

const CLAMP_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Single-Layer-Tube-Clamp.jpeg'

export const SINGLE_LAYER_CLAMP_DATA: SingleLayerTubeClampItem[] = [
  // DIN GROUP 1 — A2:43 A3:34 A1:20 B1:30 G:0.4 S:3 H1:27 H2:33 Bolt:M6x30mm
  { id: 1,  dinGroup: 1, partNumber: 'PCL-6-SS',      pipeOD: 6,    a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 2,  dinGroup: 1, partNumber: 'PCL-6.4-SS',    pipeOD: 6.4,  a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 3,  dinGroup: 1, partNumber: 'PCL-8-SS',      pipeOD: 8,    a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 4,  dinGroup: 1, partNumber: 'PCL-9.5-SS',    pipeOD: 9.5,  a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 5,  dinGroup: 1, partNumber: 'PCL-10-SS',     pipeOD: 10,   a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 6,  dinGroup: 1, partNumber: 'PCL-12-SS',     pipeOD: 12,   a2: 43,  a3: 34, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 2 — A2:48 A3:42 A1:26 B1:30 G:0.6 S:3 H1:32-33 H2:38 Bolt:M6x37mm
  { id: 7,  dinGroup: 2, partNumber: 'PCL-12.7-SS',   pipeOD: 12.7, a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 8,  dinGroup: 2, partNumber: 'PCL-13.7-SS',   pipeOD: 13.5, a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 9,  dinGroup: 2, partNumber: 'PCL-14-SS',     pipeOD: 14,   a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 10, dinGroup: 2, partNumber: 'PCL-15-SS',     pipeOD: 15,   a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 11, dinGroup: 2, partNumber: 'PCL-16-SS',     pipeOD: 16,   a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 12, dinGroup: 2, partNumber: 'PCL-17.2-SS',   pipeOD: 17.2, a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 13, dinGroup: 2, partNumber: 'PCL-18-SS',     pipeOD: 18,   a2: 48,  a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32-33', h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 3 — A2:56 A3:50 A1:33 B1:30 G:0.6 S:3 H1:36 H2:42 Bolt:M6x40mm
  { id: 14, dinGroup: 3, partNumber: 'PCL-19-SS',     pipeOD: 19,   a2: 56,  a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 15, dinGroup: 3, partNumber: 'PCL-20-SS',     pipeOD: 20,   a2: 56,  a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 16, dinGroup: 3, partNumber: 'PCL-21.3-SS',   pipeOD: 21.3, a2: 56,  a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 17, dinGroup: 3, partNumber: 'PCL-22-SS',     pipeOD: 22,   a2: 56,  a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 18, dinGroup: 3, partNumber: 'PCL-25-SS',     pipeOD: 25,   a2: 56,  a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 4 — A2:62 A3:60 A1:40 B1:30 G:0.6 S:3 H1:42 H2:48 Bolt:M6x45mm
  { id: 19, dinGroup: 4, partNumber: 'PCL-26.9-SS',   pipeOD: 26.9, a2: 62,  a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '42',    h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 20, dinGroup: 4, partNumber: 'PCL-28-SS',     pipeOD: 28,   a2: 62,  a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '42',    h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 21, dinGroup: 4, partNumber: 'PCL-30-SS',     pipeOD: 30,   a2: 62,  a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '42',    h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 5 — A2:74 A3:70 A1:52 B1:30 G:0.8 S:3 H1:58 H2:64 Bolt:M6x60mm
  { id: 22, dinGroup: 5, partNumber: 'PCL-32-SS',     pipeOD: 32,   a2: 74,  a3: 70, a1: 52, b1: 30, g: 0.8, s: 3, h1: '58',    h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 23, dinGroup: 5, partNumber: 'PCL-33.7-SS',   pipeOD: 33.7, a2: 74,  a3: 70, a1: 52, b1: 30, g: 0.8, s: 3, h1: '58',    h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 24, dinGroup: 5, partNumber: 'PCL-35-SS',     pipeOD: 35,   a2: 74,  a3: 70, a1: 52, b1: 30, g: 0.8, s: 3, h1: '58',    h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 25, dinGroup: 5, partNumber: 'PCL-38-SS',     pipeOD: 38,   a2: 74,  a3: 70, a1: 52, b1: 30, g: 0.8, s: 3, h1: '58',    h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 26, dinGroup: 5, partNumber: 'PCL-40-SS',     pipeOD: 40,   a2: 74,  a3: 70, a1: 52, b1: 30, g: 0.8, s: 3, h1: '58',    h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 6 — A2:64 A3:32 A1:20 B1:30 G:0.4 S:3 H1:27 H2:33 Bolt:M6x30mm
  { id: 27, dinGroup: 6, partNumber: 'PCL-6-SS-MH',   pipeOD: 6,    a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 28, dinGroup: 6, partNumber: 'PCL-6.4-SS-MH', pipeOD: 6.4,  a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 29, dinGroup: 6, partNumber: 'PCL-8-SS-MH',   pipeOD: 8,    a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 30, dinGroup: 6, partNumber: 'PCL-9.5-SS-MH', pipeOD: 9.5,  a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 31, dinGroup: 6, partNumber: 'PCL-10-SS-MH',  pipeOD: 10,   a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 32, dinGroup: 6, partNumber: 'PCL-12-SS-MH',  pipeOD: 12,   a2: 64,  a3: 32, a1: 20, b1: 30, g: 0.4, s: 3, h1: '27',    h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 7 — A2:70 A3:42 A1:26 B1:30 G:0.6 S:3 H1:32 H2:38 Bolt:M6x37mm
  { id: 33, dinGroup: 7, partNumber: 'PCL-12.7-SS-MH', pipeOD: 12.7, a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 34, dinGroup: 7, partNumber: 'PCL-13.7-SS-MH', pipeOD: 13.7, a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 35, dinGroup: 7, partNumber: 'PCL-14-SS-MH',   pipeOD: 14,   a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 36, dinGroup: 7, partNumber: 'PCL-15-SS-MH',   pipeOD: 15,   a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 37, dinGroup: 7, partNumber: 'PCL-16-SS-MH',   pipeOD: 16,   a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 38, dinGroup: 7, partNumber: 'PCL-17.2-SS-MH', pipeOD: 17.2, a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  { id: 39, dinGroup: 7, partNumber: 'PCL-18-SS-MH',   pipeOD: 18,   a2: 70, a3: 42, a1: 26, b1: 30, g: 0.6, s: 3, h1: '32',    h2: 38, boltSize: 'M6 x 37 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 8 — A2:78 A3:50 A1:33 B1:30 G:0.6 S:3 H1:36 H2:42 Bolt:M6x40mm
  { id: 40, dinGroup: 8, partNumber: 'PCL-19-SS-MH',   pipeOD: 19,   a2: 78, a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 41, dinGroup: 8, partNumber: 'PCL-20-SS-MH',   pipeOD: 20,   a2: 78, a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 42, dinGroup: 8, partNumber: 'PCL-21.3-SS-MH', pipeOD: 21.3, a2: 78, a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 43, dinGroup: 8, partNumber: 'PCL-22-SS-MH',   pipeOD: 22,   a2: 78, a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 44, dinGroup: 8, partNumber: 'PCL-25-SS-MH',   pipeOD: 25,   a2: 78, a3: 50, a1: 33, b1: 30, g: 0.6, s: 3, h1: '36',    h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 9 — A2:87 A3:60 A1:40 B1:30 G:0.6 S:3 H1:48 H2:42 Bolt:M6x45mm
  { id: 45, dinGroup: 9, partNumber: 'PCL-26.9-SS-MH', pipeOD: 26.9, a2: 87, a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '48',    h2: 42, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 46, dinGroup: 9, partNumber: 'PCL-28-SS-MH',   pipeOD: 28,   a2: 87, a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '48',    h2: 42, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 47, dinGroup: 9, partNumber: 'PCL-30-SS-MH',   pipeOD: 30,   a2: 87, a3: 60, a1: 40, b1: 30, g: 0.6, s: 3, h1: '48',    h2: 42, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 10 — A2:100 A3:60 A1:52 B1:30 G:0.8 S:3 H1:48 H2:42 Bolt:M6x60mm
  { id: 48, dinGroup: 10, partNumber: 'PCL-32-SS-MH',   pipeOD: 32,  a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 49, dinGroup: 10, partNumber: 'PCL-33.7-SS-MH', pipeOD: 33.7,a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 50, dinGroup: 10, partNumber: 'PCL-35-SS-MH',   pipeOD: 35,  a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 51, dinGroup: 10, partNumber: 'PCL-38-SS-MH',   pipeOD: 38,  a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 52, dinGroup: 10, partNumber: 'PCL-40-SS-MH',   pipeOD: 40,  a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 53, dinGroup: 10, partNumber: 'PCL-42-SS-MH',   pipeOD: 42,  a2: 100, a3: 60, a1: 52, b1: 30, g: 0.8, s: 3, h1: '48',   h2: 42, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
]