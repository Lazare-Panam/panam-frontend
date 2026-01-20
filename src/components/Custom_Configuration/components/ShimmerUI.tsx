import React from "react"
import { Box, Skeleton } from "@mui/material"

const ShimmerUI: React.FC = () => {
  return (
    <>
      {[1, 2, 3].map(key => (
        <Box key={key} sx={{ mb: 3 }}>
          <Skeleton variant="text" aria-label="loading-skeleton" width="35%" sx={{ mb: 1, height: 20 }} />
          <Skeleton variant="rectangular" aria-label="rectangular-skeleton" height={40} className="industrial-select" />
        </Box>
      ))}
    </>
  )
}

export default ShimmerUI
