import React from 'react'
import JobRole from 'components/jobRole'
import SectionHead from 'components/sectionHead'
import './Experience.css'
import { jobs } from 'constants/Jobs'

const Experience = () => {
	return (
		<section id='experience'>
			<SectionHead lineOne='What I contributed' lineTwo='My experience' />
			<div className='container experience-container'>
				{jobs.reverse().map((job, index) => {
					return (
						<JobRole
							job={job}
							cssClass={
								index === 0 ? 'first' : index === jobs.length - 1 ? 'last' : ''
							}
							key={`${job.companyName} ${index}`}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Experience
