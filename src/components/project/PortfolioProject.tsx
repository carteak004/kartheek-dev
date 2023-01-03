import React, { FC } from 'react'
import { Project } from 'models/Project'
import './PortfolioProject.css'

interface PortfolioProjectProps {
	project: Project
}

const PortfolioProject: FC<PortfolioProjectProps> = ({ project }) => {
	return (
		<a
			href={project.link}
			target='_blank'
			rel='noreferrer'
			className='project-container'
		>
			<article>
				<h4>{project.name}</h4>
				<small>{project.description}</small>
			</article>
		</a>
	)
}

export default PortfolioProject
