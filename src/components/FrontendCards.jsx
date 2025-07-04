import React from 'react';
import '../styles/Card.css';
import C from '../assets/C.webp';
import Flask from '../assets/Flask.png';
import Git from '../assets/Git.png';
import Java from '../assets/Java.webp';
import JS from '../assets/JS.png';
import TS from '../assets/typescript.png';
import ReactLogo from '../assets/React.png';
import nextjs from '../assets/nextjs-icon.svg';
import MySQL from '../assets/SQL.png'
import Vite from '../assets/vite.png'
import { useEffect } from 'react';

function Card(){

    useEffect(() => {
        const cards = document.querySelectorAll('.card');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            observer.observe(card);
        });
    }, []);

		return(
            <>
                <center>
                    <div className = "card">
                        <img className = "card-image" src = { ReactLogo } alt = "React"></img>
                        <p className = "card-title">React.js</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { TS } alt = "ts"></img>
                        <p className = "card-title">Typescript</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { nextjs } alt = "nextjs"></img>
                        <p className = "card-title">Next.js</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Vite } alt = "vitejs"></img>
                        <p className = "card-title">Vite.js</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { JS } alt = "JS"></img>
                        <p className = "card-title">HTML/CSS/JS</p>
                    </div>                    
                </center>
            </>   
		);
}

export default Card