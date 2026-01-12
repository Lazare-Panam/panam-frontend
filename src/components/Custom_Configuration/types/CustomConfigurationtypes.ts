export interface ConfigOption {
  code: string
  label: string
  baseSize?: string
  threadType?: string
}

export interface ConfigPart {
  id: string
  label: string
  options: ConfigOption[]
}

export interface ProductConfig {
  label: string
  isSplit?: boolean
  options?: ConfigOption[]
  parts?: ConfigPart[]
}

export interface Product {
  id: string
  title: string
  description: string
  price?: string
  imageUrl: string
  configurations?: ProductConfig[]
}
