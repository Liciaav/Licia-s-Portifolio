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
        <a target="_blank" rel="noopener noreferrer" href="https://1drv.ms/w/c/download?2067ba7f6a253d08/IQRPfx5pmDGNQa-nHwvrK1SOAQRcY2ziDT-3Mj_wfU6SLQ4" download className="resume-button">
          Download Resume
        </a>
      </section>
    </Layout>
  );
}

export default Resume;

https://1drv.ms/w/c/download?2067ba7f6a253d08/IQRPfx5pmDGNQa-nHwvrK1SOAQRcY2ziDT-3Mj_wfU6SLQ4