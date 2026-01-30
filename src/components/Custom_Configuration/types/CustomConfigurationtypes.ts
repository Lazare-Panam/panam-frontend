export interface ConfigOption {
  code: string
  label: string
  unit?: "imperial" | "metric"
}

export interface ConfigPart {
  id: string
  label: string
  options: ConfigOption[]
}

export interface ProductConfig {
  required?: boolean
  noSeperatorAfter?: boolean
  label: string
  options?: ConfigOption[]
  parts?: ConfigPart[]
}
export interface ProductCapabilities {
  supportsCertificates: boolean
  hasUnitSystem: boolean
}
export interface Product {
  id: string
  title: string
  description: string
  price?: string
  imageUrl: string
  features?: string[]
  configurations?: ProductConfig[]
  capabilities?: ProductCapabilities
}
