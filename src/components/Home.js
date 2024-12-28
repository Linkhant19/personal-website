// src/components/Home.js
// home component 

import React from 'react';
import '../assets/styles/main.css';

import Header from './Header';
import Main from './Main';
import Projects from './Projects';
import AllProjects from './AllProjects';
import CoffeeChat from './CoffeeChat';
import Footer from './Footer';

function Home() {
    return (
        <div className="Home">
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
