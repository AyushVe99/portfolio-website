import React, { useMemo, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CSS/Projects.css';
import fitConnect from '../assets/fitConnect.png';
import Travel1 from '../assets/Travel-1.png';
import Travel2 from '../assets/Travel-2.png';
import Travel3 from '../assets/Travel-3.png';
import TimeEntry from '../assets/TimeEntry.png';
const PROJECTS = [
  {
    title: 'FitConnect – Fitness Trainer Hiring Platform',
    org: 'Personal Project',
    img: fitConnect,
    features: [
      'Trainer registration and profile showcase',
      'Browse and hire trainers',
      'Admin portal for application approvals',
      'Secure auth with role-based access (Admin/User/Trainer)'
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'],
    description:
      'Full-stack MERN platform with role-based authentication, trainer profiles, and an admin approval workflow to curate listings.',
    href: 'https://github.com/Ayush30012000/trainers-deadpr',
    tags: ['fullstack', 'mern', 'auth', 'admin']
  },
 
  {
    title: 'TimeSheet Management – SPFx SharePoint App',
    org: 'Enterprise Project',
    img: TimeEntry,
    features: [
      'View and fill daily/weekly time entries',
      'Edit, delete, and copy previous entries',
      'Date range filters and SmartSearch by project/site',
      'Role-aware actions and approval summary',
      'Responsive grid and export-ready data'
    ],
    stack: ['React', 'TypeScript', 'SPFx', 'SharePoint'],
    description:
      'SharePoint Framework web part enabling employees to manage time entries with filters, summaries, and role-based controls; integrated with SharePoint lists.',
    href: 'https://hhhhteams.sharepoint.com/sites/HHHH/SP/SitePages/UserTimeEntry.aspx',
    tags: ['sharepoint', 'spfx', 'typescript', 'react']
  },
  {
    title: 'Trouvile – Travel Packages Website',
    org: 'Personal Project',
    img: Travel1,
    images: [Travel1, Travel2, Travel3],
    features: [
      'Explore curated India travel packages',
      'Destination pages with highlights and galleries',
      'Responsive, mobile-first layouts',
      'Contact/lead form (backend WIP)'
    ],
    stack: ['React', 'TypeScript', 'Bootstrap'],
    description:
      'Frontend for a travel website offering curated itineraries and packages across India. Backend integration is in progress.',
    href: 'https://trivillio.vercel.app/',
    tags: ['frontend', 'travel', 'react']
  },
  {
    title: 'CraveVilla – Food Ordering Service',
    org: 'Personal Project',
    img: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png',
    features: ['Browse menus', 'Add to cart & checkout', 'Order tracking', 'Responsive UI'],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    description:
      'A full-stack food ordering web app enabling users to explore restaurants, build carts, and track orders with a clean, mobile-first UI.',
    href: 'https://food-ordering-app-psi-five.vercel.app/',
    tags: ['fullstack', 'mern', 'ecommerce']
  }
 
];

const ALL_TAG = 'all';

function Projects() {
  const [filter, setFilter] = useState(ALL_TAG);

  const tags = useMemo(() => {
    const s = new Set([ALL_TAG]);
    PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    if (filter === ALL_TAG) return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <div className="container mt-5 projects-section">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="m-0">Projects</h2>
        <div className="btn-group" role="group" aria-label="Project filters">
          {tags.map(t => (
            <button
              key={t}
              type="button"
              className={`btn btn-sm rounded-pill filter-btn ${filter === t ? 'active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-3">
        {filtered.map((p) => (
          <div key={p.title} className="col-12 col-md-6">
            <div className="card h-100">
              {Array.isArray(p.images) && p.images.length > 0 ? (
                <Carousel interval={3000} indicators={false} className="project-carousel">
                  {p.images.map((src, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={src} className="d-block w-100 project-carousel-img" alt={`${p.title}-${idx+1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <img src={p.img} className="card-img-top project-square-img" alt={p.title} />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <h6 className="text-muted mb-2">{p.org}</h6>
                <ul className="mb-2">
                  {p.features.map((f) => (
                    <li key={f} className="card-text">{f}</li>
                  ))}
                </ul>
                <div className="mb-2">
                  {p.stack.map(s => (
                    <span key={s} className="badge rounded-pill badge-tech me-1">{s}</span>
                  ))}
                </div>
                <p className="card-text" style={{color:'var(--text-muted)'}}>{p.description}</p>
                <div className="mt-auto">
                  <a href={p.href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
