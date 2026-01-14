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

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="subtitle2" fontWeight={700} gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {product.description}
        </Typography>
        <Typography variant="caption" fontWeight={600} color="primary.main">
          {product.price}
        </Typography>
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
