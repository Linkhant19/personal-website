import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/main.css';

function Header() {
    return (
        <header className="main-header">
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li><a href="about_me.html">About Me</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;