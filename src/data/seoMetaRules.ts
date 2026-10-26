import { HP_SEO_META } from "./hpSeoMeta"

// Length limits the SEO audit (SE Ranking) checks against.
export const TITLE_MAX = 65
export const DESCRIPTION_MAX = 155

// How many parts share each hand-written title in the HP spreadsheet. Size variants
// (e.g. Medium vs High pressure) often got the same title, so those need the part number added.
const SHARED_TITLE_COUNT = Object.values(HP_SEO_META).reduce<Record<string, number>>((acc, { metaTitle }) => {
  acc[metaTitle] = (acc[metaTitle] ?? 0) + 1
  return acc
}, {})

const shorten = (text: string) => text.replace(/High Pressure/g, "HP").replace(/Medium Pressure/g, "MP")

// Cuts at the last whole word that fits, so titles and descriptions never end mid-word.
const trimToWord = (text: string, max: number, ellipsis = "") => {
  if (text.length <= max) return text
  const cut = text.slice(0, max - ellipsis.length)
  const atSpace = cut.lastIndexOf(" ")
  return `${(atSpace > max * 0.6 ? cut.slice(0, atSpace) : cut).replace(/[\s,;:—–|-]+$/, "")}${ellipsis}`
}

// First candidate that fits wins; the last one is trimmed so the result is always within the limit.
const firstThatFits = (candidates: string[], max: number) => candidates.find(c => c.length <= max) ?? trimToWord(candidates[candidates.length - 1], max)

// Unique (part number always present) and within TITLE_MAX, keeping the original wording wherever it fits.
export const productMetaTitle = (partNumber: string, title: string) => {
  const sheetTitle = HP_SEO_META[partNumber]?.metaTitle
  if (sheetTitle) {
    const name = sheetTitle.replace(/^Panam\s+/, "")
    if (SHARED_TITLE_COUNT[sheetTitle] === 1) return firstThatFits([sheetTitle, shorten(sheetTitle), shorten(name), `${partNumber} ${shorten(name)}`], TITLE_MAX)
    return firstThatFits([`${partNumber} ${name} | Panam`, `${partNumber} ${name}`, `${partNumber} ${shorten(name)}`], TITLE_MAX)
  }
  return firstThatFits([`${partNumber} — ${title} | Panam Valves`, `${partNumber} — ${title} | Panam`, `${partNumber} — ${title}`, `${partNumber} — ${shorten(title)}`], TITLE_MAX)
}

export const productMetaDescription = (partNumber: string, title: string, description: string) => {
  const text = HP_SEO_META[partNumber]?.metaDescription ?? `${title} (${partNumber}). ${description}`
  return trimToWord(text.replace(/\s+/g, " ").trim(), DESCRIPTION_MAX, "…")
}

// For hand-written page titles/descriptions: keep as written when within the limit, otherwise trim at a word.
export const fitTitle = (text: string) => trimToWord(text, TITLE_MAX)
export const fitDescription = (text: string) => trimToWord(text.replace(/\s+/g, " ").trim(), DESCRIPTION_MAX, "…")
