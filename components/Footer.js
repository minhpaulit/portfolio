import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = ({ title, description, buttons, image }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>

				<div className="px-sm-5 row fs-4">

						<img className="my-2 w-100" src={image} alt="profile of Minh"/>
						
						{/* Description */}
						<div className='my-2 text-center'>
							{description.map((value, index) => (
									<p key={index}>{value}</p>
								))}
						</div>
						{/* Icons */}
						<div className="my-2 d-flex justify-content-center">
							{buttons.map((value, index) => (
									(!value.isPrimary) && (
										<Link key={index} href={value.link}>
											<a target="_blank" rel="noreferrer" className="mx-3 display-5">
												<FontAwesomeIcon icon={value.icon}/>
											</a>
										</Link>
										)))}
						</div>
						{/* Contact text */}
						<div className='my-2 d-flex justify-content-center'>
							{buttons.map((value, index) => (
								(value.isPrimary) && (
									<a key={index} className="d-flex mx-4">
										<div className="mx-2"> <FontAwesomeIcon icon={value.icon}/> :</div>
										<div>{value.title}</div>
									</a>
							)))}
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