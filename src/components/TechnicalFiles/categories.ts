// Single source of truth for the CAD/STEP file categories shown as tiles and
// used to look up a category's image/copy on the file listing page.
// `category` must match the value stored in TechnicalFiles.Category on the API.
export interface TechnicalFileCategory {
  name: string
  category: string
  subtitle: string
  description: string
  image?: string // product photo; categories without one show their drawing instead
}

export const CATEGORIES: TechnicalFileCategory[] = [
  {
    name: "Connectors",
    category: "Connectors",
    subtitle: "STEP Models",
    description: "3D STEP models for our tube fitting connectors — male, female and bulkhead configurations across metric sizes. Ready to drop straight into your CAD assembly.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tube-fittings/Bulkhead-Connector.jpg",
  },
  {
    name: "Elbows",
    category: "Elbows",
    subtitle: "STEP Models",
    description: "3D STEP models for our tube fitting elbows — positionable male elbow configurations across metric sizes. Ready to drop straight into your CAD assembly.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
  },
  {
    name: "Unions",
    category: "Unions",
    subtitle: "STEP Models",
    description: "3D STEP models for our tube fitting unions — inline and bulkhead union configurations across metric sizes. Ready to drop straight into your CAD assembly.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-bspt-final.png",
  },
  {
    name: "Ball Valves",
    category: "Ball-Valves",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our ball valves, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/ball-valves/PBV-2-S-04-FF-1.png",
  },
  {
    name: "Check Valves",
    category: "Check-Valves",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our check valves, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/check-valves/c-cover.png",
  },
  {
    name: "Needle Valves",
    category: "Needle-Valves",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our needle valves, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/cover-needle.jpg",
  },
  {
    name: "Relief Valves",
    category: "Relief-Valves",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our relief valves, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/reflief-valves/relief-cover.jpg",
  },
  {
    name: "Double Block & Bleed",
    category: "Double-Block-Bleed",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our double block & bleed valves, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/double-block-and-bleeed/dbb_flange_x_flange.png",
  },
  {
    name: "Manifolds",
    category: "Manifolds",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our valve manifolds, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/3VM/3VM_Cover.jpg",
  },
  {
    name: "Fittings",
    category: "Fittings",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our pipe fittings, listed by part number. Open in your browser or download the PDF.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/male-tee.png",
  },
  {
    name: "Other",
    category: "Other",
    subtitle: "PDF Drawings",
    description: "Technical drawings for our other Panam products, listed by part number. Open in your browser or download the PDF.",
  },
]

export const getCategory = (category: string): TechnicalFileCategory | undefined => CATEGORIES.find(c => c.category.toLowerCase() === category.toLowerCase())

export type DrawingKind = "connector" | "elbow" | "union" | "ball" | "check" | "needle" | "relief" | "dbb" | "manifold" | "tee" | "vessel"

export const drawingKindFor = (category: string): DrawingKind => {
  const c = category.toLowerCase()
  if (c.includes("elbow")) return "elbow"
  if (c.includes("union")) return "union"
  if (c.includes("ball")) return "ball"
  if (c.includes("check")) return "check"
  if (c.includes("needle")) return "needle"
  if (c.includes("relief")) return "relief"
  if (c.includes("block")) return "dbb"
  if (c.includes("manifold")) return "manifold"
  if (c.includes("fitting")) return "tee"
  if (c.includes("other")) return "vessel"
  return "connector"
}
