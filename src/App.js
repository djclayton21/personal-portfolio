import React from 'react';
import './style.css';
import Home from './Home/Home.js';
import Navbar from './Navbar/Navbar';

const App = () => {
	// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
	// const introRef = useRef();
	// const skillsRef = useRef();
	// const projectsRef = useRef();

	return (
		<div className="app">
			<Navbar />
			<Home />
		</div>
	);
};

export default App;
