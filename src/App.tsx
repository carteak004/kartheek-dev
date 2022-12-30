import React from 'react'
import About from 'pages/about'
import Experience from 'pages/experience'
import Intro from 'pages/intro'
import Nav from 'pages/nav'
import Portfolio from 'pages/portfolio'
import Skills from 'pages/skills'

const App = () => {
	return (
		<>
			<Intro />
			<Nav />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
		</>
	)
}

export default App
