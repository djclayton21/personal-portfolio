import React from 'react';
import './style.css';
import { projects } from '../data/projects/projects.js'
import ProjectFull from './ProjectFull/ProjectFull';

const Projects = () => {
    
    const fullProjects = projects.map((project, i) => <ProjectFull {...project} key= {i}/>)
    return (
        <section className="projects" id="projects">
            <h1>Projects</h1>
            <hr/>
            {fullProjects}
        </section>
    );
}
 
export default Projects;