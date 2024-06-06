import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import Resume from '../assets/alan_hu_resume_copy.pdf';

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <nav ref={navRef}>
          <Link to="/alanhu-website" exact>Home</Link>
          <Link to="/alanhu-website/about">About</Link>
          <Link to="/alanhu-website/projects">Projects</Link>
          <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
