import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import me from '../assets/mountains.png'
import Speer from '../assets/Speer.jpeg';
import Hydro from '../assets/hydro.png';
import '../styles/About1.css'
import { Link } from 'react-router-dom';

function About() {
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('transition');
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) sectionObserver.observe(ref);
    });

    const cardObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => { if (ref) sectionObserver.unobserve(ref); });
      cardRefs.current.forEach(ref => { if (ref) cardObserver.unobserve(ref); });
    };
  }, []);

  const experiences = [
    {
      logo: Hydro,
      alt: 'Hydro One',
      company: 'Hydro One',
      role: 'Data Engineer Co-Op',
      period: 'May 2025 – Present',
    },
    {
      logo: Speer,
      alt: 'Speer Technologies',
      company: 'Speer Technologies',
      role: 'AI Full-Stack Engineer Intern',
      period: 'June 2024 – Sept 2024',
    },
  ];

  return (
    <div className="about">
      <Navbar />

      <div className="page-container">
        <h1 className="page-title">Hi I'm Alan</h1>
        <p className="page-subtitle">About Me</p>
        <div className="section-divider" />
        {/* ── Hero ── */}
        <div className="hero">
          <div className="hero-image-wrap">
            <img className="hero-photo" src={me} alt="me" />
          </div>
          <div className="hero-text">
            {/* <p className="hero-eyebrow">Computer Engineering · Queen's University</p> */}
            {/* <h1 className="hero-name">Hi, I'm Alan</h1> */}
            <div className="tag-row">
              <span className="tag">Data Engineering</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">LLM Applications</span>
              <span className="tag">ETL/ELT Pipelines</span>
              <span className="tag">AI Agents</span>
            </div>
            <p className="hero-bio">
              Computer Engineering student at Queen's University with hands-on experience building
              end-to-end data and AI systems — scalable pipelines, real-time ML, and LLM-powered
              applications that turn complex data into actionable insights.
            </p>
            <p className="hero-bio">
              I enjoy bridging technical development with real-world impact, and I'm especially
              interested in roles that combine software, data, and strategy.
            </p>
            <div className="btn-row">
              <Link to="/projects">
                <button className="cta">
                  <span>My Projects!</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}

        {/* ── Experience ── */}
        <h1
          ref={(el) => sectionRefs.current[0] = el}
          className="section-title"
        >
          Experience
        </h1>
        <p className="page-subtitle">My professional map</p>

        <div className="section-divider" />

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-card"
              ref={(el) => cardRefs.current[i] = el}
            >
              <img className="exp-logo" src={exp.logo} alt={exp.alt} />
              <div className="exp-body">
                <p className="exp-role">{exp.role}</p>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-period">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default About;
