
import profile from './profile.png';
import road from './road.png';

import { faAppStore, faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Minh",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		}
	],
}
export const intro = {
	title: "Hi, I Am Minh",
	description: "Data Scientist",
	subdescription: "Passionate about Data, Tech and Life",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		}
	],
}

export const about = {
	title: "Who I am",
	description: [
		"As a Data Scientist, I believe in the power of data storytelling to create impactful, I passionate about leveraging data and technology to uncover patterns and trends that reveal business insights.",
		"With a love for coding and a thirst for learning. Skilled in a range of machine learning techniques and technologies, I have a demonstrated ability to deliver impactful solutions.",
		"Let's connect and explore how we can collaborate to harness the power of data for positive change."
		
	],
	buttons: [
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1FnAy41-x56OKqz_KFTw064dUdeBtVhD9-P5i9HqPSvI/edit?usp=sharing",
			isPrimary: false,
		},
	],
	skills: [
		{
			title: "Python",
			level: "90%"
		},
		{
			title: "Machine Learning",
			level: "85%"
		},
		{
			title: "Data",
			level: "70%"
		},
		{
			title: "DevOps",
			level: "60%"
		},

	]
}

export const work = {
	title: "Work Experience",
	experience: [
		{
			title: "Data Scientist",
			company: "Dai-ichi Life",
			period: "02/2023 - 07/2023",
			description: [
				"Maintained and developed a data pipeline to extract, transform, and load various amounts of data from various sources into the data lake. Optimized SQL queries to improve the performance by 20%.",
				"Ingested, transformed, stored clean data for analytics in the data warehouse, Built dashboards to visualize insurance contract statistics.",
				"Performed feature engineering to select the important features. Implemented, trained, and fine-tuned models.",
				"Developed deep learning models for mobile devices (Android and IOS), collaborating with the mobile team for seamless integration and improving customer satisfaction and cutting down on wait times by 30%.",
				"Assisted team leader in implementing and evaluating AI applicability in the insurance industry. Topics: chatbots, chatGPT, LLMs."
		]
		},
		{
			title: "Machi Learning Engineer, Team Leader",
			company: "GMO-Z.com RUNSYSTEM",
			period: "01/2022 - 12/2022",
			description: [
				"Led the design and development of enterprise-level microservice applications such as SmartOCR and SmartKYC, driving over $2 million of revenue every year using the latest technologies.",
				"Continuous Integration/Deployment Pipeline Integration using Gitlab and Jenkins, Automated testing (unit, load, A/B), deployment, rollback on staging and production environments. Reduced deployment time by 50%.",
				"Reported directly to CTO: providing updates, strategic insights, and innovative solutions on critical technological advancements.",
				"Optimize the Agile methodologies. Clarifying objectives. Prioritizing tasks based on urgency and importance. Monitoring task planning."
			]
		},
		{
			title: "Machi Learning Engineer",
			company: "GMO-Z.com RUNSYSTEM",
			period: "11/2018 - 12/2021",
			description: [
				"Design and development of several AI products, from identifying system requirements and partner dependencies to software implementation, defining databases, API interfaces, and documentation. Delivering significant profits for the company.",
				"Analyzed, cleaned, and transformed big data to enhance training data, which contributed to increasing accuracy by 20%.",
				"Designed and implemented scalable and secure APIs with load balancing, A/B testing, and error handling. Utilized scripting to automate the deployment and management of machine learning models, supporting troubleshooting Linux problems.",
				"Deployed services on cloud platforms using AWS, leveraging services such as EC2, S3, and Lambda"
			]
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Candlestick-Patterns-Scan",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet consequat leo in iaculis. Aliquam tincidunt fringilla nibh, in suscipit lectus commodo ut. Nunc condimentum arcu a odio sodales pulvinar. Suspendisse fermentum dolor id neque pretium, at iaculis purus lacinia. Donec pretium neque sed libero sagittis sagittis.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/minhpaulit",
				},
			]
		},
		{
			title: "Order-Taking-App-IOS",
			description: "Integer accumsan eget massa et mattis. Donec nec quam quis augue efficitur aliquet. Maecenas id elit non purus pulvinar varius. Nam in lorem ac nibh volutpat efficitur vitae eget arcu. Praesent eu libero non purus facilisis tincidunt in sit amet justo. Maecenas eu eros nulla. Vestibulum tincidunt justo nec libero pellentesque dignissim.",
			icons: [
				{
					icon: faAppStore,
					link: "",
				},
				{
					icon: faGithub,
					link: "https://github.com/minhpaulit",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/minhpaulit",
				},
			]
		},
	],
}

export const contact = {
	title: "Contact",
	description: [
		// "Interested in collaborating or discussing how data can drive your business forward?",
		"I'd love to hear from you!",
		// "Hire me!"
	],
	image: road.src,
	buttons: [
		{
			title: "minhpaulit@gmail.com",
			link: false,
			isPrimary: true,
			icon: faEnvelopeOpen
		},
		{
			title: "+1 (506) 471 6047",
			link: false,
			isPrimary: true,
			icon: faPhone
		},
		{
			title: "Fredericton, NB",
			link: false,
			isPrimary: true,
			icon: faLocationDot
		},
		{
			title: false,
			link: "https://www.linkedin.com/in/minhvdh/",
			isPrimary: false,
			icon: faLinkedin
		},
		{
			title: false,
			link: "https://github.com/minhpaulit",
			isPrimary: false,
			icon: faGithub
		},
		{
			title: false,
			link: "https://www.facebook.com/VDHMinh",
			isPrimary: false,
			icon: faFacebook
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Minh Vuong | AI Engineer | Portfolio",
	description: "An AI Engineer, Expertise in computer vision and devOps",
	image: profile.src,
}
