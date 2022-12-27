import React from 'react'
import avtar from 'assets/avtar.png'
import resume from 'assets/resume.pdf'
import LetsTalk from 'components/letsTalk'
import SectionHead from 'components/sectionHead'
import './Intro.css'

const Intro = () => {
	return (
		<section id='header'>
			<SectionHead
				lineOne="Hello, I'm"
				lineTwo='Kartheek Chintalapati'
				lineThree='Fullstack Developer'
			/>
			<div>
				<a
					className='download-resume'
					href={resume}
					target='_blank'
					rel='noreferrer'
				>
					Download resume
				</a>
				<LetsTalk />
			</div>
			<img src={avtar} alt='Avtar' />
		</section>
	)
}

export default Intro
