import { useMemo, useState } from "react"
import { type Product, type ConfigOption, type ProductConfig } from "../types/CustomConfigurationtypes"
import { getSegmentsToInclude, buildPartNumber, getEffectiveSelection } from "./partNumberGenerator"

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [selections, setSelections] = useState<Record<string, ConfigOption>>({})
  const currentCategory = product?.configurations?.[activeCategory]

  const generatedPartNumber = useMemo(() => {
    if (!product?.configurations) return "LOADING..."

    const segments = getSegmentsToInclude(product.configurations, selections)

    if (segments.length === 0) return "SELECT OPTIONS"

    return buildPartNumber(segments)
  }, [product, selections])

const handleOptionChange = (categoryLabel: string, selectedCode: string) => {
  // Empty string means clear — delete the key entirely
  if (!selectedCode) {
    setSelections(prev => {
      const next = { ...prev }
      delete next[categoryLabel]
      return next
    })
    return
  }

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
    getEffectiveSelection: (config: ProductConfig) => getEffectiveSelection(config, selections),
  }
}
