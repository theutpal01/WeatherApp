"use client"
import React from 'react'
import Searchbar from '../Inputs/Searchbar'
import ThemeSwitch from '../Buttons/ThemeSwitch'
import { ProfileBtn, ProfileOption } from '../Buttons/Other'
import { SH3 } from '../typograhy/Headings'

import { RxDashboard } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendar2Week } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdLogout } from 'react-icons/md';
import { Para } from '../typograhy/TextFormats'
import { HDivider } from '../Other/Divider'
import { BiUser } from 'react-icons/bi'

const Navigation = () => {
	return (
		<div className='flex justify-between items-center *:last:grow '>
			<div className='flex gap-5'>
				<Searchbar name="search" placeholder='Search City...' onClick={() => console.log("CLICKED SEARCH")} />
				<ThemeSwitch />
			</div>
			<div className='flex gap-5 justify-end relative items-center'>
				<SH3 className='!text-text-primary !text-lg'>Hi, Utpal</SH3>
				<ProfileBtn name='profile' profileImg='/logo.svg' userName='John Doe'>
					<ProfileOption name='dashboard'>
						<div className='flex items-center gap-5 w-full'>
							<RxDashboard />
							<Para>Dashboard</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='searchLocation'>
						<div className='flex items-center gap-5 w-full'>
							<SlLocationPin />
							<Para>Search Location</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='weekly'>
						<div className='flex items-center gap-5 w-full'>
							<BsCalendar2Week />
							<Para>Show Weekly</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='favourites'>
						<div className='flex items-center gap-5 w-full'>
							<FaRegStar />
							<Para>Favourites</Para>
						</div>
					</ProfileOption>
					<div className='flex flex-col gap-3 pt-2'>
					<HDivider className='!w-full !h-[0.5px]' />
					<ProfileOption name='profile' accent={true}>
						<div className='flex items-center gap-5 w-full'>
							<BiUser />
							<Para>My Profile</Para>
						</div>
					</ProfileOption>
					</div>
				</ProfileBtn>
			</div>
		</div>
	)
}

export default Navigation