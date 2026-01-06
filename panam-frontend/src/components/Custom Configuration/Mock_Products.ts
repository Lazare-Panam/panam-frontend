
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  configurations?: { label: string; options: string[] }[];
}



export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'High Pressure Ball Valve',
    description: 'Series BV-3, Stainless Steel 316, 6000 PSI rated.',
    price: 'Contact for Quote',
    imageUrl: "/images/d1.jpg",
    configurations: [
      { label: "Pressure Range", options: ["0-10 Bar", "0-50 Bar", "0-100 Bar"] },
      { label: "Output Signal", options: ["4-20mA", "0-10V", "Modbus"] }
    ]
  },
  {
    id: '2',
    name: 'Needle Valve - NV Series',
    description: 'Hard seated, integral bonnet design for leak-proof shut-off.',
    price: 'Contact for Quote',
    imageUrl: '/images/d2.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '3',
    name: 'Double Block & Bleed Valve',
    description: 'Forged body construction for severe service applications.',
    price: 'Contact for Quote',
    imageUrl: '/images/d3.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '4',
    name: 'Check Valve - CV Series',
    description: 'Poppet style design with various cracking pressures available.',
    price: 'Contact for Quote',
    imageUrl: '/images/d4.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '5',
    name: '2-Way Valve Manifold',
    description: 'Designed for connecting system impulse lines & transmitters.',
    price: 'Contact for Quote',
    imageUrl: '/images/d5.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '6',
    name: 'Gate Valve - GV Series',
    description: 'Outside Screw and Yoke (OS&Y) for high temp/pressure.',
    price: 'Contact for Quote',
    imageUrl: '/images/d6.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '7',
    name: 'Female Connector Fitting',
    description: 'Double ferrule tube fittings for leak-tight connections.',
    price: 'Contact for Quote',
    imageUrl: '/images/d7.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '8',
    name: 'Pressure Relief Valve',
    description: 'Proportional relief valves for liquid or gas service.',
    price: 'Contact for Quote',
    imageUrl: '/images/d8.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  },
  {
    id: '9',
    name: 'Gauge Root Valve',
    description: 'Multi-port design allowing for versatile instrument mounting.',
    price: 'Contact for Quote',
    imageUrl: '/images/d9.jpg',
    configurations: [
      { label: "Material", options: ["Stainless Steel", "Carbon Steel"] },
      { label: "Size", options: ["1/2\"", "1\"", "2\""] },
      { label: "Seal Type", options: ["PTFE", "Graphite"] }
    ]
  }
];