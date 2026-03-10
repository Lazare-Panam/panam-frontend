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
import { STATIC_PRODUCTS } from "./Static-data"
import StaticProductModal from "./StaticProductModal"
interface ProductCatalog {
  type: string
  title: string
  description: string
  image: string
  features: string[]
  detailId?: string
}

export default function ProductInventory() {
  const { id, subId } = useParams<{ id: string; subId: string }>()
  const activeId = subId ?? id
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStaticModalOpen, setIsStaticModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)
  const isStaticProduct = selectedProductId ? !!STATIC_PRODUCTS[selectedProductId] : false
  const {
    data: catalog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productCategory", activeId],
    queryFn: () => getProductCategory(activeId!),
    enabled: !!activeId,
  })

  const { data: specification } = useQuery({
    queryKey: ["productSpecification", selectedProductId],
    queryFn: () => getProductSpecification(selectedProductId!),
    enabled: isModalOpen && !!selectedProductId && !isStaticProduct,
  })

  const buildSelectedProduct = (): Product | null => {
    if (!specification) return null

    return {
      id: specification.id || selectedProductId!,
      title: specification.title,
      description: specification.description,
      imageUrl: specification.imageUrl,
      capabilities: specification.capabilities,
      configurations: specification.configurations,
    }
  }

  const selectedProduct = buildSelectedProduct()

  const handleOpenModal = (product: Product) => {
    const productId = product.id
    setSelectedProductId(productId)
    if (STATIC_PRODUCTS[productId]) {
      setIsStaticModalOpen(true)
    } else {
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsStaticModalOpen(false)
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
                  detailId: item.detailId,
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
                  detailId: item.detailId,
                  title: item.title,
                  description: item.description,
                  imageUrl: item.image,
                  features: item.features,
                }}
                type={item.type}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <ConfigModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} key={selectedProduct?.id || "no-product"} />
      <StaticProductModal open={isStaticModalOpen} onClose={handleCloseModal} productId={selectedProductId} key={`static-${selectedProductId || "none"}`} />
    </Container>
  )
}
