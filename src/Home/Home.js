import React, { useRef } from 'react';
import './style.css'
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const introRef = useRef()
    const skillsRef = useRef()
    return (
        <main className = "home" id = "home">
            <Intro scrollToRef = {scrollToRef} skillsRef = {skillsRef} introRef = {introRef} />
            <Skills scrollToRef = {scrollToRef} skillsRef = {skillsRef} introRef = {introRef} />
            <Projects />
        </main>
    );
}
 
export default Home;