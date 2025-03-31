"use client"
import React from 'react'
import Sidebar from '../components/Layouts/Sidebar'
import Navigation from '../components/Layouts/Navigation'
import WeatherCard from '../components/Cards/WeatherCard'
import { Para } from '../components/typograhy/TextFormats'
import dynamic from 'next/dynamic'

const MapView = dynamic(() => import("@/app/components/Views/MapView"), {
	ssr: false
});

const Search = () => {
	return (
		<div className="grid grid-cols-12 grid-rows-10 h-full">
			<div className="row-span-10 p-2.5 py-5 pl-5">
				<Sidebar />
			</div>
			<div className="col-span-11 p-2.5 pt-5 pr-5 z-50">
				<Navigation />
			</div>
			<div className="col-span-3 row-span-9 col-start-2 grid grid-rows-12 grid-cols-1 row-start-2 p-2.5 pb-5">
				<div className='row-span-8 z-0 rounded-2xl pb-5 h-full'>
					<WeatherCard details={
						{
							tempC: 30,
							tempF: 86,
							wind: "10 km/h",
							humidity: "50%",
							visibility: "10 km",
							location: "Mumbai",
							icon: "/icons/weather/day_clear.svg",
							weather: "Clear",
							date: "24 Jan 2025"
						}
					} />
				</div>
				<div className='row-span-4 bg-secondary rounded-2xl'>
					<div className='flex justify-center items-center h-full'>
						<Para>More Details</Para>
					</div>
				</div>
			</div>
			<div className="col-span-8 row-span-9 col-start-5 row-start-2 p-2.5 pb-5 pr-5 z-0">
				<div className='bg-secondary w-full h-full rounded-2xl'>
					<MapView />
				</div>
			</div>
		</div>

	)
}

export default Search