import { useState } from "react";
import {type ConfigOption, type  Product } from "./types/CustomConfigurationtypes";

export const useProductConfigurator = (product: Product | null) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selections, setSelections] = useState<Record<string, ConfigOption>>({});


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

     const handleOptionChange = (selectedCode: string) => {
    if (!currentCategory?.options) return;

    const option = currentCategory.options.find(
      (opt) => opt.code === selectedCode
    );

    if (option) {
      handleSelect(currentCategory.label, option);
    }
  };
  const getSplitOptionValue = (partId: string): string => {
    const selection = selections[currentCategory?.label || ""];
    return (selection as any)?.[partId] || "";
  };

  const handleSplitOptionChange = (partId: string, newValue: string) => {
    if (!currentCategory) return;

    const existing = selections[currentCategory.label] || ({} as any);

    const updatedParts = {
      baseSize: existing.baseSize || "",
      threadType: existing.threadType || "",
      [partId]: newValue,
    };

    const combinedCode = `${updatedParts.baseSize}${updatedParts.threadType}`;

    handleSelect(currentCategory.label, {
      code: combinedCode,
      label: combinedCode,
      ...updatedParts,
    });
  };


  return {
    activeCategory,
    setActiveCategory,
    selections,
    handleSelect,
    generatedPartNumber,
    currentCategory,
    handleOptionChange,
    getSplitOptionValue,
    handleSplitOptionChange
  };
};