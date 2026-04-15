import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: 'Associate Software Engineer',
    company: 'Manufac',
    duration: 'Jan 2026 – Present',
    description: [
      'Built and scaled a real-time SaaS platform for employee engagement used by 5,000+ users, combining KPI tracking, comprehensive survey management, meetings, and feedback into a single system.',
      'Architected a robust Survey Manager enabling admins to create and automatically dispatch targeted lifecycle surveys (e.g., training, joining, 30/60-day) using CRON jobs.',
      'Developed dynamic survey components supporting various formats (MCQ, Likert, Yes/No, Open-ended) and implemented AI to synthesize survey responses into personalized, automated action plans.',
      'Built interactive data visualization charts to track respondent demographics (gender, department, ethnicity) alongside a custom margin of error calculator.',
      'Improved frontend performance by optimizing rendering and state management, reducing UI latency by ~40%.',
      'Designed low-latency backend systems with PostgreSQL and real-time data handling, cutting sync delays by ~30%.',
      'Enhanced system reliability under high traffic using caching and rate-limiting, reducing API failures by ~35%.',
      'Developed event-driven pipelines using AWS Lambda to process thousands of analytics events daily.',
      'Led cross-module refactoring across frontend and backend, aligning APIs and data models without downtime.',
      'Conducted regular code reviews (PR reviews), ensuring code quality, consistency, and adherence to best practices across the team.',
      'Improved debugging and monitoring by introducing structured logging and observability practices.'
    ],
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'AWS Lambda', 'React']
  },
  {
    role: 'Software Developer',
    company: 'Smalsus Infolab Pvt. Ltd.',
    duration: 'Oct 2023 – Jan 2026',
    description: [
      'Designed and deployed RESTful APIs with Express.js to integrate SPFx tools, improving reporting performance by 30%.',
      'Built a SharePoint–MongoDB Sync Tool handling 10,000+ records using Node.js and Mongoose.',
      'Developed an Operational Management Tool (OMT) for task tracking, workflow management, and team collaboration with real-time status updates.',
      'Refactored legacy code to enhance cross-browser compatibility and reduced load times by 90%.',
      'Implemented JWT authentication and input validation for secure internal endpoints.'
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'SharePoint', 'SPFx', 'JWT']
  }
];

function Experience() {
  return (
    <div className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
            Work Experience
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1e1e1e] group-hover:bg-electric-blue/20 group-hover:border-electric-blue transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <FaBriefcase className="text-electric-blue" size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1e1e1e] p-6 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-all shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-electric-blue font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 sm:mt-0">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="mr-2 text-electric-purple">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
