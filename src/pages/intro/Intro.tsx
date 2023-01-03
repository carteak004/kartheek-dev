import React from 'react'
import avtar from 'assets/avtar.png'
import resume from 'assets/resume.pdf'
import LetsTalk from 'components/letsTalk'
import { Socials } from 'components/socials'
import './Intro.css'

const Intro = () => {
	return (
		<header>
			<div id='header' className='container header-container'>
				<h5>Hello, I'm</h5>
				<h1>Kartheek Chintalapati</h1>
				<h5 className='text-light'>Mobile Engineer</h5>

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
			</div>
		</header>
	)
}

export default Intro
