// src/components/Header.js
// header component

import React, { useState, useEffect } from 'react';
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
                    <li><a href="/" >LK</a></li>
                    <li><a href="/personal-website/#/characters" >CHOOSE CHARACTER</a></li>
                    <li><a href="/personal-website/#/roadmap" >ROADMAP</a></li>
                    <li><a href="/personal-website/#/contact" >CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;