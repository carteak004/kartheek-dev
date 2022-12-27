import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import './Nav.css'

const Nav = () => {
	const [activeSection, setActiveSection] = useState('#')

	return (
		<nav>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a
				href='#'
				onClick={() => setActiveSection('#')}
				className={activeSection === '#' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveSection('#about')}
				className={activeSection === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveSection('#experience')}
				className={activeSection === '#experience' ? 'active' : ''}
			>
				<BiBook />
			</a>
			<a
				href='#services'
				onClick={() => setActiveSection('#services')}
				className={activeSection === '#services' ? 'active' : ''}
			>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveSection('#contact')}
				className={activeSection === '#contact' ? 'active' : ''}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	)
}

export default Nav
