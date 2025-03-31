import React from 'react'
import Sidebar from '../components/Layouts/Sidebar'
import Navigation from '../components/Layouts/Navigation'
import DayDetailCard from '../components/Cards/DayDetailCard'

const Days = () => {
	return (
		<div className="grid grid-cols-12 grid-rows-7 h-full">
			<div className="row-span-7 p-2.5 py-5 pl-5">
				<Sidebar />
			</div>
			<div className="col-span-11 p-2.5 pt-5 pr-5">
				<Navigation />
			</div>
			<div className="col-span-11 row-span-6 col-start-2 row-start-2">
				<div className='flex'>
					<DayDetailCard details={
						{
							details: {tempC: 30,
							tempF: 86,
							wind: "10 km/h",
							humidity: "50%",
							visibility: "10 km",
							location: "Mumbai",
							icon: "/icons/weather/day_clear.svg",
							weather: "Clear",
							date: "24 Jan 2025"}
						}
					} />
				</div>
			</div>
		</div>

	)
}

export default Days