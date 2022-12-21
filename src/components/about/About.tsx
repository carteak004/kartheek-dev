import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { LetsTalk } from 'components/contact'
import SkillsSphere from './SkillsSphere'
import './About.css'

const About = () => {
	return (
		<>
			<div className='header-container'>
				<h5>Get to know</h5>
				<h2>About me</h2>
			</div>
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
					<LetsTalk />
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
		</>
	)
}

export default About
