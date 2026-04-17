import { Box, Typography } from "@mui/material"

const ErrorState = ({ message = "Something went wrong. Please try again later." }: { message?: string }) => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography color="error">{message}</Typography>
  </Box>
)

export default ErrorState