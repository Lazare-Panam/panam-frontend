import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Divider,
  Chip,
  IconButton,
  InputBase,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useQuery } from "@tanstack/react-query"
import { getProductDetail } from "../../api/searchApi"
import { useCartStore } from "../store/useCartStore"
import { useNotificationStore } from "../store/useNotficationStore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PartNumberDetail: React.FC = () => {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  // --- Stores ---
  const addItem = useCartStore((state) => state.addItem)
  const showNotification = useNotificationStore((state) => state.showNotification)
  
  // --- Local State ---
  const [quantity, setQuantity] = useState<number>(1)

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["productDetail", partNumber],
    queryFn: () => getProductDetail(partNumber!),
    enabled: !!partNumber,
  })

  const handleAddToCart = () => {
    if (!product) return

    // 1. Add to Zustand Cart
    addItem({
      cartItemId: product.partNumber, // Using partNumber as unique ID
      id: product.partNumber, 
      name: product.name,
      image: product.imageUrl || "/placeholder.png",
      quantity: quantity,
      partNumber: product.partNumber,
      specs: product.specs,
      hasCertificates: false,
    })

    // 2. Trigger Global Notification
    showNotification({
      message: "Added to cart",
      severity: "success",
      partNumber: product.partNumber
    })
  }

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 12 }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  if (isError || !product) return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6">Product not found.</Typography>
      <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>Go Back</Button>
    </Box>
  )

  return (
    <Box sx={{ fontFamily: PRIMARY_FONT, maxWidth: 1200, mx: "auto", p: 4 }}>
      
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ color: BRAND_BLUE, mb: 3, textTransform: "none", pl: 0, fontWeight: 600 }}
      >
        Back to results
      </Button>

      <Grid container spacing={6}>
        {/* Left Column — Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              minHeight: 400,
              backgroundColor: "#fff",
            }}
          >
            <Box
              component="img"
              src={product.imageUrl || "/placeholder.png"}
              alt={product.name}
              sx={{ width: "100%", maxWidth: 350, objectFit: "contain" }}
            />
          </Box>
        </Grid>

        {/* Right Column — Content */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Chip
            label={product.categoryName}
            size="small"
            sx={{ backgroundColor: "#e8f7fd", color: BRAND_BLUE, fontWeight: 700, mb: 1.5 }}
          />

          <Typography variant="h4" fontWeight={900} sx={{ mb: 0.5 }}>
            {product.partNumber}
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, fontWeight: 400 }}>
            {product.name}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          {/* Specifications Table */}
          {Object.keys(product.specs).length > 0 && (
            <Box sx={{ mb: 5 }}>
              <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
                Product Specifications
              </Typography>
              <Box sx={{ border: "1px solid #eee", borderRadius: 0, overflow: "hidden" }}>
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      backgroundColor: idx % 2 === 0 ? "#fafafa" : "white",
                      px: 2,
                      py: 1.5,
                      borderBottom: idx === Object.entries(product.specs).length - 1 ? 0 : "1px solid #f0f0f0"
                    }}
                  >
                    <Typography variant="body2" fontWeight={700} sx={{ width: 180, color: "#444", flexShrink: 0 }}>
                      {key}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#1a1a1a" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Action Row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            
            {/* Editable Quantity Bar */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              border: "1px solid #ccc",
              height: 52,
              backgroundColor: "#fff"
            }}>
              <IconButton 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                sx={{ borderRadius: 0, height: "100%", px: 2 }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <InputBase
                value={quantity === 0 ? "" : quantity}
                onChange={(e) => {
                  const val = e.target.value === "" ? 0 : parseInt(e.target.value);
                  if (!isNaN(val)) setQuantity(val);
                }}
                onBlur={() => {
                  if (quantity < 1) setQuantity(1);
                }}
                inputProps={{ 
                  style: { textAlign: 'center', fontWeight: 900, width: 60, fontSize: "1.1rem" },
                }}
                sx={{
                  height: "100%",
                  borderLeft: "1px solid #eee",
                  borderRight: "1px solid #eee",
                }}
              />

              <IconButton 
                onClick={() => setQuantity(q => q + 1)}
                sx={{ borderRadius: 0, height: "100%", px: 2 }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              onClick={handleAddToCart}
              disabled={quantity < 1}
              sx={{
                backgroundColor: BRAND_BLUE,
                color: "white",
                borderRadius: 0,
                textTransform: "uppercase",
                fontWeight: 900,
                height: 52,
                px: 6,
                fontSize: "1rem",
                boxShadow: "none",
                "&:hover": { backgroundColor: "#009ed8", boxShadow: "none" }
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PartNumberDetail