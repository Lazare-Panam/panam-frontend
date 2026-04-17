import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateRFQStatus } from "../../../../../api/adminClient"

export const useUpdateStatusMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ rfqId, status }: { rfqId: string; status: number }) =>
      updateRFQStatus(rfqId, status),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin", "rfqs"] }),
  })
}