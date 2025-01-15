// src/components/Projects.js
// projects view component

import React from 'react';
import '../assets/styles/main.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// list to hold projects (each will have a title, image, description, and link(will implement link later))
const project1_src = require('../assets/images/hideandseek2.gif');
const project2_src = require('../assets/images/commutebeat.gif');
const project3_src = require('../assets/images/sevenwaystoheaven.gif');
const project4_src = require('../assets/images/livablestreets.gif');

const projects = [
    {
        title: 'HIDE AND SEEK (Full-Stack Web App/Game)',
        image_src: project1_src,
        github_link: 'https://github.com/Linkhant19/hideandseek_fullstack',
        project_link: 'https://still-badlands-57585-0915996d7205.herokuapp.com/',
        description: (
            <p>
                I developed a Full-Stack web application using the{' '}
                <span className='highlight-light'>Django Framework</span> and hosted it via <span className='highlight-light'>Heroku</span>. I coded this game using <span className='highlight-light'>Python</span>, <span className='highlight-light'>HTML</span>, <span className='highlight-light'>CSS</span>, and <span className='highlight-light'>JavaScript</span>. This simple original card game features multiple data models along with data representation, creation, updates, deletion, data types, relationships between models, and use of the <span className='highlight-light'>Django ORM</span>. The application also has many ways of interacting with data through different Views, Forms, Create, Update, Delete, Search, and more. Moreover, I attended carefully to the user interface, giving it a fun, game-like aesthetic.
            </p>
        ),
        description2: (
            <p>
                This project only supports a desktop view.
            </p>
        )
    },
    {
        title: 'SEVEN WAYS TO HEAVEN (Front-End React App)',
        image_src: project3_src,
        github_link: 'https://github.com/Linkhant19/seven-heaven',
        project_link: 'https://seven-ways-to-heaven-a241a7b892e1.herokuapp.com/',
        description: (
            <p>
                I wanted to design a website to share my creative writings, so I coded this project using <span className='highlight-light'>React</span> and hosted it via <span className='highlight-light'>Heroku</span>. Using <span className='highlight-light'>JavaScript</span>, <span className='highlight-light'>HTML</span>, and <span className='highlight-light'>CSS</span>, I created this website with a dark and enigmatic design that is both visually pleasing and easy to navigate. I also integrated <span className='highlight-light'>Google Analytics</span> to track user behavior and collect data of my most read poems.
            </p>
        ),
        description2: (
            <p>
                This project supports both a desktop and mobile view.
            </p>
        )
    },
    {
        title: 'COMMUTEBEAT (Full-Stack Web App)',
        image_src: project2_src,
        github_link: 'https://github.com/Linkhant19/CommuteBeat',
        project_link: '',
        description: (
            <p>
                My team and I developed a user-centric web application using <span className='highlight-light'>Flask</span> and <span className='highlight-light'>React</span> while integrating <span className='highlight-light'>Spotify</span>, <span className='highlight-light'>Weather</span>, and <span className='highlight-light'>geolocation APIs</span> to provide personalized travel and music recommendations based on user's preferred mode of transportation.
            </p>
        ),
        description2: (
            <p>
                We also utilized <span className='highlight-light'>MongoDB Cloud</span> in backend for robust and secure data storage, capturing user preferences and historical data.
            </p>
        ),
    },
    {
        title: 'LIVABLE STREETS (Data Analysis project)',
        image_src: project4_src,
        github_link: 'https://github.com/Linkhant19/ds-livable-streets-infra/tree/team-a', 
        project_link: '',
        description: (
            <p>
                I took on the role of a <span className='highlight-light'>Team Representative</span> in this Data Science project where our Massachusetts Bay Transportation Authority (MBTA) client wanted a report of all the cleaned data, graphs, and possible relationships between displacement and bike lanes.
            </p>
        ),
        description2: (
            <p>
                My team and I used <span className='highlight-light'>Python</span> and its libraries such as <span className='highlight-light'>NumPy</span>, <span className='highlight-light'>pandas</span>, <span className='highlight-light'>Seaborn</span>, <span className='highlight-light'>matplotlib</span>, and more to extract useful information from the raw data that we obtained from our own research, transform them into different types of graphs, and observe possible correlations.
            </p>
        )
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
                            {project.description}
                            <br />
                            {project.description2}
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