import React from 'react';
import './Navbar.css'; // Importing CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyReactApp</h2>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/about" className="nav-link">About</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
