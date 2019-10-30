import React from 'react';

const Skills = () => {
    return (
        <section className="skills" id='skills' >
            <h1>Skills</h1>
            <div className="skills-languages">
                <ul  className = "skills-list">Languages and Frameworks
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
                <ul className = "skills-list">Other Skills
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
        </section>
    );
}
 
export default Skills;