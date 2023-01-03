import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#' className='footer-logo'>
				Kartheek Chintalapati
			</a>

			<ul className='permalinks'>
				<li>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#recommendations'>Recommendations</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer-socials'>
				<a
					href='https://www.linkedin.com/in/kchintalapati/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				<a
					href='https://github.com/carteak004'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub />
				</a>
				<a
					href='https://www.instagram.com/carteak004/'
					target='_blank'
					rel='noreferrer'
				>
					<FiInstagram />
				</a>
			</div>
		</footer>
	)
}

export default Footer
