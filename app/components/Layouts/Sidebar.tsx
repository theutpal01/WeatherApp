'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Logo from './Logo'
import Lin from '../typograhy/Link';
import { HDivider } from '../Other/Divider'

import { RxDashboard } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar2Week } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col justify-between shadow bg-secondary h-full rounded-2xl max-w-20">
			<div className="row-span-5">
				<div className='w-full py-5 flex flex-col justify-between items-center' >
					<Logo logoPath='/logo.svg' />
				</div>

				<HDivider className='my-3' />

				<Lin href='/' className='py-5 flex justify-center items-center' active={pathname === '/'}>
					<RxDashboard className='text-2xl' />
				</Lin>

				<Lin href='/search' className='py-5 flex justify-center items-center' active={pathname === '/search'}>
					<SlLocationPin className='text-2xl' />
				</Lin>

				<Lin href='/days' className='py-5 flex justify-center items-center' active={pathname === '/days'}>
					<BsCalendar2Week className='text-2xl' />
				</Lin>

				<Lin href='/favourites' className='py-5 flex justify-center items-center' active={pathname === '/favourites'}>
					<FaRegStar className='text-2xl' />
				</Lin>
			</div>
			<div className="row-start-7 pb-5 hidden">
				<HDivider className='my-3' />
				<Lin href='/' className='py-5 flex justify-center items-end'>
					<MdLogout className='text-2xl' />
				</Lin>
			</div>
		</div>
	)
}

export default Sidebar