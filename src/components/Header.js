// src/components/Header.js
// header component

import React, { useState, useEffect } from 'react';
// import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.JPG';
import '../assets/styles/main.css';

function Header() {
    const [isDark, setIsDark] = useState(false); 

    useEffect(() => {
        if (window.location.hash === '#/contact') {
            setIsDark(true); // Dark mode for contact page
        } else {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const threshold = 2150;
                setIsDark(scrollTop > threshold);
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    

    // return the header/navigation bar
    // logo/about me/projects/contact
    return (
        <header className={`main-header ${isDark ? 'dark' : 'light'}`}>
            {/* <img src={logo2} alt="Logo" /> */}
            <nav>
                <ul>
                    <li><a href="/" >About LIN</a></li>
                    <li><a href="/personal-website/#/characters" >Choose Character</a></li>
                    <li><a href="/personal-website/#/roadmap" >Roadmap</a></li>
                    <li><a href="/personal-website/#/contact" >Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;