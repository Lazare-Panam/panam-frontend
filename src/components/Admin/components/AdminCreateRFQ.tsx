import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Box, Typography, Button, TextField, Stack, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Divider, List, ListItemButton, ListItemText, CircularProgress
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { createRFQForCustomer, searchProductsRFQ, type HubSpotProduct } from "../../../api/adminClient";
import { useNotificationStore } from "../../store/useNotficationStore";

interface LineItemWithPrice {
  productCode: string
  productDescription: string
  quantity: number
  notes?: string
  unitPrice: string
}

const BRAND_BLUE = "#01B0F0";
const BORDER_COLOR = "#E2E8F0";

const highlight = (text: string, query: string) => {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return <>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <span key={i} style={{ backgroundColor: "#FEF08A", fontWeight: 900, borderRadius: 2 }}>{part}</span> : part)}</>;
};

const ProductSearch = ({ onSelect }: { onSelect: (p: HubSpotProduct) => void }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { data: results = [], isFetching } = useQuery({
    queryKey: ["productSearch", query],
    queryFn: () => searchProductsRFQ(query),
    enabled: query.length >= 2,
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Box ref={ref} sx={{ position: "relative", mb: 3 }}>
      <TextField
        size="small" fullWidth
        placeholder="Search HubSpot products by part number or description..."
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => query.length >= 2 && setOpen(true)}
        InputProps={{
          endAdornment: isFetching ? <CircularProgress size={14} sx={{ color: BRAND_BLUE }} /> : null
        }}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
      />
      {open && results.length > 0 && (
        <Paper sx={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 999, borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, maxHeight: 280, overflow: "auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <List dense disablePadding>
            {results.map(p => (
              <ListItemButton key={p.id}
                onClick={() => { onSelect(p); setQuery(""); setOpen(false); }}
                sx={{ borderBottom: `1px solid ${BORDER_COLOR}`, "&:hover": { bgcolor: "#F0F9FF" } }}
              >
                <ListItemText
                  primary={
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" sx={{ fontWeight: 800, color: BRAND_BLUE }}>{highlight(p.name, query)}</Typography>
                      {p.price != null && <Typography variant="caption" sx={{ fontWeight: 700, color: "#166534" }}>£{p.price.toFixed(2)}</Typography>}
                    </Stack>
                  }
                  secondary={<Typography variant="caption" sx={{ color: "text.secondary" }}>{highlight(p.description, query)}</Typography>}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

const AdminCreateRFQ = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showNotification = useNotificationStore(state => state.showNotification);
  const customer = location.state;

  const [lineItems, setLineItems] = useState<LineItemWithPrice[]>([]);

  const removeLine = (i: number) => setLineItems(lineItems.filter((_, idx) => idx !== i));
  const updateLine = (i: number, field: keyof LineItemWithPrice, value: string | number) => {
    const updated = [...lineItems];
    updated[i] = { ...updated[i], [field]: value };
    setLineItems(updated);
  };

  const handleProductSelect = (product: HubSpotProduct) => {
    setLineItems(prev => [...prev, {
      productCode: product.name,
      productDescription: product.description,
      quantity: 1,
      notes: "",
      unitPrice: product.price != null ? String(product.price) : "",
    }]);
  };

  const { mutate: submit, isPending } = useMutation({
    mutationFn: () => createRFQForCustomer(customer.userId, {
      rfqLineItemDTOs: lineItems.map(({ unitPrice, ...rest }) => ({
        ...rest,
        unitPrice: unitPrice !== "" ? parseFloat(unitPrice) : null
      }))
    }),
    onSuccess: () => {
      showNotification({ message: "RFQ created successfully!", severity: "success" });
      navigate("/adminDashboard");
    },
    onError: () => {
      showNotification({ message: "Failed to create RFQ.", severity: "error" });
    },
  });

  const canSubmit = lineItems.length > 0 && lineItems.every(l => l.productCode.trim() && l.productDescription.trim() && l.quantity > 0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1200px", margin: "0 auto" }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Create RFQ
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          On behalf of customer
        </Typography>
      </Box>

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

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE, textTransform: "uppercase", display: "block", mb: 1 }}>
          Search & Add Products from HubSpot
        </Typography>
        <ProductSearch onSelect={handleProductSelect} />
      </Box>

      {lineItems.length > 0 ? (
        <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: "none", border: `1px solid ${BORDER_COLOR}`, mb: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#F8FAFC" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 900 }}>PART NUMBER</TableCell>
                <TableCell sx={{ fontWeight: 900 }}>DESCRIPTION</TableCell>
                <TableCell sx={{ fontWeight: 900, width: 90 }}>QTY</TableCell>
                <TableCell sx={{ fontWeight: 900, width: 130 }}>UNIT PRICE</TableCell>
                <TableCell sx={{ fontWeight: 900 }}>NOTES</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((line, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <TextField size="small" fullWidth value={line.productCode}
                      onChange={e => updateLine(i, "productCode", e.target.value)}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth value={line.productDescription}
                      onChange={e => updateLine(i, "productDescription", e.target.value)}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" value={line.quantity}
                      onChange={e => updateLine(i, "quantity", Number(e.target.value))}
                      sx={{ width: 70, "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" value={line.unitPrice}
                      onChange={e => updateLine(i, "unitPrice", e.target.value)}
                      placeholder="0.00"
                      inputProps={{ min: 0, step: "0.01" }}
                      InputProps={{ startAdornment: <Typography variant="caption" sx={{ mr: 0.5, color: "text.secondary" }}>£</Typography> }}
                      sx={{ width: 110, "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth value={line.notes}
                      onChange={e => updateLine(i, "notes", e.target.value)}
                      placeholder="Optional"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => removeLine(i)} sx={{ color: "#ff4d4f" }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ p: 4, border: `1px dashed ${BORDER_COLOR}`, textAlign: "center", mb: 3 }}>
          <Typography variant="body2" sx={{ color: "text.disabled" }}>
            Search and select products above to add line items.
          </Typography>
        </Box>
      )}

      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button onClick={() => navigate("/adminDashboard")} sx={{ color: "#666", fontWeight: 700, borderRadius: 0 }}>
          CANCEL
        </Button>
        <Button variant="contained" disabled={!canSubmit || isPending} onClick={() => submit()}
          sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 800, px: 4, boxShadow: "none" }}>
          {isPending ? "SUBMITTING..." : "SUBMIT RFQ"}
        </Button>
      </Stack>
    </Box>
  );
};

export default AdminCreateRFQ;