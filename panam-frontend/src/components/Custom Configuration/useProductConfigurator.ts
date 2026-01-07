import { useState } from "react";
import {type  Product } from "./types/CustomConfigurationtypes";

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selections, setSelections] = useState<Record<string, { code: string; label: string }>>({});

  const handleSelect = (categoryLabel: string, option: { code: string; label: string }) => {
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