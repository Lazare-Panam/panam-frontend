import React from "react"
import { Checkbox, Box, FormControl, Grid, MenuItem, Select, Stack, Typography, FormHelperText, FormControlLabel, ToggleButtonGroup, ToggleButton } from "@mui/material"
import type { ConfigOption, Product, ProductConfig } from "../types/CustomConfigurationtypes"

interface ConfigurationPanelProps {
  product: Product
  getEffectiveSelection: (config: ProductConfig) => ConfigOption | null
  handleOptionChange: (categoryLabel: string, selectedCode: string) => void
  showValidation: boolean
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({ product, getEffectiveSelection, handleOptionChange, showValidation }) => {
  //console.log("Product in the modal", product);

  const [orderCertificates, setOrderCertificates] = React.useState(false)
  const [unitSystem, setUnitSystem] = React.useState<string>("imperial")

  const handleUnitChange = (_: React.MouseEvent<HTMLElement>, newUnit: string | null) => {
    if (newUnit !== null) {
      setUnitSystem(newUnit)
      product?.configurations?.forEach((config: ProductConfig) => {
        const hasUnitOptions = config.options?.some(opt => opt.unit)
        if (hasUnitOptions) {
          handleOptionChange(config.label, "")
        }
      })
    }
  }

  return (
    <>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{
          height: "100%",
          overflowY: "auto",
          p: 4,
          borderRight: "1px solid #eee",
        }}>
        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              mb: 2,
            }}>
            {/* Show Checkbox only if supported */}
            {product.capabilities?.supportsCertificates !== false ? (
              <FormControlLabel
                sx={{ margin: 0 }}
                control={<Checkbox checked={orderCertificates} onChange={e => setOrderCertificates(e.target.checked)} size="small" />}
                label={
                  <Typography fontSize="0.9rem" fontWeight={600}>
                    Order 3.1 material certificates
                  </Typography>
                }
              />
            ) : (
              <Box />
            )}

            {/* Show Toggle only if product has unit systems */}

            {product.capabilities?.hasUnitSystem && (
              <ToggleButtonGroup
                value={unitSystem}
                exclusive
                onChange={handleUnitChange}
                size="small"
                sx={{
                  height: "32px",
                  "& .MuiToggleButton-root.Mui-selected": {
                    bgcolor: "#01B0F0",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#0090c4",
                    },
                  },
                }}>
                <ToggleButton value="imperial" sx={{ px: 2, fontSize: "0.75rem" }}>
                  Imperial (in)
                </ToggleButton>
                <ToggleButton value="metric" sx={{ px: 2, fontSize: "0.75rem" }}>
                  Metric (mm)
                </ToggleButton>
              </ToggleButtonGroup>
            )}
          </Box>

          {product?.configurations?.map((config: ProductConfig) => {
            const selection = getEffectiveSelection(config)

            // 1. Filter the options based on the toggle state
            const filteredOptions =
              config.options?.filter((option: ConfigOption) => {
                if (!product.capabilities?.hasUnitSystem) return true

                if (!option.unit) return true // Keeps Brand, Material, etc. visible
                return option.unit === unitSystem
              }) || []

            // 2. Lock the field only if the FILTERED list has 1 item
            const isLocked = filteredOptions.length === 1

            // 3. Safety: If the current selection isn't in the filtered list, show empty
            const currentValue = filteredOptions.some(opt => opt.code === selection?.code) ? selection?.code || "" : ""

            const showError = showValidation && config.required && !selection?.code

            return (
              <Grid container key={config.label} alignItems="center" sx={{ py: 1.5, borderBottom: "1px solid #f5f5f5" }}>
                <Grid size={{ xs: 5 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: isLocked ? "text.secondary" : "text.primary",
                    }}>
                    {config.label}
                    {isLocked && " (Fixed)"}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 7 }}>
                  <FormControl fullWidth required={config.required} error={showError}>
                    <Select
                      inputProps={{ "aria-label": `Select ${config.label}` }}
                      size="small"
                      value={currentValue}
                      onChange={e => handleOptionChange(config.label, e.target.value as string)}
                      displayEmpty
                      disabled={isLocked}
                      required={config.required}
                      sx={{
                        borderRadius: "4px",
                        bgcolor: isLocked ? "#fcfcfc" : "#fff",
                        "& .Mui-disabled": {
                          color: "rgba(0, 0, 0, 0.8) !important",
                          WebkitTextFillColor: "rgba(0, 0, 0, 0.8) !important",
                        },
                      }}>
                      <MenuItem value="" disabled>
                        Choose option...
                      </MenuItem>
                      {filteredOptions.map(option => (
                        <MenuItem key={option.code} value={option.code} aria-label={option.code}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <Typography variant="body2">{option.label}</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: "#aaa", ml: 2 }}>
                              {option.code}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                    {showError && <FormHelperText>This field is required</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>
            )
          })}
        </Stack>
      </Grid>
    </>
  )
}

export default ConfigurationPanel
