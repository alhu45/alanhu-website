import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import me from '../assets/mountains.png'
import Coding from '../components/Coding.jsx'
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
              Hello! I'm Alan, a third-year Computer Engineering student at Queen's University with a deep passion 
              for all things software. While I have a strong interest in backend development, particularly in 
              data engineering and cybersecurity, I am eager to explore the broader field of software engineering.
            </h2>
            <h2 className="bruh-2">
              I believe in continuously improving by embracing new experiences, learning from my mistakes, and pushing myself outside my 
              comfort zone. Beyond technology, I am also interested in consulting and business, as I enjoy solving complex 
              problems, working with teams, and understanding how technical solutions drive real-world impact. Feel free to check out my page!
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

        <h1 ref={(el) => sectionRefs.current[2] = el} className="bruh-3">Some of My Current Tech Stack!</h1>
        <Coding />
      </div>
    </>
  )
}

export default About;
