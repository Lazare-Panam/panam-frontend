import { useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import { CategoryButton, type ProductforHomePage } from "./CategoryButton"
import type { Product } from "../../Custom_Configuration/types/CustomConfigurationtypes"
import { useQuery } from "@tanstack/react-query"
import { getProductSpecification } from "../../../api/productApi"
import ConfigModal from "../../Custom_Configuration/ConfigureModal"

interface CategoryData {
  title: string
  id: string
  image: string
  products: ProductforHomePage[]
}

const CATEGORIES: CategoryData[] = [
  // {
  //   title: "Hydrogen",
  //   id: "hydrogen",
  //   image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835400/street_elbow_-_bspp_-_jpg_hdsoes.jpg",
  //   products: [
  //     { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
  //     { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
  //     { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
  //   ],
  // },
  {
    title: "Manifolds",
    id: "valve-manifolds",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768834959/3VM-SS-8-T_-_JPG_1_olp12u.jpg",
    products: [
      { name: "2-Valve ", id: "2-way-valve-manifold", isProduct: true }, // Modal
      { name: "3-Valve ", id: "3-way-valve-manifold", isProduct: true},
      { name: "5-Valve ", id: "5-way-valve-manifold", isProduct: true },
    ],
  },
  {
    title: "Valves",
    id: "valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835251/PBV-HB-S-M12-OD_-_JPG_uj1uay.jpg",
    products: [
      { name: "Needle ", link: "/products/needle-valves" },
      { name: "Ball ", link: "/products/ball-valves" },
      { name: "Check ", link: "/products/check-valves" },
       { name: "Relif ", link: "/products/relief-valves" },
        { name: "Gauge Root ", link: "/products/gauge-root-valves" },
    ],
  },
  {
    title: "Double Block and Bleed",
    id: "double-block-and-bleed-valves",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768835558/mono_flange_-_1_-_JPEG_1_plsmpe.webp",
    products: [
      { name: "Flange to Flange ", id: "double-block-and-bleed-valves-flange-to-flange", isProduct:true },
      { name: "Flange to Pipe ", id: "double-block-and-bleed-valves-flange-to-pipe", isProduct: true },
      { name: "Pipe to Pipe ", id: "double-block-and-bleed-valves-pipe-to-pipe", isProduct:true },
    ],
  },
]

export default function AllCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  // 1. Same logic as ProductInventory: Fetch spec when modal opens
  const { data: specification } = useQuery({
    queryKey: ["productSpecification", selectedProductId],
    queryFn: () => getProductSpecification(selectedProductId!),
    enabled: isModalOpen && !!selectedProductId,
  })

  // 2. Same logic as ProductInventory: Build the product object for the modal
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

  // 3. Same handlers as ProductInventory
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
                sm: "calc(50% - 12px)",
                lg: "calc(33.33% - 16px)",
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
