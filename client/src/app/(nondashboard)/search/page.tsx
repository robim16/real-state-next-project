import { NAVBAR_HEIGHT } from '@/lib/constants'
import { useAppDispatch, useAppSelector } from '@/state/redux'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage = () => {
  const searchParams = useSearchParams()
  const dispatch = useAppDispatch()
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  )


  return (
    <div
      className='w-full mx-auto px-5 flex flex-col'
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >SearchPage</div>
  )
}

export default SearchPage