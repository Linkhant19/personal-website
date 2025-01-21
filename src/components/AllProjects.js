// src/components/AllProjects.js
// all projects page

import React from 'react';
import '../assets/styles/main.css';
import { FaGithub } from 'react-icons/fa';

const project1_src = require('../assets/images/escaperoom.gif');
const project2_src = require('../assets/images/fullstackjourney.gif');
const project3_src = require('../assets/images/shadowsofyou.gif');
const project4_src = require('../assets/images/portfolio.gif');

const all_projects = [
    {
        title: 'My Full-Stack Journey - Fall 2024',
        image_src: project2_src,
        github_link: 'https://github.com/Linkhant19/Full-Stack-Application-Design-and-Development',
        description: 'During my Full-Stack Development class at Boston University, I created multiple full-stack web applications. \
        using Python, JavaScript, and HTML/CSS, and learned about APIs, Django framework, Git, Heroku, Databases, Data Visualization, and more.',
    },
    {
        title: 'Portfolio Website',
        image_src: project4_src,
        github_link: 'https://github.com/Linkhant19/personal-website',
        description: 'This is my portfolio website (this website). \
        I used React, JavaScript, HTML, and CSS to build this website from scratch and hosted it via GitHub Pages. \
        I utilized @media queries for mobile responsiveness and created a smooth, modern, and responsive user experience. \
        This website is continuously being updated with new projects and technologies.',
    },
    {
        title: 'Escape Room',
        image_src: project1_src,
        github_link: 'https://github.com/Linkhant19/EscapeRoom',
        description: 'An interactive website served as a promotional material for the Escape Room event \
        I hosted as the President of the Board Games Club. Using HTML, CSS, and JavaScript, \
        I coded this website with original mini-puzzles and interesting lore.',
    },
    {
        title: 'Shadow of You',
        image_src: project3_src,
        github_link: 'https://github.com/Linkhant19/ShadowsOfYou',
        description: 'I designed a front page and four flip book design pages with HTML, CSS, and JavaScript. \
        I also implemented @media for media queries in CSS for a different look on mobile devices. \
        My goal was to present this collection of poems that I wrote called “Shadows of You” on a website with a specific vision. \
        This was my first serious step into basic CSS animations and mobile responsiveness.',
    },
];

function AllProjects() {
    // return all projects (under the selected project page)
    return (
        <main className="main-all-projects-container">
            <h2>...OTHER PUBLIC PROJECTS</h2>
            <div className='main-all-projects'>
                {all_projects.map((project, index) => (
                    <div key={index} className='each-project'>
                        <img src={project.image_src} alt={project.title}/>
                        <div className='each-project-info' onClick={() => window.open(project.github_link, '_blank')}>
                            <h3>{project.title}</h3>
                            {/* only if there is a subtitle because I don't want extra spacing */}
                            {project.subtitle && <p className='subtitle'>{project.subtitle}</p>}
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default AllProjects;