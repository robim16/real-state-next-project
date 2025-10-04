import { AmenityIcons, HighlightIcons } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetPropertyQuery } from "@/state/api";
import { HelpCircle } from "lucide-react";
import React from "react";
import { formatEnumString } from "@/lib/utils";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const PropertyLocation = ({ propertyId }: PropertyDetailsProps) => {
    const {
        data: property,
        isError,
        isLoading,
    } = useGetPropertyQuery(propertyId);

    if (isLoading) return <>Loading...</>;
    if (isError || !property) {
        return <>Property not Found</>;
    }

    useEffect(() => {
        if (isLoading || isError || !properties) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: "mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb",
            center: filters.coordinates || [-74.5, 40],
            zoom: 9,
        });

        properties.forEach((property) => {
            const marker = createPropertyMarker(property, map);
            const markerElement = marker.getElement();
            const path = markerElement.querySelector("path[fill='#3FB1CE']");
            if (path) path.setAttribute("fill", "#000000");
        });

        const resizeMap = () => {
            if (map) setTimeout(() => map.resize(), 700);
        };
        resizeMap();

        return () => map.remove();
    }, [isLoading, isError, properties, filters.coordinates]);
    
    return (
        <div className="mb-6">

        </div>
    );
};

export default PropertyLocation;