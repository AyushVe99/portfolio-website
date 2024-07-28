import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CSS/Projects.css'; // Ensure you import the CSS file for custom styles

function Projects() {
  return (
    <div className="container mt-5">
      <h2>Projects</h2>
      <Carousel interval={5000}>
        <Carousel.Item>
          <div className="project-container">
            <div className="project-image">
              <img src="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png" className="d-block w-100" alt="Expense Tracker" />
            </div>
            <div className="project-details">
              <h3>Expense Tracker</h3>
              <h4>Newton School</h4>
              <p>
                <strong>Features:</strong>
                <ul>
                  <li>Responsive UI</li>
                  <li>Add and Delete Transactions</li>
                  <li>Calculate Money inflow and outflow</li>
                </ul>
              </p>
              <p><strong>Tech-stack:</strong> HTML, CSS, JavaScript, React and Material UI</p>
              <p>
                <strong>Description:</strong> The Expense Tracker website, built with HTML, CSS, TypeScript, React, and Material UI, offers a responsive UI for easy financial management. Users can add and delete transactions, track money inflow and outflow, and gain insights for better budget planning.
              </p>
              <a href="https://expense-tracker-two-eta.vercel.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project-container">
            <div className="project-image">
              <img src="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png" className="d-block w-100" alt="Amazon Clone" />
            </div>
            <div className="project-details">
              <h3>Amazon Clone</h3>
              <h4>Newton School</h4>
              <p>
                <strong>Features:</strong>
                <ul>
                  <li>Responsive UI</li>
                  <li>Cart adding functionality</li>
                  <li>User friendly</li>
                  <li>Login Logout Functionality</li>
                </ul>
              </p>
              <p><strong>Tech-Stack:</strong> HTML5, CSS, JavaScript, React, Material UI</p>
              <p>
                <strong>Description:</strong> Rapid API and Styled components are base of this project because of that it is possible to fetch products and display it to user. In this website, users can see products, add them to cart and remove them from cart as like as Amazon.
              </p>
              <a href="https://creative-bublanina-740294.netlify.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
