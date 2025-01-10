// src/Characters.js
// choose your character page

import React from 'react';
import Header from './Header';
import Footer from './Footer';

// list to hold characters
const characters = [
    {
        name: "Full-Stack Developer",
        image_src: require('../assets/images/photo1.JPG'),
        link: '',
    },
    {
        name: "Front-end Developer",
        image_src: require('../assets/images/photo2.JPG'),
        link: '',
    },
    {
        name: "Creative Writer",
        image_src: require('../assets/images/photo3.JPG'),
        link: '',
    },
    {
        name: "Games/Puzzles Designer",
        image_src: require('../assets/images/photo4.JPG'),
        link: '',
    },
];

function Characters() {
    return (
        <div>
            <Header />

            {/* testing purposes */}
            <h2>this page is actively being worked on</h2>
            <img src={require('../assets/images/coding.gif')} alt='coding gif'/>

            {/* <main className="main-all-characters-container">
                <h2>Choose your CHARACTER</h2>
                <div className='main-all-characters'>
                    {characters.map((character, index) => (
                        <div key={index} className='each-character'>
                            <img src={character.image_src} alt={character.name}/>
                            <div className='each-character-info'>
                                <h3>{character.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main> */}

            <Footer />
        </div>
    );
};

export default Characters;