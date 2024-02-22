
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

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
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
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
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create pixel perfect iOS and Andriod apps using Flutter.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/minhpaulit",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
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
			title: "Email Me",
			link: "minhpaulit@gmail.com",
			isPrimary: true,
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
