import React from 'react'
import SectionHead from 'components/sectionHead'
import SkillsList from 'components/skillsList'
import { backend, frontend } from 'constants/Skills'
import './Experience.css'

const Experience = () => {
	return (
		<section id='experience'>
			<SectionHead lineOne='What skills I have' lineTwo='My experience' />
			<div className='skills-container'>
				<SkillsList header={'Frontend development'} skills={frontend} />
				<SkillsList header={'Backend development'} skills={backend} />
			</div>
		</section>
	)
}

export default Experience
