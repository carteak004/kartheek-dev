import React from 'react'
import { PortfolioProject } from 'components/project'
import SectionHead from 'components/sectionHead'
import { projects } from 'constants/Projects'
import './Portfolio.css'

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<SectionHead lineOne='My recent work' lineTwo='Portfolio' />
			<div className='container portfolio-container'>
				{projects.map((project) => {
					return <PortfolioProject project={project} key={project.name} />
				})}
			</div>
		</section>
	)
}

export default Portfolio
