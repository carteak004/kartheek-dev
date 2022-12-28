import React from 'react'
import SectionHead from 'components/sectionHead'
import SkillsList from 'components/skillsList'
import { backend, frontend } from 'constants/Skills'
import './Skills.css'

const Skills = () => {
	return (
		<section id='skills'>
			<SectionHead lineOne='What I offer' lineTwo='My skills' />
			<div className='skills-container'>
				<SkillsList header={'Frontend development'} skills={frontend} />
				<SkillsList header={'Backend development'} skills={backend} />
			</div>
		</section>
	)
}

export default Skills
