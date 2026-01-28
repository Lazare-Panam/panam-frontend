import { useMemo, useState } from "react"
import { type Product, type ConfigOption, type ProductConfig } from "../types/CustomConfigurationtypes"

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selections, setSelections] = useState<Record<string, ConfigOption>>({})
  const currentCategory = product?.configurations?.[activeCategory]

  const getEffectiveSelection = (config: ProductConfig): ConfigOption | null => {
    if (!config?.label) {
      return null
    }
    if (selections[config.label]) {
      return selections[config.label]
    }
    if (config.options?.length === 1) {
      return config.options[0]
    }
    return null
  }

  const generatedPartNumber = useMemo(() => {
    if (!product?.configurations) return "LOADING..."
    const activeSegments = product.configurations
      .map((config, originalIndex) => {
        const selection = getEffectiveSelection(config)
        const code = selection?.code?.trim() || ""
        const hasValidCode = code !== "" && code !== "-"
        const isMissingRequired = !selection && config.required
        if (!hasValidCode && !isMissingRequired) return null
        return {
          code: hasValidCode ? code : "??",
          noSeperatorAfter: !!config.noSeperatorAfter,
          originalIndex,
        }
      })
      .filter((seg): seg is NonNullable<typeof seg> => seg !== null)

    if (activeSegments.length === 0) return "SELECT OPTIONS"

    return activeSegments.reduce((sku, seg, i) => {
      const isLast = i === activeSegments.length - 1
      if (isLast) return sku + seg.code
      const nextSeg = activeSegments[i + 1]
      const isAdjacent = nextSeg.originalIndex === seg.originalIndex + 1
      const shouldHug = seg.noSeperatorAfter && isAdjacent && nextSeg.code !== "??"

      return sku + seg.code + (shouldHug ? "" : "-")
    }, "")
  }, [product, selections])

  const handleOptionChange = (categoryLabel: string, selectedCode: string) => {
    const category = product?.configurations?.find(c => c.label === categoryLabel)
    if (!category?.options) return
    const option = category.options.find(opt => opt.code === selectedCode)
    if (option) {
      setSelections(prev => ({
        ...prev,
        [categoryLabel]: option,
      }))
    }
  }
  return {
    activeCategory,
    setActiveCategory,
    selections,
    generatedPartNumber,
    currentCategory,
    handleOptionChange,
    getEffectiveSelection,
  }
}
