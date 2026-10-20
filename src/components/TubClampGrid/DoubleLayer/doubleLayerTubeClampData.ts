export interface DoubleLayerTubeClampItem {
  id: number
  dinGroup: number
  partNumber: string
  pipeOD: number
  a2: number
  a3: number
  a1: number
  s: number
  h2: number
  boltSize: string
  imageUrl: string
}

const CLAMP_IMG = 'https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tube-clamps/Double-Layer-Tube-Clamp.jpeg'

export const DOUBLE_LAYER_CLAMP_DATA: DoubleLayerTubeClampItem[] = [
  // DIN GROUP 1 — A2:43 A3:37 A1:20 S:3 H2:33 M6x30mm
  { id: 1,  dinGroup: 1, partNumber: 'PCL-4-MM-x-2',    pipeOD: 4,    a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 2,  dinGroup: 1, partNumber: 'PCL-6-MM-x-2',    pipeOD: 6,    a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 3,  dinGroup: 1, partNumber: 'PCL-6.4-MM-x-2',  pipeOD: 6.4,  a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 4,  dinGroup: 1, partNumber: 'PCL-8-MM-x-2',    pipeOD: 8,    a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 5,  dinGroup: 1, partNumber: 'PCL-9.5-MM-x-2',  pipeOD: 9.5,  a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 6,  dinGroup: 1, partNumber: 'PCL-10-MM-x-2',   pipeOD: 10,   a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  { id: 7,  dinGroup: 1, partNumber: 'PCL-12-MM-x-2',   pipeOD: 12,   a2: 43, a3: 37, a1: 20, s: 3, h2: 33, boltSize: 'M6 x 30 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 2 — A2:48 A3:42 A1:26 S:3 H2:39 M6x35mm
  { id: 8,  dinGroup: 2, partNumber: 'PCL-12.7-MM-x-2', pipeOD: 12.7, a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 9,  dinGroup: 2, partNumber: 'PCL-13.5-MM-x-2', pipeOD: 13.5, a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 10, dinGroup: 2, partNumber: 'PCL-14-MM-x-2',   pipeOD: 14,   a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 11, dinGroup: 2, partNumber: 'PCL-15-MM-x-2',   pipeOD: 15,   a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 12, dinGroup: 2, partNumber: 'PCL-16-MM-x-2',   pipeOD: 16,   a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 13, dinGroup: 2, partNumber: 'PCL-17.2-MM-x-2', pipeOD: 17.2, a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  { id: 14, dinGroup: 2, partNumber: 'PCL-18-MM-x-2',   pipeOD: 18,   a2: 48, a3: 42, a1: 26, s: 3, h2: 39, boltSize: 'M6 x 35 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 3 — A2:56 A3:50 A1:33 S:3 H2:42 M6x40mm
  { id: 15, dinGroup: 3, partNumber: 'PCL-19-MM-x-2',   pipeOD: 19,   a2: 56, a3: 50, a1: 33, s: 3, h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 16, dinGroup: 3, partNumber: 'PCL-20-MM-x-2',   pipeOD: 20,   a2: 56, a3: 50, a1: 33, s: 3, h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 17, dinGroup: 3, partNumber: 'PCL-21.3-MM-x-2', pipeOD: 21.3, a2: 56, a3: 50, a1: 33, s: 3, h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 18, dinGroup: 3, partNumber: 'PCL-22-MM-x-2',   pipeOD: 22,   a2: 56, a3: 50, a1: 33, s: 3, h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  { id: 19, dinGroup: 3, partNumber: 'PCL-25-MM-x-2',   pipeOD: 25,   a2: 56, a3: 50, a1: 33, s: 3, h2: 42, boltSize: 'M6 x 40 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 4 — A2:65 A3:59 A1:40 S:3 H2:48 M6x45mm
  { id: 20, dinGroup: 4, partNumber: 'PCL-26.9-MM-x-2', pipeOD: 26.9, a2: 65, a3: 59, a1: 40, s: 3, h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 21, dinGroup: 4, partNumber: 'PCL-28-MM-x-2',   pipeOD: 28,   a2: 65, a3: 59, a1: 40, s: 3, h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 22, dinGroup: 4, partNumber: 'PCL-30-MM-x-2',   pipeOD: 30,   a2: 65, a3: 59, a1: 40, s: 3, h2: 48, boltSize: 'M6 x 45 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 5 — A2:77 A3:71 A1:52 S:3 H2:64 M6x60mm
  { id: 23, dinGroup: 5, partNumber: 'PCL-32-MM-x-2',   pipeOD: 32,   a2: 77, a3: 71, a1: 52, s: 3, h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 24, dinGroup: 5, partNumber: 'PCL-33.7-MM-x-2', pipeOD: 33.7, a2: 77, a3: 71, a1: 52, s: 3, h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 25, dinGroup: 5, partNumber: 'PCL-35-MM-x-2',   pipeOD: 35,   a2: 77, a3: 71, a1: 52, s: 3, h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 26, dinGroup: 5, partNumber: 'PCL-38-MM-x-2',   pipeOD: 38,   a2: 77, a3: 71, a1: 52, s: 3, h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 27, dinGroup: 5, partNumber: 'PCL-42-MM-x-2',   pipeOD: 42,   a2: 77, a3: 71, a1: 52, s: 3, h2: 64, boltSize: 'M6 x 60 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 6 — A2:92 A3:86 A1:66 S:3 H2:72 M6x70mm
  { id: 28, dinGroup: 6, partNumber: 'PCL-44.5-MM-x-2', pipeOD: 44.5, a2: 92, a3: 86, a1: 66, s: 3, h2: 72, boltSize: 'M6 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 29, dinGroup: 6, partNumber: 'PCL-48.3-MM-x-2', pipeOD: 48.3, a2: 92, a3: 86, a1: 66, s: 3, h2: 72, boltSize: 'M6 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 30, dinGroup: 6, partNumber: 'PCL-50.8-MM-x-2', pipeOD: 50.8, a2: 92, a3: 86, a1: 66, s: 3, h2: 72, boltSize: 'M6 x 70 mm', imageUrl: CLAMP_IMG },
]