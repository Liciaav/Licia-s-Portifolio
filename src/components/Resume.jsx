import React from "react";
import Layout from "./Layout.jsx";
import './Resume.css'; 

function Resume() {
  return (
    <Layout>
      <section className="resume-container">
        <p className="resume-description">
          Download my resume by clicking the button below:
        </p>
        <a href="./resume/Liciaresume.docx" download className="resume-button">
          Download Resume
        </a>
      </section>
    </Layout>
  );
}

export default Resume;