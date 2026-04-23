export interface ManifoldFilters {
  connectionSizes: string[]
  connectionTypes: string[]
  mountings: string[]
  maxPressures: string[]
  configurations: string[]
  ventHoleSizes: string[]
}

export const EMPTY_MANIFOLD_FILTERS: ManifoldFilters = {
  connectionSizes: [],
  connectionTypes: [],
  mountings: [],
  maxPressures: [],
  configurations: [],
  ventHoleSizes: [],
}