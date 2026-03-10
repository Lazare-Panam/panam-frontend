import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Container, Typography, Box, List, ListItem, Divider, Paper } from "@mui/material";
import Grid from "@mui/material/Grid"; // Import Grid2
import { getProductDetail } from "../../api/productApi";

export default function ProductDetailPage() {
  const { detailId } = useParams<{ detailId: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetail", detailId],
    queryFn: () => getProductDetail(detailId!),
    enabled: !!detailId,
  });

  if (isLoading) return <Typography sx={{ p: 4 }}>Loading technical specs...</Typography>;
  if (error) return <Typography color="error" sx={{ p: 4 }}>Error loading details.</Typography>;
  if (!data) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Left Side: Product Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 2, 
              textAlign: 'center', 
              backgroundColor: '#f9f9f9',
              borderRadius: 2 
            }}
          >
            <img 
              src={data.imageUrl} 
              alt={data.productId} 
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }} 
            />
          </Paper>
        </Grid>

        {/* Right Side: Description & Features */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" fontWeight={800} gutterBottom sx={{ textTransform: 'uppercase' }}>
            {data.productId.replace(/-/g, ' ')}
          </Typography>
          
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            {data.description}
          </Typography>

          <Typography variant="h6" fontWeight={700} sx={{ mt: 4, mb: 1 }}>Key Features</Typography>
          <Divider sx={{ mb: 2, width: '40px', height: '3px', bgcolor: 'primary.main' }} />
          <List dense sx={{ mb: 4 }}>
            {data.features?.map((feature: string, index: number) => (
              <ListItem key={index} sx={{ display: 'list-item', listStyleType: 'disc', ml: 3, py: 0.5 }}>
                <Typography variant="body2">{feature}</Typography>
              </ListItem>
            ))}
          </List>

          {/* Specifications Table */}
          {data.specifications && Object.keys(data.specifications).length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Technical Specifications</Typography>
              <Paper variant="outlined" sx={{ borderRadius: 1, overflow: 'hidden' }}>
                {Object.entries(data.specifications).map(([key, value], index, arr) => (
                  <Box key={key}>
                    <Grid container sx={{ px: 3, py: 1.5, '&:hover': { bgcolor: '#f5f5f5' } }}>
                      <Grid size={5}>
                        <Typography fontWeight={700} variant="body2" color="text.primary">{key}</Typography>
                      </Grid>
                      <Grid size={7}>
                        <Typography variant="body2" color="text.secondary">{value as string}</Typography>
                      </Grid>
                    </Grid>
                    {index < arr.length - 1 && <Divider />}
                  </Box>
                ))}
              </Paper>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}