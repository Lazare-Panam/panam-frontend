export interface ConfigOption {
  code: string;  // e.g., "4" or "GSWL"
  label: string; // e.g., "1/4”" or "BSPP with Swivel Nut"
baseSize?: string;   // Optional: only for split categories
  threadType?: string
}

export interface ConfigPart {
  id: string;             // e.g., "baseSize" or "threadType"
  label: string;          // e.g., "Size" or "Thread"
  options: ConfigOption[]; 
}

export interface ProductConfig {
  label: string;            // e.g., "Connection Size"
  isSplit?: boolean;        // Flag to trigger the two-dropdown UI
  options?: ConfigOption[]; // Used for standard single dropdowns
  parts?: ConfigPart[];     // Used for the 4 + GSWL split logic
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  configurations?: ProductConfig[];
}