import React from "react";
import Layout from "./Layout.jsx";
import './Resume.css'; 

function Resume() {
  const fileUrl = "https://1drv.ms/w/c/2067ba7f6a253d08/IQRPfx5pmDGNQa-nHwvrK1SOAQRcY2ziDT-3Mj_wfU6SLQ4";

  return (
    <Layout>
      <section className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-description">
          You can download my resume by clicking the buttom below:
        </p>
        <div className="resume-buttons">
          <a 
            href={fileUrl} 
            download 
            className="resume-button"
            target="_blank" rel="noopener noreferrer">Download Resume
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Resume;

