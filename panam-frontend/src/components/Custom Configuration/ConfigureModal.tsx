import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Stack,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ConfigModal.css";
import { useProductConfigurator } from "./useProductConfigurator";
import { SidebarContainer, SidebarTitle, NavButton, SelectionContainer, CategoryHeader, SelectionDetailBox, CategoryTitle, StyledSelect, StyledMenuItem, SummaryContainer, SummaryHeader, ActionButton } from "./CustomModel.styles";
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
  const handleOptionChange = (event: any) => {
    const selectedCode = event.target.value;
    const category = productConfig.currentCategory;
    if(!category) return
    if (category.options) {
      const option = category.options.find((opt) => opt.code === selectedCode);
      if (option) {
        productConfig.handleSelect(category.label, option);
      }
  }
  
};

const getPartValue = (partId: string) => {
  const currentSelection = productConfig.selections[currentCategory?.label || ""];
  
  // Cast to any to allow dynamic indexing (baseSize, threadType)
  return (currentSelection as any)?.[partId] || "";
};

const handlePartChange = (partId: string, newValue: string) => {
  if (!currentCategory) return;

  // 1. Get the current values for both parts from our selection state
  const existing = productConfig.selections[currentCategory.label] || {};
  
  // 2. Update only the part the user just clicked
  const updatedParts = {
    baseSize: existing.baseSize || "",
    threadType: existing.threadType || "",
    [partId]: newValue // Overwrite with the new selection
  };

  // 3. Join them with NO separators
  const combinedCode = `${updatedParts.baseSize}${updatedParts.threadType}`;

  // 4. Save everything back to the main state
  productConfig.handleSelect(currentCategory.label, {
    code: combinedCode,
    label: combinedCode, // Keep label simple as requested
    ...updatedParts      // Spread the parts so getPartValue can find them next time
  });
};
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
        <SidebarContainer>
         <SidebarTitle>Categories</SidebarTitle>
          <Stack spacing={0}>
            {product?.configurations?.map((config, index) => (
              <NavButton
                key={index}
                onClick={() => productConfig.setActiveCategory(index)}
                fullWidth
                sx={{
                  fontWeight: productConfig.activeCategory === index ? 700 : 500,
                  color: productConfig.activeCategory === index ? "#0052cc" : "#333",
                  bgcolor: productConfig.activeCategory === index ? "#ffffff" : "transparent",
                  borderLeft: productConfig.activeCategory === index ? "4px solid #0052cc": "4px solid transparent", "&:hover": {
                    bgcolor: productConfig.activeCategory === index ? "#ffffff" : "#eee",},
                }}
              >
                {config.label}
              </NavButton>
            ))}
          </Stack>
       </SidebarContainer>

        {/* MIDDLE COLUMN: The Selection Area */}
       {/* MIDDLE COLUMN: The Selection Area */}
<SelectionContainer>
  <CategoryHeader variant="caption">SELECT SPECIFICATION</CategoryHeader>
  
 <CategoryTitle variant="h5">
    {productConfig.currentCategory?.label}
  </CategoryTitle>
 {productConfig.currentCategory?.isSplit ? (
  /* CASE 1: SPLIT DROPDOWNS */
  <Stack spacing={2}>
    {(productConfig.currentCategory.parts || []).map((part) => (
      <FormControl key={part.id} fullWidth>
        <InputLabel>{part.label}</InputLabel>
        <StyledSelect
          label={part.label}
          value={getPartValue(part.id)}
          onChange={(e) => handlePartChange(part.id, e.target.value as string)}
        >
          {part.options.map((opt) => (
            <StyledMenuItem key={opt.code} value={opt.code}>
              <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>{opt.code}</Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>{opt.label}</Typography>
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    ))}
  </Stack>
) : (
  /* CASE 2: STANDARD DROPDOWN */
  <FormControl fullWidth sx={{ mb: 3 }}>
    <InputLabel>Choose Option...</InputLabel>
    <StyledSelect
      label="Choose Option..."
      value={productConfig.selections[productConfig.currentCategory?.label || ""]?.code || ""}
      onChange={handleOptionChange}
    >
      {/* ADDED ?. HERE - This prevents the crash when switching categories */}
      {productConfig.currentCategory?.options?.map((option: any) => (
        <StyledMenuItem key={option.code} value={option.code}>
          <Typography sx={{ fontWeight: 700, color: "#0052cc" }}>{option.code}</Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#666" }}>{option.label}</Typography>
        </StyledMenuItem>
      ))}
    </StyledSelect>
  </FormControl>
)}

  {/* Selection Detail Box */}
  {currentSelection && (
    <SelectionDetailBox>
      <Typography variant="caption" sx={{ fontWeight: 700, color: "#666" }}>
        CURRENT SELECTION:
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {currentSelection.label}
      </Typography>
    </SelectionDetailBox>
  )}
</SelectionContainer>

        {/* RIGHT COLUMN: The Summary Sidebar */}
<SummaryContainer>
  <SummaryHeader>ORDERING SUMMARY</SummaryHeader>

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
 <Box 
    sx={{ 
      p: 2, 
      bgcolor: "#0052cc", 
      color: "#fff" 
      // mt: "auto" is handled by the flexGrow: 1 above
    }}
  >
    <Typography 
      variant="caption" 
      sx={{ opacity: 0.8, fontWeight: 700 }}
    >
      GENERATED PART NUMBER:
    </Typography>

    <Typography 
      sx={{ 
        fontWeight: 700,      // Slightly smaller weight
        fontSize: "1rem",    // Scaled down from 1.1rem
        mt: 0.5,
        lineHeight: 1.2,
        wordBreak: "break-all",
         // Safety for long codes
      }}
    >
      {productConfig.generatedPartNumber}
    </Typography>
  </Box>
</SummaryContainer>
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <ActionButton
          onClick={onClose}
          variant="outlined"
         sx={{ 
      color: "#0052cc", 
      borderColor: "#0052cc",
      "&:hover": { borderColor: "#0041a3" } 
    }}
        >
          ADD TO WORKSPACE
        </ActionButton>

        <ActionButton
          onClick={onClose}
          variant="contained"
          sx={{
          bgcolor: "#0052cc", 
      "&:hover": { bgcolor: "#0041a3" }
          }}
        >
          SAVE CONFIGURATION
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigModal;
