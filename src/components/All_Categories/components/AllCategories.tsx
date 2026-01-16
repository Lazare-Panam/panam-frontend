import { useNavigate } from "react-router-dom"
import { Container, Typography, Stack, Card, CardActionArea, CardContent, Box, Link } from "@mui/material"

export default function AllCategories() {
  const navigate = useNavigate()

  const categories = [
    {
      title: "Hydrogen",
      id: "hydrogen",
      image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1768580245/modern-hydrogen-tank-renewable-energy_jhli4b.jpg",
      products: [
        { name: "Hydrogen Regulators", link: "/products/hydrogen/regulators" },
        { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
        { name: "Hydrogen Fittings", link: "/products/hydrogen/fittings" },
      ],
    },
    {
      title: "Manifolds",
      id: "valve-manifolds",
      image: "/images/manifolds.jpg",
      products: [
        { name: "2-Valve Manifolds", link: "/products/manifolds/2-valve" },
        { name: "3-Valve Manifolds", link: "/products/manifolds/3-valve" },
        { name: "5-Valve Manifolds", link: "/products/manifolds/5-valve" },
      ],
    },
    {
      title: "Valves",
      id: "valves",
      image: "/images/valves.jpg",
      products: [
        { name: "Needle Valves", link: "/products/needle-valves" },
        { name: "Ball Valves", link: "/products/ball-valves" },
        { name: "Check Valves", link: "/products/valves/check" },
      ],
    },
    {
      title: "Double Block and Bleed",
      id: "double-block-and-bleed-valves",
      image: "/images/double-block.jpg",
      products: [
        { name: "DBB Ball Valves", link: "/products/dbb/ball" },
        { name: "DBB Needle Valves", link: "/products/dbb/needle" },
        { name: "DBB Plug Valves", link: "/products/dbb/plug" },
      ],
    },
  ]

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: "bold" }}>
        Product Catalog
      </Typography>

      <Stack direction="row" spacing={4} justifyContent="center" mt={6} flexWrap="wrap" gap={4}>
        {categories.map(cat => (
          <Card key={cat.id} sx={{ width: 320, boxShadow: 3, overflow: "hidden" }}>
            <Box sx={{ position: "relative" }}>
              <CardActionArea onClick={() => navigate(`/products/${cat.id}`)}>
                <Box
                  component="img"
                  src={cat.image}
                  alt={cat.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    py: 2,
                  }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {cat.title}
                  </Typography>
                </Box>
              </CardActionArea>
            </Box>

            <CardContent sx={{ bgcolor: "white", pt: 3, pb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}>
                Our Products
              </Typography>
              <Stack spacing={1.5}>
                {cat.products.map((product, idx) => (
                  <Link
                    key={idx}
                    href={product.link}
                    onClick={e => {
                      e.preventDefault()
                      navigate(product.link)
                    }}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "primary.main",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "primary.dark",
                        transform: "translateX(4px)",
                        textDecoration: "underline",
                      },
                    }}>
                    {product.name}
                  </Link>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}
