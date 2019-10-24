import React, { useRef } from 'react';
import './style.css'
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const skillsRef = useRef(null)
    return (
        <main className = "home" id = "home">
            <Intro scrollToRef = {scrollToRef} skillsRef = {skillsRef} />
            <Skills skillsRef = {skillsRef} />
            <Projects />
        </main>
    );
}
 
export default Home;