"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const ActualMapView = () => {
	return (
		<MapContainer 
			center={[51.505, -0.09]}
			zoom={13}
			className="w-full h-full"
			style={{ height: "100%", width: "100%" }}
		>
			<TileLayer className="z-0"
				url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=btChhPyh7ptGtI5gHCe6"
				attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; OpenStreetMap contributors'
			/>
		</MapContainer>
	);
};

export default ActualMapView;
