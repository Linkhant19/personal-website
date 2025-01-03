// src/components/Form.js
// contact page component using Emailjs

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a2afx0j', 'template_izowwx8', form.current, {
                publicKey: '4gbdHniBHZ71kEPcU',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true); 
                    form.current.reset(); // To clear form fields
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    const resetForm = () => {
        setIsSubmitted(false); // Reset submission state - show the form again
    };

    return (
        <div className="Form-container">
            <form ref={form} onSubmit={sendEmail}>
                {!isSubmitted ? (
                    <>
                        <label>Name</label>
                        <input type="text" name="user_name" required />
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message" required />
                        <input type="submit" value="Send" />
                    </>
                ) : (
                    <>
                        <p className="success-message">Thank you! Your message has been sent successfully.</p>
                        <button type="button" onClick={resetForm}>Send Another Message</button>
                    </>
                )}
            </form>
        </div>
    );
}

export default Form;
