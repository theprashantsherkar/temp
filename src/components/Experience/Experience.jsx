// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h3>Web-Dev co-comm member at DJS NOVA</h3>
          <p>Developed and maintained web applications using React and Node.js, also learnt tailwind and bootstrap.</p>
        </div>
        <div className="experience-item">
          <h3>Editorial co-comm member at IETE-ISF</h3>
          <p>Written and edited numerous reports and scientific papers for IETE-ISF, the official student chapter for EXTC branch at DJSCE.</p>
        </div>
        <div className="experience-item">
          <h3>Intern at Naval Dockyard, Mumbai</h3>
          <p>Interned as a robotics and mechatronics intern in the WECORS department, main task being soldering and desoldering of PCB's. </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
