import React from 'react';

const ProjectFull = (props) => {
    const { name, description, toolsUsed, image, liveUrl, githubUrl} = props
    return (
        <div className="project-full">
            <h3 className="project-name">{name}</h3>
            <div className="project-header">
                <img className="project-image" src={image}></img>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
                <div className="project-tools">{toolsUsed}</div>
            </div>
            <div className="project-details">
                <p className="project-description">{description}</p>
                {/* <p className="project-learned">{learned}</p> */}
            </div>
        </div>
    );
}
 
export default ProjectFull;