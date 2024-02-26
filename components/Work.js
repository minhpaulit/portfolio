import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Work = ({ title, experience }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
            <div className="container">
                <h1 className="text-primary fw-bold">{title}</h1>
                <div className="px-sm-5">
                    <div className="d-flex flex-row flex-wrap justify-content-center fs-5">
                        {experience.map((value, index) => (
                            <Experience
                                key={index}
                                title={value.title}
                                company={value.company}
                                period={value.period}
                                description={value.description}/>
                        ))}
                    </div>
                </div>
            </div>
		</div>
	);
}

export const Experience = ({ title, company, period, description }) => {
	return (
		<div>
			<h4 className="text-primary fw-bold pt-5">{title}</h4>
            <div className="d-flex justify-content-between">
                <p className="fw-semibold">{company}</p>
                <p className="fw-semibold">{period}</p>
            </div>
				{description.map((value, index) => (
                    <p key={index} >{value}</p>
				))}
		</div>
	);
}


export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>

				<div class="blur-background">

					<div className="d-flex flex-row flex-wrap justify-content-center">
							{cards.map((value, index) => (
								<Card
									key={index}
									title={value.title}
									description={value.description}
									icons={value.icons} />
							))}
					</div>

					<div className="blur-overlay d-flex justify-content-center align-items-center">
						<p className='text-center text-warning fw-bold display-3'> Being Updated! </p>
					</div>
				</div>
				


				
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}