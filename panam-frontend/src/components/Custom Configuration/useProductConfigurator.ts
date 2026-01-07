import { useState } from "react";
import {type ConfigOption, type  Product } from "./types/CustomConfigurationtypes";

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0);
// 1. Use the interface we just updated so it's consistent
const [selections, setSelections] = useState<Record<string, ConfigOption>>({});

// 2. Allow 'option' to accept the extra fields
const handleSelect = (categoryLabel: string, option: ConfigOption) => {
  setSelections((prev) => ({
    ...prev,
    [categoryLabel]: option,
  }));
};
  const currentCategory = product?.configurations?.[activeCategory];

  const generatedPartNumber = product?.configurations
   ? product.configurations.map((c) => selections[c.label]?.code || "??").join("-")
    : "NO-CONFIG-LOADED";

  return {
    activeCategory,
    setActiveCategory,
    selections,
    handleSelect,
    generatedPartNumber,
    currentCategory,
  };
};