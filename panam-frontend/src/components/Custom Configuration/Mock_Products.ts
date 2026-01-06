import { type Product } from "./types/CustomConfigurationtypes";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "5",
    name: "2-Way Valve Manifold",
    description: "Designed for connecting system impulse lines & transmitters.",
    price: "Contact for Quote",
    imageUrl: "/images/d5.jpg",
    configurations: [
      {
        label: "Number of Valves",
        options: [{ code: "2VM", label: "2-Way Manifold" }],
      },
      {
        label: "Material",
        options: [
          { code: "SS", label: "Stainless Steel 316" },
          { code: "CS", label: "Carbon Steel" },
          { code: "MO", label: "Monel - 400" },
          { code: "HC", label: "Hastelloy - C 276" },
          { code: "DSS", label: "Duplex - UNS S32205" },
          { code: "SDSS", label: "Super Duplex - UNS S32750" },
          { code: "6MO", label: "UNS S31254" },
          { code: "INC625", label: "Inconel 625" },
          { code: "INC825", label: "Inconel 825" },
        ],
      },
      {
        label: "Connection Size",
        options: [
          { code: "4", label: "1/4” NPT" },
          { code: "8", label: "1/2” NPT" },
          { code: "20M", label: "M20x1.5" },
          { code: "4R", label: "1/4” BSPT" },
          { code: "4G", label: "1/4” BSPP" },
          { code: "8R", label: "1/2” BSPT" },
          { code: "8G", label: "1/2” BSPP" },
          { code: "20MM", label: "External Thread M20x1.5 / Flange" },
          { code: "20MSWL", label: "M20x1.5 with Swivel Nut" },
          { code: "4GSWL", label: "1/4” BSPP with Swivel Nut" },
          { code: "8GSWL", label: "1/2” BSPP with Swivel Nut" },
          { code: "08", label: "1/2” Tube Fitting" },
          { code: "M12", label: "12mm Tube Fitting" },
        ],
      },
      {
        label: "Connection Type",
        options: [
          { code: "F", label: "Female Thread (Standard)" },
          { code: "MM", label: "Male Thread" },
          { code: "MF", label: "Male/Female" },
          { code: "FM", label: "Female/Male" },
        ],
      },
      {
        label: "Mounting",
        options: [
          { code: "R", label: "Standard Body - Pipe to Pipe" },
          { code: "BM", label: "Pipe to Pipe (Base Mounting)" },
          { code: "T", label: "Standard Body - Pipe to Flange" },
          { code: "BV", label: "Pipe to Pipe (Base Vent)" },
          { code: "H", label: "Standard Body - Flange to Flange" },
          { code: "DM", label: "Direct Mounting (Pipe to Flange)" },
        ],
      },
      {
        label: "Configuration",
        options: [
          { code: "L", label: "Type L (Standard)" },
          { code: "V", label: "Type V" },
          { code: "A", label: "Type A" },
        ],
      },
      {
        label: "Optional",
        options: [
          { code: "P", label: "Vent with a Plug" },
          { code: "XLT", label: "Low Temperature Application" },
          { code: "SG", label: "Sour Gas (NACE MR-01-75)" },
          { code: "BT", label: "Ball Tip" },
          { code: "LB", label: "Soft Seat (Large Bore)" },
          { code: "HT", label: "Grafoil Seal (High Temp)" },
          { code: "ATK", label: "Anti-Tamper Key" },
          { code: "BKT", label: "Mounting Brackets" },
          { code: "10K", label: "10,000 PSI Pressure Rating" },
        ],
      },
    ],
  },
];
