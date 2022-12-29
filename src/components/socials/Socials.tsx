import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Socials.css'

const Socials = () => {
	return (
		<div className='header-socials'>
			<a
				href='https://www.linkedin.com/in/kchintalapati/'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin />
			</a>
			<a href='https://github.com/carteak004' target='_blank' rel='noreferrer'>
				<FaGithub />
			</a>
		</div>
	)
}

export default Socials
