import { useState, useCallback } from "react";
import type { Product, ProductConfig, ConfigOption } from "../types/CustomConfigurationtypes";

export const useConfigurationLogic = (product: Product) => {
  const [unitSystem, setUnitSystem] = useState<string>("imperial");
  const supportsCertificates = product.capabilities?.supportsCertificates ?? false
  const getFilteredOptions = useCallback((config: ProductConfig): ConfigOption[] => {
    const options = config.options || [];
    if (!product.capabilities?.hasUnitSystem) {
      return options;
    }
    return options.filter((option) => {
      if (!option.unit) return true;
      return option.unit === unitSystem;
    });
  }, [product.capabilities?.hasUnitSystem, unitSystem]);

  const handleUnitChange = (newUnit: string | null) => {
    if (newUnit) {
      setUnitSystem(newUnit);
    }
  };

  return {
    unitSystem,
    handleUnitChange,
    getFilteredOptions,
    hasUnitSystem: !!product.capabilities?.hasUnitSystem,
    supportsCertificates: supportsCertificates,
  };
};