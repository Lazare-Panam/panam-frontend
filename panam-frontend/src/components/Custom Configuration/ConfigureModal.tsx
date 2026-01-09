import React from "react"
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  IconButton, CircularProgress, Typography, Box, Grid, 
  FormControl, Select, MenuItem, Stack 
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { type Product, type ProductConfig } from "./types/CustomConfigurationtypes"
import { ActionButton } from "./Custom_Modal_Components/CustomModel.styles"
import { useProductConfigurator } from "./useProductConfigurator"

const ConfigModal: React.FC<any> = ({ open, onClose, product, loading = false }) => {
  //const productConfig = useProductConfigurator(product)


  //refactor next week
  

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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle sx={{ borderBottom: '1px solid #eee', fontWeight: 700 }}>
        {`Configure ${product?.title || "Product"}`}
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <Grid container sx={{ height: "70vh" }}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ 
            height: "100%", 
            overflowY: "auto", 
            p: 4, 
            borderRight: '1px solid #eee' 
          }}>
            
            <Stack spacing={2}>
              
              {product?.configurations?.map((config: ProductConfig) => {
  const selection = productConfig.getEffectiveSelection(config);
  
  // A row is "locked" if there is only one choice available
  const isLocked = config.options?.length === 1;

  return (
    <Grid container key={config.label} alignItems="center" sx={{ py: 1.5, borderBottom: '1px solid #f5f5f5' }}>
      <Grid size={{ xs: 5 }}>
        <Typography sx={{ 
          fontWeight: 600, 
          fontSize: "0.9rem",
          color: isLocked ? 'text.secondary' : 'text.primary' 
        }}>
          {config.label}
          {isLocked && " (Fixed)"}
        </Typography>
      </Grid>

      <Grid size={{ xs: 7 }}>
        <FormControl fullWidth>
          <Select
            size="small"
            value={selection?.code || ""}
            onChange={(e) => productConfig.handleOptionChange(config.label, e.target.value as string)}
            displayEmpty
            // Use the logic here
            disabled={isLocked} 
            sx={{ 
              borderRadius: '4px', 
              bgcolor: isLocked ? '#fcfcfc' : '#fff',
              // Ensures the text remains readable even when disabled
              "& .Mui-disabled": {
                color: "rgba(0, 0, 0, 0.8) !important",
                WebkitTextFillColor: "rgba(0, 0, 0, 0.8) !important",
              }
            }}
          >
            <MenuItem value="" disabled>Choose option...</MenuItem>
            {config.options?.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="body2">{option.label}</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#aaa' }}>
                    {option.code}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
})}
            </Stack>
          </Grid>

          {/* SUMMARY SIDEBAR (Fixed visual reference) */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ 
            bgcolor: "#fcfcfc", 
            p: 3, 
            display: 'flex', 
            flexDirection: 'column',
            height: "100%" 
          }}>
           
            {/* THE FINAL PART NUMBER RESULT */}
            <Box sx={{ mt: 'auto', p: 2, bgcolor: "#0052cc", color: "#fff", borderRadius: 1 }}>
               <Typography variant="caption" sx={{ opacity: 0.8, fontWeight: 700 }}>
                 GENERATED PART NUMBER:
               </Typography>
               <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", mt: 0.5, letterSpacing: 1 }}>
                 {productConfig.generatedPartNumber || "---"}
               </Typography>
            </Box>
          </Grid>

        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2, borderTop: '1px solid #eee' }}>
        <ActionButton onClick={onClose} variant="outlined">ADD TO WORKSPACE</ActionButton>
        <ActionButton onClick={onClose} variant="contained" sx={{ bgcolor: "#0052cc" }}>
          SAVE CONFIGURATION
        </ActionButton>
      </DialogActions>
    </Dialog>
  )
}

export default ConfigModal