import { Box } from "@mui/material"
import { motion } from "framer-motion"
import dishaImg from "../../assets/chatbot/disha.jpg"

// "Disha" - PANAM's AI assistant, shown with the avatar image (src/assets/chatbot/disha.jpg).
//   variant="head": face crop for small round avatars (header, messages, launcher).
//                   The parent circle clips it.
//   variant="full": round portrait for the hero card, with an animated waving hand.

interface DishaAvatarProps {
  size?: number
  variant?: "full" | "head"
  float?: boolean
}

// Classic "waving hand" motion: rotate back and forth around the wrist.
const waveSx = {
  "@keyframes dishaWave": {
    "0%, 60%, 100%": { transform: "rotate(0deg)" },
    "10%": { transform: "rotate(16deg)" },
    "20%": { transform: "rotate(-8deg)" },
    "30%": { transform: "rotate(16deg)" },
    "40%": { transform: "rotate(-4deg)" },
    "50%": { transform: "rotate(12deg)" },
  },
  display: "inline-block",
  transformOrigin: "70% 70%",
  animation: "dishaWave 2.4s ease-in-out infinite",
}

const DishaAvatar = ({ size = 160, variant = "full", float = false }: DishaAvatarProps) => {
  if (variant === "head") {
    // Zoom into the face so it fills small circles nicely.
    return (
      <Box
        component="img"
        src={dishaImg}
        alt=""
        aria-hidden
        sx={{ width: size, height: size, objectFit: "cover", objectPosition: "50% 22%", transform: "scale(1.3)", transformOrigin: "50% 32%", display: "block" }}
      />
    )
  }

  const portrait = (
    <Box sx={{ position: "relative", width: size, height: size }}>
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          bgcolor: "#FFFFFF",
          border: "4px solid #FFFFFF",
          boxShadow: "0 0 0 3px rgba(1,176,240,0.35), 0 14px 30px rgba(15,34,54,0.16)",
        }}>
        <Box component="img" src={dishaImg} alt="Disha, PANAM's AI assistant" sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} />
      </Box>
      {/* waving hand */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          right: -size * 0.08,
          top: size * 0.04,
          width: size * 0.34,
          height: size * 0.34,
          borderRadius: "50%",
          bgcolor: "#FFFFFF",
          boxShadow: "0 6px 16px rgba(15,34,54,0.14)",
          display: "grid",
          placeItems: "center",
          fontSize: size * 0.2,
          lineHeight: 1,
        }}>
        <Box component="span" sx={waveSx}>👋</Box>
      </Box>
    </Box>
  )

  if (!float) return portrait
  return (
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} style={{ display: "inline-block" }}>
      {portrait}
    </motion.div>
  )
}

export default DishaAvatar
