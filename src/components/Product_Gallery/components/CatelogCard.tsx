import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent, List, ListItem, ListItemText } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { type Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import "../styles/ProductCard.css"

interface ProductCardProps {
  product: Product
  type: string
}

const CatelogCard: React.FC<ProductCardProps> = ({ product, type }) => {
  const navigate = useNavigate()
   const { id } = useParams<{ id: string }>() 
  const handleClick = () => {
    navigate(`/products/${id}/${type}`)
  }




const handleLearnMore = () => {
  if (product.detailId) {
    navigate(`/${product.detailId}`);
  } else {
    console.warn("No detailId found for this product");
  }
};

  const formatFeature = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <Box component="span" key={i} sx={{ fontWeight: 700, color: "text.primary" }}>
          {part.slice(2, -2)}
        </Box>
      ) : (
        part
      )
    )
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
        <CardMedia component="img" image={product.imageUrl} alt={product.title} sx={{ width: "100%", maxWidth: 250, height: 250, objectFit: "contain" }} />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2, display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle2" fontWeight={700} gutterBottom  sx={{ color: '#01B0F0' }}>
          {product.title}
        </Typography>
        <List dense disablePadding sx={{ color: "text.secondary" }}>
          {product.features?.map((feature, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0 }}>
              <ListItemText
                primary={formatFeature(feature)}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: "0.8rem",
                    },
                    variant: "body2",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <Box className="card-actions-group">
        <Button variant="contained" fullWidth size="small" onClick={handleClick} className="btn-configure">
          SHOW MORE PRODUCTS
        </Button>
        <Button variant="outlined" fullWidth className="btn-learn-more" onClick={handleLearnMore}>
          Learn More
        </Button>
      </Box>
    </Card>
  )
}

export default CatelogCard
