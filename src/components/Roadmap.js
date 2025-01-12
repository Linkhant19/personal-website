// src/components/Roadmap.js
// roadmap page component

import React from 'react';
import '../assets/styles/roadmap.css';

import Header from './Header';
import Footer from './Footer';

const experiences = [
    {
        title: 'Teaching Assistant',
        date: '2024 - Present',
        image: require('../assets/images/photo1.JPG'),
        logo: require('../assets/images/BU_logo.png'),
        description: [
            'Taught students about computer science principles.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized performance by implementing caching and lazy loading.',
        ],
    },
    {
        title: 'Application Development Intern',
        date: '2023 - 2024',
        image: require('../assets/images/photo2.JPG'),
        logo: require('../assets/images/360ed_logo.jpg'),
        description: [
            'Developed and maintained web applications using React, HTML, and CSS.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized performance by implementing caching and lazy loading.',
        ],
    },
    {
        title: 'President',
        date: '2022 - 2023',
        image: require('../assets/images/photo3.JPG'),
        logo: require('../assets/images/bgc_logo.png'),
        description: [
            'Created and maintained web applications using React, HTML, and CSS.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized performance by implementing caching and lazy loading.',
        ],
    }
];

function Roadmap() {
    // set the background color to white
    document.body.style.backgroundColor = 'white';

    return (
        <div className="Roadmap">
            <Header />

            {/* testing purposes */}
            <h2>ROADMAP</h2>
            <div className='line'></div>

            <div className='roadmap-container'>
                {experiences.map((experience, index) => (
                    <div key={index} className='roadmap-experience'>
                        <img src={experience.image} alt={experience.title} />
                        <div className="text"></div>
                        <div className="logo">
                            <img src={experience.logo} alt={experience.title} />
                        </div>
                        <div className='title-text'>
                            <h3>{experience.title}</h3>
                        </div>
                        <div className='date-text'>
                            <p>{experience.date}</p>
                        </div>
                        <div className='arrow'>
                            <p>⌃</p>
                        </div>
                        <div className='description-text'>
                            <ul>
                                {experience.description.map((description, index) => (
                                    <div>
                                        <li key={index}>{description}</li>
                                        <br />  
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Roadmap;