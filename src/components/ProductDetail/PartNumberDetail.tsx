// pages/ProductDetailPage.tsx
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  Box, Typography, CircularProgress, Button,
  Divider, Chip
} from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useQuery } from "@tanstack/react-query"
import { getProductDetail } from "../../api/searchApi"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PartNumberDetail: React.FC = () => {
  const { partNumber } = useParams<{ partNumber: string }>()
  const navigate = useNavigate()

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["productDetail", partNumber],
    queryFn: () => getProductDetail(partNumber!),
    enabled: !!partNumber,
  })

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

      {/* Back */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ color: BRAND_BLUE, mb: 3, textTransform: "none", pl: 0 }}
      >
        Back to results
      </Button>

      <Grid container spacing={6}>

        {/* Left — image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: "1px solid #eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              minHeight: 380,
            }}
          >
            <Box
              component="img"
              src={product.imageUrl || "/placeholder.png"}
              alt={product.name}
              sx={{ width: "100%", maxWidth: 320, objectFit: "contain" }}
            />
          </Box>
        </Grid>

        {/* Right — details */}
        <Grid size={{ xs: 12, md: 7 }}>

          <Chip
            label={product.categoryName}
            size="small"
            sx={{ backgroundColor: "#e8f7fd", color: BRAND_BLUE, fontWeight: 700, mb: 1.5 }}
          />

          <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
            {product.partNumber}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {product.name}
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          {/* Specs table */}
          {Object.keys(product.specs).length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1.5 }}>
                Specifications
              </Typography>
              <Box
                sx={{
                  border: "1px solid #eee",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      backgroundColor: idx % 2 === 0 ? "#fafafa" : "white",
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography variant="caption" fontWeight={600} sx={{ width: 160, color: "#555", flexShrink: 0 }}>
                      {key}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#1a1a1a" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          {/* Actions */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/enquiry")}
              sx={{
                backgroundColor: BRAND_BLUE,
                borderRadius: 0,
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                "&:hover": { backgroundColor: "#0099d6" }
              }}
            >
              Request a Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: BRAND_BLUE,
                color: BRAND_BLUE,
                borderRadius: 0,
                textTransform: "none",
                fontWeight: 700,
                px: 4,
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