import React from 'react'
import Sidebar from '../components/Layouts/Sidebar'
import Navigation from '../components/Layouts/Navigation'

const Search = () => {
	return (
		<div className="grid grid-cols-12 grid-rows-7 h-full">
			<div className="row-span-7 p-2.5 py-5 pl-5">
				<Sidebar />
			</div>
			<div className="col-span-11 p-2.5 pt-5 pr-5">
				<Navigation />
			</div>
			<div className="col-span-11 row-span-6 col-start-2 row-start-2">3</div>
		</div>

	)
}

export default Search