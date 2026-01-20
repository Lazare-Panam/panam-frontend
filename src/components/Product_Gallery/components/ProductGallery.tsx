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
  const { id } = useParams<{ id: string }>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const {
    data: catalog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productCategory", id],
    queryFn: () => getProductCategory(id!),
    enabled: !!id,
  })

  const { data: specification } = useQuery({
    queryKey: ["productSpecification", selectedProductId],
    queryFn: () => getProductSpecification(selectedProductId!),
    enabled: isModalOpen && !!selectedProductId,
  })

  const buildSelectedProduct = (): Product | null => {
    if (!specification) return null

    return {
      id: specification.id || selectedProductId!,
      title: specification.title,
      description: specification.description,
      imageUrl: specification.imageUrl,
      configurations: specification.configurations,
    }
  }

  const selectedProduct = buildSelectedProduct()

  const handleOpenModal = (product: any) => {
    setSelectedProductId(product.id)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProductId(null)
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
                onConfigure={handleOpenModal}
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

      <ConfigModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} key={selectedProduct?.id || "no-product"} />
    </Container>
  )
}
