import { type FilterElementDTO } from "./typesElement"

const PSE_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png"

function parsePore(code: string): number {
  if (code === '05') return 0.5
  return parseInt(code, 10)
}

// Raw SKU data — [partNumber, groupCode, isMesh, poreCode]
// groupCode 'IA' = small-bore elements (fits IA/IB/TA/TB housings)
// groupCode 'IC' = large-bore elements (fits IC/ID/TC/TD housings)
const RAW_DATA: Array<[string, 'IA' | 'IC', boolean, string]> = [
  // ===== Small-bore (fits IA / IB / TA / TB) =====
  ["PSE-IA-SS-05", "IA", false, "05"],
  ["PSE-IA-SS-2",  "IA", false, "2"],
  ["PSE-IA-SS-7",  "IA", false, "7"],
  ["PSE-IA-SS-15", "IA", false, "15"],
  ["PSE-IA-SS-40", "IA", false, "40"],
  ["PSE-IA-SS-60", "IA", false, "60"],
  ["PSE-IA-SS-90", "IA", false, "90"],
  ["PSE-IA-ST-40",  "IA", true, "40"],
  ["PSE-IA-ST-90",  "IA", true, "90"],
  ["PSE-IA-ST-140", "IA", true, "140"],
  ["PSE-IA-ST-230", "IA", true, "230"],
  ["PSE-IA-ST-440", "IA", true, "440"],

  // ===== Large-bore (fits IC / ID / TC / TD) =====
  ["PSE-IC-SS-05", "IC", false, "05"],
  ["PSE-IC-SS-2",  "IC", false, "2"],
  ["PSE-IC-SS-7",  "IC", false, "7"],
  ["PSE-IC-SS-15", "IC", false, "15"],
  ["PSE-IC-SS-40", "IC", false, "40"],
  ["PSE-IC-SS-60", "IC", false, "60"],
  ["PSE-IC-SS-90", "IC", false, "90"],
  ["PSE-IC-ST-40",  "IC", true, "40"],
  ["PSE-IC-ST-90",  "IC", true, "90"],
  ["PSE-IC-ST-140", "IC", true, "140"],
  ["PSE-IC-ST-230", "IC", true, "230"],
  ["PSE-IC-ST-440", "IC", true, "440"],
]

const GROUP_INFO: Record<'IA' | 'IC', { sizeGroup: FilterElementDTO['sizeGroup']; compatibleSeries: string[] }> = {
  IA: { sizeGroup: 'Small (IA / IB / TA / TB)', compatibleSeries: ['IA', 'IB', 'TA', 'TB'] },
  IC: { sizeGroup: 'Large (IC / ID / TC / TD)', compatibleSeries: ['IC', 'ID', 'TC', 'TD'] },
}

export const FILTER_ELEMENT_DATA: FilterElementDTO[] = RAW_DATA.map(([partNumber, groupCode, isMesh, poreCode]) => {
  const { sizeGroup, compatibleSeries } = GROUP_INFO[groupCode]
  const poreSize = parsePore(poreCode)
  const elementType = isMesh ? 'Mesh' : 'Sintered'
  return {
    id: partNumber,
    partNumber,
    description: `Panam Replacement Filter Element, ${sizeGroup}, ${elementType} ${poreSize}μm, SS316. Fits ${compatibleSeries.join('/')} filter housings.`,
    sizeGroup,
    compatibleSeries,
    filterElement: elementType,
    poreSize,
    material: 'SS',
    imageUrl: PSE_IMAGE,
  }
})
