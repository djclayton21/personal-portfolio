import React from 'react';
import './style.css';
import resume from '../data/resumes/resume.pdf'
import Contact from './Contact';

const Navbar = () => {
    return (
        <header className="navbar">
            <a href="#home">Home</a>
            <Contact />
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </header>
    );
}
 
export default Navbar;