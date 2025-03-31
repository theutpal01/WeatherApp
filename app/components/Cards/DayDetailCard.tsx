import React from 'react'
import { Caption, Para } from '../typograhy/TextFormats'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { FaRegEye, FaWind } from 'react-icons/fa'
import { HDivider, VDivider } from '../Other/Divider'
import { FaDroplet } from 'react-icons/fa6'
import { H2 } from '../typograhy/Headings'

const DayDetailCard = ({ details, today = false }: { details: WeatherDailyType, today?: boolean }) => {
	return (
		<div className={`w-full flex flex-col justify-between ${today ? 'bg-gradient-to-b from-sky-300 to-accent' : 'bg-secondary'} h-full rounded-2xl text-text-primary p-5 max-w-60 min-h-96 justify-between`}>
			<Para className='font-thin !text-sm'>Today, {details.details.date}</Para>
			{/* <div className='flex w-fit gap-2 justify-between items-center'>
							<MdLocationOn />
							<Para>{details.location}</Para>
						</div> */}

			<div className='flex pt-5 justify-center w-full items-center pb-4 h-full gap-2'>
				<div className='w-full text-left'>
				<Para className='pl-1'>{details.details.weather}</Para>
				<H2 className='lg:!text-5xl xl:!text-6xl font-bold !text-transparent bg-gradient-to-b from-text-primary to-text-secondary/30 bg-clip-text'>{details.details.tempC}°</H2>
				</div>
				<Image className='aspect-square' alt={details.details.weather} src={details.details.icon} width={80} height={80} />
			</div>

			<div className='flex w-full justify-between items-center *:text-center *:flex *:flex-col *:items-center'>
				<HDivider className='' />

			</div>
		</div>
	)
}

export default DayDetailCard