import React from 'react';

const Skills = (props) => {
    return (
        <section className="skills" id='skills' ref = {props.skillsRef}>
            <i className="fas fa-chevron-up" onClick = {() => props.scrollToRef(props.introRef)}></i>
            <h1>Skills</h1>
            <div className="skills-languages">
                <ul>Languages and Frameworks
                    <li>ES6 JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>HTLM/JSX</li>
                    <li>CSS</li>
                    <li>git/Github</li>
                </ul>
            </div>
            <div className="skills-other">
                <ul>Other Skills
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                    <li>Multitasking</li>
                    <li>Time Management</li>
                    <li>Customer Service</li>
                    <li>Sales</li>
                    <li>Coaching</li>
                </ul>
            </div>
            {/* <div className="skills-working">
                <ul>Future Interests
                    <li>Automation</li>
                    <li>Data Science</li>
                </ul>
            </div> */}
            <i className="fas fa-chevron-down" onClick = {() => props.scrollToRef(props.skillsRef)}></i>
        </section>
    );
}
 
export default Skills;