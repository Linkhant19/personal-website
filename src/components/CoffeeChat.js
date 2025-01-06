// src/components/CoffeeChat.js
// coffee chat component

import React from 'react';
import '../assets/styles/main.css';

function CoffeeChat() {
    return (
        <main className="main-coffee-chat-container">
            <img src={require('../assets/images/coffee.gif')} alt='coffee chat'/>
            <h2>LET'S HAVE A CHAT!</h2>

            <div className='main-coffee-chat-links'>
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/linkhantko/" target='_blank'>
                    <p>Linkedin</p>
                </a>
                {/* email */}
                {/* <a href="mailto:lkk19@bu.edu" target='_blank'>
                    <p>Email</p>
                </a> */}
                {/* github */}
                <a href="https://github.com/Linkhant19" target='_blank'>
                    <p>Github</p>
                </a>
                {/* contact me */}
                <a href="/personal-website/#/contact" target='_blank'>
                    <p>Contact Me</p>
                </a>
            </div>
        </main>
    );
};

export default CoffeeChat;