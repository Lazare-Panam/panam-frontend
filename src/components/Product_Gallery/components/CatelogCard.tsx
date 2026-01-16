import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { type Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import "../styles/ProductCard.css"

interface ProductCardProps {
  product: Product
  type: string
}

const CatelogCard: React.FC<ProductCardProps> = ({ product, type }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/products/${type}`)
  }

  return (
    <Card
      variant="outlined"
      className="product-card"
      sx={{
        borderRadius: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <CardMedia component="img" image={product.imageUrl} alt={product.title} sx={{ width: "100%", maxWidth: 250, height: 150, objectFit: "contain" }} />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle2" fontWeight={700} gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: "3em" }}>
          {product.description}
        </Typography>
        <Typography variant="caption" fontWeight={600} color="primary.main">
          {product.price}
        </Typography>

        <Box sx={{ mt: "auto", pt: 2 }}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} gutterBottom>
              Features & Benefits
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Working Pressure: Up to 15,000 psi (1034 bar)
              <br />
              • Connection Sizes: 1/4", 3/8", 1/2", 9/16"
              <br />
              • Connection Type: Male & Female NPT, BSPT, BSPP, Metric, and PANAM Tube Fittings
              <br />
              • Pressure Setting: Adjustable to precise relief pressure levels
              <br />• NACE Compliance: MR0175 & MR0103 for Sour Gas Service
            </Typography>
          </Box>

          {/* APPLICATIONS */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: "0.8rem", lineHeight: 1.4 }} gutterBottom>
              Applications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Cryogenic Hydrogen Applications
              <br />
              • Hydrogen Storage & Transportation
              <br />
              • Hydrogen-Powered Marine & Shipping
              <br />
              • Semiconductor Manufacturing & High-Purity Gas Systems
              <br />• Gas Distribution Networks
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <Box className="card-actions-group">
        <Button variant="contained" fullWidth size="small" onClick={handleClick} className="btn-configure">
          SHOW MORE PRODUCTS
        </Button>
        <Button variant="outlined" fullWidth className="btn-learn-more">
          Learn More
        </Button>
      </Box>
    </Card>
  )
}

export default CatelogCard
