import React from 'react'
import SkillsList from 'components/skillsList'
import { backend, frontend } from 'constants/Skills'
import './Experience.css'

const Experience = () => {
	return (
		<section id='experience'>
			<div className='header-container'>
				<h5>What skills I have</h5>
				<h2>My experience</h2>
			</div>
			<div className='skills-container'>
				<SkillsList header={'Frontend development'} skills={frontend} />
				<SkillsList header={'Backend development'} skills={backend} />
			</div>
		</section>
	)
}

export default Experience
