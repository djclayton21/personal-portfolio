import React from 'react';
import './style.css'
import Home from './Home/Home.js';
import Navbar from './Navbar/Navbar';


const App = () => {
    return (
        <div className="app">
            <Navbar /> 
            <Home />
        </div>
    );
}
 
export default App;
