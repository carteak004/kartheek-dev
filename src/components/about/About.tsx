import React from 'react'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import SkillsSphere from './SkillsSphere'

const About = () => {
	return (
		<div className='container'>
			<div className='vertical-container'>
				<div className='two-tab-container'>
					<div>
						<FaAward />
						<h5>Experience</h5>
						<h6>6+ years working</h6>
					</div>
					<div>
						<VscFolderLibrary />
						<h5>Projects</h5>
						<h6>10+ personal and professional</h6>
					</div>
				</div>
				<h4>
					Results-driven Mobile Engineer skilled to design, develop, and
					implement software programs for smartphones and other mobile devices
					with deep knowledge of operating systems, such as Android and iOS
					utilizing data-driven insights to guide development of programs and
					apps that fill a user need utilizing active listening skills.
				</h4>
			</div>
			<div>
				<SkillsSphere />
				<h6>
					* Inspired by{' '}
					<a
						href='https://codepen.io/ryasan86/pen/bGpqdYV'
						target='_blank'
						rel='noreferrer'
					>
						Ryan Santos
					</a>
				</h6>
			</div>
		</div>
	)
}

export default About
