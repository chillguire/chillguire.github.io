export const projects = [
	{
		name: 'Undergraduate thesis software',
		ID: 'TEG-Software',
		demo: undefined,
		source: 'https://github.com/chillguire/TEG-Software',
		skills: [
			'MongoDB',
			'Express.js',
			'Node.js',
			'WebRTC',
			'Socket.IO',
			'Scrum',
			'Agile',
			'Amazon EC2',
			'AWS CloudFormation',
			'GitHub Actions',
			'nginx',
		],
		description: `
Learning Management System demo for my undergraduate thesis.
> Demo admin user email: **\`admin@admin.co\`**  
> And password (if not registered already): **\`admin\`**
* Developed fully specified REST backend built with Node.js, Express.js and MongoDB.
* Implemented real-time **messaging and video conferencing** functionality using Socket.IO and WebRTC.
* Created server-side rendered frontend following the MVC pattern.
* Delivered user stories per product owner specifications and acceptance criteria within the scrum framework.
* Designed a CI/CD pipeline for automated deployment to EC2 instances using GitHub Actions and AWS CloudFormation, ensuring a smooth and reliable delivery workflow.
`,
		images: [
			'/projects/TEG-Software/TEG-Software_1.png',
			'/projects/TEG-Software/TEG-Software_2.png',
			'/projects/TEG-Software/TEG-Software_3.png',
			'/projects/TEG-Software/TEG-Software_4.png',
			'/projects/TEG-Software/TEG-Software_5.png',
			'/projects/TEG-Software/TEG-Software_6.png',
			'/projects/TEG-Software/TEG-Software_7.png',
			'/projects/TEG-Software/TEG-Software_8.png',
		],
	},
	{
		name: 'General node project',
		ID: 'general-node-project',
		demo: undefined,
		source: 'https://github.com/chillguire/general-node-project',
		skills: [
			'MongoDB',
			'Express.js',
			'Node.js',
			'Socket.IO',
			'Amazon EC2',
			'AWS CloudFormation',
			'GitHub Actions',
			'nginx',
		],
		description: `
General repo to practice features with node.
* Implemented real-time **private and group messaging** functionality with Socket.IO.
* Developed fully specified REST backend built with Node.js, Express.js and MongoDB.
* Created server-side rendered frontend following the MVC pattern.
* Designed a CI/CD pipeline for automated deployment to EC2 instances using GitHub Actions and AWS CloudFormation, ensuring a smooth and reliable delivery workflow.
`,
		images: [
			'/projects/general-node-project/general-node-project_1.png',
			'/projects/general-node-project/general-node-project_2.png',
			'/projects/general-node-project/general-node-project_3.png',
			'/projects/general-node-project/general-node-project_4.png',
		],
	},
	{
		name: 'Portfolio serverless backend',
		demo: undefined,
		source: 'https://github.com/chillguire/chillguire.github.io-serverless-backend',
		skills: [
			'AWS Lambda',
			'Boto3',
			'Python',
			'AWS CloudFormation',
			'GitHub Actions',
			'Amazon Cognito',
			'Amazon EventBridge',
			'Amazon CloudWatch',
			'AWS IAM',
		],
		description: `
Personal portfolio serverless backend made using AWS technologies.

Designed a cost-effective serverless backend for my personal portfolio, making use of AWS's free tier services to showcase projects while minimizing expenses, with the client hosted on GitHub Pages.
* Developed a React-powered frontend, following a layout and component-oriented architecture to ensure a scalable and maintainable codebase.
* Engineered CI/CD pipelines with AWS CloudFormation for infrastructure management and GitHub Actions for a seamless code integration and deployment processes.
* Created Python-based AWS Lambda functions with Boto3 for resource management, orchestrating **automated activation/deactivation capabilities to optimize operational costs**.
* Configured AWS IAM policies to enforce **principle of least privilege**, enhancing the security posture of the serverless application infrastructure.
`,
		images: [
			'/projects/portfolio-serverless-backend/portfolio-serverless-backend_1.png',
		],
	},
	{
		name: 'Old PHP projects',
		demo: undefined,
		source: 'https://github.com/chillguire/old-php-projects',
		skills: [
			'PHP',
			'SQL',
		],
		description: undefined,
		images: [
		],
	},
	{
		name: 'Old Swift projects',
		demo: undefined,
		source: 'https://github.com/chillguire/old-swift-projects',
		skills: [
			'Swift',
			'iOS',
		],
		description: undefined,
		images: [
			'/projects/old-swift-projects/old-swift-projects_1.png',
			'/projects/old-swift-projects/old-swift-projects_2.png',
			'/projects/old-swift-projects/old-swift-projects_3.png',
			'/projects/old-swift-projects/old-swift-projects_4.png',
			'/projects/old-swift-projects/old-swift-projects_5.png',
			'/projects/old-swift-projects/old-swift-projects_6.png',
		],
	},
	{
		name: 'Slides',
		demo: 'https://chillguire.github.io/slides',
		source: 'https://github.com/chillguire/slides',
		skills: [
			'JavaScript',
		],
		description: `Presentation template made using [reveal.js](https://github.com/hakimel/reveal.js/) code with its raw functionality. Dependencies, pdf export among some other extra libraries were removed.`,
		images: [
			'/projects/slides/slides_1.png',
			'/projects/slides/slides_2.gif',
			'/projects/slides/slides_3.png',
			'/projects/slides/slides_4.png',
		],
	},
	{
		name: 'Telecomly',
		demo: 'https://chillguire.github.io/telecomly',
		source: 'https://github.com/chillguire/telecomly',
		skills: [
			'JavaScript',
			'Jekyll',
		],
		description: `Blog-project made for my communications II class.`,
		images: [
			'/projects/telecomly/telecomly_1.png',
			'/projects/telecomly/telecomly_2.png',
			'/projects/telecomly/telecomly_3.png',
			'/projects/telecomly/telecomly_4.png',
		],
	},
	{
		name: 'Data.ly',
		demo: 'https://chillguire.github.io/data.ly',
		source: 'https://github.com/chillguire/data.ly',
		skills: [
			'JavaScript',
			'Jekyll',
		],
		description: `Blog-project made for my data transmission class.`,
		images: [
			'/projects/dataly/dataly_1.png',
			'/projects/dataly/dataly_2.png',
			'/projects/dataly/dataly_3.png',
			'/projects/dataly/dataly_4.png',
		],
	},
	{
		name: 'Numerical methods',
		demo: 'https://chillguire.github.io/numerical-methods',
		source: 'https://github.com/chillguire/numerical-methods',
		skills: [
			'JavaScript',
		],
		description: `Simple web application made in HTML, CSS and JS for my calculus class. It features three of the main methods for the approximation of differential equations such as Runge–Kutta and predictor–corrector by providing the function to be approximated, the step and objective as well as the initial condition.`,
		images: [
			'/projects/numerical-methods/numerical-methods_1.png',
			'/projects/numerical-methods/numerical-methods_2.png',
		],
	},
];
