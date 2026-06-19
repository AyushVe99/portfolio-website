import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const EXPERIENCES = [
  {
    role: 'Full Stack Engineer',
    company: 'Manufac Analytics Pvt. Ltd.',
    duration: 'Jan 2026 – Present',
    description: [
      'Cut data synchronization delays by 30% by re-architecting low-latency backend services with PostgreSQL real-time subscriptions.',
      'Increased UI responsiveness by 40% by normalizing state management and optimizing rendering for large KPI datasets.',
      'Reduced production API failures by 35% by implementing caching and rate-limiting strategies for high-concurrency traffic.',
      'Built and scaled a real-time SaaS platform for employee engagement used by 5,000+ users, combining KPI tracking, comprehensive survey management, meetings, and feedback into a single system.',
      'Architected a robust Survey Manager enabling admins to create and automatically dispatch targeted lifecycle surveys (e.g., training, joining, 30/60-day) using CRON jobs.',
      'Developed dynamic survey components supporting various formats (MCQ, Likert, Yes/No, Open-ended) and implemented AI to synthesize survey responses into personalized, automated action plans.',
      'Built interactive data visualization charts to track respondent demographics (gender, department, ethnicity) alongside a custom margin of error calculator.',
      'Developed event-driven pipelines using AWS Lambda to process thousands of analytics events daily.',
      'Led cross-module refactoring across frontend and backend, aligning APIs and data models without downtime.',
      'Conducted regular code reviews (PR reviews), ensuring code quality, consistency, and adherence to best practices across the team.',
      'Improved debugging and monitoring by introducing structured logging and observability practices.'
    ],
    tech: ['Next.js', 'React.js', 'PostgreSQL', 'Caching', 'Rate-limiting', 'AWS Lambda', 'Supabase']
  },
  {
    role: 'Full Stack Engineer',
    company: 'Smalsus Infolab Pvt. Ltd.',
    duration: 'Oct 2023 – Jan 2026',
    description: [
      'Improved system throughput by 40% under load by designing and scaling REST APIs for high-frequency business workflows.',
      'Reduced application load times by 70% by optimizing asset delivery and implementing CI/CD-driven build pipelines.',
      'Cut API latency from 2 seconds to under 300ms by implementing SQL indexing, optimizing slow queries, and reducing payload sizes.',
      'Maintained 99.9% uptime across production environments by deploying and managing services on EC2 and S3 with automated CI/CD pipelines.',
      'Designed and deployed RESTful APIs with Express.js to integrate SPFx tools, improving reporting performance by 30%.',
      'Built a SharePoint–MongoDB Sync Tool handling 10,000+ records using Node.js and Mongoose.',
      'Developed an Operational Management Tool (OMT) for task tracking, workflow management, and team collaboration with real-time status updates.',
      'Refactored legacy code to enhance cross-browser compatibility.',
      'Implemented JWT authentication and input validation for secure internal endpoints.'
    ],
    tech: ['Node.js', 'Express.js', 'SQL', 'AWS EC2', 'AWS S3', 'CI/CD', 'MongoDB', 'SharePoint', 'SPFx']
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
