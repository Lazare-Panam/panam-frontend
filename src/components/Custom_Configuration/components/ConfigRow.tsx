import React, { useState, useMemo } from "react"
import { Typography, Box, FormControl, Select, MenuItem, TextField, InputAdornment, IconButton, FormHelperText } from "@mui/material"
import Grid from "@mui/material/Grid"
import SearchIcon from "@mui/icons-material/Search"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import HighlightedText from "./HighlightedText"
import type { ConfigOption, ProductConfig } from "../types/CustomConfigurationtypes"

interface ConfigRowProps {
  config: ProductConfig
  options: ConfigOption[]
  currentValue: string
  showError: boolean
  onUpdate: (label: string, code: string) => void
}

const ConfigRow: React.FC<ConfigRowProps> = ({ config, options, currentValue, showError, onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const searchedOptions = useMemo(() => {
    if (!searchTerm) return options
    const lowerTerm = searchTerm.toLowerCase()
    return options.filter(opt => opt.label.toLowerCase().includes(lowerTerm) || opt.code.toLowerCase().includes(lowerTerm))
  }, [options, searchTerm])

  const isLocked = options.length === 1

  return (
    <Grid container alignItems="center" sx={{ py: 1.5, borderBottom: "1px solid #f5f5f5" }}>
      <Grid size={{ xs: 5 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            color: isLocked ? "text.secondary" : "text.primary",
          }}>
          {config.label}
          {config.required && (
            <Box component="span" sx={{ color: "error.main", ml: 0.5 }}>
              *
            </Box>
          )}
          {isLocked && " (Fixed)"}
        </Typography>
      </Grid>

      <Grid size={{ xs: 7 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FormControl fullWidth required={config.required} error={showError} size="small">
            <Select
              value={currentValue}
              onChange={e => onUpdate(config.label, e.target.value)}
              displayEmpty
              disabled={isLocked}
              open={isOpen}
              onOpen={() => setIsOpen(true)}
              onClose={() => {
                setIsOpen(false)
                setSearchTerm("")
              }}
              sx={{ borderRadius: "4px", bgcolor: isLocked ? "#fcfcfc" : "#fff" }}
              MenuProps={{
                autoFocus: false, // Prevents jumping when typing
                PaperProps: { sx: { maxHeight: 320 } },
              }}>
              <Box sx={{ px: 1.5, pt: 1, pb: 0.5, position: "sticky", top: 0, bgcolor: "white", zIndex: 1 }} onClickCapture={e => e.stopPropagation()}>
                <TextField
                  autoFocus
                  fullWidth
                  size="small"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onKeyDown={e => e.stopPropagation()}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              <MenuItem value="" disabled>
                Choose option...
              </MenuItem>

              {searchedOptions.map(option => (
                <MenuItem key={option.code} value={option.code}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <Typography variant="body2">
                      <HighlightedText text={option.label} highlight={searchTerm} />
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: "text.disabled", ml: 2 }}>
                      <HighlightedText text={option.code} highlight={searchTerm} />
                    </Typography>
                  </Box>
                </MenuItem>
              ))}

              {searchedOptions.length === 0 && <MenuItem disabled>No results found</MenuItem>}
            </Select>
            {showError && <FormHelperText sx={{ mx: 0 }}>This field is required</FormHelperText>}
          </FormControl>

          <IconButton
            size="small"
            onClick={e => {
              e.stopPropagation()
              onUpdate(config.label, "")
            }}
            disabled={!currentValue || isLocked}
            sx={{
              color: currentValue && !isLocked ? "error.main" : "transparent",
              transition: "color 0.2s",
            }}>
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ConfigRow
