import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";

import Grid from "@mui/material/Grid"; 
import {
  PictureAsPdf as PdfIcon,
  OpenInNew as OpenIcon,
} from "@mui/icons-material";
import { getallCatalogPdfs } from "../../api/productApi";

const BRAND_BLUE = "#01B0F0";
const TEXT_MAIN = "#1a1a1a";
const BORDER_COLOR = "#E2E8F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const CatalogPdfs = () => {
  const { data: catalogs, isLoading, isError } = useQuery({
    queryKey: ["catalogs"],
    queryFn: getallCatalogPdfs,
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="error">Failed to load technical catalogs. Please contact support.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10 }}>
      <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Engineering Header */}
        <Box sx={{ 
          mb: 6, 
          display: 'flex', 
          flexDirection: 'column',
          borderLeft: `6px solid ${BRAND_BLUE}`, 
          pl: 3 
        }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: '2.25rem', letterSpacing: -1, fontFamily: PRIMARY_FONT }}>
            PRODUCT CATALOGS
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, fontFamily: PRIMARY_FONT }}>
            CENTRALIZED TECHNICAL DOCUMENTATION
          </Typography>
        </Box>

        {/* Modern Grid2 Implementation */}
        <Grid container spacing={4}>
          {catalogs?.map((catalog: any) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={catalog.id}>
              <Card 
                sx={{ 
                  borderRadius: 0, 
                  border: `1px solid ${BORDER_COLOR}`, 
                  boxShadow: "none",
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: "0.2s ease-in-out",
                  '&:hover': {
                    transform: "translateY(-4px)",
                    boxShadow: `8px 8px 0px ${BORDER_COLOR}`,
                  
                  }
                }}
              >
                {/* Visual Preview Container */}
              
                 <CardMedia
                    component="img"
                    image={catalog.thumbnailUrl}
                    alt={catalog.title}
                    sx={{
                        height: 350,
                        width: "100%",             
                    }}
                    />
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    bgcolor: BRAND_BLUE, 
                    color: "#fff", 
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <PdfIcon fontSize="small" />
                 
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, borderTop: `1px solid ${BORDER_COLOR}` }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 800, 
                      color: TEXT_MAIN, 
                      mb: 2.5, 
                      minHeight: "2.8em",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textTransform: 'uppercase'
                    }}
                  >
                    {catalog.title}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<OpenIcon />}
                      href={catalog.blobUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        bgcolor: BRAND_BLUE, 
                        borderRadius: 0, 
                        fontWeight: 800,
                        boxShadow: "none",
                        '&:hover': { bgcolor: "#0088BA", boxShadow: "none" }
                      }}
                    >
                      OPEN PDF
                    </Button>
                  
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Security / System Footer */}
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 10, opacity: 0.7 }}>
          <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: '50%' }} />
          <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Panam Cloud System / Secure Technical Distribution / 2026.03
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CatalogPdfs;