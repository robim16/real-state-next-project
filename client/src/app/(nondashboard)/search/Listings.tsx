import { useGetAuthUserQuery } from '@/state/api'
import React from 'react'

const Listings = () => {
  const { data: authUser } = useGetAuthUserQuery()
  return (
    <div>Listing</div>
  )
}

export default Listings