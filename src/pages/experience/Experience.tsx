import React from 'react'
import JobRole from 'components/jobRole'
import SectionHead from 'components/sectionHead'
import { krise, landing, tcs } from 'constants/Jobs'
import './Experience.css'

const Experience = () => {
	return (
		<section id='experience'>
			<SectionHead lineOne='What I contributed' lineTwo='My experience' />
			<div className='experience-container'>
				<JobRole job={landing} />
				<JobRole job={krise} />
				<JobRole job={tcs} />
			</div>
		</section>
	)
}

export default Experience
