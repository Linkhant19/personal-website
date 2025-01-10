// src/components/Contact.js
// contact page component using Emailjs

import React from 'react';
import '../assets/styles/contact.css';

import Form from './Form';
import Header from './Header';
import Footer from './Footer';

function Contact() {
    // dark mode for contact page
    document.body.style.backgroundColor = '#222222';
    
    return (
        <div className="Contact" >
            <Header />
            <h2>CONTACT ME</h2>
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;