import React from "react";
import Layout from "./Layout.jsx";
import './Curriculum.css'; 

function Curriculum() {
  const fileUrl = "https://1drv.ms/w/c/2067ba7f6a253d08/IQRPfx5pmDGNQa-nHwvrK1SOAQRcY2ziDT-3Mj_wfU6SLQ4";

  return (
    <Layout>
      <section className="resume-container">
        <h2 className="resume-title">Curriculum</h2>
        <p className="resume-description">
          Download meu curriculum clicando abaixo:
        </p>
        <div className="resume-buttons">
          <a 
            href={fileUrl} 
            download 
            className="resume-button">
            Download Curriculum
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Curriculum;

