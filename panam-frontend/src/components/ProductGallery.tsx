import React from 'react';
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

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
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
       sx={{ 
      textTransform: 'uppercase', 
      borderRadius: 0,      // Sharp edges
      fontWeight: 700,
      bgcolor: '#0052cc',  // Keeping the blue background
      color: '#ffffff',    // White text
      py: 1.3,               // EXTRA vertical padding to make it "bigger"
      fontSize: '0.7rem',  // Making the text a "tad smaller"
      letterSpacing: '1px', // Keeps small text readable
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
      borderColor: '#0052cc', // Changed to Blue Border
      mt: '8px',             // FORCED GAP via Margin Top
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
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={0}>
        {MOCK_PRODUCTS.map((item) => (
          <Grid  key={item.id}
            size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}