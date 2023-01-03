import React from 'react'
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
		</footer>
	)
}

export default Footer
