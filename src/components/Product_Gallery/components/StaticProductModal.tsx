import { Modal, Box, Typography, Button, Stack, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import { STATIC_PRODUCTS } from "./Static-data"
import { useNavigate } from "react-router-dom"
const BRAND_BLUE = "#01B0F0"
export default function StaticProductModal({ open, onClose, productId }: { open: boolean; onClose: () => void; productId: string | null }) {
  const data = productId ? STATIC_PRODUCTS[productId] : null
  const navigate = useNavigate();
  if (!data) return null
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 500 },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 0,
          maxHeight: "90vh",
          overflowY: "auto",
        }}>
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: BRAND_BLUE }}>
            {data.title}
          </Typography>
          <IconButton onClick={onClose} size="small" sx={{ borderRadius: 0 }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          component="img"
          src={data.image}
          alt={data.title}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "contain",
            mb: 2,
            borderRadius: 0, 
          }}
        />

        <Typography variant="body2" color="text.primary" sx={{ mb: 2, lineHeight: 1.6 }}>
          {data.description}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1, textTransform: "uppercase", letterSpacing: 1 }}>
          Technical Features
        </Typography>

        <List dense disablePadding sx={{ mb: 3 }}>
          {data.features.map((f: string, i: number) => (
            <ListItem key={i} disableGutters sx={{ alignItems: "flex-start" }}>
              <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                <SettingsSuggestIcon sx={{ fontSize: 18, color: BRAND_BLUE }} />
              </ListItemIcon>
              <ListItemText
                primary={f}
                slotProps={{
                  primary: {
                    variant: "body2",
                    fontSize: "0.875rem",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Button
          fullWidth
          variant="contained"
          disableElevation
          startIcon={<PhoneInTalkIcon />}
          sx={{
            py: 1.5,
            fontWeight: "bold",
            borderRadius: 0, 
            bgcolor: BRAND_BLUE,
            '&:hover': {
              bgcolor: BRAND_BLUE,
              filter: 'brightness(0.9)', // Slight darken on hover
            }
          }}
          onClick={() => (navigate('/enquiry'))}>
          Contact Sales for Quote
        </Button>
      </Box>
    </Modal>
  )
}
