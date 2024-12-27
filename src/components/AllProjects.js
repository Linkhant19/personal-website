// src/components/AllProjects.js
// all projects page

import React from 'react';
import '../assets/styles/main.css';

const project1_src = require('../assets/images/logo2.JPG');

const all_projects = [
    {
        title: 'Project 1',
        image_src: project1_src,
        link: '',
        description: "My team and I developed a user-centric web application using Flask, and React while integrating Spotify, Weather, and geolocation APIs to provide personalized travel and music recommendations based on user's preferred mode of transportation.",
    },
    {
        title: 'Project 2',
        image_src: project1_src,
        link: '',
        description: ''
    },
    {
        title: 'Project 3',
        image_src: project1_src,
        link: '',
        description: ''
    },
    {
        title: 'Project 4',
        image_src: project1_src,
        link: '',
        description: ''
    }
];

function AllProjects() {
    // return all projects (under the selected project page)
    return (
        <main className="main-all-projects-container">
            <h2>ALL PUBLIC PROJECTS</h2>
            <div className='main-all-projects'>
                {all_projects.map((project, index) => (
                    <div key={index} className='each-project'>
                        <img src={project.image_src} alt={project.title}/>
                        <div className='each-project-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default AllProjects;