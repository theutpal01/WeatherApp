import React from 'react'
import { H3 } from '../typograhy/Headings'
import Lin from '../typograhy/Link'
import { Caption, Para } from '../typograhy/TextFormats'
import Image from 'next/image'

const DaysCard = () => {
	return (
		<div className='flex flex-col w-full h-full justify-between bg-secondary grow rounded-2xl p-2 pb-3'>
			<div className='flex justify-between items-baseline w-full p-3'>
				<H3 className='!text-2xl'>Next 7 Days</H3>
				<Lin className='!text-accent' href='/'>See all</Lin>
			</div>
			<div className='flex flex-col gap-3 w-full p-3'>
				<div className='grid grid-cols-3 grid-rows-1 w-full items-center'>
					<Para>Monday</Para>
					<div className='flex items-center gap-3'>
						<Image className='w-8 h-8' src="/icons/weather/cloudy.svg" alt='cloudy' width={20} height={20} />
						<Caption>Cloudy</Caption>
					</div>
					<Para className='text-right w-full'>26/18</Para>
				</div>

				<div className='grid grid-cols-3 grid-rows-1 w-full items-center'>
					<Para>Tuesday</Para>
					<div className='flex items-center gap-3'>
						<Image className='w-8 h-8' src="/icons/weather/cloudy.svg" alt='cloudy' width={20} height={20} />
						<Caption>Cloudy</Caption>
					</div>
					<Para className='text-right w-full'>26/18</Para>
				</div>

				<div className='grid grid-cols-3 grid-rows-1 w-full items-center'>
					<Para>Wednesday</Para>
					<div className='flex items-center gap-3'>
						<Image className='w-8 h-8' src="/icons/weather/cloudy.svg" alt='cloudy' width={20} height={20} />
						<Caption>Cloudy</Caption>
					</div>
					<Para className='text-right w-full'>26/18</Para>
				</div>

				<div className='grid grid-cols-3 grid-rows-1 w-full items-center'>
					<Para>Thursday</Para>
					<div className='flex items-center gap-3'>
						<Image className='w-8 h-8' src="/icons/weather/cloudy.svg" alt='cloudy' width={20} height={20} />
						<Caption>Cloudy</Caption>
					</div>
					<Para className='text-right w-full'>26/18</Para>
				</div>
			</div>

			<div className='bg-gradient-to-b from-sky-300 to-accent mt-2 rounded-2xl p-5 w-full'>
				<div className='grid grid-cols-3 grid-rows-1 w-full items-center'>
					<Para>Thursday</Para>
					<div className='flex items-center gap-3'>
						<Image className='w-8 h-8' src="/icons/weather/cloudy.svg" alt='cloudy' width={20} height={20} />
						<Caption className='!text-text-primary'>Cloudy</Caption>
					</div>
					<Para className='text-right w-full'>26/18</Para>
				</div>
			</div>
		</div>
	)
}

export default DaysCard