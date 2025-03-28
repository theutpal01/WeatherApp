"use client";
import React from "react";
import dynamic from "next/dynamic";

// Disable SSR for Leaflet (fixes "window is not defined")
const DynamicMap = dynamic(() => import("./ActualMapView"), {
	ssr: false,
});

const MapView = () => {
	return (
		<div className="w-full h-full overflow-hidden rounded-2xl border-2 border-secondary">
			<DynamicMap />
		</div>
	);
};

export default MapView;
