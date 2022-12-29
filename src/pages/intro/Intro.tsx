import React from 'react'
import avtar from 'assets/avtar.png'
import resume from 'assets/resume.pdf'
import LetsTalk from 'components/letsTalk'
import SectionHead from 'components/sectionHead'
import { Socials } from 'components/socials'
import './Intro.css'

const Intro = () => {
	return (
		<header>
			<section id='header' className='container header-container'>
				<SectionHead
					lineOne="Hello, I'm"
					lineTwo='Kartheek Chintalapati'
					lineThree='Fullstack Developer'
				/>
				<div className='cta'>
					<a className='btn' href={resume} download>
						Download resume
					</a>
					<LetsTalk />
				</div>
				<Socials />
				<div className='me'>
					<img src={avtar} alt='Avtar' />
				</div>
				<a href='#contact' className='scroll-down'>
					Scroll down
				</a>
			</section>
		</header>
	)
}

export default Intro
