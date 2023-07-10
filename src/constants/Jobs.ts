import { Job } from 'models/Job'

export const jobs: Job[] = [
	{
		companyName: 'TATA Consultancy Services',
		responsibilities: [
			'Provided application support for TATA Sky by resolving issues raised by customers',
			'Automated daily tasks by writing CRUD queries',
			'Performed bulk database updates by writing pointers and queries',
			'Documented all the tasks for the production and application support team',
		],
	},
	{
		companyName: 'K-Rise Systems',
		responsibilities: [
			'Built and deployed the EASYProcess mobile app from scratch all by myself',
			'Reviewed requirements for the project to understand the scope of what the customer is asking',
			'Created the database schema for the project, taking into account the need for the project/portal to be organic',
			"Assumed full responsibility to understand the Client's application and all its related code",
			'Developed the application and passed this knowledge on to other K-Rise staff or to the Client IT Staff',
			'Upgraded the existing applications to use the newest features',
		],
	},
	{
		companyName: 'Landing',
		responsibilities: [
			'Worked on both member and host apps',
			'Fixed bugs, wrote tests, and diagnosed performance issues',
			'Participated in code reviews and pair programming sessions',
			'Owned features, from planning to deployment and maintenance',
			'Worked directly with product teams and business owners to create best UX',
			'Implemented new features and refactored existing features, while keeping in mind performance, quality and backwards compatibility',
			'Collaborated with a thoughtful, motivated team of engineers to understand tradeoffs of different solutions',
		],
	},
	{
		companyName: 'NYC DHS (contractor)',
		responsibilities: [
			'Upgraded NYC HOPE Mobile application from React Native version 0.63 to 0.71',
			'Updated the survey module of the mobile app to implement the dynamic auto answering of questions',
			'Integrated fastlane to the mobile application to automate deployments to App Store, Play Store and Microsoft App center',
			'Refactored HOPE Web registration portal to work with the new WordPress site',
			'Added new features and updated functionality of HOPE admin dashboard',
		],
	},
	{
		companyName: 'Thryv',
		responsibilities: [
			'Develop, implement, and test applications for android, iOS, and similar mobile device platforms',
			'Review application requirements and anticipate system needs in order to ensure availability and scalability',
			'Review design and method recommendations to optimize efficiency',
			'Maintain applications by performing necessary upgrades to meet the ever-growing industry standards and demands',
			'Coordinate releases for new or revised software or systems and monitor performance',
			'Collaborate with various teams(product, marketing, sales) and users to define application requirements and/ or necessary modifications',
			'Develop automated release tools meant to allow for continuous build and release processes',
			'Ship production ready React Native apps',
		],
	},
]
