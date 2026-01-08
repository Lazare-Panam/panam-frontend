import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MOCK_PRODUCTS } from "./Mock_Products";
import ConfigModal from "./ConfigureModal";
import ProductCard from "./ProductCard";
import { getProductCategory } from "../../api/productApi";

type ProductCatalog = {
  type: string;
  title: string;
  description: string;
  image: string;
};

export default function ProductInventory() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [products, setProducts] = useState<ProductCatalog[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductCategory("valve-manifolds");
        console.log(data);
        setProducts(data);
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch valve manifolds", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
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
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Grid container spacing={0}>
          {products.map((item) => (
            <Grid key={item.type} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard
                product={{
                  id: item.type,          // 👈 stable id
                  title: item.title,
                  description: item.description,
                  imageUrl: item.image,
                }}
                onConfigure={handleOpenConfig}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <ConfigModal
        open={open}
        onClose={handleClose}
        product={selectedProduct}
      />
    </Container>
  );
}
