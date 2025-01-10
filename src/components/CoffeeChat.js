// src/components/CoffeeChat.js
// coffee chat component

import React from 'react';
import '../assets/styles/main.css';

// for my Linkedin and other icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function CoffeeChat() {
    return (
        <main className="main-coffee-chat-container">
            <img src={require('../assets/images/coffee.gif')} alt='coffee chat'/>
            <h2>LET'S HAVE A CHAT!</h2>

            <div className='main-coffee-chat-links'>
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/linkhantko/" target='_blank'>
                    <p>Linkedin <FaLinkedin /></p>
                </a>
                {/* email */}
                {/* <a href="mailto:lkk19@bu.edu" target='_blank'>
                    <p>Email</p>
                </a> */}
                {/* github */}
                <a href="https://github.com/Linkhant19" target='_blank'>
                    <p>Github <FaGithub /></p>
                </a>
                {/* contact me */}
                <a href="/personal-website/#/contact" target='_blank'>
                    <p>Contact Me <FaEnvelope /></p>
                </a>
            </div>
        </main>
    );
};

export default CoffeeChat;