import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import profile from '../assets/ayush_img.jpg';
import { Link } from 'react-scroll';

function Home() {
  const nameAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: config.molasses, 
  });

  const designationAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 300,
    config: config.wobbly, 
  });

  const descriptionAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: 800, 
    config: config.gentle, 
  });

  return (
    <div className="container mt-5 home-section">
      <div className="row align-items-center">
        <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img src={profile} alt="Ayush Verma" className="img-fluid rounded-circle" width="260" height="260" />
        </div>
        <div className="col-md-7">
          <animated.h1 style={nameAnimation}>Ayush Verma</animated.h1>
          <animated.p style={designationAnimation} className="lead mb-2">Software Engineer | React Developer</animated.p>
          <animated.div style={descriptionAnimation}>
            <p style={{marginBottom: 8}}>
              Enthusiastic engineer focused on React and Node.js, delivering scalable, user-centric apps.
            </p>
            <p style={{color:'var(--text-muted)'}}>
              I care about maintainability, performance, and delightful UX.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="mailto:ayushverma@gmail.com" className="btn btn-primary">Contact Me</a>
              <Link to="projects" smooth={true} duration={300} className="btn btn-outline-light">View Projects</Link>
            </div>
            <div className="social-links mt-3">
              <a href="https://www.linkedin.com/in/ayush-verma-08b125227/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/AyushVe99" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
