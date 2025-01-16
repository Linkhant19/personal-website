// src/components/Home.js
// home page component 

import React, { useEffect, useState } from 'react';
import '../assets/styles/main.css';

import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import AllProjects from './AllProjects';
import CoffeeChat from './CoffeeChat';
import Footer from './Footer';

function Home() {
    // set the background color to white
    document.body.style.backgroundColor = 'white';
    const [bgColor, setBgColor] = useState('white'); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // i want to check for mobile
            const isMobile = window.innerWidth <= 770;
            const threshold = isMobile ? 3050 : 2150; 

            if (scrollTop > threshold) {
                setBgColor('#222222'); 
            } else {
                setBgColor('white'); 
            }

            document.body.style.backgroundColor = bgColor;
        };

        window.addEventListener('scroll', handleScroll);

        // To cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [bgColor]); 
    
    return (
        <div className="Home" >
            <Header />
            <Main />
            <Projects />
            <AllProjects />
            <CoffeeChat />
            <Footer />
        </div>
    );
};

export default Home;
