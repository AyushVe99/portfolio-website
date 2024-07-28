import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './CSS/About.css';

const AnimatedSkill = ({ skill, delay, direction, onSkillInView }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger the animation only once
    threshold: 0.1      // Trigger when 10% of the section is in view
  });

  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : `translate3d(${direction === 'left' ? '-150px' : '150px'}, 0, 0)`,
    delay: delay,
    config: { tension: 220, friction: 120 },
    onRest: () => {
      if (inView) {
        onSkillInView(); // Notify parent component that this skill has finished animating
      }
    }
  });

  return (
    <animated.button ref={ref} style={springs} className="skill-button m-1">
      {skill}
    </animated.button>
  );
};

const SkillSection = ({ type, items, direction }) => {
  const [inViewIndex, setInViewIndex] = useState(0);

  useEffect(() => {
    if (inViewIndex < items.length) {
      const timer = setTimeout(() => {
        setInViewIndex(inViewIndex + 1);
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [inViewIndex, items.length]);

  return (
    <div className="mb-3">
      <h3>{type}</h3>
      <div className="d-flex flex-wrap">
        {items.map((skill, i) => (
          <AnimatedSkill
            key={i}
            skill={skill}
            delay={i * 400}
            direction={direction}
            onSkillInView={() => setInViewIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

function About() {
  const skills = [
    { type: 'Technical Skills:', items: ['React', 'JavaScript', 'Node.js', 'MySQL', 'Tailwind CSS', 'Java', 'Git'], direction: 'right' },
    { type: 'Soft Skills:', items: ['Dedication', 'Critical Thinking', 'Time Management'], direction: 'left' },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h3>Education</h3>
          <ul>
            <li>Master of Computer Application, AKTU University (2021-2023)</li>
            <li>Bachelor of Computer Science, Babu Banarasi Das University (2017-2020)</li>
          </ul>
          
          {/* Skill Sections */}
          {skills.map((skillSet, index) => (
            <SkillSection key={index} type={skillSet.type} items={skillSet.items} direction={skillSet.direction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
