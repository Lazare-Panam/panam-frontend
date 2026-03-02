import React from "react"
import { Stack } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useConfigurationLogic } from "../hooks/useConfigurationLogic"
import ConfigRow from "./ConfigRow"
import CertificateRow from "./CertificateRow"
import type { ConfigOption, Product, ProductConfig } from "../types/CustomConfigurationtypes"
import UnitToggle from "./UnitToggle"

interface ConfigurationPanelProps {
  product: Product
  getEffectiveSelection: (config: ProductConfig) => ConfigOption | null
  handleOptionChange: (categoryLabel: string, selectedCode: string) => void
  showValidation: boolean
  orderCertificates: boolean
  setOrderCertificates: (val: boolean) => void
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({ product, getEffectiveSelection, handleOptionChange, showValidation, orderCertificates, setOrderCertificates }) => {
  const { unitSystem, handleUnitChange, getFilteredOptions, hasUnitSystem, supportsCertificates } = useConfigurationLogic(product)
  return (
    <Grid size={{ xs: 12, md: 8 }} sx={{ height: "100%", overflowY: "auto", p: 4, borderRight: "1px solid #eee" }}>
      <Stack spacing={2}>
        {hasUnitSystem && <UnitToggle unitSystem={unitSystem} handleUnitChange={handleUnitChange} />}
        {product?.configurations?.map((config: ProductConfig) => {
          const selection = getEffectiveSelection(config)
          const currentValue = selection?.code || ""
          const filteredOptions = getFilteredOptions(config)
          const showError = !!(showValidation && config.required && !currentValue)
          return <ConfigRow key={config.label} config={config} options={filteredOptions} currentValue={selection?.code || ""} showError={showError} onUpdate={handleOptionChange} />
        })}
        {supportsCertificates && <CertificateRow value={orderCertificates} onChange={setOrderCertificates} />}
      </Stack>
    </Grid>
  )
}

export default ConfigurationPanel
