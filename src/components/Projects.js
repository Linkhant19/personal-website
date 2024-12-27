// src/components/Projects.js
// projects view component

import React from 'react';
import '../assets/styles/main.css';

// list to hold projects (each will have a title, image, description, and link(will implement link later))
const project1_src = require('../assets/images/commutebeat.gif');
const project2_src = require('../assets/images/livablestreets.gif');
const project3_src = require('../assets/images/shadowsofyou.gif');

const projects = [
    {
        title: 'Project 1',
        image_src: project1_src,
        link: '',
        description: "My team and I developed a user-centric web application using Flask, and React while integrating Spotify, Weather, and geolocation APIs to provide personalized travel and music recommendations based on user's preferred mode of transportation.",
        description2: "We also utilized MongoDB Cloud in backend for robust and secure data storage, capturing user preferences and historical data."
    },
    {
        title: 'Project 2',
        image_src: project2_src,
        link: '',
        description: '',
        description2: ''
    },
    {
        title: 'Project 3',
        image_src: project3_src,
        link: '',
        description: '',
        description2: ''
    },
];

function Projects() {
    // return the projects page (under the main title)
    return (
        <main className="main-projects-container">
            <h2>HIGHLIGHTS</h2>
            <div className='main-projects'>
                {projects.map((project, index) => (
                    <div key={index} className='project'>
                        <img src={project.image_src} alt={project.title}/>
                        <div className='project-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <br />
                            <p>{project.description2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;