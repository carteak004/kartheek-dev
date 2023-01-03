import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import LetsTalk from 'components/letsTalk'
import SectionHead from 'components/sectionHead'
import SkillsSphere from 'components/skillsSphere'
import { summary } from 'constants/Constants'
import './About.css'

const About = () => {
	return (
		<section id='about'>
			<SectionHead lineOne='Get to know' lineTwo='About me' />
			<div className='container about-container'>
				<div className='about-content'>
					<div className='about-cards'>
						<article className='about-card'>
							<FaAward className='about-icon' />
							<h5>Experience</h5>
							<small>6+ years working</small>
						</article>
						<article className='about-card'>
							<VscFolderLibrary className='about-icon' />
							<h5>Projects</h5>
							<small>10+ combined</small>
						</article>
					</div>
					<p>{summary}</p>
					<LetsTalk />
				</div>
				<div>
					<SkillsSphere />
				</div>
			</div>
		</section>
	)
}

export default About
