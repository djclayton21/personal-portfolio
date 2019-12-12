import React from 'react';
import './style.css';
import Contact from './Contact';
import PageLinks from './PageLinks';

const Navbar = () => {
	return (
		<header className="navbar">
			<Contact />
			<PageLinks />
		</header>
	);
};

export default Navbar;
