import { Chip } from "@mui/material"

interface StatusStyle {
  bg: string
  color: string
  border: string
  label: string
}

const RFQ_STATUS_MAP: Record<string, StatusStyle> = {
  Submitted: { bg: "#FFFBEB", color: "#B45309", border: "#FDE68A", label: "SUBMITTED" },
  UnderReview: { bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE", label: "UNDER REVIEW" },
  QuotedBack: { bg: "#F0FDF4", color: "#166534", border: "#BBF7D0", label: "QUOTED — CHECK RECEIVED QUOTES" },
  Accepted: { bg: "#F0FDF4", color: "#166534", border: "#BBF7D0", label: "ACCEPTED" },
  Rejected: { bg: "#FEF2F2", color: "#991B1B", border: "#FECACA", label: "REJECTED" },
}

const DEAL_STAGE_MAP: Record<string, StatusStyle> = {
  "New Enquiry": { bg: "#FFFBEB", color: "#B45309", border: "#FDE68A", label: "NEW ENQUIRY" },
  "Supplier Quote Awaited": { bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE", label: "SUPPLIER QUOTE AWAITED" },
  "Estimate Shared": { bg: "#F0FDF4", color: "#166534", border: "#BBF7D0", label: "ESTIMATE SHARED" },
  "Customer Feedback Received": { bg: "#FDF4FF", color: "#7E22CE", border: "#E9D5FF", label: "CUSTOMER FEEDBACK RECEIVED" },
  "Order Received": { bg: "#F0FDF4", color: "#166534", border: "#BBF7D0", label: "ORDER RECEIVED" },
  "Shipped on Credit": { bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE", label: "SHIPPED ON CREDIT" },
  "Part Paid": { bg: "#FFFBEB", color: "#B45309", border: "#FDE68A", label: "PART PAID" },
  "Fully Paid": { bg: "#F0FDF4", color: "#166534", border: "#BBF7D0", label: "FULLY PAID" },
  "Rejected": { bg: "#FEF2F2", color: "#991B1B", border: "#FECACA", label: "REJECTED" },
}

const FALLBACK: StatusStyle = { bg: "#F1F5F9", color: "#475569", border: "#CBD5E1", label: "" }

interface Props {
  status: string
  type: "rfq" | "deal"
}

const StatusChip = ({ status, type }: Props) => {
  const map = type === "rfq" ? RFQ_STATUS_MAP : DEAL_STAGE_MAP
  const style = map[status] ?? { ...FALLBACK, label: status.toUpperCase() }

  return (
    <Chip
      label={style.label}
      size="small"
      sx={{
        borderRadius: 0, fontWeight: 900, fontSize: "0.65rem",
        bgcolor: style.bg, color: style.color, border: `1px solid ${style.border}`
      }}
    />
  )
}

export default StatusChip