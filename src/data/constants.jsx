import React from 'react';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiDocker, SiFirebase, SiAmazonaws } from 'react-icons/si';

import fitConnect from '../assets/fitConnect.png';
import Travel1 from '../assets/Travel-1.png';
import TimeEntry from '../assets/TimeEntry.png';
import Food1 from '../assets/Food-1.png';
import OperationalTool from '../assets/OMT.png';

export const SKILLS = [
  { name: 'React.js', icon: <FaReact size={24} />, color: 'text-blue-400' },
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, color: 'text-white' },
  { name: 'TypeScript', icon: <SiTypescript size={24} />, color: 'text-blue-600' },
  { name: 'Node.js', icon: <FaNodeJs size={24} />, color: 'text-green-500' },
  { name: 'Express.js', icon: <SiExpress size={24} />, color: 'text-gray-300' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: 'text-cyan-400' },
  { name: 'MongoDB', icon: <SiMongodb size={24} />, color: 'text-green-400' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={24} />, color: 'text-blue-500' },
  { name: 'Docker', icon: <SiDocker size={24} />, color: 'text-blue-400' },
  { name: 'AWS', icon: <SiAmazonaws size={24} />, color: 'text-orange-500' },
  { name: 'Firebase', icon: <SiFirebase size={24} />, color: 'text-yellow-400' },
];

export const EXPERIENCES = [
  {
    role: 'Full Stack Engineer',
    company: 'Manufac Analytics Pvt. Ltd.',
    duration: 'Jan 2026 – Present',
    description: [
      'Scaled a Real-Time SaaS Platform: Built an employee engagement platform for 5,000+ users, implementing caching and rate-limiting to reduce production API failures by 35% under high-concurrency traffic.',
      'Optimized System Performance: Cut data synchronization delays by 30% via PostgreSQL real-time subscriptions and increased UI responsiveness by 40% through normalized state management for large KPI datasets.',
      'Architected Automated Workflows: Engineered a robust Survey Manager with CRON-based dispatchers, integrating AI to synthesize dynamic survey responses (MCQ, Likert, Open-ended) into personalized action plans.',
      'Built Event-Driven Analytics: Developed AWS Lambda pipelines to process thousands of daily events, powering interactive data visualization charts with custom margin-of-error calculations.',
      'Spearheaded Architecture & Quality: Led zero-downtime cross-module refactoring between frontend and backend systems, while introducing structured logging and enforcing best practices through rigorous PR reviews.'
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

export const PROJECTS = [
  {
    title: 'Medoly',
    subtitle: 'Medical Claims SaaS Platform',
    img: 'https://placehold.co/600x400/1e1e1e/white?text=Medoly',
    stack: ['React 19', 'TypeScript', 'Mantine UI', 'TanStack Query', 'AWS Amplify'],
    description: 'Architected a scalable, type-safe frontend. Engineered an advanced RBAC system for global auditor roles. Optimized data fetching for real-time claims review dashboard using TanStack Query and Zod.',
    href: null,
    tags: ['saas', 'healthcare', 'frontend']
  },
  {
    title: 'Culture Booster',
    subtitle: 'Employee Engagement Portal',
    img: 'https://placehold.co/600x400/1e1e1e/white?text=Culture+Booster',
    stack: ['Next.js', 'Supabase', 'Docker', 'GitHub Actions'],
    description: 'Enabled zero-downtime production releases via Docker and automated CI/CD. Built backend cron jobs to dynamically trigger employee lifecycle surveys. Built an interactive analytics dashboard with KPI visualizations.',
    href: null,
    tags: ['fullstack', 'analytics']
  },
  {
    title: 'Internal Timesheet Management System',
    subtitle: 'Timesheet & Project Management',
    img: 'https://placehold.co/600x400/1e1e1e/white?text=Timesheet+Dashboard',
    stack: ['React.js', 'TypeScript', 'Firebase'],
    description: 'Engineered end-to-end Timesheet and Project management modules. Secured database operations with custom Firebase Security Rules for RBAC. Centralized project tracking into a single unified dashboard.',
    href: null,
    tags: ['internal-tool', 'management']
  },
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
    title: 'TimeSheet Management (SPFx)',
    subtitle: 'SPFx SharePoint App',
    img: TimeEntry,
    stack: ['React', 'TypeScript', 'SPFx'],
    description: 'SharePoint Framework web part enabling employees to manage time entries with filters and summaries.',
    href: null,
    tags: ['sharepoint', 'enterprise']
  },
  {
    title: 'Operational Management Tool (SPFx)',
    subtitle: 'Task & Workflow Management System',
    img: OperationalTool,
    stack: ['React', 'TypeScript', 'SPFx', 'SharePoint'],
    description: 'Enterprise task tracking and workflow management tool with real-time status updates, Gantt chart visualization, and team collaboration features for operational efficiency.',
    href: null,
    tags: ['sharepoint', 'enterprise', 'fullstack']
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
