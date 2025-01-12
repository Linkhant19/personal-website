// src/components/Roadmap.js
// roadmap page component

import React from 'react';
import '../assets/styles/roadmap.css';

import Header from './Header';
import Footer from './Footer';

const experiences = [
    {
        title: 'TEACHING ASSISTANT',
        date: 'Sep 2023 - Present',
        image: require('../assets/images/experience1.jpg'),
        logo: require('../assets/images/bu_logo1.png'),
        description: [
            'Facilitated 3 lab sessions of about 100 students and conducted office hours, providing support to a diverse body of students.',
            'Taught Python, algorithms, efficient debugging techniques leading to final projects, including creating Connect Four game AI Players and simple LLMs.',
        ],
    },
    {
        title: 'APPLICATION DEVELOPMENT INTERN',
        date: 'Aug 2023 - Oct 2023',
        image: require('../assets/images/experience3.jpg'),
        logo: require('../assets/images/360ed_logo.jpg'),
        description: [
            'Collaborated remotely within a cross-functional team to upgrade 2 Augmented Reality (AR) educational applications, aiming to boost user engagement among children impacted by educational disruptions in Myanmar.',
            'Played a pivotal role in weekly ideation and strategy sessions, contributing innovative ideas for app features and functionalities and actively engaged in project planning and strategic decision-making processes, ensuring alignment with educational and engagement goals.',
        ],
    },
    {
        title: 'PRESIDENT',
        date: '2022 - 2023',
        image: require('../assets/images/experience5.jpg'),
        logo: require('../assets/images/bgc_logo.png'),
        description: [
            'Led a team of 10 executive board members in club operations, including financial and inventory management, while coordinating weekly meetings of 70-130 club members and fostering an inclusive environment, increasing committed members count by 42%.',
            "Assembled an interactive website with 4 original mini-puzzles and a fun user interface to increase engagement using HTML, CSS, JavaScript for Escape Room event. The event became the highest-grossing event in club's history with 60% increase from the last highest revenue event.",
        ],
    },
    {
        title: 'TUTOR/MENTOR',
        date: 'Jun 2022 - May 2023',
        image: require('../assets/images/experience2.jpg'),
        logo: require('../assets/images/ub_logo.jpg'),
        description: [
            'Provided academic guidance in Computer Science as students coded simple web games using JavaScript.',
            'Attended to the emotional well-being of the students from 20-40 hours a week.',
            'Led multiple indoor and outdoor activities with other mentors, managing about 100 high school students.',
        ],
    },
    {
        title: 'INTERN',
        date: 'Aug 2020 - Nov 2020',
        image: require('../assets/images/experience6.jpg'),
        logo: require('../assets/images/360ed_logo.jpg'),
        description: [
            "Engaged in observational learning to understand the development and implementation of the 'DTP Application Project,' aimed at introducing Virtual Reality Learning to a diverse age range of students.",
            'Collaborated proactively with the Project Leader on idea generation for application enhancement and contributed to the transformation of textbook illustrations into 2D and 3D models.',
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