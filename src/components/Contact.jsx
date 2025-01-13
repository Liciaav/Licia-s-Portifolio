import React, { useState } from 'react';
import Layout from './Layout.jsx';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <Layout>
      <section className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form 
          action="https://formsubmit.co/el/navobu"
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">Send</button>
          <input type="hidden" name="_next" value="https://formsubmit.co/success" />
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
