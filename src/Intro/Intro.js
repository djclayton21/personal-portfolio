import React from 'react';
import './style.css';

const Intro = (props) => {
    return (
        <section className='intro' id="intro" >
                <div>
                    <h1>Welcome</h1>
                    <hr/>
                </div>
            <div className="intro-welcome" >
                <h2>I'm Dan Clayton, and this is my portfolio.</h2>
                <p>I'm a full-stack web developer who loves to learn and grow by solving problems.</p>
                <p>Please take a look around, and feel free to contact me if you have any questions!</p>
            </div>
            <i className="fas fa-chevron-down"></i>
        </section>);
}
 
export default Intro;