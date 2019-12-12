import React from 'react';
import './style.css';

const Intro = props => {
	return (
		<section className="intro" id="intro">
			<div>
				<h1>Welcome!</h1>
				<hr />
			</div>
			<div className="intro-welcome">
				<h2>My name is Dan Clayton, and this is my portfolio.</h2>
				<p>
					I'm a freshly-minted developer who loves to learn by
					bulding.
				</p>
				<p>
					If you have any questions or suggestions, I'd love to hear
					from you through
					<a
						href="https://www.linkedin.com/in/djclayton21/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						LinkedIn <i className="fas fa-link"></i>{' '}
					</a>
					or by{' '}
					<a href="mailto:clayton.daniel.j@gmail.com">
						email <i className="fas fa-envelope"></i>.
					</a>{' '}
					Please let me know what you think!
				</p>
			</div>
			<i className="fas fa-chevron-down"></i>
		</section>
	);
};

export default Intro;
