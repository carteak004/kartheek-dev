import React, { FC } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Skill } from 'models/Skill'

interface SkillsListProps {
	header: string
	skills: Skill[]
}

const SkillsList: FC<SkillsListProps> = ({ header, skills }) => {
	return (
		<div className='experience-container'>
			<h2>{header}</h2>
			<div>
				{skills.map((skill) => {
					return (
						<article>
							<BsFillPatchCheckFill />
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
