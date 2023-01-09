import React from 'react'
import { FC } from 'react'
import './SectionHead.css'

interface SectionHeadProps {
	lineOne: string
	lineTwo: string
}

const SectionHead: FC<SectionHeadProps> = ({ lineOne, lineTwo }) => {
	return (
		<div className='section-head-container'>
			{/* <h5>{lineOne}</h5> */}
			<h2>{lineTwo}</h2>
		</div>
	)
}

export default SectionHead
