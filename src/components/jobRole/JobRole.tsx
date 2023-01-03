import React, { FC } from 'react'
import { BiCheck } from 'react-icons/bi'
import { Job } from 'models/Job'
import './JobRole.css'

interface JobRoleProps {
	job: Job
}

const JobRole: FC<JobRoleProps> = ({ job }) => {
	return (
		<article className='job-role'>
			<div className='company-name'>
				<h3>{job.companyName}</h3>
			</div>
			<ul className='responsibilities-list'>
				{job.responsibilities.map((responsibility) => {
					return (
						<li key={responsibility}>
							<BiCheck className='list-icon' width={150} height={150} />
							<p>{responsibility}</p>
						</li>
					)
				})}
			</ul>
		</article>
	)
}

export default JobRole
