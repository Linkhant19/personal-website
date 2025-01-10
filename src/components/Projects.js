// src/components/Projects.js
// projects view component

import React from 'react';
import '../assets/styles/main.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// list to hold projects (each will have a title, image, description, and link(will implement link later))
const project1_src = require('../assets/images/hideandseek2.gif');
const project2_src = require('../assets/images/commutebeat.gif');
const project3_src = require('../assets/images/placeholder.gif');
const project4_src = require('../assets/images/livablestreets.gif');

const projects = [
    {
        title: 'HIDE AND SEEK (Full-Stack Web App/Game)',
        image_src: project1_src,
        github_link: 'https://github.com/Linkhant19/hideandseek_fullstack',
        project_link: 'https://still-badlands-57585-0915996d7205.herokuapp.com/',
        description: "My team and I developed a user-centric web application using Flask, and React while integrating Spotify, Weather, and geolocation APIs to provide personalized travel and music recommendations based on user's preferred mode of transportation.",
        description2: "We also utilized MongoDB Cloud in backend for robust and secure data storage, capturing user preferences and historical data."
    },
    {
        title: 'COMMUTEBEAT (Full-Stack Web App)',
        image_src: project2_src,
        github_link: 'https://github.com/Linkhant19/CommuteBeat',
        project_link: '',
        description: "My team and I developed a user-centric web application using Flask, and React while integrating Spotify, Weather, and geolocation APIs to provide personalized travel and music recommendations based on user's preferred mode of transportation.",
        description2: "We also utilized MongoDB Cloud in backend for robust and secure data storage, capturing user preferences and historical data.",
    },
    {
        title: 'SEVEN WAYS TO HEAVEN (Front-End focused personal project)',
        image_src: project3_src,
        github_link: 'https://github.com/Linkhant19/seven-heaven',
        project_link: '',
        description: 'The project is actively being worked on right at this moment. Coming very soon!',
        description2: ''
    },
    {
        title: 'LIVABLE STREETS (Data Analysis project)',
        image_src: project4_src,
        github_link: 'https://github.com/Linkhant19/ds-livable-streets-infra/tree/team-a', 
        project_link: '',
        description: 'I took on the role of a Team Representative in this Data Science project where our Massachusetts Bay Transportation Authority (MBTA) client wanted a report of all the cleaned data, graphs, and possible relationships between displacement and bike lanes.',
        description2: 'My team and I used Python and its libraries such as NumPy, pandas, Seaborn, matplotlib, and more to extract useful information from the raw data that we obtained from our own research, transform them into different types of graphs, and observe possible correlations.'
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
                            <br />
                            <div className='project-links'>
                                <a href={project.github_link} target='_blank'>
                                    <p>GitHub <FaGithub /></p>
                                </a>
                                {/* only if the project has a link */}
                                {project.project_link && (
                                    <a href={project.project_link} target='_blank'>
                                        <p>Project <FaExternalLinkAlt /></p>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;