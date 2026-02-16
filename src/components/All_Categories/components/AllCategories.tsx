import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { CategoryButton } from "./CategoryButton"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useQuery } from "@tanstack/react-query"
import { getProductSpecification } from "../../../api/productApi"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"
import { CATEGORIES } from "./CategoryData"

export default function AllCategories() {
  const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
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
      <Box sx={{ mb: 8, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontFamily: PRIMARY_FONT,
            color: "#1a1a1a",
            mb: 3,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}>
          Engineered for Performance
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: PRIMARY_FONT,
            color: "#555",
            fontSize: "1.125rem",
            lineHeight: 1.8,
          }}>
          From ultra-low temperature cryogenic storage to high-integrity offshore systems, our catalog provides the essential building blocks for critical infrastructure. Browse by category to find the exact specifications required for your fluid system challenges.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {CATEGORIES.map(cat => (
          <Box
            key={cat.id}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
                lg: "calc(20% - 16px)",
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
