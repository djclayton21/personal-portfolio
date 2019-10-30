import React from 'react';
import resume from '../data/resumes/resume.pdf'

const Contact = () => {
    return (
        <div className="navbar-contact">
            <a href="https://www.linkedin.com/in/djclayton21/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            <a href="https://github.com/djclayton21" target="_blank" rel="noopener noreferrer" >Github</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    );
}
 
export default Contact;