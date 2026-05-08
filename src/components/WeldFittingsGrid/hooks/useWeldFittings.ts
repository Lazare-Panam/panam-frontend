import { useQuery } from '@tanstack/react-query'
import { getWeldFittings, getWeldFittingFilterOptions, type WeldFittingFilterParams } from '../../../api/weldFittingApi'

export const useWeldFittingFilterOptions = () => {
  return useQuery({
    queryKey: ['weld-fitting-filters'],
    queryFn: getWeldFittingFilterOptions,
    staleTime: Infinity,
  })
}

export const useWeldFittings = (filters: WeldFittingFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as WeldFittingFilterParams

  return useQuery({
    queryKey: ['weld-fittings', cleanFilters],
    queryFn: () => getWeldFittings(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}