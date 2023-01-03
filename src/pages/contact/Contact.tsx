import React from 'react'
import SectionHead from 'components/sectionHead'
import './Contact.css'

const Contact = () => {
	return (
		<section id='contact'>
			<SectionHead lineOne='Get in touch' lineTwo='Contact me' />
			<div className='container contact-container'>
				<form action=''>
					<input
						type='text'
						name='name'
						placeholder='Your full name'
						required
					/>
					<input type='email' name='email' placeholder='Your email' required />
					<textarea
						name='message'
						rows={7}
						placeholder='Your message'
						required
					/>

					<button className='btn btn-primary' type='submit'>
						Send message
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
