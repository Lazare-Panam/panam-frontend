import { Snackbar, Alert, Typography, Box } from "@mui/material"
import { useNotificationStore } from "../store/useNotficationStore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export const NotificationProvider = () => {
  const { open, message, severity, partNumber, hideNotification } = useNotificationStore()

  return (
    <Snackbar open={open} autoHideDuration={1200} onClose={hideNotification} anchorOrigin={{ vertical: "top", horizontal: "center" }} sx={{ mt: 5 }}>
      <Alert
        onClose={hideNotification}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          bgcolor: severity === "success" ? BRAND_BLUE : "#f44336",
          borderRadius: 0,
          px: 4,
          py: 2,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}>
        <Box sx={{ fontFamily: PRIMARY_FONT }}>
          <Typography variant="body1" sx={{ fontWeight: 900, textTransform: "uppercase" }}>
            {message}
          </Typography>
          {partNumber && (
            <Typography variant="caption" sx={{ display: "block", opacity: 0.9, fontFamily: "monospace" }}>
              {partNumber}
            </Typography>
          )}
        </Box>
      </Alert>
    </Snackbar>
  )
}
