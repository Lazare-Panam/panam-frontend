import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box, Typography, Button, CircularProgress, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip, Stack,
  Collapse, TextField, Divider
} from "@mui/material";
import {
  Add as AddIcon, Description as FileIcon, HistoryEdu as EnquiryIcon,
  KeyboardArrowDown, KeyboardArrowUp, Send as SendIcon
} from "@mui/icons-material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMyEnquiries, type Enquiry } from "../../../api/authApi";
import { getReplies, addReply, type EnquiryReply } from "../../../api/enquiryClient";
import EmptyState from "./EmptyState";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";
const TEXT_MAIN = "#1a1a1a";

const ThreadView = ({ enquiryId, originalMessage }: { enquiryId: number; originalMessage: string }) => {
  const [replyText, setReplyText] = useState("");
  const queryClient = useQueryClient();

  const { data: replies = [], isLoading } = useQuery({
    queryKey: ["replies", enquiryId],
    queryFn: () => getReplies(enquiryId),
  });

  const mutation = useMutation({
    mutationFn: (message: string) => addReply(enquiryId, message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["replies", enquiryId] });
      setReplyText("");
    },
  });

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
              <Box key={reply.id} sx={{ display: "flex", justifyContent: isAdmin ? "flex-start" : "flex-end" }}>
                <Box
                  sx={{
                    maxWidth: "70%",
                    p: 1.5,
                    bgcolor: isAdmin ? "#fff" : BRAND_BLUE,
                    color: isAdmin ? TEXT_MAIN : "#fff",
                    border: `1px solid ${isAdmin ? BORDER_COLOR : BRAND_BLUE}`,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="caption" sx={{ fontWeight: 700, display: "block", mb: 0.5, opacity: 0.8 }}>
                    {isAdmin ? "Panam Valves" : "You"}
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

      <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          size="small"
          placeholder="Type a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          sx={{ bgcolor: "#fff" }}
        />
        <Button
          variant="contained"
          disabled={!replyText.trim() || mutation.isPending}
          onClick={() => mutation.mutate(replyText.trim())}
          sx={{ bgcolor: BRAND_BLUE, minWidth: 44, px: 1.5 }}
        >
          <SendIcon fontSize="small" />
        </Button>
      </Stack>
    </Box>
  );
};

const Enquiries = () => {
  const navigate = useNavigate();
  const [openRow, setOpenRow] = useState<number | null>(null);

  const { data: enquiries = [], isLoading } = useQuery({
    queryKey: ["my-enquiries"],
    queryFn: getMyEnquiries,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
      <Box sx={{ mb: 6, display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: "2.25rem", letterSpacing: -1 }}>
            Technical Enquiries
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
            Engineering Request Logs
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/enquiry")}
          sx={{
            bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 800, px: 4, py: 1.5,
            boxShadow: `4px 4px 0px ${BORDER_COLOR}`,
            "&:hover": { bgcolor: BRAND_BLUE, transform: "translate(2px, 2px)", boxShadow: "none" },
            transition: "0.2s all"
          }}
        >
          NEW REQUEST
        </Button>
      </Box>

      {enquiries.length === 0 ? (
        <EmptyState icon={EnquiryIcon} title="No enquiries logged." buttonText="CREATE FIRST ENTRY" onActionClick="/enquiry" />
      ) : (
        <TableContainer component={Paper} sx={{ borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: "none", overflowX: "auto" }}>
          <Table sx={{ minWidth: 800 }}>
            <TableHead sx={{ bgcolor: SOFT_BG }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: "15%" }}>REF ID</TableCell>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: "15%" }}>DATE</TableCell>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: "40%" }}>MESSAGE / SPECIFICATION</TableCell>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: "15%", textAlign: "center" }}>FILES</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {enquiries.map((item) => (
                <>
                  <TableRow
                    key={item.id}
                    onClick={() => setOpenRow(openRow === item.id ? null : item.id)}
                    sx={{ cursor: "pointer", "&:hover": { bgcolor: "#f1f5f9" }, transition: "0.2s", "& td": { borderBottom: `1px solid ${BORDER_COLOR}` } }}
                  >
                    <TableCell sx={{ fontWeight: 800, color: BRAND_BLUE }}>
                      #ENQ-{item.id.toString().padStart(4, "0")}
                    </TableCell>
                    <TableCell sx={{ color: "text.secondary", fontWeight: 600 }}>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500, color: TEXT_MAIN, lineHeight: 1.5 }}>
                      {item.message.length > 120 ? `${item.message.substring(0, 120)}...` : item.message}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.attachmentPath ? (
                        <Tooltip title="View Technical Attachment">
                          <IconButton
                            href={item.attachmentPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            sx={{ color: BRAND_BLUE, "&:hover": { bgcolor: BRAND_BLUE, color: "#fff" } }}
                          >
                            <FileIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Typography variant="caption" sx={{ color: "text.disabled" }}>—</Typography>
                      )}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {openRow === item.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </TableCell>
                  </TableRow>

                  <TableRow key={`thread-${item.id}`}>
                    <TableCell colSpan={5} sx={{ p: 0, border: 0 }}>
                      <Collapse in={openRow === item.id} unmountOnExit>
                        <ThreadView enquiryId={item.id} originalMessage={item.message} />
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4, opacity: 0.8 }}>
        <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: "50%" }} />
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 1 }}>
          CONNECTED TO PANAM CLOUD CENTRAL / DATA ENCRYPTED
        </Typography>
      </Stack>
    </Box>
  );
};

export default Enquiries;