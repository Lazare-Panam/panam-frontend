import { useState } from "react"
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

  const generatedPartNumber = product?.configurations
    ? (() => {
        const segments: string[] = []
        product.configurations.forEach((config, index) => {
          const selection = getEffectiveSelection(config)
          const code = selection?.code
          const isLast = index === product.configurations!.length - 1
          const hasValidCode = code && code.trim() && code.trim() !== "-"
          const needsPlaceholder = !selection && config.required
          if (!hasValidCode && !needsPlaceholder) return
          segments.push(hasValidCode ? code : "??")
          if (!config.noSeperatorAfter && !isLast) {
            segments.push("-")
          }
        })

        return segments.join("").replace(/-$/, "")
      })()
    : "LOADING..."

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
