import { IconButton, Stack, TableCell, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import SaveIcon from "@mui/icons-material/Save"
import EditIcon from "@mui/icons-material/Edit"
import CloseIcon from "@mui/icons-material/Close"
import type { CartItemResponseDTO } from "../../../api/cartApi";
interface CartRowProps {
  item: CartItemResponseDTO
  isEditing: boolean
  isUpdating: boolean
  editForm: { quantity: number; notes: string }
  onEdit: () => void
  onCancel: () => void
  onSave: () => void
  onRemove: () => void
  onEditFormChange: (field: "quantity" | "notes", value: string | number) => void
}
const BRAND_BLUE = "#01B0F0"
export const CartRow = ({ item, isEditing, isUpdating, editForm, onEdit, onCancel, onSave, onRemove, onEditFormChange }: CartRowProps) => (
  <TableRow sx={{ "&:hover": { bgcolor: isEditing ? "#fff" : "#fafafa" } }}>
    <TableCell sx={{ fontWeight: 600, color: BRAND_BLUE }}>{item.productCode}</TableCell>
    <TableCell sx={{ fontSize: "0.85rem" }}>{item.productDescription}</TableCell>
    <TableCell align="center">
      {isEditing ? (
        <TextField type="number" size="small" value={editForm.quantity}
          onChange={e => onEditFormChange("quantity", Number(e.target.value))}
          sx={{ width: "75px", "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
      ) : item.quantity}
    </TableCell>
    <TableCell>
      {isEditing ? (
        <TextField fullWidth size="small" multiline rows={2} value={editForm.notes}
          onChange={e => onEditFormChange("notes", e.target.value)}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
      ) : (
        <Typography variant="body2" color="textSecondary" sx={{ fontStyle: item.notes ? "normal" : "italic" }}>
          {item.notes || "No extra requirements listed."}
        </Typography>
      )}
    </TableCell>
    <TableCell align="right">
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        {isEditing ? (
          <>
            <Tooltip title="Save Changes">
              <IconButton onClick={onSave} disabled={isUpdating} sx={{ color: BRAND_BLUE }}>
                <SaveIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton onClick={onCancel} sx={{ color: "#666" }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Edit Item">
              <IconButton onClick={onEdit} sx={{ color: "#666" }}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={onRemove} sx={{ color: "#ff4d4f" }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Stack>
    </TableCell>
  </TableRow>
)