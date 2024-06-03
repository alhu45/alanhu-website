import React from 'react';
import '../styles/Card.css';
import C from '../assets/C.webp';
import Flask from '../assets/Flask.png';
import Git from '../assets/Git.png';
import Java from '../assets/Java.webp';
import JS from '../assets/JS.png';
import Python from '../assets/Python.png';
import ReactLogo from '../assets/React.png';
import MySQL from '../assets/SQL.png'
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
                        <img className = "card-image" src = { C } alt = "C"></img>
                        <p className = "card-title">C</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Python } alt = "Python"></img>
                        <p className = "card-title">Python</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Java } alt = "Java"></img>
                        <p className = "card-title">Java</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { MySQL } alt = "MySQL"></img>
                        <p className = "card-title">MySQL</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Flask } alt = "Flask"></img>
                        <p className = "card-title">Flask</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { ReactLogo } alt = "React"></img>
                        <p className = "card-title">React</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { JS } alt = "JS"></img>
                        <p className = "card-title">JS</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Git } alt = "Git"></img>
                        <p className = "card-title">Git</p>
                    </div>
                </center>
            </>   
		);
}

export default Card