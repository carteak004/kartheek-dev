import React from 'react'
import { FC } from 'react'
import './SectionHead.css'

interface SectionHeadProps {
	lineOne: string
	lineTwo: string
	lineThree?: string
}

const SectionHead: FC<SectionHeadProps> = ({ lineOne, lineTwo, lineThree }) => {
	return (
		<div className='head-container'>
			<h5>{lineOne}</h5>
			<h2>{lineTwo}</h2>
			{lineThree ? <h5>{lineThree}</h5> : null}
		</div>
	)
}

export default SectionHead
