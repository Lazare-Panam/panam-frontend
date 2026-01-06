import { useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { MOCK_PRODUCTS } from "./Mock_Products";
import ConfigModal from "./ConfigureModal";
import ProductCard from "./ProductCard";

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
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={item} onConfigure={handleOpenConfig} />
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
