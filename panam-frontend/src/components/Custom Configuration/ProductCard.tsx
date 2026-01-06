import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { type Product } from "./types/CustomConfigurationtypes";
import "./styles/ProductCard.css";
interface ProductCardProps {
  product: Product;
  onConfigure: (product: Product) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, onConfigure }) => (
  <Card variant="outlined" className="product-card">
    <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{width: '100%',
          maxWidth: 250,
          height: 150,
          objectFit: "contain",
        }}
      />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="subtitle2" fontWeight={700} gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        {product.description}
      </Typography>
      <Typography variant="caption" fontWeight={600} color="primary.main">
        {product.price}
      </Typography>
    </CardContent>

    <Box className="card-actions-group">
      <Button 
        variant="contained" 
        fullWidth
        size="small"
        onClick={() => onConfigure(product)}
        className="btn-configure"
      >
        CONFIGURE
      </Button>

      <Button variant="outlined" fullWidth className="btn-learn-more">
    Learn More
  </Button>
    </Box>
  </Card>
);

export default ProductCard;
