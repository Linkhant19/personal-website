// src/components/AllProjects.js
// all projects page

import React from 'react';
import '../assets/styles/main.css';

const project1_src = require('../assets/images/escaperoom.gif');
const project2_src = require('../assets/images/hideandseek.gif');
const project3_src = require('../assets/images/shadowsofyou.gif');

const all_projects = [
    {
        title: 'Escape Room',
        image_src: project1_src,
        link: '',
        description: 'An interactive website served as a promotional material for the Escape Room event \
        I hosted as the President of the Board Games Club. Using HTML, CSS, and JavaScript, \
        I coded this website with original mini-puzzles and interesting lore.',
    },
    {
        title: 'My Django Journey',
        subtitle: '...along with mini full-stack web applications',
        image_src: project2_src,
        link: '',
        description: 'An interactive website served as a promotional material for the Escape Room event \
        I hosted as the President of the Board Games Club. Using HTML, CSS, and JavaScript, \
        I coded this website with original mini-puzzles and interesting lore.',
    },
    {
        title: 'Shadow of You',
        image_src: project3_src,
        link: '',
        description: 'I designed a front page and four flip book design pages with HTML, CSS, and JavaScript. \
        I also implemented @media for media queries in CSS for a different look on mobile devices. \
        My goal was to present this collection of poems that I wrote called “Shadows of You” on a website with a specific vision. \
        This was my first serious step into basic CSS animations and mobile responsiveness.',
    },
    {
        title: 'My Portfolio',
        image_src: project1_src,
        link: '',
        description: 'This is my portfolio website where you are currently viewing it. \
        I used React to build this website. I also used my own custom CSS styles to make the website look nice and modern.'
    }
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
                        <div className='each-project-info'>
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