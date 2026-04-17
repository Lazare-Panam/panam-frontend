import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box, Typography, CircularProgress, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton, Stack,
  Collapse, TextField, Button, Divider, Chip, Select, MenuItem,
  FormControl, Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions
} from "@mui/material";
import {
  Description as FileIcon, Business as BusinessIcon,
  KeyboardArrowDown, KeyboardArrowUp, Send as SendIcon
} from "@mui/icons-material";
import { getAllAdminEnquiries, updateEnquiryStatus } from "../../../api/adminClient";
import { getReplies, addReply, type EnquiryReply } from "../../../api/enquiryClient";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";
const TEXT_MAIN = "#1a1a1a";

const ENQUIRY_STATUSES = [
  { value: 1, label: "Open" },
  { value: 2, label: "RFQ Created" },
  { value: 3, label: "Closed" },
]

const getStatusChip = (status: number) => {
  switch (status) {
    case 1: return <Chip label="OPEN" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#FFFBEB", color: "#B45309", border: "1px solid #FDE68A" }} />
    case 2: return <Chip label="RFQ CREATED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE" }} />
    case 3: return <Chip label="CLOSED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#F1F5F9", color: "#475569", border: "1px solid #CBD5E1" }} />
    default: return null
  }
}

const ThreadView = ({ enquiryId, enquiryStatus, originalMessage }: { enquiryId: number; enquiryStatus: number; originalMessage: string }) => {
  const [replyText, setReplyText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(enquiryStatus)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const queryClient = useQueryClient();

  const { data: replies = [], isLoading } = useQuery({
    queryKey: ["replies", enquiryId],
    queryFn: () => getReplies(enquiryId),
  });

  const replyMutation = useMutation({
    mutationFn: (message: string) => addReply(enquiryId, message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["replies", enquiryId] });
      setReplyText("");
    },
  });

  const statusMutation = useMutation({
    mutationFn: (status: number) => updateEnquiryStatus(enquiryId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "enquiries"] })
      setConfirmOpen(false)
    },
  })

  return (
    <Box sx={{ p: 3, bgcolor: "#F0F9FF", borderTop: `2px solid ${BRAND_BLUE}` }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          Original Enquiry
        </Typography>
        <Box sx={{ mt: 1, p: 2, bgcolor: "#fff", border: `1px solid ${BORDER_COLOR}`, borderRadius: 1 }}>
          <Typography variant="body2">{originalMessage}</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {isLoading ? (
        <CircularProgress size={20} sx={{ color: BRAND_BLUE }} />
      ) : replies.length === 0 ? (
        <Typography variant="caption" sx={{ color: "text.disabled" }}>No replies yet.</Typography>
      ) : (
        <Stack spacing={1.5} sx={{ mb: 2 }}>
          {replies.map((reply: EnquiryReply) => {
            const isAdmin = reply.senderRole === "Admin";
            return (
              <Box key={reply.id} sx={{ display: "flex", justifyContent: isAdmin ? "flex-end" : "flex-start" }}>
                <Box sx={{
                  maxWidth: "70%", p: 1.5,
                  bgcolor: isAdmin ? BRAND_BLUE : "#fff",
                  color: isAdmin ? "#fff" : TEXT_MAIN,
                  border: `1px solid ${isAdmin ? BRAND_BLUE : BORDER_COLOR}`,
                  borderRadius: 2,
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, opacity: 0.8 }}>
                    {reply.senderName} · {isAdmin ? "Admin" : "Customer"}
                  </Typography>
                  <Typography variant="body2">{reply.message}</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.6, display: "block", mt: 0.5, textAlign: "right" }}>
                    {new Date(reply.createdAt).toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}

      <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ mb: 3 }}>
        <TextField
          fullWidth multiline maxRows={4} size="small"
          placeholder="Type a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          sx={{ bgcolor: "#fff" }}
        />
        <Button
          variant="contained"
          disabled={!replyText.trim() || replyMutation.isPending}
          onClick={() => replyMutation.mutate(replyText.trim())}
          sx={{ bgcolor: BRAND_BLUE, minWidth: 44, px: 1.5 }}
        >
          <SendIcon fontSize="small" />
        </Button>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
        <FormControl size="small">
          <Select
            value={selectedStatus}
            onChange={e => setSelectedStatus(Number(e.target.value))}
            sx={{ borderRadius: 0, fontWeight: 700, fontSize: "0.8rem", minWidth: 150 }}
          >
            {ENQUIRY_STATUSES.map(s => (
              <MenuItem key={s.value} value={s.value} sx={{ fontWeight: 600, fontSize: "0.8rem" }}>
                {s.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          size="small"
          variant="contained"
          disabled={selectedStatus === enquiryStatus || statusMutation.isPending}
          onClick={() => setConfirmOpen(true)}
          sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}
        >
          SAVE STATUS
        </Button>
      </Stack>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle sx={{ fontWeight: 800 }}>Update Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update this enquiry status? This will be reflected across the system.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)} sx={{ color: "text.secondary" }}>Cancel</Button>
          <Button
            onClick={() => statusMutation.mutate(selectedStatus)}
            variant="contained"
            disabled={statusMutation.isPending}
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, "&:hover": { bgcolor: "#0099d4" } }}
          >
            {statusMutation.isPending ? "Saving..." : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const AdminEnquiriesList = () => {
  const [openRow, setOpenRow] = useState<number | null>(null);

  const { data: enquiries = [], isLoading, isError } = useQuery({
    queryKey: ["admin", "enquiries"],
    queryFn: getAllAdminEnquiries,
  });

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  );

  if (isError) return <Typography color="error">Failed to load enquiries from Panam Cloud.</Typography>;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Centralized Enquiries
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          Global Admin Overview
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: "none" }}>
        <Table>
          <TableHead sx={{ bgcolor: SOFT_BG }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>REF / DATE</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>CUSTOMER / COMPANY</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>SPECIFICATION</TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: "center" }}>FILE</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>STATUS</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map((item) => (
              <>
                <TableRow
                  key={item.id}
                  onClick={() => setOpenRow(openRow === item.id ? null : item.id)}
                  sx={{ cursor: "pointer", "&:hover": { bgcolor: "#f1f5f9" } }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: BRAND_BLUE }}>
                      #ENQ-{item.id.toString().padStart(4, "0")}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {item.userFirstName} {item.userLastName}
                    </Typography>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <BusinessIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>{item.userCompany}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ fontSize: "0.85rem", color: TEXT_MAIN }}>
                    {item.message.length > 150 ? `${item.message.substring(0, 150)}...` : item.message}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {item.attachmentPath ? (
                      <IconButton href={item.attachmentPath} target="_blank" sx={{ color: BRAND_BLUE }}
                        onClick={(e) => e.stopPropagation()}>
                        <FileIcon />
                      </IconButton>
                    ) : (
                      <Typography variant="caption" sx={{ color: "text.disabled" }}>—</Typography>
                    )}
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    {getStatusChip(item.status)}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {openRow === item.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </TableCell>
                </TableRow>

                <TableRow key={`thread-${item.id}`}>
                  <TableCell colSpan={6} sx={{ p: 0, border: 0 }}>
                    <Collapse in={openRow === item.id} unmountOnExit>
                      <ThreadView
                        enquiryId={item.id}
                        enquiryStatus={item.status}
                        originalMessage={item.message}
                      />
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4, opacity: 0.6 }}>
        <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: "50%" }} />
        <Typography variant="caption" sx={{ color: TEXT_MAIN, fontWeight: 700 }}>
          TOTAL LOGS: {enquiries.length} | DATA SYNCED WITH CLOUD
        </Typography>
      </Stack>
    </Box>
  );
};

export default AdminEnquiriesList;