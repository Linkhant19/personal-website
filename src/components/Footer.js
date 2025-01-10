// src/components/Footer.js
// footer component

import React, { useState, useEffect } from 'react';
import '../assets/styles/main.css';

function Footer() {
    // set to light if at roadmap page, dark if at other pages
    const [isLight, setIsLight] = useState(false); 

    useEffect(() => {
        setIsLight(window.location.hash === '#/roadmap');
    }, []);

    return (
        <footer className={isLight ? 'main-footer light' : 'main-footer dark'}>
            <p>© 2024 Written and Designed by</p>
            <p className='name'>Lin Khant Ko</p>
        </footer>
    );
}

export default Footer;