"use client"
import React from 'react'

const SquareIconBtn = ({ className, onClick, children }: SquareIconBtnType) => {
	return (
		<button type="button" className={`${className} text-xl cursor-pointer outline outline-transparent active:outline-accent duration-150 hover:*:scale-95 shadow active:*:scale-105 bg-secondary text-text-primary p-3 rounded-xl`} onClick={onClick}>
			{children}
		</button>
	)
}

export { SquareIconBtn }