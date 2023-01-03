import { Skill } from 'models/Skill'

export const frontend: Skill[] = [
	{ name: 'CSS', experience: 'Experienced' },
	{ name: 'HTML', experience: 'Experienced' },
	{ name: 'JavaScript', experience: 'Experienced' },
	{ name: 'React Native', experience: 'Experienced' },
	{ name: 'TypeScript', experience: 'Experienced' },
	{ name: 'React', experience: 'Intermediate' },
	// { name: 'Ripple UI', experience: 'Basic' },
	// { name: 'Tailwind', experience: 'Basic' },
]

export const backend: Skill[] = [
	{ name: 'JSON', experience: 'Experienced' },
	{ name: 'REST', experience: 'Experienced' },
	{ name: 'SQL Server', experience: 'Experienced' },
	{ name: 'XML', experience: 'Experienced' },
	// { name: 'JWT', experience: 'Intermediate' },
	{ name: 'MongoDB', experience: 'Intermediate' },
	{ name: 'Node.js', experience: 'Intermediate' },
	// { name: 'Oracle SQL', experience: 'Basic' },
	// { name: 'PostgreSQL', experience: 'Basic' },
]

export const tools: Skill[] = [
	{ name: 'Android Studio', experience: 'Experienced' },
	{ name: 'Figma', experience: 'Experienced' },
	{ name: 'Postman', experience: 'Experienced' },
	{ name: 'SSMS', experience: 'Experienced' },
	{ name: 'VS Code', experience: 'Experienced' },
	{ name: 'Xcode', experience: 'Experienced' },
	{ name: 'Flipper', experience: 'Intermediate' },
	{ name: 'Git', experience: 'Intermediate' },
	{ name: 'GitHub', experience: 'Intermediate' },
	{ name: 'Heroku', experience: 'Intermediate' },
	{ name: 'Adobe Dreamweaver', experience: 'Basic' },
	{ name: 'Adobe Photoshop', experience: 'Basic' },
	{ name: 'AWS', experience: 'Basic' },
	{ name: 'SQL Developer', experience: 'Basic' },
]

export const skills: Skill[] = frontend.concat(backend).concat(tools)
