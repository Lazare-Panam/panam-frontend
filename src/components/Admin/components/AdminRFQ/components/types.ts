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
  rfqId: string
  action: "update-status" | "notify"
  status?: number
}
