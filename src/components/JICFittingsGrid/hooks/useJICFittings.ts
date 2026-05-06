import { useQuery } from '@tanstack/react-query'
import { getJICFittings, getJICFittingFilterOptions, type JICFittingFilterParams } from '../../../api/jicFittingApi'

export const useJICFittingFilterOptions = () => {
  return useQuery({
    queryKey: ['jic-fitting-filters'],
    queryFn: getJICFittingFilterOptions,
    staleTime: Infinity,
  })
}

export const useJICFittings = (filters: JICFittingFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as JICFittingFilterParams

  return useQuery({
    queryKey: ['jic-fittings', cleanFilters],
    queryFn: () => getJICFittings(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}