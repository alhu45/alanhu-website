import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar1.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    closeNav();
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeNav();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`nav-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />

      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeNav} aria-label="Close navigation">
          <FaTimes />
        </button>
        <Link to="/" onClick={closeNav}>Home</Link>
        <Link to="/about" onClick={closeNav}>Experience</Link>
        <Link to="/projects" onClick={closeNav}>Projects</Link>
      </div>

      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Experience</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <button className="hamburger" onClick={openNav} aria-label="Open navigation">
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
