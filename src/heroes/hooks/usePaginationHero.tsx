import { getHeroesByPageAction } from '@/heroes/actions/get-heroes-by-page.action'
import { useQuery } from '@tanstack/react-query'

export const usePaginationHero = (page: number, limit: number, category: string = 'all') => {
  return  useQuery({
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () => getHeroesByPageAction(page, limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
