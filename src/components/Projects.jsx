import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import fitConnect from '../assets/fitConnect.png';
import Travel1 from '../assets/Travel-1.png';
import TimeEntry from '../assets/TimeEntry.png';
import Food1 from '../assets/Food-1.png';
import OperationalTool from '../assets/OMT.png';

const PROJECTS = [
  {
    title: 'FitConnect',
    subtitle: 'Fitness Trainer Hiring Platform (Next.js + MERN)',
    img: fitConnect,
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux Toolkit', 'Bootstrap'],
    description: 'Full-stack fitness trainer hiring platform with Next.js App Router, secure authentication, role-based access control (Admin/User/Trainer), and dedicated Admin Dashboard for trainer onboarding approval.',
    href: 'https://github.com/Ayush30012000/trainers-deadpr',
    tags: ['fullstack', 'mern']
  },
  {
    title: 'TimeSheet Management',
    subtitle: 'SPFx SharePoint App',
    img: TimeEntry,
    stack: ['React', 'TypeScript', 'SPFx'],
    description: 'SharePoint Framework web part enabling employees to manage time entries with filters and summaries.',
    href: 'https://hhhhteams.sharepoint.com/sites/HHHH/SP/SitePages/UserTimeEntry.aspx',
    tags: ['sharepoint', 'enterprise']
  },
  {
    title: 'Operational Management Tool',
    subtitle: 'Task & Workflow Management System',
    img: OperationalTool,
    stack: ['React', 'TypeScript', 'SPFx', 'SharePoint'],
    description: 'Enterprise task tracking and workflow management tool with real-time status updates, Gantt chart visualization, and team collaboration features for operational efficiency.',
    href: null,
    tags: ['sharepoint', 'enterprise']
  },
  {
    title: 'Trouvile',
    subtitle: 'Travel Packages Website',
    img: Travel1,
    stack: ['React', 'TypeScript', 'Bootstrap'],
    description: 'Frontend for a travel website offering curated itineraries and packages across India.',
    href: 'https://trivillio.vercel.app/',
    tags: ['frontend', 'travel']
  },
  {
    title: 'CraveVilla',
    subtitle: 'Food Ordering Service',
    img: Food1,
    stack: ['React', 'Redux', 'Node.js', 'MongoDB'],
    description: 'A full-stack food ordering web app enabling users to explore restaurants and build carts.',
    href: 'https://food-ordering-app-psi-five.vercel.app/',
    tags: ['fullstack', 'ecommerce']
  }
];

function Projects() {
  return (
    <div className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">
            Selected Work
          </span>
        </h2>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[#1e1e1e] border border-white/10"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-electric-blue font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-electric-blue transition-colors font-medium"
                    >
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-500 font-medium">
                      Private/Organizational Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
