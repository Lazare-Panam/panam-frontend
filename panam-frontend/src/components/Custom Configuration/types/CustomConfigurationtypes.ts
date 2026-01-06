
export interface ConfigOption {
  code: string;  // e.g., "SS"
  label: string; // e.g., "Stainless Steel"
}

export interface ProductConfig {
  label: string;             // e.g., "Material"
  options: ConfigOption[];   // e.g., [{code: "SS", label: "Stainless Steel"}, ...]
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  configurations?: ProductConfig[];
}
