import React from 'react';
import Layout from './Layout.jsx';
import './AboutMe.css';

function AboutMe() {
  return (
    <Layout>
      <section className="about-me-section">
        <div className="my-avatar-section">
        <img className="my-avatar" src="/images/Licia1.jpg" alt="Licia's photo" />
        </div>
        <p className="about-me-description">
        Originally from Brazil, I have a degree in Physiotherapy and over 10 years of experience in Aesthetic Physiotherapy. This background has given me a keen eye for detail and a deep understanding of user needs. After moving to Canada in 2016, I transitioned into web development, blending creativity with problem-solving to craft intuitive and user-friendly applications. As a versatile full-stack developer, I am committed to excellence and thrive in tackling projects of any complexity. My unique perspective allows me to bring a human-centered approach to development. I continuously expand my skill set, staying up to date with the latest technologies to deliver exceptional digital experiences. 
        </p>
      </section>
    </Layout>
  );
}

export default AboutMe;
