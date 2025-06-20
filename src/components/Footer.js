import React from 'react';
import './Footer.css'; // Import CSS file

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} MyReactApp. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
