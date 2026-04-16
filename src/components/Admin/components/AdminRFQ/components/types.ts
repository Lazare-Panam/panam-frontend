export interface EditableItem {
  id: string
  productCode: string
  productDescription: string
  quantity: number
  notes: string
  unitPrice: string
  isNew?: boolean
}

export interface ConfirmDialogState {
  open: boolean
  lineItemId: string
  action: "save-price" | "delete-price" | "save-edits" | "delete-item" | "notify"
  price?: number
  rfqId?: string
}
