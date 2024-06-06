import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import me from '../assets/me.png'
import Coding from '../components/Coding.jsx'
import '../styles/About.css'
import { Link } from 'react-router-dom';

function About() {
  const bruh1Ref = useRef(null);

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

    if (bruh1Ref.current) {
      observer.observe(bruh1Ref.current);
    }

    return () => {
      if (bruh1Ref.current) {
        observer.unobserve(bruh1Ref.current);
      }
    };
  }, []);

  return (
    <>
        <div className="about">
          <Navbar />
          <h1 ref={bruh1Ref} className="bruh-1">About Me!</h1>
          <center>
            <div className="card-me">
              <img className="card-photo" src={me} alt="me"></img>
            </div>
            <div className="card-info">
              <h2 className="bruh-2"> 
                Hi! My name is Alan and I am currently a second year Computer Engineering student at Queen's University.
                My primary interest lies in backend development, particularly in areas related to data management and 
                cybersecurity. I am motivated to deepen my understanding of data pipelines and explore effective methods to 
                safeguard data.
              </h2>
              <h2 className="bruh-2">
                Apart from my technical interests, I have a passion for running, working out, playing basketball, hiking, 
                enjoying nature, and collecting shoes. Feel free to check out my page!
              </h2>
              <div className="buttons">
                <Link to="/alanhu-website/projects"> 
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
          <h1 ref={bruh1Ref} className="bruh-3">What I worked with!</h1>
          <Coding />
        </div>
    </>
  )
}

export default About
