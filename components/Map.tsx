"use client";
import React, { useEffect } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { MoveDown } from "lucide-react";
import { Prisma } from "@prisma/client";
import { useMouseWheel } from "./MouseWheelContext";

const containerStyle = {
  width: "100%",
  height: "100%",
};

interface MapProps {
  memories?: Prisma.MemoryGetPayload<{}>[];
}

const Map = ({ memories }: MapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
    libraries: ["places"],
  });
  const center = {
    lat: 33.520008,
    lng: 10.404954,
  };
  const zoom = 3.4;

  const { disableMouseWheel, enableMouseWheel, allowMouseWheel } =
    useMouseWheel();

  const handleMouseEnter = () => {
    disableMouseWheel();
  };

  const handleMouseLeave = () => {
    enableMouseWheel();
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full h-full p-16 flex flex-col gap-8">
      <div className="flex items-center justify-start shrink-0 w-full">
        <h1 className="text-6xl font-bold">Our memories</h1>
        <div></div>
        <div className="ml-auto">
          <MoveDown />
        </div>
        <pre>{JSON.stringify(allowMouseWheel)}</pre>
      </div>
      <div
        className="grow w-full rounded-3xl overflow-hidden shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{
            disableDefaultUI: true,
          }}
          id="map"
        >
          {memories?.map((memory, idx: number) => (
            <div>M</div>
            // <MarkerF key={memory.id} position={memory.location.coordinates} />
            // <OverlayView
            //   mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            //   key={location.placeId}
            //   position={location.coordinates}

            //   onLoad={() => console.log('Marker Loaded')}
            // >
            //   <Icons.marker className="w-8" />
            // </OverlayView>
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
