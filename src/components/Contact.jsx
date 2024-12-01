import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('ID009', 'template_1pwjqlh', formData, 'XBvyjxBZUKkNHLkUh_EV3')
            .then(response => {
                console.log('Success:', response);
                alert('Your message has been sent!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact">
            <h2 className="heading">Contact Us</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Name" 
                />
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Email" 
                />
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Message" 
                />
                <button id="send-email" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
