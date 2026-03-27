import React, { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar1.jsx'
import '../styles/Projects1.css'
import walkJump from '../assets/walkorjump.png'
import app from '../assets/elec290.png'
import pacman from '../assets/pacman.png'
import excel from '../assets/excel.png'
import crime from '../assets/TorontoCrime.png'
import instarecipe from '../assets/InstaRecipe.png'
import heatmap from '../assets/Heatmap.png'
import ttc from '../assets/ttc_msg.png'

const projects = [
  {
    title: 'Transit Ridership Heatmap',
    description:
      'TTC Transit Ridership Map letting users see how busy a TTC Subway station is at any time, powered by a custom XGBoost model and real-time ETL pipeline.',
    image: heatmap,
    tags: ['Custom API', 'XGBoost AI Model', 'ETL Pipeline', 'Feature Engineering', 'Terraform', 'Docker', 'Full-Stack'],
    links: [
      { label: 'Demo Website', href: 'https://github.com/alhu45/TTC-Alert' },
      { label: 'GitHub', href: 'https://github.com/alhu45/TTC-Alert' },
    ],
  },
  {
    title: 'TTC Delay Notification',
    description:
      'Alert system where users text a number and instantly receive the latest TTC delay information, built on a Kafka + Spark streaming pipeline.',
    image: ttc,
    tags: ['Flask', 'Apache Kafka', 'Apache Spark', 'MongoDB Atlas', 'Twilio API', 'Docker', 'AWS EC2'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alhu45/TTC-Alert' },
    ],
  },
  {
    title: 'Toronto Crime Rate',
    description:
      'Interactive map showcasing Toronto crime data from 2014 to present, with dynamic filtering and visualizations built on a PySpark data pipeline.',
    image: crime,
    tags: ['PySpark', 'MySQL', 'Tableau', 'PowerBI', 'React.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alhu45/Toronto-Crime-Website' },
    ],
  },
  {
    title: 'InstaRecipe',
    description:
      'Upload a photo of ingredients you have and receive an AI-generated recipe based on classified ingredients using a pre-trained ML model.',
    image: instarecipe,
    tags: ['Pre-Trained ML', 'Auth0', 'Spoonacular API', 'Flask', 'React.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alhu45/InstaRecipe?tab=readme-ov-file' },
    ],
  },
];

function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="project-page">
      <Navbar />
      <div className="page-container">

        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">A selection of things I've built</p>
        <div className="section-divider" />

        <div className="project-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card"
              ref={el => cardRefs.current[i] = el}
            >
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, k) => (
                    <a key={k} href={link.href}>
                      <button className="cta">
                        <span>{link.label}</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-row">
          <p>See more on GitHub</p>
          <a href="https://github.com/alhu45">
            <button className="cta">
              <span>Visit GitHub</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;
