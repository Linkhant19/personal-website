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
    const [bgColor, setBgColor] = useState('white'); 

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const threshold = 2150; 

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
