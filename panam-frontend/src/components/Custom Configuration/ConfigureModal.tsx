import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ConfigModal.css";
import { useProductConfigurator } from "./useProductConfigurator";
import {
  ActionButton,
} from "./CustomModel.styles";
import { CategorySidebar } from "./Custom_Modal_Components/CustomModalSideBar";
import { SelectionPanel } from "./Custom_Modal_Components/SelectionPanel";
import { SummaryPanel } from "./Custom_Modal_Components/SummaryPanel";
//import ConfigSidebar from "./CustomModal/ConfigSidebar";
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
  const productConfig = useProductConfigurator(product);
  const currentCategory = productConfig.currentCategory;
  const currentSelection = currentCategory
    ? productConfig.selections[currentCategory.label]
    : null;
  const handleOptionChange = (event: any) => {
    const selectedCode = event.target.value;
    const category = productConfig.currentCategory;
    if (!category) return;
    if (category.options) {
      const option = category.options.find((opt) => opt.code === selectedCode);
      if (option) {
        productConfig.handleSelect(category.label, option);
      }
    }
  };

  const getPartValue = (partId: string) => {
    const currentSelection =
      productConfig.selections[currentCategory?.label || ""];
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
      [partId]: newValue, // Overwrite with the new selection
    };

    // 3. Join them with NO separators
    const combinedCode = `${updatedParts.baseSize}${updatedParts.threadType}`;

    // 4. Save everything back to the main state
    productConfig.handleSelect(currentCategory.label, {
      code: combinedCode,
      label: combinedCode, // Keep label simple as requested
      ...updatedParts, // Spread the parts so getPartValue can find them next time
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
        {product?.configurations && (
          <CategorySidebar
            categories={product.configurations}
            activeIndex={productConfig.activeCategory}
            onSelect={productConfig.setActiveCategory}
          />
        )}

        <SelectionPanel
          currentCategory={productConfig.currentCategory}
          currentSelection={currentSelection}
          selections={productConfig.selections}
          getPartValue={getPartValue}
          onPartChange={handlePartChange}
          onOptionChange={handleOptionChange}
        />
       <SummaryPanel
          configurations={product?.configurations}
          selections={productConfig.selections}
          generatedPartNumber={productConfig.generatedPartNumber}
        />
      </DialogContent>

      <DialogActions sx={{ p: 2, gap: 1 }}>
        <ActionButton
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#0052cc",
            borderColor: "#0052cc",
            "&:hover": { borderColor: "#0041a3" },
          }}
        >
          ADD TO WORKSPACE
        </ActionButton>

        <ActionButton
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: "#0052cc",
            "&:hover": { bgcolor: "#0041a3" },
          }}
        >
          SAVE CONFIGURATION
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfigModal;
