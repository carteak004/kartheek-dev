import React from 'react'
import avtar from 'assets/avtar.png'
import resume from 'assets/resume.pdf'
import { LetsTalk } from 'components/contact'

const Header = () => {
	return (
		<>
			<div className='header-container'>
				<h5>Hello, I'm</h5>
				<h2>Kartheek Chintalapati</h2>
				<h5>Fullstack Developer</h5>
			</div>
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
		</>
	)
}

export default Header
