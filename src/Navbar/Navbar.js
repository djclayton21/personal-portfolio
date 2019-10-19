import React from 'react';
import './style.css';
import resume from '../files/webDevResume.pdf'

const Navbar = () => {
    return (
        <header className="navbar">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://www.linkedin.com/in/djclayton21/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            <a href="https://github.com/djclayton21" target="_blank" rel="noopener noreferrer" >Github</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </header>
    );
}
 
export default Navbar;