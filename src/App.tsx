import React from 'react'
import About from 'pages/about'
import Contact from 'pages/contact'
import Experience from 'pages/experience'
import Footer from 'pages/footer'
import Intro from 'pages/intro'
import Nav from 'pages/nav'
import Portfolio from 'pages/portfolio'
import Recommendations from 'pages/recommendations'
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
			<Recommendations />
			<Contact />
			<Footer />
		</>
	)
}

export default App
