export interface HeavySeriesTubeClampItem {
  id: number
  dinGroup: number
  partNumber: string
  pipeOD: number
  a3: number
  a1: number
  h1: string
  h2: string
  g: string
  b1: number
  a2: number
  s: number
  boltSize: string
  imageUrl: string
}

const CLAMP_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Heavy-Series-Tube-Clamp.jpeg'

export const HEAVY_SERIES_CLAMP_DATA: HeavySeriesTubeClampItem[] = [
  // DIN GROUP 1 — A3:55 A1:33 H1:32 H2:48-49 G:0.6-1 B1:30 A2:72 S:8 M10x45mm
  { id: 1,  dinGroup: 1, partNumber: 'PCH-6-SS',       pipeOD: 6,     a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 2,  dinGroup: 1, partNumber: 'PCH-6.4-SS',     pipeOD: 6.4,   a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 3,  dinGroup: 1, partNumber: 'PCH-8-SS',       pipeOD: 8,     a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 4,  dinGroup: 1, partNumber: 'PCH-9.5-SS',     pipeOD: 9.5,   a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 5,  dinGroup: 1, partNumber: 'PCH-10-SS',      pipeOD: 10,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 6,  dinGroup: 1, partNumber: 'PCH-12-SS',      pipeOD: 12,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 7,  dinGroup: 1, partNumber: 'PCH-12.7-SS',    pipeOD: 12.7,  a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 8,  dinGroup: 1, partNumber: 'PCH-13.5-SS',    pipeOD: 13.5,  a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 9,  dinGroup: 1, partNumber: 'PCH-14-SS',      pipeOD: 14,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 10, dinGroup: 1, partNumber: 'PCH-15-SS',      pipeOD: 15,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 11, dinGroup: 1, partNumber: 'PCH-16-SS',      pipeOD: 16,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 12, dinGroup: 1, partNumber: 'PCH-17.2-SS',    pipeOD: 17.2,  a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  { id: 13, dinGroup: 1, partNumber: 'PCH-18-SS',      pipeOD: 18,    a3: 55,  a1: 33,  h1: '32',       h2: '48 to 49',   g: '0.6 to 1', b1: 30, a2: 72,  s: 8,  boltSize: 'M10 x 45 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 2 — A3:70 A1:45 H1:48 H2:64 G:0.6-1 B1:30 A2:86 S:6 M10x60mm
  { id: 14, dinGroup: 2, partNumber: 'PCH-19-SS',      pipeOD: 19,    a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 15, dinGroup: 2, partNumber: 'PCH-20-SS',      pipeOD: 20,    a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 16, dinGroup: 2, partNumber: 'PCH-21.3-SS',    pipeOD: 21.3,  a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 17, dinGroup: 2, partNumber: 'PCH-22-SS',      pipeOD: 22,    a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 18, dinGroup: 2, partNumber: 'PCH-25.4-SS',    pipeOD: 25.4,  a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 19, dinGroup: 2, partNumber: 'PCH-26.9-SS',    pipeOD: 26.9,  a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  { id: 20, dinGroup: 2, partNumber: 'PCH-28-SS',      pipeOD: 28,    a3: 70,  a1: 45,  h1: '48',       h2: '64',         g: '0.6 to 1', b1: 30, a2: 86,  s: 6,  boltSize: 'M10 x 60 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 3 — A3:85 A1:60 H1:60-62 H2:76-78 G:0.6-1 B1:30 A2:100 S:8 M10x70mm
  { id: 21, dinGroup: 3, partNumber: 'PCH-30-SS',      pipeOD: 30,    a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 22, dinGroup: 3, partNumber: 'PCH-32-SS',      pipeOD: 32,    a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 23, dinGroup: 3, partNumber: 'PCH-33.7-SS',    pipeOD: 33.7,  a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 24, dinGroup: 3, partNumber: 'PCH-35-SS',      pipeOD: 35,    a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 25, dinGroup: 3, partNumber: 'PCH-38.1-SS',    pipeOD: 38.1,  a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  { id: 26, dinGroup: 3, partNumber: 'PCH-42-SS',      pipeOD: 42,    a3: 85,  a1: 60,  h1: '60 to 62', h2: '76 to 78',   g: '0.6 to 1', b1: 30, a2: 100, s: 8,  boltSize: 'M10 x 70 mm',  imageUrl: CLAMP_IMG },
  // DIN GROUP 4 — A3:115 A1:90 H1:89-92 H2:109-112 G:2 B1:50 A2:140 S:10 M12x100mm
  { id: 27, dinGroup: 4, partNumber: 'PCH-42.3-SS',    pipeOD: 42.3,  a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 28, dinGroup: 4, partNumber: 'PCH-48.3-SS',    pipeOD: 48.3,  a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 29, dinGroup: 4, partNumber: 'PCH-50.8-SS',    pipeOD: 50.8,  a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 30, dinGroup: 4, partNumber: 'PCH-60.3-SS',    pipeOD: 60.3,  a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 31, dinGroup: 4, partNumber: 'PCH-63.5-SS',    pipeOD: 63.5,  a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  { id: 32, dinGroup: 4, partNumber: 'PCH-65-SS',      pipeOD: 65,    a3: 115, a1: 90,  h1: '89 to 92', h2: '109 to 112', g: '2',        b1: 50, a2: 140, s: 10, boltSize: 'M12 x 100 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 5 — A3:152 A1:122 H1:120-122 H2:137-140 G:2 B1:65 A2:180 S:10 M16x130mm
  { id: 33, dinGroup: 5, partNumber: 'PCH-70-SS',      pipeOD: 70,    a3: 152, a1: 122, h1: '120 to 122', h2: '137 to 140', g: '2',      b1: 65, a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 34, dinGroup: 5, partNumber: 'PCH-73-SS',      pipeOD: 73,    a3: 152, a1: 122, h1: '120 to 122', h2: '137 to 140', g: '2',      b1: 65, a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 35, dinGroup: 5, partNumber: 'PCH-76.1-SS',    pipeOD: 76.1,  a3: 152, a1: 122, h1: '120 to 122', h2: '137 to 140', g: '2',      b1: 65, a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  { id: 36, dinGroup: 5, partNumber: 'PCH-88.9-SS',    pipeOD: 88.9,  a3: 152, a1: 122, h1: '120 to 122', h2: '137 to 140', g: '2',      b1: 65, a2: 180, s: 10, boltSize: 'M16 x 130 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 6 — A3:210 A1:168 H1:163-168 H2:193-195 G:3 B1:80 A2:230 S:16 M20x180mm
  { id: 37, dinGroup: 6, partNumber: 'PCH-102-SS',     pipeOD: 102,   a3: 210, a1: 168, h1: '163 to 168', h2: '193 to 195', g: '3',      b1: 80, a2: 230, s: 16, boltSize: 'M20 x 180 mm', imageUrl: CLAMP_IMG },
  { id: 38, dinGroup: 6, partNumber: 'PCH-114-SS',     pipeOD: 114,   a3: 210, a1: 168, h1: '163 to 168', h2: '193 to 195', g: '3',      b1: 80, a2: 230, s: 16, boltSize: 'M20 x 180 mm', imageUrl: CLAMP_IMG },
  { id: 39, dinGroup: 6, partNumber: 'PCH-127-SS',     pipeOD: 127,   a3: 210, a1: 168, h1: '163 to 168', h2: '193 to 195', g: '3',      b1: 80, a2: 230, s: 16, boltSize: 'M20 x 180 mm', imageUrl: CLAMP_IMG },
  { id: 40, dinGroup: 6, partNumber: 'PCH-133-SS',     pipeOD: 133,   a3: 210, a1: 168, h1: '163 to 168', h2: '193 to 195', g: '3',      b1: 80, a2: 230, s: 16, boltSize: 'M20 x 180 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 7 — A3:254 A1:205 H1:200 H2:230-232 G:3 B1:100 A2:275 S:16 M24x225mm
  { id: 41, dinGroup: 7, partNumber: 'PCH-141-SS',     pipeOD: 141,   a3: 254, a1: 205, h1: '200',        h2: '230 to 232', g: '3',      b1: 100, a2: 275, s: 16, boltSize: 'M24 x 225 mm', imageUrl: CLAMP_IMG },
  { id: 42, dinGroup: 7, partNumber: 'PCH-152-SS',     pipeOD: 152,   a3: 254, a1: 205, h1: '200',        h2: '230 to 232', g: '3',      b1: 100, a2: 275, s: 16, boltSize: 'M24 x 225 mm', imageUrl: CLAMP_IMG },
  { id: 43, dinGroup: 7, partNumber: 'PCH-168-SS',     pipeOD: 168,   a3: 254, a1: 205, h1: '200',        h2: '230 to 232', g: '3',      b1: 100, a2: 275, s: 16, boltSize: 'M24 x 225 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 8 (SS) — A3:323 A1:265 H1:270 H2:320 G:3 B1:130 A2:345 S:25 M30x300mm
  { id: 44, dinGroup: 8, partNumber: 'PCH-177.8-SS',   pipeOD: 177.8, a3: 323, a1: 265, h1: '270',        h2: '320',        g: '3',      b1: 130, a2: 345, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 45, dinGroup: 8, partNumber: 'PCH-193.7-SS',   pipeOD: 193.7, a3: 323, a1: 265, h1: '270',        h2: '320',        g: '3',      b1: 130, a2: 345, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 46, dinGroup: 8, partNumber: 'PCH-216-SS',     pipeOD: 216,   a3: 323, a1: 265, h1: '270',        h2: '320',        g: '3',      b1: 130, a2: 345, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  { id: 47, dinGroup: 8, partNumber: 'PCH-219-SS',     pipeOD: 219,   a3: 323, a1: 265, h1: '270',        h2: '320',        g: '3',      b1: 130, a2: 345, s: 25, boltSize: 'M30 x 300 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 8 (MH) — A3:55 A1:33 H1:48 H2:49 G:0.6-1 B1:30 A2:113 S:8 M10x45mm
  { id: 48, dinGroup: 8,  partNumber: 'PCH-6-SS-MH',     pipeOD: 6,    a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 49, dinGroup: 8,  partNumber: 'PCH-6.4-SS-MH',   pipeOD: 6.4,  a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 50, dinGroup: 8,  partNumber: 'PCH-8-SS-MH',     pipeOD: 8,    a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 51, dinGroup: 8,  partNumber: 'PCH-9.5-SS-MH',   pipeOD: 9.5,  a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 52, dinGroup: 8,  partNumber: 'PCH-10-SS-MH',    pipeOD: 10,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 53, dinGroup: 8,  partNumber: 'PCH-12-SS-MH',    pipeOD: 12,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 54, dinGroup: 8,  partNumber: 'PCH-12.7-SS-MH',  pipeOD: 12.7, a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 55, dinGroup: 8,  partNumber: 'PCH-13.5-SS-MH',  pipeOD: 13.5, a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 56, dinGroup: 8,  partNumber: 'PCH-14-SS-MH',    pipeOD: 14,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 57, dinGroup: 8,  partNumber: 'PCH-15-SS-MH',    pipeOD: 15,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 58, dinGroup: 8,  partNumber: 'PCH-16-SS-MH',    pipeOD: 16,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 59, dinGroup: 8,  partNumber: 'PCH-17.2-SS-MH',  pipeOD: 17.2, a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  { id: 60, dinGroup: 8,  partNumber: 'PCH-18-SS-MH',    pipeOD: 18,   a3: 55, a1: 33, h1: '48', h2: '49',  g: '0.6 to 1', b1: 30, a2: 113, s: 8, boltSize: 'M10 x 45 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 9 (MH) — A3:70 A1:45 H1:33 H2:64 G:0.6-1 B1:30 A2:125 S:8 M10x60mm
  { id: 61, dinGroup: 9,  partNumber: 'PCH-19-SS-MH',    pipeOD: 19,   a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 62, dinGroup: 9,  partNumber: 'PCH-20-SS-MH',    pipeOD: 20,   a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 63, dinGroup: 9,  partNumber: 'PCH-21.3-SS-MH',  pipeOD: 21.3, a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 64, dinGroup: 9,  partNumber: 'PCH-22-SS-MH',    pipeOD: 22,   a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 65, dinGroup: 9,  partNumber: 'PCH-25.4-SS-MH',  pipeOD: 25.4, a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 66, dinGroup: 9,  partNumber: 'PCH-26.9-SS-MH',  pipeOD: 26.9, a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  { id: 67, dinGroup: 9,  partNumber: 'PCH-28-SS-MH',    pipeOD: 28,   a3: 70, a1: 45, h1: '33', h2: '64',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 60 mm', imageUrl: CLAMP_IMG },
  // DIN GROUP 10 (MH) — A3:85 A1:60 H1:62 H2:78 G:0.6-1 B1:30 A2:125 S:8 M10x70mm
  { id: 68, dinGroup: 10, partNumber: 'PCH-30-SS-MH',    pipeOD: 30,   a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 69, dinGroup: 10, partNumber: 'PCH-32-SS-MH',    pipeOD: 32,   a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 70, dinGroup: 10, partNumber: 'PCH-33.7-SS-MH',  pipeOD: 33.7, a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 71, dinGroup: 10, partNumber: 'PCH-35-SS-MH',    pipeOD: 35,   a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 72, dinGroup: 10, partNumber: 'PCH-38.1-SS-MH',  pipeOD: 38.1, a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
  { id: 73, dinGroup: 10, partNumber: 'PCH-42-SS-MH',    pipeOD: 42,   a3: 85, a1: 60, h1: '62', h2: '78',  g: '0.6 to 1', b1: 30, a2: 125, s: 8, boltSize: 'M10 x 70 mm', imageUrl: CLAMP_IMG },
]