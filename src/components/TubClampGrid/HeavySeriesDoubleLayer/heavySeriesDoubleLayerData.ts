export interface HeavySeriesDoubleLayerItem {
  id: number
  dinGroup: number
  partNumber: string
  pipeOD: number
  a3: number
  a1: number
  h1: number
  h2: string
  g: string
  b1: number
  a2: number
  s: number
  boltSize: string
  imageUrl: string
}

const CLAMP_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Heavy-Series-Tube-Clamp.jpeg'

export const HEAVY_SERIES_DOUBLE_LAYER_DATA: HeavySeriesDoubleLayerItem[] = [
  // DIN GROUP 1 — A3:55 A1:33 H1:24 H2:48 G:0.6 to 1 Min B1:30 A2:70 S:8 M10x45mm
  { id: 1,  dinGroup: 1, partNumber: 'PCH-6-MM-x-2',    pipeOD: 6,     a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 2,  dinGroup: 1, partNumber: 'PCH-6.4-MM-x-2',  pipeOD: 6.4,   a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 3,  dinGroup: 1, partNumber: 'PCH-8-MM-x-2',    pipeOD: 8,     a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 4,  dinGroup: 1, partNumber: 'PCH-9.5-MM-x-2',  pipeOD: 9.5,   a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 5,  dinGroup: 1, partNumber: 'PCH-10-MM-x-2',   pipeOD: 10,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 6,  dinGroup: 1, partNumber: 'PCH-12-MM-x-2',   pipeOD: 12,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 7,  dinGroup: 1, partNumber: 'PCH-12.7-MM-x-2', pipeOD: 12.7,  a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 8,  dinGroup: 1, partNumber: 'PCH-13.5-MM-x-2', pipeOD: 13.5,  a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 9,  dinGroup: 1, partNumber: 'PCH-14-MM-x-2',   pipeOD: 14,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 10, dinGroup: 1, partNumber: 'PCH-15-MM-x-2',   pipeOD: 15,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 11, dinGroup: 1, partNumber: 'PCH-16-MM-x-2',   pipeOD: 16,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 12, dinGroup: 1, partNumber: 'PCH-17.2-MM-x-2', pipeOD: 17.2,  a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 13, dinGroup: 1, partNumber: 'PCH-18-MM-x-2',   pipeOD: 18,    a3: 55,  a1: 33,  h1: 24,   h2: '48',         g: '0.6 to 1 Min', b1: 30,  a2: 70,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 2 — A3:70 A1:45 H1:32 H2:64 G:0.6 to 1 Min B1:30 A2:85 S:8 M10x60mm
  { id: 14, dinGroup: 2, partNumber: 'PCH-19-MM-x-2',   pipeOD: 19,    a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 15, dinGroup: 2, partNumber: 'PCH-20-MM-x-2',   pipeOD: 20,    a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 16, dinGroup: 2, partNumber: 'PCH-21.3-MM-x-2', pipeOD: 21.3,  a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 17, dinGroup: 2, partNumber: 'PCH-22-MM-x-2',   pipeOD: 22,    a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 18, dinGroup: 2, partNumber: 'PCH-25-MM-x-2',   pipeOD: 25,    a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 19, dinGroup: 2, partNumber: 'PCH-26.9-MM-x-2', pipeOD: 26.9,  a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 20, dinGroup: 2, partNumber: 'PCH-28-MM-x-2',   pipeOD: 28,    a3: 70,  a1: 45,  h1: 32,   h2: '64',         g: '0.6 to 1 Min', b1: 30,  a2: 85,  s: 8,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 3 — A3:85 A1:76 H1:38 H2:76 G:0.6 to 1 Min B1:30 A2:100 S:8 M10x70mm
  { id: 21, dinGroup: 3, partNumber: 'PCH-30-MM-x-2',   pipeOD: 30,    a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 22, dinGroup: 3, partNumber: 'PCH-32-MM-x-2',   pipeOD: 32,    a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 23, dinGroup: 3, partNumber: 'PCH-33.7-MM-x-2', pipeOD: 33.7,  a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 24, dinGroup: 3, partNumber: 'PCH-35-MM-x-2',   pipeOD: 35,    a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 25, dinGroup: 3, partNumber: 'PCH-38-MM-x-2',   pipeOD: 38,    a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 26, dinGroup: 3, partNumber: 'PCH-42-MM-x-2',   pipeOD: 42,    a3: 85,  a1: 76,  h1: 38,   h2: '76',         g: '0.6 to 1 Min', b1: 30,  a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 4 — A3:120 A1:90 H1:52.5 H2:105 G:2 Min B1:45 A2:140 S:10 M12x100mm
  { id: 27, dinGroup: 4, partNumber: 'PCH-44.5-MM-x-2', pipeOD: 44.5,  a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 28, dinGroup: 4, partNumber: 'PCH-48.3-MM-x-2', pipeOD: 48.3,  a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 29, dinGroup: 4, partNumber: 'PCH-50.8-MM-x-2', pipeOD: 50.8,  a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 30, dinGroup: 4, partNumber: 'PCH-60.3-MM-x-2', pipeOD: 60.3,  a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 31, dinGroup: 4, partNumber: 'PCH-63.5-MM-x-2', pipeOD: 63.5,  a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 32, dinGroup: 4, partNumber: 'PCH-65-MM-x-2',   pipeOD: 65,    a3: 120, a1: 90,  h1: 52.5, h2: '105',        g: '2 Min',        b1: 45,  a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 5 — A3:152 A1:122 H1:70 H2:140 G:2 Min B1:60 A2:180 S:10 M16x130mm
  { id: 33, dinGroup: 5, partNumber: 'PCH-70-MM-x-2',   pipeOD: 70,    a3: 152, a1: 122, h1: 70,   h2: '140',        g: '2 Min',        b1: 60,  a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 34, dinGroup: 5, partNumber: 'PCH-73-MM-x-2',   pipeOD: 73,    a3: 152, a1: 122, h1: 70,   h2: '140',        g: '2 Min',        b1: 60,  a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 35, dinGroup: 5, partNumber: 'PCH-76.1-MM-x-2', pipeOD: 76.1,  a3: 152, a1: 122, h1: 70,   h2: '140',        g: '2 Min',        b1: 60,  a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 36, dinGroup: 5, partNumber: 'PCH-88.9-MM-x-2', pipeOD: 88.9,  a3: 152, a1: 122, h1: 70,   h2: '140',        g: '2 Min',        b1: 60,  a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 6 — A3:210 A1:168 H1:97 H2:193-195 G:2 Min B1:80 A2:226 S:16 M20x190mm
  { id: 37, dinGroup: 6, partNumber: 'PCH-102-MM-x-2',  pipeOD: 102,   a3: 210, a1: 168, h1: 97,   h2: '193 to 195', g: '2 Min',        b1: 80,  a2: 226, s: 16, boltSize: 'M20 x 190 mm', imageUrl: CLAMP_IMG },
  { id: 38, dinGroup: 6, partNumber: 'PCH-114-MM-x-2',  pipeOD: 114,   a3: 210, a1: 168, h1: 97,   h2: '193 to 195', g: '2 Min',        b1: 80,  a2: 226, s: 16, boltSize: 'M20 x 190 mm', imageUrl: CLAMP_IMG },
  { id: 39, dinGroup: 6, partNumber: 'PCH-127-MM-x-2',  pipeOD: 127,   a3: 210, a1: 168, h1: 97,   h2: '193 to 195', g: '2 Min',        b1: 80,  a2: 226, s: 16, boltSize: 'M20 x 190 mm', imageUrl: CLAMP_IMG },
  { id: 40, dinGroup: 6, partNumber: 'PCH-133-MM-x-2',  pipeOD: 133,   a3: 210, a1: 168, h1: 97,   h2: '193 to 195', g: '2 Min',        b1: 80,  a2: 226, s: 16, boltSize: 'M20 x 190 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 7 — A3:251 A1:205 H1:116 H2:230-232 G:3 Min B1:90 A2:270 S:16 M24x220mm
  { id: 41, dinGroup: 7, partNumber: 'PCH-141-MM-x-2',  pipeOD: 141,   a3: 251, a1: 205, h1: 116,  h2: '230 to 232', g: '3 Min',        b1: 90,  a2: 270, s: 16, boltSize: 'M24 x 220 mm', imageUrl: CLAMP_IMG },
  { id: 42, dinGroup: 7, partNumber: 'PCH-152-MM-x-2',  pipeOD: 152,   a3: 251, a1: 205, h1: 116,  h2: '230 to 232', g: '3 Min',        b1: 90,  a2: 270, s: 16, boltSize: 'M24 x 220 mm', imageUrl: CLAMP_IMG },
  { id: 43, dinGroup: 7, partNumber: 'PCH-168-MM-x-2',  pipeOD: 168,   a3: 251, a1: 205, h1: 116,  h2: '230 to 232', g: '3 Min',        b1: 90,  a2: 270, s: 16, boltSize: 'M24 x 220 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 8 — A3:336 A1:265 H1:160 H2:320 G:3 Min B1:120 A2:340 S:25 M30x300mm
  { id: 44, dinGroup: 8, partNumber: 'PCH-177.8-MM-x-2', pipeOD: 177.8, a3: 336, a1: 265, h1: 160, h2: '320',        g: '3 Min',        b1: 120, a2: 340, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 45, dinGroup: 8, partNumber: 'PCH-193.7-MM-x-2', pipeOD: 193.7, a3: 336, a1: 265, h1: 160, h2: '320',        g: '3 Min',        b1: 120, a2: 340, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 46, dinGroup: 8, partNumber: 'PCH-216-MM-x-2',   pipeOD: 216,   a3: 336, a1: 265, h1: 160, h2: '320',        g: '3 Min',        b1: 120, a2: 340, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 47, dinGroup: 8, partNumber: 'PCH-219-MM-x-2',   pipeOD: 219,   a3: 336, a1: 265, h1: 160, h2: '320',        g: '3 Min',        b1: 120, a2: 340, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
]