
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}



export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'High Pressure Ball Valve',
    description: 'Series BV-3, Stainless Steel 316, 6000 PSI rated.',
    price: 'Contact for Quote',
    imageUrl: "/images/d1.jpg",
  },
  {
    id: '2',
    name: 'Needle Valve - NV Series',
    description: 'Hard seated, integral bonnet design for leak-proof shut-off.',
    price: 'Contact for Quote',
    imageUrl: '/images/d2.jpg'
  },
  {
    id: '3',
    name: 'Double Block & Bleed Valve',
    description: 'Forged body construction for severe service applications.',
    price: 'Contact for Quote',
    imageUrl: '/images/d3.jpg',
  },
];