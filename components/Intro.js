import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'
import { Skills } from './Work';

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary pt-5 px-5 header-gradient">
			<div class="container">
				<div className=" row align-items-center">
					<div className="col-sm-6 align-items-start">
						<h1 className="fw-bold display-3">{title}</h1>
						<p className="fw-bold display-5" style={{ color: '#fc8403' }}>{description}</p>

						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1" style={{ backgroundColor: '#fc8404' }}>{value.title}</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
								</Link>
						))}

					</div>

					<div className="col-sm-6 text-center">
						<img
							className="img-fluid" width="390"
							height="390" src={image}
							alt="profile of Minh"
						/>
					</div>
				</div>
			</div>
		</div >
	);
}

export const WavesBackground = () => (
	<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
		<defs>
			<path id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
		</defs>
		<g className="parallax">
			<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
			<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
			<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
			<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
		</g>
	</svg>
);


export const About = ({ title, description, buttons, skills }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<h1 className="text-primary fw-bold">{title}</h1>
			<div className="row">
				<div className="col-sm-7 px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
				<div className="col-sm-5">
					{skills.map((value) => (
						<ProgressBar
							title={value.title}
							level={value.level}
						/>
					))}

					{buttons.map((value, index) => (
						(value.isPrimary) ?
							<Link key={index} href={value.link}>
								<a className="btn btn-primary my-1" style={{ backgroundColor: '#fc8404' }}>{value.title}</a>
							</Link>
							:
							<Link key={index} href={value.link}>
								<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1">{value.title}</a>
							</Link>
					))}


				</div>

			</div>
		</div>
	);
}


export const ProgressBar = ({ title, level }) => (
	<>
		<div className="d-flex justify-content-between">
			<div>{title}</div>
			<div className="ml-auto">{level}</div>
		</div>
		<div className="progress mb-4">
			<div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: level }}></div>
		</div>
	</>
);