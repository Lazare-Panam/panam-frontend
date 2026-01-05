
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
  {
    id: '4',
    name: 'Check Valve - CV Series',
    description: 'Poppet style design with various cracking pressures available.',
    price: 'Contact for Quote',
    imageUrl: '/images/d4.jpg',
  },
  {
    id: '5',
    name: '2-Way Valve Manifold',
    description: 'Designed for connecting system impulse lines & transmitters.',
    price: 'Contact for Quote',
    imageUrl: '/images/d5.jpg',
  },
  {
    id: '6',
    name: 'Gate Valve - GV Series',
    description: 'Outside Screw and Yoke (OS&Y) for high temp/pressure.',
    price: 'Contact for Quote',
    imageUrl: '/images/d6.jpg',
  },
  {
    id: '7',
    name: 'Female Connector Fitting',
    description: 'Double ferrule tube fittings for leak-tight connections.',
    price: 'Contact for Quote',
    imageUrl: '/images/d7.jpg',
  },
  {
    id: '8',
    name: 'Pressure Relief Valve',
    description: 'Proportional relief valves for liquid or gas service.',
    price: 'Contact for Quote',
    imageUrl: '/images/d8.jpg',
  },
  {
    id: '9',
    name: 'Gauge Root Valve',
    description: 'Multi-port design allowing for versatile instrument mounting.',
    price: 'Contact for Quote',
    imageUrl: '/images/d9.jpg',
  }
];