"use client"
import dynamic from "next/dynamic";
import DaysCard from "./components/Cards/DaysCard";
import WeatherCard from "./components/Cards/WeatherCard";
import Navigation from "./components/Layouts/Navigation";
import Sidebar from "./components/Layouts/Sidebar";
import { CityView, City, AddCity } from "./components/Views/CityView";
import ChartView from "./components/Views/ChartView";

const MapView = dynamic(() => import("@/app/components/Views/MapView"), {
	ssr: false
});

export default function Home() {
	return (
		<div className="grid h-full grid-cols-12 grid-rows-7">
			<div className="row-span-7 py-5 pl-5 pr-2.5 "><Sidebar /></div>
			<div className="col-span-3 row-span-4 pt-5 p-2.5">
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
			<div className="col-span-3 row-span-3 p-2.5 pb-5">
				<CityView>
					<City details={
						{
							city: "Mumbai",
							weather: "Clear",
							tempC: 30,
							tempF: 86,
							icon: "/icons/weather/day_clear.svg"
						}
					} />
					<City details={
						{
							city: "Mumbai",
							weather: "Clear",
							tempC: 30,
							tempF: 86,
							icon: "/icons/weather/day_clear.svg"
						}
					} />
					<AddCity />
				</CityView>
			</div>
			<div className="col-span-8 row-span-4 col-start-5 row-start-1 p-2.5 pt-5 pr-5">
				<div className="flex flex-col gap-5 w-full h-full">
					<div className="w-full">
						<Navigation />
					</div>

					<div className="flex w-full h-full gap-5">
						<div className="flex w-5/12">
							<DaysCard />
						</div>
						<div className="flex w-7/12">
							<MapView />
						</div>
					</div>

				</div>

			</div>
			<div className="col-span-8 row-span-3 col-start-5 row-start-5 p-2.5 pr-5 pb-5">
				<ChartView />
			</div>
		</div>
	);
}
