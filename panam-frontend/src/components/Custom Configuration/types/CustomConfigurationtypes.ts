
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  configurations?: { label: string; options: string[] }[];
}
