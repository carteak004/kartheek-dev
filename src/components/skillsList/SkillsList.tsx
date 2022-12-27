import React, { FC } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Skill } from 'models/Skill'
import './SkillsList.css'

interface SkillsListProps {
	header: string
	skills: Skill[]
}

const SkillsList: FC<SkillsListProps> = ({ header, skills }) => {
	return (
		<div className='section-container'>
			<h3>{header}</h3>
			<div>
				{skills.map((skill) => {
					return (
						<article className='skill-article'>
							<BsFillPatchCheckFill className='skill-icon' />
							<div>
								<h4>{skill.name}</h4>
								<small>{skill.experience}</small>
							</div>
						</article>
					)
				})}
			</div>
		</div>
	)
}

export default SkillsList
