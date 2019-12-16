import React from 'react';
import './style.css';

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<div className="section-header">
				<h1>Skills</h1>
				<hr />
			</div>
			<div className="skills-tools">
				<h3>
					<i className="fas fa-tools"></i> Dev Tools{' '}
					<i className="fas fa-tools"></i>
				</h3>
				<ul className="skills-list">
					<li>ES6 JavaScript</li>
					<li>React</li>
					<li>Node</li>
					<li>Express</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
					<li>HTLM/JSX</li>
					<li>CSS</li>
					<li>git + Github</li>
				</ul>
			</div>
			<div className="skills-other">
				<h3>
					<i className="fas fa-cocktail"></i> Other Skills{' '}
					<i className="fas fa-cocktail"></i>
				</h3>
				<ul className="skills-list">
					<li>Problem Solving</li>
					<li>Teamwork</li>
					<li>Multitasking</li>
					<li>Time Management</li>
					<li>Customer Service</li>
					<li>Sales</li>
					<li>Coaching</li>
				</ul>
			</div>
			{/* <div className="skills-working">
                <ul>Future Interests
                    <li>Automation</li>
                    <li>Data Science</li>
                </ul>
            </div> */}
		</section>
	);
};

export default Skills;
