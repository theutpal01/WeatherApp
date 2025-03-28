"use client"
import Image from 'next/image'
import React from 'react'
import { Caption, Para } from '../typograhy/TextFormats'
import { H2 } from '../typograhy/Headings'
import { SquareIconBtn } from '../Buttons/Primary'
import { MdAdd } from 'react-icons/md'

const CityView = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col gap-5'>
			{children}
		</div>
	)
}


const City = ({ details }: CityType) => {
	return (
		<div className='flex justify-between items-center bg-secondary rounded-2xl max-h-20 p-5'>
			<Image src={details.icon} width={55} height={55} alt={details.weather} />
			<div>
				<Para>{details.city}</Para>
				<Caption>{details.weather}</Caption>
			</div>
			<H2 className='!text-5xl'>{details.tempC}°</H2>
		</div>
	)
}

const AddCity = () => {
	return (
		<div className='flex gap-5 items-center border-4 border-dashed border-text-secondary rounded-2xl max-h-20 p-5'>
			<SquareIconBtn onClick={() => console.log("CLICKED A BTN")}>
				<MdAdd />
			</SquareIconBtn>
			<Caption className='text-wrap'>Add the cities you are interested in.</Caption>
		</div>
	)
}

export { CityView, City, AddCity }