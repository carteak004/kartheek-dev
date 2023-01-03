import React, { FormEvent, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ReactComponent as Loader } from 'assets/loading.svg'
import SectionHead from 'components/sectionHead'
import './Contact.css'

const Contact = () => {
	const [isLaoading, setIsLoading] = useState(false)
	const contactForm = useRef<HTMLFormElement>(null)

	const sendEmail = (e: FormEvent) => {
		setIsLoading(true)

		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
				contactForm.current || '',
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
			)
			.then(
				(result) => {
					console.log(result.text)
					contactForm.current?.reset() // To reset fields after sending the email
				},
				(error) => {
					console.log(error.text)
				}
			)

		setIsLoading(false)
	}

	return (
		<section id='contact'>
			<SectionHead lineOne='Get in touch' lineTwo='Contact me' />
			<div className='container contact-container'>
				<form ref={contactForm} onSubmit={sendEmail}>
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

					<button
						className='btn btn-primary submit-button'
						type='submit'
						disabled={isLaoading}
					>
						{isLaoading ? <Loader className='spinner' /> : 'Send message'}
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
