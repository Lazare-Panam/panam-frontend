import { useEffect, useState } from "react"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"
import ProductCard from "./ProductCard"
import { getProductCategory, getProductSpecification } from "../../../api/productApi"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useParams } from "react-router-dom"

interface ProductCatalog {
  type: string
  title: string
  description: string
  image: string
}

export default function ProductInventory() {
  const { id } = useParams<{ id: string }>()
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [products, setProducts] = useState<ProductCatalog[]>([])
  const [loading, setLoading] = useState(true)
  const [modalLoading, setModalLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      if (!id) return
      setLoading(true)
      try {
        const data = await getProductCategory(id)
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch valve manifolds", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [id])
  const handleOpenConfig = async (product: any) => {
    setModalLoading(true)
    setSelectedProduct(null)

    try {
      const specification = await getProductSpecification(product.title)
      //console.log("Product Specification:", specification);
      const fullProductData: Product = {
        id: specification.id || product.type,
        title: specification.title || product.title,
        description: product.description, // From ProductCatalog
        imageUrl: product.image, // From ProductCatalog
        configurations: specification.configurations,
      }
      setSelectedProduct(fullProductData)
    } catch (error) {
      console.error("Failed to fetch product specification", error)
    } finally {
      setModalLoading(false)

      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProduct(null)
    setModalLoading(false)
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Grid container spacing={0}>
          {products.map(item => (
            <Grid key={item.type} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard
                product={{
                  id: item.type,
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

      <ConfigModal open={open} onClose={handleClose} product={selectedProduct} loading={modalLoading} key={selectedProduct?.id || "no-product"} />
    </Container>
  )
}
