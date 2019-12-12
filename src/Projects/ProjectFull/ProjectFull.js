import React from 'react';
import './style.css';

const ProjectFull = props => {
	const { name, description, toolsUsed, image, liveUrl, githubUrl } = props;
	return (
		<>
			<div className="project-full">
				<h3 className="project-name">{name}</h3>
				<div className="project-links">
					<a href={liveUrl} target="_blank" rel="noopener noreferrer">
						<i className="fas fa-link"></i> Live
					</a>
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fas fa-link"></i> Github
					</a>
				</div>
				<div className="project-tools">
					<i className="fas fa-tools"></i> {toolsUsed}
				</div>
				<p className="project-description">
					<i className="fas fa-info-circle"></i> {description}
				</p>
				<img className="project-image" src={image} alt={name}></img>
			</div>
			<hr />
		</>
	);
};

export default ProjectFull;
