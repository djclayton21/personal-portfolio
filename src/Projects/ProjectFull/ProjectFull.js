import React from 'react';

const ProjectFull = (props) => {
    const { name, description} = props
    return (
        <section className="project-full">
            <div>{name}</div>
            <div>{description}</div>
        </section>
    );
}
 
export default ProjectFull;