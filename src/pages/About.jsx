import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import me from '../assets/mountains.png'
import Frontend from '../components/Frontend.jsx'
import Backend from '../components/Backend.jsx'
import DevOps from '../components/DevOps.jsx'
import Business from '../components/Business.jsx'
import Experience from '../components/Experience.jsx'
import '../styles/About.css'
import { Link } from 'react-router-dom';

function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('transition');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    // Observe each ref element
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <div className="about">
        <Navbar />
        <h1 ref={(el) => sectionRefs.current[0] = el} className="bruh-1">About Me!</h1>
        <center>
          <div className="card-me">
            <img className="card-photo" src={me} alt="me"></img>
          </div>
          <div className="card-info">
            <h2 className="bruh-2"> 
              Hello! I'm Alan, a Computer Engineering student at Queen’s University with hands-on experience building end-to-end data and AI systems. I’m passionate about data engineering and machine learning, with a focus on developing scalable pipelines, real-time ML systems, and LLM-powered applications that turn complex data into actionable insights.
            </h2>
            <h2 className="bruh-2"> 
              Through my work, I’ve designed systems ranging from large-scale ETL pipelines to AI-driven tools that enable smarter decision-making. I enjoy bridging technical development with real-world impact, and I’m especially interested in roles that combine software, data, and strategy.
            </h2>

            <div className="buttons">
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
        </center>
        {/* Multiple refs for headings */}
        <h1 ref={(el) => sectionRefs.current[1] = el} className="bruh-3">Experience</h1>
        <Experience />

        {/* <h1 ref={(el) => sectionRefs.current[2] = el} className="bruh-3">Skills and Technologies</h1>
        <h2 ref={(el) => sectionRefs.current[3] = el} className="bruh-4">Frontend</h2>
        <Frontend />
        <h2 ref={(el) => sectionRefs.current[4] = el} className="bruh-4">Backend</h2>
        <Backend />
        <h2 ref={(el) => sectionRefs.current[5] = el} className="bruh-4">DevOps, Cloud, and Data</h2>
        <DevOps />
        <h2 ref={(el) => sectionRefs.current[6] = el} className="bruh-4">Business Intelligence & Analytics</h2>
        <Business /> */}
      </div>
    </>
  )
}

export default About;
