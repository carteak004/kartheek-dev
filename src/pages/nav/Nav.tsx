import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
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
		</nav>
	)
}

export default Nav
