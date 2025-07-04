import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import '../styles/Projects.css'
import instaVideo from '../assets/InstaRecipeVideo.mov'
import walkJump from '../assets/walkorjump.png'
import app from '../assets/elec290.png'
import pacman from '../assets/pacman.png'
import excel from '../assets/excel.png'
import crime from '../assets/TorontoCrime.png'
import instarecipe from '../assets/InstaRecipe.png'
import ttc from '../assets/ttc_msg.png'

function Projects() {
  const projectRefs = useRef([]);

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

    projectRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="project-page">
        <Navbar />
        <center>
          <div className="laptop">
            <div className="screen">
              <div className="heads"></div>
              <div className="text">Projects</div>
            </div>
            <div className="keyboard"></div>
          </div>

          <div ref={el => projectRefs.current[0] = el} className="project">
            <h1>See More of My Projects on GitHub!</h1>
            <div className="buttons">
              <a href="https://github.com/alhu45"> 
                <button className="cta">
                  <span>Click Here</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div ref={el => projectRefs.current[2] = el} className="project">
            <h1>TTC Delay System</h1>
            <p>
              TTC Alert System where users can send a message to receive the latest TTC delay at that time.
            </p>
            <div className="tech-stack">
              <div className="tech-tags">
                <span>Flask</span>
                <span>Apache Kafka</span>
                <span>Apache Spark</span>
                <span>MongoDB Atlas</span>
                <span>Twilio API</span>
                <span>Docker</span>
                <span>AWS EC2</span>
              </div>
            </div>
            <div className="image-me">
              <img className="card-image" src={ttc} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/TTC-Alert"> 
                <button className="cta">
                  <span>Check it out!</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </div>
          </div>


          <div ref={el => projectRefs.current[3] = el} className="project">
            <h1>Toronto Crime Rate</h1>
            <p>
            Toronto Crime Rate website that allows users to interact with a dynamic map showcasing crime data 
            in Toronto from 2014 to the present.
            </p>
            <div className="tech-stack">
              <div className="tech-tags">
                <span>PySpark</span>
                <span>MySQL</span>
                <span>Tableau</span>
                <span>PowerBI</span>
                <span>React.js</span>
              </div>
            </div>
            <div className="image-me">
              <img className="card-image" src={crime} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/Toronto-Crime-Website"> 
                <button className="cta">
                  <span>Check it out!</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div ref={el => projectRefs.current[4] = el} className="project">
            <h1>InstaRecipe</h1>
            <p>
              InstaRecipe is a website where users can upload pictures of ingredients they have, and in turn, 
              they will be given a recipe that is generated based on the classified ingredients.
            </p>
            <div className="tech-stack">
              <div className="tech-tags">
                <span>Pre-Trained ML</span>
                <span>Auth0</span>
                <span>Spoonacular API</span>
                <span>Flask</span>
                <span>React.js</span>
              </div>
            </div>
            <div className="image-me">
              <img className="card-image" src={instarecipe} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/InstaRecipe?tab=readme-ov-file"> 
                <button className="cta">
                  <span>Check it out!</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </center>
      </div>
    </>
  )
}

export default Projects
