import React from 'react';
import './CSS/Experience.css'; 

function Experience() {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Software Developer</h3>
        <h4>Smalsus Infolab</h4>
        <p className="date-location">Sept 2023 - Present | Noida, U.P</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Improved TimeEntry performance using Lazy Loading and React.memo; reduced unnecessary re-renders and sped up initial load.</li>
          <li>Built a Restructure Tool to convert Activity ⇄ WorkStream ⇄ Task, supporting bidirectional transformations and data integrity.</li>
          <li>Created a tool to publish SPFx SharePoint sites as public websites; implemented backend services using Node.js and MongoDB.</li>
          <li>Implemented a company-wide Leave Calendar where users can apply for leaves and view organization-wide schedules.</li>
          <li>Improved code quality through regular code reviews and testing procedures.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>MERN Trainee</h3>
        <h4>CODE DECODER DEVELOPER</h4>
        <p className="date-location">June 2023 - August 2023 | Noida, India</p>
        <ul>
          <li>Built and deployed server-side applications using Node.js.</li>
          <li>Contributed to real-world projects focusing on enhancing application performance and scalability.</li>
          <li>Developed comprehensive documentation for new and existing applications.</li>
          <li>Optimized application performance, resulting in a 20% improvement.</li>
          <li>Integrated RESTful APIs for seamless data exchange between frontend and backend systems.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
