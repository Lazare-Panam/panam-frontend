import { useState } from "react"
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Stack, Typography, Box, Button, Select, MenuItem, FormControl
} from "@mui/material"
import { Email as EmailIcon } from "@mui/icons-material"
import type { RFQLineItem } from "../../../../../api/adminClient"
import type { ConfirmDialogState } from "./types"

const BRAND_BLUE = "#01B0F0"


const RFQ_STATUSES = [
  { value: 1, label: "Submitted" },
  { value: 2, label: "Under Review" },
  { value: 3, label: "Quoted Back" },
  { value: 4, label: "Accepted" },
  { value: 5, label: "Rejected" },
]

interface Props {
  rfqId: string
  rfqEmail: string
  rfqStatus: number
  lineItems: RFQLineItem[]
  onConfirm: (state: Omit<ConfirmDialogState, "open">) => void
  onNotify: () => void
}

export const RFQLineItems = ({
  rfqId, rfqEmail, rfqStatus, lineItems, onConfirm, onNotify
}: Props) => {
  const [selectedStatus, setSelectedStatus] = useState<number>(rfqStatus)

  return (
    <>
      <TableContainer component={Box}>
        <Table size="small">
          <TableHead sx={{ bgcolor: "#F8FAFC" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 800, py: 1.5 }}>PART NUMBER</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>DESCRIPTION</TableCell>
              <TableCell align="center" sx={{ fontWeight: 800 }}>QTY</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>NOTES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map(item => (
              <TableRow key={item.id} hover>
                <TableCell sx={{ fontWeight: 700, color: BRAND_BLUE }}>{item.productCode}</TableCell>
                <TableCell sx={{ fontSize: "0.85rem" }}>{item.productDescription}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                <TableCell sx={{ fontSize: "0.8rem", fontStyle: "italic", color: "text.secondary" }}>{item.notes || "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ p: 2, bgcolor: "#F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
          CONTACT: {rfqEmail}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button size="small" startIcon={<EmailIcon />} onClick={onNotify}
            sx={{ color: "#166534", fontWeight: 700, borderRadius: 0 }}>
            NOTIFY CUSTOMER
          </Button>
          <FormControl size="small">
            <Select
              value={selectedStatus}
              onChange={e => setSelectedStatus(Number(e.target.value))}
              sx={{ borderRadius: 0, fontWeight: 700, fontSize: "0.8rem", minWidth: 160 }}
            >
              {RFQ_STATUSES.map(s => (
                <MenuItem key={s.value} value={s.value} sx={{ fontWeight: 600, fontSize: "0.8rem" }}>
                  {s.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            size="small"
            variant="contained"
            disabled={selectedStatus === rfqStatus}
            onClick={() => onConfirm({ rfqId, action: "update-status", status: selectedStatus })}
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}
          >
            SAVE STATUS
          </Button>
        </Stack>
      </Box>
    </>
  )
}