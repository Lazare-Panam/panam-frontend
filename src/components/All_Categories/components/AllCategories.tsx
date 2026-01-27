import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { CategoryButton } from "./CategoryButton"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useQuery } from "@tanstack/react-query"
import { getProductSpecification } from "../../../api/productApi"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"
import { CATEGORIES } from "./CategoryData"

export default function AllCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const { data: specification } = useQuery({
    queryKey: ["productSpecification", selectedProductId],
    queryFn: () => getProductSpecification(selectedProductId!),
    enabled: isModalOpen && !!selectedProductId,
  })

  const buildSelectedProduct = (): Product | null => {
    if (!specification) {
      console.log("Specification is still null/undefined")
      return null
    }
    console.log("Keys in specification:", Object.keys(specification))

    return {
      id: specification.id || selectedProductId!,
      title: specification.title,
      capabilities: specification.capabilities,
      description: specification.description,
      imageUrl: specification.imageUrl,
      configurations: specification.configurations,
    }
  }

  const selectedProduct = buildSelectedProduct()

  const handleOpenModal = (productId: string) => {
    setSelectedProductId(productId)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProductId(null)
  }
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 900, mb: 6 }}>
        Product Catalog
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {CATEGORIES.map(cat => (
          <Box
            key={cat.id}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
                lg: "calc(25% - 16px)",
              },
            }}>
            <CategoryButton {...cat} onProductClick={handleOpenModal} />
          </Box>
        ))}
      </Box>
      <ConfigModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} key={selectedProduct?.id || "no-product"} />
    </Container>
  )
}
