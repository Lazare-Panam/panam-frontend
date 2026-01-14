import React, { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, CircularProgress, Typography, Box, Grid } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { ActionButton } from "./styles/CustomModel.styles"
import { useProductConfigurator } from "./hooks/useProductConfigurator"
import ConfigurationPanel from "./components/ConfigurationPanel"
import SummaryPanel from "./components/SummaryPanel"
import type { ProductConfig } from "./types/CustomConfigurationtypes"
const ConfigModal: React.FC<any> = ({ open, onClose, product, loading = false }) => {
  if (loading) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress />
            <Typography sx={{ ml: 2 }}>Loading configuration...</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    )
  }
  const productConfig = useProductConfigurator(product)
  const [showValidation, setShowValidation] = useState(false)

  const handleSaveClick = () => {
    setShowValidation(true)
    const hasErrors = product?.configurations?.some((config: ProductConfig) => config.required && !productConfig.getEffectiveSelection(config)?.code)
    if (hasErrors) {
      return
    }
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 0,
          },
        },
      }}>
      <DialogTitle sx={{ borderBottom: "1px solid #eee", fontWeight: 700, textAlign: "center" }}>
        {`Configure ${product?.title || "Product"}`}
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Grid container sx={{ height: "70vh" }}>
          <ConfigurationPanel product={product} getEffectiveSelection={productConfig.getEffectiveSelection} handleOptionChange={productConfig.handleOptionChange} showValidation={showValidation} />
          <SummaryPanel generatedPartNumber={productConfig.generatedPartNumber} />
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2, borderTop: "1px solid #eee" }}>
        <ActionButton onClick={onClose} variant="outlined">
          ADD TO WORKSPACE
        </ActionButton>
        <ActionButton onClick={handleSaveClick} variant="contained" sx={{ bgcolor: "#0052cc" }}>
          SAVE CONFIGURATION
        </ActionButton>
      </DialogActions>
    </Dialog>
  )
}

export default ConfigModal
