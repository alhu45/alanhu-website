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
import node from '../assets/node.png'
import REST from '../assets/api.webp'
import Python from '../assets/Python.png'
import Auth from '../assets/autho.png'
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
                        <img className = "card-image" src = { Flask } alt = "Flask"></img>
                        <p className = "card-title">Flask</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { node } alt = "node"></img>
                        <p className = "card-title">Node.js</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { REST } alt = "RESTful"></img>
                        <p className = "card-title">RESTful APIs</p>
                    </div>
                    <div className = "card">
                        <img className = "card-image" src = { Java } alt = "Java"></img>
                        <p className = "card-title">Java</p>
                    </div>   
                    <div className = "card">
                        <img className = "card-image" src = { Python } alt = "Python"></img>
                        <p className = "card-title">Python</p>
                    </div>   
                    <div className = "card">
                        <img className = "card-image" src = { Auth } alt = "Auth"></img>
                        <p className = "card-title">Authentications</p>
                    </div>      
                    <div className = "card">
                        <img className = "card-image" src = { C } alt = "C"></img>
                        <p className = "card-title">C</p>
                    </div>                 
                </center>
            </>   
		);
}

export default Card