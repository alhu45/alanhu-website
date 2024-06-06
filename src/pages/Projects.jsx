import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import '../styles/Projects.css'
import instaVideo from '../assets/InstaRecipeVideo.mov'
import walkJump from '../assets/walkorjump.png'
import app from '../assets/elec290.png'
import pacman from '../assets/pacman.png'
import excel from '../assets/excel.png'

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
            <h1>InstaRecipe</h1>
            <p>
              InstaRecipe is a website where users can upload pictures of ingredients they have, and in turn, 
              they will be given a recipe that is generated based on the classified ingredients.
            </p>
            <div className="video-me">
              <video className="card-video" src={instaVideo} alt="video" autoPlay loop muted />
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

          <div ref={el => projectRefs.current[1] = el} className="project">
            <h1>Jumping or Walking Prediction Model</h1>
            <p>
              Designed a desktop app to distinguish whether a dataset was jumping data or walking data.
            </p>
            <div className="image-me">
              <img className="card-image" src={walkJump} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/logistical-regression-walkjump-app"> 
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

          <div ref={el => projectRefs.current[2] = el} className="project">
            <h1>Pacman Game</h1>
            <p>
              Created a Pacman game where the player controls Pacman through a maze while avoiding ghosts. 
              Reads the map from a text file which is then manipulated using C code.
            </p>
            <div className="image-me">
              <img className="card-image" src={pacman} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/pacman-game"> 
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
            <h1>Posture Corrector App</h1>
            <p>
              An android app that uses Arduino and a gyroscope to detect the user's bad posture. Through the app, sends notifications to
              user to fix their posture.
            </p>
            <div className="image-me">
              <img className="card-image" src={app} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/posture-app"> 
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
            <h1>Excel Spreadsheet</h1>
            <p>
              Using data structures and algorithms, mimicked the functionality of excel spreadsheet.
            </p>
            <div className="image-me">
              <img className="card-image" src={excel} alt="video" autoPlay loop muted />
            </div>
            <div className="buttons">
              <a href="https://github.com/alhu45/excel-spreadsheet"> 
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
