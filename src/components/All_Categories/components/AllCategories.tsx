import { useNavigate } from "react-router-dom"
import { Container, Typography, Stack, Card, CardActionArea, CardContent } from "@mui/material"

export default function AllCategories() {
  const navigate = useNavigate()
  const categories = [
    { title: "Valve Manifolds", id: "valve-manifolds" },
    { title: "Valves", id: "valves" },
  ]

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: "bold" }}>
        Product Catalog
      </Typography>

      <Stack direction="row" spacing={4} justifyContent="center" mt={6}>
        {categories.map(cat => (
          <Card key={cat.id} sx={{ width: 320, boxShadow: 3 }}>
            <CardActionArea onClick={() => navigate(`/products/${cat.id}`)}>
              <CardContent sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h5" color="primary">
                  {cat.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}
