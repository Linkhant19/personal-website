// src/components/Header.js
// header component

import React from 'react';
// import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.JPG';
import '../assets/styles/main.css';

function Header() {
    // return the header/navigation bar
    // logo/about me/projects/contact
    return (
        <header className="main-header">
            {/* <img src={logo2} alt="Logo" /> */}
            <nav>
                <ul>
                    <li><a href="/">About LIN</a></li>
                    <li><a href="/personal-website/#/characters">Choose Character</a></li>
                    <li><a href="/personal-website/#/roadmap">Roadmap</a></li>
                    <li><a href="/personal-website/#/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;