import React from 'react';
import './style.css';

const Intro = (props) => {
    return (
        <section className = 'intro'>
            <p>Welcome, and thank you for visiting!</p>
            <h3>I'm Dan Clayton, and this is my portfolio.</h3>
            <p>I'm a full-stack web developer who loves to learn and grow.</p>
            <p>Please check out some of my projects, and feel free to contact me if you have any questions or ideas to help improve my work!</p>
            <i className="fas fa-chevron-down" onClick = {() => props.scrollToRef(props.skillsRef)}></i>
        </section>);
}
 
export default Intro;