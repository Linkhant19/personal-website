// src/components/Header.js
// header component

import React, { useState, useEffect } from 'react';
import '../assets/styles/main.css';

function Header() {
    const [isDark, setIsDark] = useState(false); 

    useEffect(() => {
        if (window.location.hash === '#/contact' || window.location.hash === '#/characters') {
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
                    <div className='header-links'>
                        <div className='logo-link'>
                            <li><a href="/personal-website/#/">LK</a></li>
                        </div>
                        <div className='right-header'>
                            {/* include selected className if it is the current page */}
                            <li><a href="/personal-website/#/characters" className={window.location.hash === '#/characters' ? 'selected' : ''} >CHOOSE CHARACTER</a></li>
                            <li><a href="/personal-website/#/roadmap" className={window.location.hash === '#/roadmap' ? 'selected' : ''} >ROADMAP</a></li>
                            <li><a href="/personal-website/#/contact" className={window.location.hash === '#/contact' ? 'selected' : ''} >CONTACT</a></li>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;