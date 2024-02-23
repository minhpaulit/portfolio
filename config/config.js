
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

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
	description: "Machine Learning Engineer",
	subdescription: "Love Data, Love Coding",
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
		"I am a friendly and sociable individual who loves sports. I find myself strong in logical and analytical abilities,\
		possessing a positive attitude, eager to learn and innovate at work. I am confident in the experiences I have\
		gained in problem-solving, both independently as well as team work. I always strive to achieve my goal of\
		becoming an expert in the field of AI/ML and aspire to take on a leadership role in AI research."
	],
	buttons: [
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/1d_75xwyj7JG-rQQoZfxwB7BeJGcgulFP5SdsWmPW1hk/edit?usp=sharing",
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
			title: "Machi Learning Engineer",
			company: "Dai-ichi Life",
			period: "02/2023 - 07/2023",
			description: [
				"Maintained and constructed a data pipeline to synthesize large data from numerous sources and optimized SQL queries to improve the performance by 20%. Built a dashboard to monitor insurance contract statistics using Python, SQL, Hadoop, Hive, Spark, and Superset.",
				"Enhanced processing pipeline of ID OCR (Optical character recognition) system, cutting processing time by 50% from 1 second to 0.5 seconds, increasing accuracy from 97% to 99%. using MaskRCNN, Transformer based OCR, RabbitMQ, and Fast API.",
				"Developed AI models for mobile devices (Android & IOS), collaborating with the mobile team for seamless integration, improving customer satisfaction and cutting down on wait times by 30% using TF-Lite, Pytorch Mobile, Scikit-learn, Java, Swift, C++.",
				"Assisted team leader in implementing and evaluating AI applicability in the insurance industry. Topics: chatbot, chatGPT, LLMs, crowd counting, voice recognition, and speaker diarization."
		]
		},
		{
			title: "Machi Learning Engineer, Team Leader",
			company: "GMO-Z.com RUNSYSTEM",
			period: "01/2022 - 12/2022",
			description: [
				"Led the design and development of multiple enterprise-level microservice applications such as SmartOCR, SmartKYC, driving over $2 million of revenue every year using the latest technologies of AWS, DBNet++, YOLOs, Transformers, BERTs,++, GANs.",
				"Continuous Integration/Deployment Pipeline Integration using Gitlab and Jenkins, Automated Unit/stress and A/B testing, deployment, rollback on both staging and production environments. Reduced deployment time by 50%.",
				"Reported directly to CTO: providing updates, strategic insights, and innovative solutions on critical technological advancements.",
				"Clarifying objectives and accomplishments, prioritizing tasks based on urgency and importance, and impact. Monitoring task planning.",
				"Optimized workflows and processes, exchanged feedback and evaluated work results, and provided support and guidance to junior staff.",
				"Recognized for great mentorship with the ‘Excellent Mentor of the Month’ award."
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
			title: "orderTakingApp",
			description: "Integer accumsan eget massa et mattis. Donec nec quam quis augue efficitur aliquet. Maecenas id elit non purus pulvinar varius. Nam in lorem ac nibh volutpat efficitur vitae eget arcu. Praesent eu libero non purus facilisis tincidunt in sit amet justo. Maecenas eu eros nulla. Vestibulum tincidunt justo nec libero pellentesque dignissim.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
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
	title: "Get in touch",
	description: "",
	buttons: [
		
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
