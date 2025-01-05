// src/components/Roadmap.js
// roadmap page component

import React from 'react';
import '../assets/styles/main.css';

import Header from './Header';
import Footer from './Footer';

function Roadmap() {
    return (
        <div className="Roadmap">
            <Header />

            {/* testing purposes */}
            <h2>this is the roadmap page</h2>

            <Footer />
        </div>
    );
};

export default Roadmap;