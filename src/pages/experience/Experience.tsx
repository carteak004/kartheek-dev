import React from 'react'
import JobRole from 'components/jobRole'
import SectionHead from 'components/sectionHead'
import { Krise, Landing, TCS } from 'constants/Jobs'
import './Experience.css'

const Experience = () => {
	return (
		<section id='experience'>
			<SectionHead lineOne='What I contributed' lineTwo='My experience' />
			<div className='experience-container'>
				<JobRole job={Landing} />
				<JobRole job={Krise} />
				<JobRole job={TCS} />
			</div>
		</section>
	)
}

export default Experience
