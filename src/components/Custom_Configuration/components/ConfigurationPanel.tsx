import React from "react"
import { Box, FormControl, Grid, MenuItem, Select, Stack, Typography, FormHelperText } from "@mui/material"
import type { ConfigOption, Product, ProductConfig } from "../types/CustomConfigurationtypes"

interface ConfigurationPanelProps {
  product: Product
  getEffectiveSelection: (config: ProductConfig) => ConfigOption | null
  handleOptionChange: (categoryLabel: string, selectedCode: string) => void
  showValidation: boolean
}

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({ product, getEffectiveSelection, handleOptionChange, showValidation }) => {
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
          {product?.configurations?.map((config: ProductConfig) => {
            const selection = getEffectiveSelection(config)
            const isLocked = config.options?.length === 1
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
                      size="small"
                      value={selection?.code || ""}
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
                      {config.options?.map(option => (
                        <MenuItem key={option.code} value={option.code}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <Typography variant="body2">{option.label}</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: "#aaa" }}>
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
