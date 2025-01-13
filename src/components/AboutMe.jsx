import React from 'react';
import Layout from './Layout.jsx';
import './AboutMe.css';

function AboutMe() {
  return (
    <Layout>
      <section className="about-me-section">
        <div className="my-avatar-section">
          <img className="my-avatar" src={"./src/image/licia.avif"} alt="Licia's photo" />
        </div>
        <p className="about-me-description">
          I'm a versatile full-stack web developer, adept at blending creativity with problem-solving to craft intuitive and user-friendly applications. With meticulous attention to detail and a commitment to excellence, I excel in tackling projects of any complexity. My diverse background in Physiotherapy and Aesthetics enriches my perspective, allowing me to bring a unique, human-centered approach to every development endeavor. I'm constantly learning and staying up-to-date with the latest technologies to improve my skills.
        </p>
      </section>
    </Layout>
  );
}

export default AboutMe;
