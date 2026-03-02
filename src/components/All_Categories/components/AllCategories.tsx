import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { CategoryButton } from "./CategoryButton"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useQuery } from "@tanstack/react-query"
import { getProductSpecification } from "../../../api/productApi"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"
import { CATEGORIES } from "./CategoryData"
import ScrollReveal from "../../Common/ScrollReveal"
import QuerySelector from "../../Dashboard/components/QuerySelector"

export default function AllCategories() {
  const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  // --- Logic ---
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
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      {/* PART 1: THE WRITING (INTRO) */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
        <ScrollReveal>
          <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontFamily: PRIMARY_FONT,
                color: "#1a1a1a",
                mb: 3,
                letterSpacing: "-0.02em",
                fontSize: { xs: "2.25rem", md: "3.25rem" },
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
                fontWeight: 400,
              }}>
              From ultra-low temperature cryogenic storage to high-integrity offshore systems, our catalog provides the essential building blocks for critical infrastructure. Browse by category to find the exact specifications required for your fluid system challenges.
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>

      <Box sx={{ width: "100%" }}>
        <ScrollReveal delay={0.2}>
          <QuerySelector />
        </ScrollReveal>
      </Box>

      {/* PART 3: THE CATEGORY GRID */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <ScrollReveal delay={0.3}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 5,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
            Product Categories
          </Typography>

          <Box
            sx={{
              display: "grid",
              // Gap handles the spacing between items automatically
              gap: 3,
              // Responsive columns: 1 on mobile, 2 on tablet, 3-5 on desktop
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
              },
            }}>
            {CATEGORIES.map(cat => (
              <CategoryButton key={cat.id} {...cat} onProductClick={handleOpenModal} />
            ))}
          </Box>
        </ScrollReveal>
      </Container>

      {/* MODAL */}
      <ConfigModal open={isModalOpen} onClose={handleCloseModal} product={selectedProduct} key={selectedProduct?.id || "no-product"} />
    </Box>
  )
}
