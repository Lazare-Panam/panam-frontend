import type { ProductConfig, ConfigOption } from "../types/CustomConfigurationtypes"

export type Segment = {
  code: string
  skipSeparator: boolean
  position: number
}

export const getEffectiveSelection = (config: ProductConfig, selections: Record<string, ConfigOption>): ConfigOption | null => {
  if (!config?.label) return null
  if (selections[config.label]) return selections[config.label]
  if (config.options?.length === 1) return config.options[0]
  return null
}

export const getSegmentsToInclude = (configurations: ProductConfig[], selections: Record<string, ConfigOption>): Segment[] => {
  const segmentsToInclude: Segment[] = []
  for (let i = 0; i < configurations.length; i++) {
    const config = configurations[i]
    const selection = getEffectiveSelection(config, selections) // Now it's in the same file
    const code = selection?.code?.trim() || ""

    const hasCode = code !== "" && code !== "-"
    const isMissingRequired = !selection && config.required
    if (!hasCode && !isMissingRequired) {
      continue
    }
    segmentsToInclude.push({
      code: hasCode ? code : "??",
      skipSeparator: config.noSeperatorAfter === true,
      position: i,
    })
  }

  return segmentsToInclude
}

export const buildPartNumber = (segments: Segment[]): string => {
  let partNumber = ""
  for (let i = 0; i < segments.length; i++) {
    const current = segments[i]
    const isLast = i === segments.length - 1
    partNumber += current.code
    if (isLast) {
      break
    }
    const next = segments[i + 1]
    const areNextToEachOther = next.position === current.position + 1

    const shouldSkipSeparator = current.skipSeparator && areNextToEachOther && current.code !== "??"

    if (!shouldSkipSeparator) {
      partNumber += "-"
    }
  }

  return partNumber
}
