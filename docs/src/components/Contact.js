// src/components/Contact.js
// contact page component using Emailjs

import React from 'react';
import '../assets/styles/main.css';

import Form from './Form';
import Header from './Header';
import Footer from './Footer';

function Contact() {
    return (
        <div className="Contact">
            <Header />
            <h2>CONTACT ME</h2>
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;