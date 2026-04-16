import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateLineItemPrice, updateLineItem, deleteLineItem, addLineItemsToRFQ } from "../../../../../api/adminClient"
import { type EditableItem } from "./types"

export const usePriceMutation = (
  setSavedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setFailedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ lineItemId, price }: { lineItemId: string; price: number | null }) =>
      updateLineItemPrice(lineItemId, price),
    onSuccess: (_, variables) => {
      setSavedItems(prev => ({ ...prev, [variables.lineItemId]: true }))
      setFailedItems(prev => ({ ...prev, [variables.lineItemId]: false }))
      setTimeout(() => setSavedItems(prev => ({ ...prev, [variables.lineItemId]: false })), 2000)
      queryClient.invalidateQueries({ queryKey: ["admin", "rfqs"] })
    },
    onError: (_, variables) => {
      setFailedItems(prev => ({ ...prev, [variables.lineItemId]: true }))
      setTimeout(() => setFailedItems(prev => ({ ...prev, [variables.lineItemId]: false })), 3000)
    },
  })
}

export const useSaveEditsMutation = (
  setEditingRfqId: React.Dispatch<React.SetStateAction<string | null>>,
  setEditableItems: React.Dispatch<React.SetStateAction<EditableItem[]>>
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ rfqId, items }: { rfqId: string; items: EditableItem[] }) => {
      const existing = items.filter(i => !i.isNew)
      const newItems = items.filter(i => i.isNew)
      await Promise.all(existing.map(item => updateLineItem(item.id, {
        productCode: item.productCode,
        productDescription: item.productDescription,
        quantity: item.quantity,
        notes: item.notes,
        unitPrice: item.unitPrice !== "" ? parseFloat(item.unitPrice) : null,
      })))
      if (newItems.length > 0) {
        await addLineItemsToRFQ(rfqId, newItems.map(item => ({
          productCode: item.productCode,
          productDescription: item.productDescription,
          quantity: item.quantity,
          notes: item.notes,
          unitPrice: item.unitPrice !== "" ? parseFloat(item.unitPrice) : null,
        })))
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "rfqs"] })
      setEditingRfqId(null)
      setEditableItems([])
    },
  })
}

export const useDeleteLineItemMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (lineItemId: string) => deleteLineItem(lineItemId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "rfqs"] }),
  })
}