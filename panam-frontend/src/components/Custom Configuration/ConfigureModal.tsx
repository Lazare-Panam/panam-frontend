import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ConfigModal.css";
import { useProductConfigurator } from "./useProductConfigurator";
//import ConfigSidebar from "./CustomModal/ConfigSidebar";
interface ConfigModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const ConfigModal: React.FC<ConfigModalProps> = ({open, onClose, product}) => {
  const productConfig = useProductConfigurator(product);
  const currentCategory = productConfig.currentCategory;
  const currentSelection = currentCategory? productConfig.selections[currentCategory.label] : null;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 0,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {`Configure ${product?.name || "Product"}`}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0, display: "flex", height: "60vh" }}>
        {/* LEFT COLUMN: The Navigation Sidebar */}
        <Box sx={{ width: 220, bgcolor: "#f5f5f5", borderRight: "1px solid #ddd" }}>
          <Typography sx={{ p: 2, fontWeight: "bold" }}> Categories</Typography>
          <Stack spacing={0}>
            {product?.configurations?.map((config, index) => (
              <Button
                key={index}
                onClick={() => productConfig.setActiveCategory(index)}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  borderRadius: 0,
                  py: 2,
                  px: 2,
                  textAlign: "left",
                  fontSize: "0.85rem",
                  fontWeight: productConfig.activeCategory === index ? 700 : 500,
                  color: productConfig.activeCategory === index ? "#0052cc" : "#333",
                  bgcolor: productConfig.activeCategory === index ? "#ffffff" : "transparent",
                  borderLeft:
                    productConfig.activeCategory === index
                      ? "4px solid #0052cc"
                      : "4px solid transparent",
                  "&:hover": {
                    bgcolor: productConfig.activeCategory === index ? "#ffffff" : "#eee",
                  },
                }}
              >
                {config.label}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* MIDDLE COLUMN: The Selection Area */}
        <Box sx={{ flex: 1, bgcolor: "#ffffff", p: 4 }}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 800, color: "#0052cc", letterSpacing: 1.5 }}
          >
            SELECT SPECIFICATION
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 900,
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            {productConfig.currentCategory?.label}
          </Typography>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="config-dropdown-label" sx={{ borderRadius: 0 }}>
              Choose Option...
            </InputLabel>
            <Select
                labelId="config-dropdown-label"
                label="Choose Option..."
                value={productConfig.selections[productConfig.currentCategory?.label || ""]?.code || ""}
                onChange={(e) => {
          const option = productConfig.currentCategory?.options.find(
            (opt) => opt.code === e.target.value
          );
          if (option && productConfig.currentCategory) {
            // Use the hook's handler to save the choice
            productConfig.handleSelect(productConfig.currentCategory.label, option);
          }
        }}
              sx={{
                borderRadius: 0, // Sharp edges
                ".MuiOutlinedInput-notchedOutline": {
                  borderWidth: "2px",
                  borderColor: "#ddd",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#0052cc",
                },
              }}
            >
              {productConfig.currentCategory?.options.map(
                (option: any) => (
                  <MenuItem
                    key={option.code}
                    value={option.code}
                    sx={{
                      py: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>
                      {option.code}
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>
                      {option.label}
                    </Typography>
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>

          {/* Selection Detail Box */}
          {currentSelection && (
            <Box
              sx={{ p: 2, bgcolor: "#f9f9f9", borderLeft: "4px solid #0052cc" }}
            >
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: "#666" }}
              >
                CURRENT SELECTION:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {currentSelection.label}
              </Typography>
            </Box>
          )}
        </Box>

        {/* RIGHT COLUMN: The Summary Sidebar */}
       {/* RIGHT COLUMN: The Summary Sidebar */}
<Box
  sx={{
    width: 280,
    bgcolor: "#f0f7ff",
    borderLeft: "1px solid #ddd",
    p: 2,
    display: "flex",
    flexDirection: "column",
  }}
>
  <Typography sx={{ mb: 2, fontSize: "0.7rem", fontWeight: 800, color: "#0052cc", letterSpacing: 1.5 }}>
    ORDERING SUMMARY
  </Typography>

  <Stack spacing={2} sx={{ flexGrow: 1 }}>
    {product?.configurations?.map((config) => {
      // ✅ USE THE HOOK HERE
      const selection = productConfig.selections[config.label];
      
      return (
        <Box key={config.label} sx={{ borderBottom: "1px solid #d0e0f5", pb: 1 }}>
          <Typography variant="caption" sx={{ color: "#666", fontWeight: 600 }}>
            {config.label}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
            <span>{selection?.label || "—"}</span>
            {selection && (
              <Box component="span" sx={{ color: "#0052cc" }}>
                {selection.code}
              </Box>
            )}
          </Typography>
        </Box>
      );
    })}
  </Stack>

  {/* PART NUMBER BOX */}
  <Box sx={{ mt: "auto", p: 2, bgcolor: "#0052cc", color: "#fff" }}>
    <Typography variant="caption" sx={{ opacity: 0.8, fontWeight: 700 }}>
      GENERATED PART NUMBER:
    </Typography>

    <Typography variant="h6" sx={{ fontWeight: 900, fontSize: "1.1rem", mt: 0.5 }}>
      {/* ✅ USE THE HOOK HERE */}
      {productConfig.generatedPartNumber}
    </Typography>
  </Box>
</Box>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 0,
            borderColor: "#0052cc",
            color: "#0052cc",
            paddingY: "10.4px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: "#0041a3",
              bgcolor: "rgba(0, 82, 204, 0.04)",
            },
          }}
        >
          ADD TO WORKSPACE
        </Button>

        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            borderRadius: 0,
            bgcolor: "#0052cc", // Your hex color
            color: "#ffffff",
            paddingY: "10.4px", // Your padding
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#0041a3", // Your hover hex color
              boxShadow: "none",
            },
          }}
        >
          SAVE CONFIGURATION
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigModal;
