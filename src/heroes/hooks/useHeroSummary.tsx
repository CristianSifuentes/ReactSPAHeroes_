import { getSummaryAction } from '@/heroes/actions/get-summary.action'
import { useQuery } from '@tanstack/react-query'
import React, { use } from 'react'

export const useHeroSummary = () => {
//   const { data: summary } = useQuery({
//     queryKey: ['summary-information'],
//     queryFn: () => getSummaryAction(),
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   })

//   return summary

return  useQuery({
    queryKey: ['summary-information'],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
