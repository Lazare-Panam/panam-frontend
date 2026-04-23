import { useQuery } from '@tanstack/react-query'
import {
  getTwoWayManifolds,
  getTwoWayManifoldFilters,
  type TwoWayManifoldFilterParams
} from '../../api/manifoldApi'
export const useTwoWayManifoldFilters = () => {
  return useQuery({
    queryKey: ['2way-manifold-filters'],
    queryFn: getTwoWayManifoldFilters,
    staleTime: Infinity,
  })
}

export const useTwoWayManifolds = (filters: TwoWayManifoldFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as TwoWayManifoldFilterParams

  return useQuery({
    queryKey: ['2way-manifolds', cleanFilters],
    queryFn: () => getTwoWayManifolds(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}