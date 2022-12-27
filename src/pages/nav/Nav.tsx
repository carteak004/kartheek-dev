import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'

const Nav = () => {
	return (
		<nav>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#'>
				<AiOutlineHome />
			</a>
			<a href='#about'>
				<AiOutlineUser />
			</a>
			<a href='#experience'>
				<BiBookAlt />
			</a>
		</nav>
	)
}

export default Nav
