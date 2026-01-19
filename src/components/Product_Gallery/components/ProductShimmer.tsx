import { Box, Card, CardContent, Container, Skeleton } from "@mui/material"
import Grid from "@mui/material/Grid"
import "../styles/ProductCard.css"

interface SkeletonProps {
  count?: number
}

const ProductInventorySkeleton = ({ count = 6 }: SkeletonProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={0}>
        {Array.from(new Array(count)).map((_, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}>
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
                <Skeleton variant="rectangular" width="100%" height={150} sx={{ maxWidth: 250, borderRadius: "4px" }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2, display: "flex", flexDirection: "column" }}>
                <Skeleton variant="text" width="70%" height={24} sx={{ mb: 1 }} />
                <Box sx={{ mb: 1.5, minHeight: "2.5em" }}>
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="85%" />
                </Box>
              </CardContent>
              <Box className="card-actions-group" sx={{ p: 2, pt: 0 }}>
                <Skeleton variant="rectangular" height={31} width="100%" sx={{ mb: 1, borderRadius: "4px" }} />
                <Skeleton variant="rectangular" height={31} width="100%" sx={{ borderRadius: "4px" }} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductInventorySkeleton
