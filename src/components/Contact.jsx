import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Layout from './Layout';
import './Contact.css';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message')
    };

    console.log('Data being sent:', data);

    emailjs.send('service_0xdeffu', 'template_l6hy94r', data, 'BV5WBX4kEhhKs0Ix4')
      .then((result) => {
        console.log('Success:', result);
        alert('Message sent successfully!');
        
        formRef.current.reset();
      }, (error) => {
        console.log('Error:', error);
        alert(`An error occurred: ${error.text}`);
      });
  };

  return (
    <Layout>
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Name" 
          required 
          className="contact-input"
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Email" 
          required 
          className="contact-input"
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          required 
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send</button>
      </form>
    </section>
    </Layout>
  );
}

export default Contact;
