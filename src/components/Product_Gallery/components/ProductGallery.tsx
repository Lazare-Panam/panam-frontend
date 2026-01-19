import { useState } from "react"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"
import ProductCard from "./ProductCard"
import { getProductCategory, getProductSpecification } from "../../../api/productApi"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useParams } from "react-router-dom"
import CatelogCard from "./CatelogCard"
import { PageType } from "../types/pagetypes"
import { useQuery } from "@tanstack/react-query"
import ProductInventorySkeleton from "./ProductShimmer"

interface ProductCatalog {
  type: string
  title: string
  description: string
  image: string
}

export default function ProductInventory() {
  //let pageType: PageType = PageType.CategoryGroup;
  const { id } = useParams<{
    id: string
  }>()
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [modalLoading, setModalLoading] = useState(false)

  const query = useQuery({
    queryKey: ["productCategory", id],
    queryFn: () => getProductCategory(id!),
    enabled: !!id,
  })
  const { data: catalog, isLoading, isError } = query

  const handleOpenConfig = async (product: any) => {
    setModalLoading(true)
    setSelectedProduct(null)

    try {
      const specification = await getProductSpecification(product.id)
      const fullProductData: Product = {
        id: specification.id || product.type,
        title: specification.title || product.title,
        description: product.description,
        imageUrl: product.image,
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

  if (isLoading) {
    return <ProductInventorySkeleton count={6} />
  }

  if (isError) {
    return <Typography color="error">Error loading products.</Typography>
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}>
      <Grid container spacing={0}>
        {catalog?.children.map((item: ProductCatalog) => (
          <Grid
            key={item.type}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}>
            {catalog.pageType === PageType.ProductListing ? (
              <ProductCard
                product={{
                  id: item.type,
                  title: item.title,
                  description: item.description,
                  imageUrl: item.image,
                }}
                onConfigure={handleOpenConfig}
              />
            ) : (
              <CatelogCard
                product={{
                  id: item.type,
                  title: item.title,
                  description: item.description,
                  imageUrl: item.image,
                }}
                type={item.type}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <ConfigModal open={open} onClose={handleClose} product={selectedProduct} loading={modalLoading} key={selectedProduct?.id || "no-product"} />
    </Container>
  )
}
