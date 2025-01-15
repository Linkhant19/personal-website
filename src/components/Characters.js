// src/Characters.js
// choose your character page

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../assets/styles/characters.css';
import '../assets/styles/main.css';

// list to hold characters
const characters = [
    {
        name: "Full-Stack Developer",
        description: (
        <p>
        Hey, I am Lin! I am an aspiring Software Engineer studying Computer Science and Psychology at Boston University. I have taken classes such as <span className='highlight-light'>Full-Stack Application Development</span>, <span className='highlight-light'>Software Engineering</span>, <span className='highlight-light'>Artifical Intelligence</span>, <span className='highlight-light'>Data Science Fundamentals</span>, <span className='highlight-light'>Database Systems</span>, and <span className='highlight-light'>Distributed Systems</span> to further extend my knowledge in the field. I enjoy coding with passion and purpose.
        </p>
        ),
        description2: "",
        image_src: require('../assets/images/photo1.JPG'),
        link: '/personal-website/#/',
    },
    {
        name: "Front-end Developer",
        description: "",
        description2: "",
        image_src: require('../assets/images/photo2.JPG'),
        link: '',
    },
    {
        name: "Creative Writer",
        description: "",
        description2: "",
        image_src: require('../assets/images/photo3.JPG'),
        link: '',
    },
    {
        name: "Games/Puzzles Designer",
        description: "",
        description2: "",
        image_src: require('../assets/images/photo4.JPG'),
        link: '',
    },
];

function Characters() {
    // setting the background to dark mode
    document.body.style.backgroundColor = '#222222';

    // I set my default selected character to the first one.
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

    return (
        <div>
            <Header />

            <h2 className='main-all-characters-title'>CHOOSE YOUR CHARACTER</h2>

            <div className='character-page-container'>
                {/* show the selected character */}
                <div className='character-page-left-side'>
                    <div className='selected-character-img'>
                        <img src={selectedCharacter.image_src} alt={selectedCharacter.name} />
                    </div>
                </div>

                <div className='character-page-right-side'>
                    <div className='selected-character-info'>
                        <h2 className='selected-character-name'>{selectedCharacter.name}</h2>
                        {/* for now, I want to only show if it is the first character. */}
                        {selectedCharacter.name === "Full-Stack Developer" && (
                            <p className='selected-character-description'>{selectedCharacter.description}</p>
                        )}
                        {selectedCharacter.name == "Full-Stack Developer" && (
                            <p className='selected-character-description'>{selectedCharacter.description2}</p>
                        )}
                        {/* link with 'learn more' clickable */}
                        {selectedCharacter.name === "Full-Stack Developer" && (
                            <a href={selectedCharacter.link} target="_blank" rel="noopener noreferrer">
                                <button className='selected-character-button'>{selectedCharacter.name} Lin's Page</button>
                            </a>
                        )}

                        {/* if other characters, will say 'coming soon' for now */}
                        {selectedCharacter.name !== "Full-Stack Developer" && (
                            <p className='selected-character-description'>COMING SOON!</p>
                        )}
                    </div>

                    <h3 className='all-characters-title'>ALL CHARACTERS</h3>
                    <div className='all-characters'>
                        {/* I will only show the square profile pics of the character. */}
                        
                        {characters.map((character, index) => (
                            <div key={index} className='each-character'>
                                <img
                                    className={`clickable-character ${selectedCharacter.name === character.name ? 'selected' : ''}`}
                                    src={character.image_src}
                                    alt={character.name}
                                    onClick={() => setSelectedCharacter(character)} // Update selected character on click
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Characters;