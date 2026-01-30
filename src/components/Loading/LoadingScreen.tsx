import { Box, CircularProgress, Typography } from "@mui/material"

const LoadingScreen: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh", // Adjust height to fit your layout
        width: "100%",
        gap: 2,
      }}>
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="body1" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  )
}

export default LoadingScreen
