import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ConfigModal.css";
import { useProductConfigurator } from "./useProductConfigurator";
import { ActionButton } from "./Custom_Modal_Components/CustomModel.styles";
import { CategorySidebar } from "./Custom_Modal_Components/CustomModalSideBar";
import { SelectionPanel } from "./Custom_Modal_Components/SelectionPanel";
import { SummaryPanel } from "./Custom_Modal_Components/SummaryPanel";
interface ConfigModalProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
    loading?: boolean;
}

const ConfigModal: React.FC<ConfigModalProps> = ({
  open,
  onClose,
  product,
  loading=false
}) => {

  if (loading) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress />
            <Typography sx={{ ml: 2 }}>Loading product configuration...</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    );
  }
  const productConfig = useProductConfigurator(product);
  const currentCategory = productConfig.currentCategory;
  const currentSelection = currentCategory
    ? productConfig.selections[currentCategory.label]
    : null;

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
        {`Configure ${product?.title || "Product"}`}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0, display: "flex", height: "60vh" }}>
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
          getSplitOptionValue={productConfig.getSplitOptionValue}
          onSplitOptionChange={productConfig.handleSplitOptionChange}
          onOptionChange={productConfig.handleOptionChange}
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
