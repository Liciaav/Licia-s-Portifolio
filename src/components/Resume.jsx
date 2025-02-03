import React from "react";
import Layout from "./Layout.jsx";
import './resume.css'; 

function Resume() {
  const fileUrl = "https://1drv.ms/w/c/9c2c9bc4a699aad6/EdaqmabEmywggJyKAAAAAAABXsUNzANFmab5yjQZDag8-g?e=OMxezT";

  return (
    <Layout>
      <section className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-description">
          You can download my resume by clicking the button below:
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

