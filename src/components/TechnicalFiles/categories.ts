// Single source of truth for the CAD/STEP file categories shown as tiles and
// used to look up a category's image/copy on the file listing page.
// `category` must match the value stored in TechnicalFiles.Category on the API.
export interface TechnicalFileCategory {
  name: string
  category: string
  subtitle: string
  description: string
  image: string
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
]

export const getCategory = (category: string): TechnicalFileCategory | undefined => CATEGORIES.find(c => c.category.toLowerCase() === category.toLowerCase())

export type DrawingKind = "connector" | "elbow" | "union"

export const drawingKindFor = (category: string): DrawingKind => {
  const c = category.toLowerCase()
  if (c.includes("elbow")) return "elbow"
  if (c.includes("union")) return "union"
  return "connector"
}
