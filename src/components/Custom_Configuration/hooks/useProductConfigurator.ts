import { useState } from "react"
import { type Product, type ConfigOption } from "../types/CustomConfigurationtypes"

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selections, setSelections] = useState<Record<string, ConfigOption>>({})
  const currentCategory = product?.configurations?.[activeCategory]

  const getEffectiveSelection = (config: any): ConfigOption | null => {
    if (!config || !config.label) {
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
    ? product.configurations
        .map(config => {
          const selection = getEffectiveSelection(config)
          return selection ? selection.code : "??"
        })
        .join("-")
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
