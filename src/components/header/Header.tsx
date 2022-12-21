import React from 'react'
import { LetsTalk } from 'components/contact'
import avtar from 'assets/avtar.png'

const Header = () => {
	return (
		<>
			<div className='header-container'>
				<h5>Hello, I'm</h5>
				<h2>Kartheek Chintalapati</h2>
				<h5>Fullstack Developer</h5>
			</div>
			<div>
				<button className='download-resume'>Download resume</button>
				<LetsTalk />
			</div>
			<img src={avtar} alt='Avtar' />
		</>
	)
}

export default Header
