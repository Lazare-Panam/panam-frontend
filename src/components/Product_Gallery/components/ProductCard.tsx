import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material"
import { type Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import "../styles/ProductCard.css"
interface ProductCardProps {
  product: Product
  onConfigure: (product: Product) => void
}
const ProductCard: React.FC<ProductCardProps> = ({ product, onConfigure }) => (
  <Card
    variant="outlined"
    className="product-card"
    sx={{
      borderRadius: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <CardMedia component="img" image={product.imageUrl} alt={product.title} sx={{ width: "100%", maxWidth: 200, height: 120, objectFit: "contain" }} />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 2, display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle2" fontWeight={700} gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: "2.5em", fontSize: "0.8rem" }}>
        {product.description}
      </Typography>
      <Typography variant="caption" fontWeight={600} color="primary.main" sx={{ fontSize: "0.7rem" }}>
        {product.price}
      </Typography>

      <Box sx={{ mt: "auto", pt: 2 }}>
        <Box>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ fontSize: "1.0rem" }}>
            Characteristics
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem", lineHeight: 1.4 }}>
            • Standard body material – Stainless Steel (SS 316)
            <br />
            • Maximum working pressure 3,000 psi (207 bar) with modified PTFE seat
            <br />
            • Maximum working pressure 6,000 psi (414 bar) with PCTFE, PEEK, DELRIN seat
            <br />
            • Working temperature from -40ºC to +204ºC with modified PTFE seat
            <br />
            • Working temperature from -54ºC to +145ºC with PCTFE seat
            <br />
            • Working temperature from -40ºC to 232ºC with PEEK seat
            <br />
            • CV from 0.09 to 1.8
            <br />
            • End connections from 1/16" to 3/4" (3 mm to 18 mm)
            <br />
            • Variety of end connections includes female thread, male thread, male/female and PANAM® connections
            <br />• Different types of threads: NPT tapered, ISO (BSPT) tapered, ISO (BSPP) parallel, metric thread
          </Typography>
        </Box>
      </Box>
    </CardContent>

    <Box className="card-actions-group">
      <Button variant="contained" fullWidth size="small" onClick={() => onConfigure(product)} className="btn-configure">
        CONFIGURE
      </Button>

      <Button variant="outlined" fullWidth className="btn-learn-more">
        Learn More
      </Button>
    </Box>
  </Card>
)

export default ProductCard
