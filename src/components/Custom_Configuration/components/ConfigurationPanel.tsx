import React from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  FormHelperText,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import type { ConfigOption, Product, ProductConfig } from "../types/CustomConfigurationtypes";

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} style={{ backgroundColor: "#FFF176", borderRadius: "2px", fontWeight: 700 }}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

interface ConfigurationPanelProps {
  product: Product;
  getEffectiveSelection: (config: ProductConfig) => ConfigOption | null;
  handleOptionChange: (categoryLabel: string, selectedCode: string) => void;
  showValidation: boolean;
  orderCertificates: boolean;
  setOrderCertificates: (val: boolean) => void;
}

// ... (Keep your imports and HighlightedText component exactly the same)

const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  product,
  getEffectiveSelection,
  handleOptionChange,
  showValidation,
  orderCertificates,
  setOrderCertificates,
}) => {
  const [unitSystem, setUnitSystem] = React.useState<string>("imperial");
  const [searchTerms, setSearchTerms] = React.useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  // Helper to handle searches for the cert dropdown
  const handleSearchChange = (configLabel: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [configLabel]: value }));
  };

  return (
    <Grid
      size={{ xs: 12, md: 8 }}
      sx={{ height: "100%", overflowY: "auto", p: 4, borderRight: "1px solid #eee" }}
    >
      <Stack spacing={2}>
        {/* Unit Toggle Section */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: 2 }}>
          {product.capabilities?.hasUnitSystem && (
            <ToggleButtonGroup
              value={unitSystem}
              exclusive
              onChange={(_, val) => val && setUnitSystem(val)}
              size="small"
              sx={{ height: "32px" }}
            >
              <ToggleButton value="imperial">Imperial (in)</ToggleButton>
              <ToggleButton value="metric">Metric (mm)</ToggleButton>
            </ToggleButtonGroup>
          )}
        </Box>

        {/* --- 1. THE CERTIFICATES AS A MIRRORED DROPDOWN --- */}
        {(product.capabilities?.supportsCertificates ?? true) && (
          <Grid container alignItems="center" sx={{ py: 1.5, borderBottom: "1px solid #f5f5f5" }}>
            <Grid size={{ xs: 5 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#01B0F0" }}>
                Certificates
              </Typography>
            </Grid>
            <Grid size={{ xs: 7 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <FormControl fullWidth size="small">
                  <Select
                    value={orderCertificates ? "YES" : "NO"}
                    onChange={(e) => setOrderCertificates(e.target.value === "YES")}
                    displayEmpty
                    sx={{ borderRadius: "4px", bgcolor: "#fff" }}
                  >
                    <MenuItem value="NO">
                      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Typography variant="body2">No Certificates Required</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: "#aaa", ml: 2 }}>NONE</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value="YES">
                      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Typography variant="body2">Include 3.1 Material Certificates</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: "#aaa", ml: 2 }}>3.1-CERT</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
                {/* Visual Spacer to match the "Clear" button alignment of other rows */}
                <IconButton size="small" sx={{ visibility: "hidden" }}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        )}

        {/* --- 2. EXISTING CONFIGURATIONS --- */}
        {product?.configurations?.map((config: ProductConfig) => {
          const selection = getEffectiveSelection(config);
          const searchTerm = searchTerms[config.label] ?? "";

          const filteredOptions = config.options?.filter((option: ConfigOption) => {
            if (!product.capabilities?.hasUnitSystem || !option.unit) return true;
            return option.unit === unitSystem;
          }) || [];

          const searchedOptions = filteredOptions.filter(
            (opt) =>
              opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
              opt.code.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const isLocked = filteredOptions.length === 1;
          const currentValue = selection?.code || "";
          const showError = showValidation && config.required && !currentValue;

          return (
            <Grid container key={config.label} alignItems="center" sx={{ py: 1.5, borderBottom: "1px solid #f5f5f5" }}>
              <Grid size={{ xs: 5 }}>
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: isLocked ? "text.secondary" : "text.primary" }}>
                  {config.label}
                  {config.required && <Box component="span" sx={{ color: "error.main", ml: 0.5 }}>*</Box>}
                  {isLocked && " (Fixed)"}
                </Typography>
              </Grid>

              <Grid size={{ xs: 7 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <FormControl fullWidth required={config.required} error={showError}>
                    <Select
                      size="small"
                      value={currentValue}
                      onChange={(e) => handleOptionChange(config.label, e.target.value)}
                      displayEmpty
                      disabled={isLocked}
                      open={openDropdown === config.label}
                      onOpen={() => setOpenDropdown(config.label)}
                      onClose={() => {
                        setOpenDropdown(null);
                        setSearchTerms((prev) => ({ ...prev, [config.label]: "" }));
                      }}
                      sx={{ borderRadius: "4px", bgcolor: isLocked ? "#fcfcfc" : "#fff" }}
                      MenuProps={{ PaperProps: { sx: { maxHeight: 320 } } }}
                    >
                      <Box sx={{ px: 1.5, pt: 1, pb: 0.5, position: "sticky", top: 0, bgcolor: "white", zIndex: 1 }} onClickCapture={(e) => e.stopPropagation()}>
                        <TextField
                          autoFocus
                          fullWidth
                          size="small"
                          placeholder="Search..."
                          value={searchTerm}
                          onChange={(e) => handleSearchChange(config.label, e.target.value)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                      <MenuItem value="" disabled>Choose option...</MenuItem>
                      {searchedOptions.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <Typography variant="body2">
                              <HighlightedText text={option.label} highlight={searchTerm} />
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: "#aaa", ml: 2 }}>
                              <HighlightedText text={option.code} highlight={searchTerm} />
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                    {showError && <FormHelperText>This field is required</FormHelperText>}
                  </FormControl>

                  <IconButton
                    size="small"
                    onClick={(e) => { e.stopPropagation(); handleOptionChange(config.label, ""); }}
                    disabled={!currentValue || isLocked}
                    sx={{ color: currentValue && !isLocked ? "error.main" : "transparent" }}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Grid>
  );
};

export default ConfigurationPanel;