"use client"

import { useGetPropertyQuery } from '@/state/api'
import { useAppSelector } from '@/state/redux'
import mapboxgl from 'mapbox-gl'
import { useRef } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

const Map = () => {
    const mapContainerRef = useRef(null)
    const filters = useAppSelector((state) => state.global.filters)
    const isFiltersFullOpen = useAppSelector(
        (state) => state.global.isFiltersFullOpen
    )

    const {
        data: properties,
        isLoading,
        isError
    } = useGetPropertyQuery(filters)

    return (
        <div>Map</div>
    )
}

export default Map