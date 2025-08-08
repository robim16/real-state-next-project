import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

const FiltersBar = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const pathname = usePathname()
    
    return (
        <div>FiltersBar</div>
    )
}

export default FiltersBar