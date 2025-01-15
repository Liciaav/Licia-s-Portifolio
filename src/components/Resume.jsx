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
        <a target="_blank" rel="noopener noreferrer" href="https://onedrive.live.com/download?cid=2067ba7f6a253d08&resid=2067BA7F6A253D08!100&authkey=!EU9_HmmYMY1Br6cfC-srVI4B0PnTGqO_zsTVpI_v7f5Utg" download className="resume-button">
          Download Resume
        </a>
      </section>
    </Layout>
  );
}

export default Resume;