
import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardMedia, 
  CardContent, 
} from '@mui/material';
import { type Product } from './types/CustomConfigurationtypes';

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

export default ProductCard