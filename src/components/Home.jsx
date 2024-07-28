import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import profile from '../assets/ayush_img.jpg';

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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={profile} alt="Ayush Verma" className="img-fluid rounded-circle" width="250" height="250" />
        </div>
        <div className="col-md-6">
          <animated.h1 style={nameAnimation}>Ayush Verma</animated.h1>
          <animated.p style={designationAnimation} className="lead">Software Engineer | React Developer</animated.p>
          <animated.div style={descriptionAnimation}>
            <p>
              Enthusiastic software engineer with a proven track record in developing and maintaining web applications using React and Node.js. Adept at collaborating in team environments to enhance application scalability and user experience. 
            </p>
            <p>
              Dedicated to delivering high-quality code through meticulous code reviews and testing procedures. Proficient in implementing features that streamline processes and improve efficiency.
            </p>
            <div className="social-links mt-4">
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
