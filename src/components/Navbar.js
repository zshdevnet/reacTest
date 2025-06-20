// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // React Router
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyReactApp</h2>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
