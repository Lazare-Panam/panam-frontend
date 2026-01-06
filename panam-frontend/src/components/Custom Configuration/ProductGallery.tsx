import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardMedia, 
  CardContent, 
  Container 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { type Product, MOCK_PRODUCTS } from './Mock_Products';
import ConfigModal from './ConfigureModal';
interface ProductCardProps {
  product: Product;
  onConfigure: (product: Product) => void; 
}
const ProductCard: React.FC<ProductCardProps> = ({ product, onConfigure }) => (
  <Card 
    variant="outlined" 
    sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      borderRadius: 0,
      borderColor: 'grey.200',
      
    }}
  >
   <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.name}
        sx={{ 
          width: 250, 
          height: 150, 
          objectFit: 'contain'
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

    <Box sx={{ p: 2, pt: 0, gap:1 }}>
      <Button 
        variant="contained" 
        fullWidth
        size="small"
        onClick={() => onConfigure(product)}
       sx={{ 
      textTransform: 'uppercase', 
      borderRadius: 0,     
      fontWeight: 700,
      bgcolor: '#0052cc',  
      color: '#ffffff',   
      py: 1.3,              
      fontSize: '0.7rem',  
      letterSpacing: '1px', 
      '&:hover': {
        bgcolor: '#0041a3',
      }
    }}
      >
        CONFIGURE
      </Button>
      <Button 
    variant="outlined" 
    fullWidth
    sx={{ 
      textTransform: 'uppercase', 
      borderRadius: 0,
      fontWeight: 700,
      bgcolor: '#ffffff',
      color: '#0052cc',
      py: 1.5,
      fontSize: '0.7rem',
      letterSpacing: '1px',
      borderColor: '#0052cc', 
      mt: '8px',             
      '&:hover': {
        bgcolor: '#f0f7ff',
        borderColor: '#0041a3',
      }
    }}
  >
    Learn More
  </Button>
    </Box>
  </Card>
);

export default function ProductInventory() {
    const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const handleOpenConfig = (product: any) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={0}>
        {MOCK_PRODUCTS.map((item) => (
          <Grid  key={item.id}
            size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard 
              product={item} 
              onConfigure={handleOpenConfig} 
            />
          </Grid>
        ))}
      </Grid>
      <ConfigModal 
        open={open} 
        onClose={handleClose} 
        product={selectedProduct} 
      />
    </Container>
  );
}