import React, { useState, useEffect } from "react";
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
import ShimmerUI from "./ShimmerUI";
interface ConfigModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  open,
  onClose,
  product,
}) => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [selections, setSelections] = useState<Record<string, { code: string; label: string }>>({});
  const currentCategory = product?.configurations?.[activeCategory];
  const currentSelection = currentCategory ? selections[currentCategory.label] : null;
const handleSelect = (categoryLabel: string, option: { code: string; label: string }) => {
  setSelections((prev) => ({
    ...prev,
    [categoryLabel]: option,
  }));
};

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open, product]);

  return (
    <Dialog
  open={open}
  onClose={onClose}
  fullWidth
  maxWidth="md" 
  PaperProps={{
    sx: {
      borderRadius: 0, 
    }
  }}
>
  <DialogTitle sx={{ m: 0, p: 2 }}>
    {`Configure ${product?.name || "Product"}`}
    <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <DialogContent dividers sx={{ p: 0, display: "flex", height: "60vh" }}>
    
    {/* LEFT COLUMN: The Navigation Sidebar */}
    <Box sx={{ width: 220, bgcolor: "#f5f5f5", borderRight: "1px solid #ddd" }}>
      <Typography sx={{ p: 2, fontWeight: 'bold' }}> Categories</Typography>
    <Stack spacing={0}>
      
    {product?.configurations?.map((config, index) => (
      <Button
        key={index}
        onClick={() => setActiveCategory(index)}
        fullWidth
        sx={{
          justifyContent: "flex-start",
          borderRadius: 0,
          py: 2,
          px: 2,
          textAlign: "left",
          fontSize: "0.85rem",
          fontWeight: activeCategory === index ? 700 : 500,
          color: activeCategory === index ? "#0052cc" : "#333",
          bgcolor: activeCategory === index ? "#ffffff" : "transparent",
          borderLeft: activeCategory === index ? "4px solid #0052cc" : "4px solid transparent",
          "&:hover": {
            bgcolor: activeCategory === index ? "#ffffff" : "#eee",
          }
        }}
      >
        {config.label}
      </Button>
    ))}
  </Stack>
    </Box>

    {/* MIDDLE COLUMN: The Selection Area */}
   <Box sx={{ flex: 1, bgcolor: "#ffffff", p: 4 }}>
  <Typography variant="caption" sx={{ fontWeight: 800, color: "#0052cc", letterSpacing: 1.5 }}>
    SELECT SPECIFICATION
  </Typography>
  <Typography variant="h5" sx={{ mb: 4, fontWeight: 900, color: "#333", textTransform: 'uppercase' }}>
    {product?.configurations?.[activeCategory]?.label}
  </Typography>

  <FormControl fullWidth sx={{ mb: 3 }}>
    <InputLabel id="config-dropdown-label" sx={{ borderRadius: 0 }}>
      Choose Option...
    </InputLabel>
    <Select
      labelId="config-dropdown-label"
      label="Choose Option..."
      // Controlled value based on our selections state
      value={selections[product?.configurations?.[activeCategory]?.label || ""]?.code || ""}
      onChange={(e) => {
        const currentConfig = product?.configurations?.[activeCategory];
  
  if (currentConfig) {
    // 2. Find the selected option safely
    const selectedOption = currentConfig.options.find(
      (opt) => opt.code === e.target.value
    );

    // 3. Only update if the option actually exists
    if (selectedOption) {
      handleSelect(currentConfig.label, selectedOption);
    }
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
      {product?.configurations?.[activeCategory]?.options.map((option: any) => (
        <MenuItem 
          key={option.code} 
          value={option.code}
          sx={{ 
            py: 1.5, 
            display: 'flex', 
            justifyContent: 'space-between',
            borderBottom: '1px solid #f0f0f0' 
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>
            {option.code}
          </Typography>
          <Typography sx={{ fontSize: '0.85rem', color: "#666" }}>
            {option.label}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  {/* Selection Detail Box */}
 {currentSelection && (
  <Box sx={{ p: 2, bgcolor: "#f9f9f9", borderLeft: "4px solid #0052cc" }}>
    <Typography variant="caption" sx={{ fontWeight: 700, color: "#666" }}>
      CURRENT SELECTION:
    </Typography>
    <Typography variant="body1" sx={{ fontWeight: 600 }}>
      {currentSelection.label}
    </Typography>
  </Box>
)}
</Box>

   {/* RIGHT COLUMN: The Summary Sidebar */}
<Box sx={{ width: 280, bgcolor: "#f0f7ff", borderLeft: "1px solid #ddd", p: 2, display: 'flex', flexDirection: 'column' }}>
  <Typography sx={{ mb: 2, fontSize: '0.7rem', fontWeight: 800, color: '#0052cc', letterSpacing: 1.5 }}>
    ORDERING SUMMARY
  </Typography>

 <Stack spacing={2} sx={{ flexGrow: 1 }}>
  {product?.configurations && product.configurations.length > 0 ? (
    // IF configurations exist, show the list
    product.configurations.map((config) => {
      const selection = selections[config.label];
      return (
        <Box key={config.label} sx={{ borderBottom: "1px solid #d0e0f5", pb: 1 }}>
          <Typography variant="caption" sx={{ color: "#666", fontWeight: 600 }}>
            {config.label}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
            <span>{selection?.label || "—"}</span>
            {selection && (
              <Box component="span" sx={{ color: "#0052cc" }}>
                {selection.code}
              </Box>
            )}
          </Typography>
        </Box>
      );
    })
  ) : (
    // ELSE show this message
    <Typography variant="body2" sx={{ color: "#999", fontStyle: "italic", textAlign: 'center', mt: 4 }}>
      No configurations available
    </Typography>
  )}
</Stack>

  {/* PART NUMBER BOX */}
  <Box sx={{ mt: 'auto', p: 2, bgcolor: "#0052cc", color: "#fff" }}>
  <Typography variant="caption" sx={{ opacity: 0.8, fontWeight: 700 }}>
    GENERATED PART NUMBER:
  </Typography>
  
  <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1.1rem', mt: 0.5, letterSpacing: 0.5 }}>
    {product?.configurations && product.configurations.length > 0 
      ? product.configurations.map((config) => selections[config.label]?.code || "??").join("-")
      : "NO-CONFIG-LOADED"
    }
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
