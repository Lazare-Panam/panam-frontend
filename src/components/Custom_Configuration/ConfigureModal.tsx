import React, { useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, CircularProgress, Grid, Backdrop, Snackbar, Alert, Typography, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { ActionButton } from "./styles/CustomModel.styles"
import { useProductConfigurator } from "./hooks/useProductConfigurator"
import ConfigurationPanel from "./components/ConfigurationPanel"
import SummaryPanel from "./components/SummaryPanel"
import type { ProductConfig } from "./types/CustomConfigurationtypes"
import { useCartStore } from "../store/useCartStore"

const ConfigModal: React.FC<any> = ({ open, onClose, product }) => {
  const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
  const BRAND_BLUE = "#01B0F0"
  const [showValidation, setShowValidation] = useState(false)
  const [notif, setNotif] = useState({ open: false, partNumber: "" })
  const productConfig = useProductConfigurator(product)
  const addItem = useCartStore(state => state.addItem)
  if (open && !product) {
    return (
      <Backdrop sx={{ color: "#fff" }} open={open} onClick={onClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  console.log("Product in parent", product)

  const handleCloseNotif = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return
    setNotif({ ...notif, open: false })
  }
  const handleSaveClick = () => {
    setShowValidation(true)
    const hasErrors = product?.configurations?.some((config: ProductConfig) => config.required && !productConfig.getEffectiveSelection(config)?.code)
    if (hasErrors) {
      return
    }
    const selectedSpecs: Record<string, string> = {}
    product?.configurations?.forEach((config: ProductConfig) => {
      const selection = productConfig.getEffectiveSelection(config)
      if (selection) {
        selectedSpecs[config.label] = selection.label
      }
    })

    // 3. Create the Cart Item
    // We use the generatedPartNumber + productId to ensure uniqueness
    addItem({
      cartItemId: `${product.id}-${productConfig.generatedPartNumber}`,
      id: product.id,
      name: product.title,
      image: product.imageUrl || "", // Ensure your product object has this
      quantity: 1,
      partNumber: productConfig.generatedPartNumber,
      specs: selectedSpecs,
    })
    setNotif({ open: true, partNumber: productConfig.generatedPartNumber })

    // 3. Close the modal after a brief delay so they see the success
    setTimeout(() => {
      onClose()
      // We don't reset notif.open here because the Snackbar
      // will handle its own autoHideDuration
    }, 1200)
  }
  if (!open) return null

  return (
    <>
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
          <ActionButton onClick={handleSaveClick} variant="contained" sx={{ bgcolor: "#01B0F0" }}>
            SAVE CONFIGURATION
          </ActionButton>
        </DialogActions>
      </Dialog>
      <Snackbar open={notif.open} autoHideDuration={4000} onClose={handleCloseNotif} anchorOrigin={{ vertical: "top", horizontal: "center" }} sx={{ mt: 5 }}>
        <Alert
          onClose={handleCloseNotif}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: BRAND_BLUE,
            color: "#fff",
            fontWeight: 800,
            fontFamily: PRIMARY_FONT,
            borderRadius: 0,
            fontSize: "1.1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            px: 4,
            py: 2,
            "& .MuiAlert-icon": { fontSize: "2rem" },
          }}>
          <Box>
            <Typography variant="body1" fontWeight={900}>
              ADDED TO QUOTE LIST
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9, fontFamily: "monospace" }}>
              {notif.partNumber}
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </>
  )
}

export default ConfigModal
