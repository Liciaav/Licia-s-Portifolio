import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Usando FormData para capturar os dados do formulário
    const formData = new FormData(formRef.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message')
    };

    console.log('Data being sent:', data);

    // Enviando dados usando emailjs.send
    emailjs.send('service_0xdeffu', 'template_l6hy94r', data, 'BV5WBX4kEhhKs0Ix4')
      .then((result) => {
        console.log('Success:', result);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Error:', error);
        alert(`An error occurred: ${error.text}`);
      });
  };

  return (
    <section>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
