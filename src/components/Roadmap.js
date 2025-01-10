// src/components/Roadmap.js
// roadmap page component

import React from 'react';
import '../assets/styles/roadmap.css';

import Header from './Header';
import Footer from './Footer';

const experiences = [
    {
        title: 'Full-Stack Developer',
        date: '2024 - Present',
        description: [
            'Developed and maintained web applications using React, Node.js, and MongoDB.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized performance by implementing caching and lazy loading.',
        ],
    },
    {
        title: 'Front-end Developer',
        date: '2023 - 2024',
        description: [
            'Developed and maintained web applications using React, HTML, and CSS.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Optimized performance by implementing caching and lazy loading.',
        ],
    },
    {
        title: 'Web Designer',
        date: '2022 - 2023',
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
                        <h3>{experience.title}</h3>
                        <p>{experience.date}</p>
                        <ul>
                            {experience.description.map((description, index) => (
                                <li key={index}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Roadmap;