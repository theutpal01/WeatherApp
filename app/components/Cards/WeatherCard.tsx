import React from 'react'
import { FaWind, FaRegEye } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { VDivider } from '../Other/Divider';
import { Caption, Para } from '../typograhy/TextFormats';
import { MdLocationOn } from 'react-icons/md';
import { H2 } from '../typograhy/Headings';
import Image from 'next/image';

const WeatherCard = ({ details }: WeatherDailyType) => {
	return (
		<div className='w-full flex flex-col justify-between bg-gradient-to-b from-sky-300 to-accent h-full rounded-2xl text-text-primary p-5'>
			<div className=''>
				<Para className='font-thin !text-sm'>Today, {details.date}</Para>
				<div className='flex w-fit gap-2 justify-between items-center'>
					<MdLocationOn />
					<Para>{details.location}</Para>
				</div>

				<div className='flex flex-col w-full justify-center items-center pb-4 h-full gap-2'>
					<Para>{details.weather}</Para>
					<H2 className='lg:!text-5xl xl:!text-6xl font-bold !text-transparent bg-gradient-to-b from-text-primary to-text-secondary/30 bg-clip-text'>{details.tempC}°</H2>
					<Image className='aspect-square' alt={details.weather} src={details.icon} width={120} height={120} />
				</div>

			</div>

			<div className='flex w-full justify-between items-center *:text-center *:flex *:flex-col *:items-center'>
				<div className='p-5'>
					<FaWind className='text-2xl' />
					<Para>{details.wind}</Para>
					<Caption>Wind</Caption>
				</div>
				<VDivider />
				<div className='p-5'>
					<FaDroplet className='text-2xl' />
					<Para>{details.humidity}</Para>
					<Caption>Humidity</Caption>
				</div>
				<VDivider />
				<div className='p-5'>
					<FaRegEye className='text-2xl' />
					<Para>{details.visibility}</Para>
					<Caption>Visibility</Caption>
				</div>
			</div>
		</div>
	)
}

export default WeatherCard