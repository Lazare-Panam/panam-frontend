import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  Box, Typography, Button, TextField, Stack, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { createRFQForCustomer, type CreateRFQLineItemDTO } from "../../../api/adminClient";
import { useNotificationStore } from "../../store/useNotficationStore";

const BRAND_BLUE = "#01B0F0";
const BORDER_COLOR = "#E2E8F0";

const emptyLine = (): CreateRFQLineItemDTO => ({
  productCode: "",
  productDescription: "",
  quantity: 1,
  notes: "",
});

const AdminCreateRFQ = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showNotification = useNotificationStore(state => state.showNotification);
  const customer = location.state;

  const [lineItems, setLineItems] = useState<CreateRFQLineItemDTO[]>([emptyLine()]);

  const addLine = () => setLineItems([...lineItems, emptyLine()]);
  const removeLine = (i: number) => setLineItems(lineItems.filter((_, idx) => idx !== i));
  const updateLine = (i: number, field: keyof CreateRFQLineItemDTO, value: string | number) => {
    const updated = [...lineItems];
    updated[i] = { ...updated[i], [field]: value };
    setLineItems(updated);
  };

  const { mutate: submit, isPending } = useMutation({
    mutationFn: () => createRFQForCustomer(customer.userId, { rfqLineItemDTOs: lineItems }),
    onSuccess: () => {
      showNotification({ message: "RFQ created successfully!", severity: "success" });
      navigate("/adminDashboard");
    },
    onError: () => {
      showNotification({ message: "Failed to create RFQ.", severity: "error" });
    },
  });

  const canSubmit = lineItems.every(l => l.productCode.trim() && l.productDescription.trim() && l.quantity > 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Create RFQ
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          On behalf of customer
        </Typography>
      </Box>

      {/* Customer Details */}
      <Box sx={{ mb: 4, p: 3, border: `1px solid ${BORDER_COLOR}`, bgcolor: "#F8FAFC" }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE, textTransform: "uppercase" }}>
          Customer
        </Typography>
        <Stack direction="row" spacing={4} sx={{ mt: 1 }}>
          <Typography variant="body2"><strong>Name:</strong> {customer.userFirstName} {customer.userLastName}</Typography>
          <Typography variant="body2"><strong>Email:</strong> {customer.userEmail}</Typography>
          <Typography variant="body2"><strong>Company:</strong> {customer.userCompany}</Typography>
        </Stack>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Line Items */}
      <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: "none", border: `1px solid ${BORDER_COLOR}`, mb: 3 }}>
        <Table>
          <TableHead sx={{ bgcolor: "#F8FAFC" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>PART NUMBER</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>DESCRIPTION</TableCell>
              <TableCell sx={{ fontWeight: 900, width: 90 }}>QTY</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>NOTES</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map((line, i) => (
              <TableRow key={i}>
                <TableCell>
                  <TextField
                    size="small" fullWidth value={line.productCode}
                    onChange={e => updateLine(i, "productCode", e.target.value)}
                    placeholder="e.g. BV-SS-25"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small" fullWidth value={line.productDescription}
                    onChange={e => updateLine(i, "productDescription", e.target.value)}
                    placeholder="e.g. 1 inch stainless ball valve"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small" type="number" value={line.quantity}
                    onChange={e => updateLine(i, "quantity", Number(e.target.value))}
                    sx={{ width: 70, "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small" fullWidth value={line.notes}
                    onChange={e => updateLine(i, "notes", e.target.value)}
                    placeholder="Optional"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => removeLine(i)} disabled={lineItems.length === 1} sx={{ color: "#ff4d4f" }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" justifyContent="space-between">
        <Button
          startIcon={<AddIcon />}
          onClick={addLine}
          sx={{ color: BRAND_BLUE, fontWeight: 700, borderRadius: 0 }}
        >
          ADD LINE ITEM
        </Button>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => navigate("/adminDashboard")}
            sx={{ color: "#666", fontWeight: 700, borderRadius: 0 }}
          >
            CANCEL
          </Button>
          <Button
            variant="contained"
            disabled={!canSubmit || isPending}
            onClick={() => submit()}
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 800, px: 4, boxShadow: "none" }}
          >
            {isPending ? "SUBMITTING..." : "SUBMIT RFQ"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AdminCreateRFQ;