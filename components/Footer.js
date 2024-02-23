import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
					<div className="d-flex my-1 fs-4">
						<div><FontAwesomeIcon icon={faEnvelope}/> :</div>
						<div>
							<Link href="mailto:minhpaulit@gmail.com">
								<a className="mx-3">minhpaulit@gmail.com</a>
							</Link>
						</div>
					</div>
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<a key={index} className="d-flex my-1 fs-4">
									<div>
										<FontAwesomeIcon icon={value.icon}/> :
									</div>
									<div className="mx-3">{value.title}</div>
								
								</a>
								:
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer">
										<FontAwesomeIcon className="me-4 my-3 display-5" icon={value.icon}/>
									</a>
								</Link>
								
						))}
					</div>
					
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; 2024 {" "}
					<Link href="https://github.com/minhpaulit">
						<a>minhpaulit</a>
					</Link>
				</small>
			</div>
		</footer>
	);
}