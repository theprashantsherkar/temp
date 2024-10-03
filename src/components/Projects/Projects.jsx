// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-content">
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built using React to showcase my projects and skills.</p>
        </div>
        <div className="project-item">
          <h3>Hackathon website</h3>
          <p>A website made for unplugged 2.0, a hardware hackathon organised by djsce's iete-isf.</p>
        </div>
        <div>
            <h3>Sem 3 Checklist</h3>
            <p>A webpage made to list all the workload i have in third semester.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
