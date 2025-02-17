import React from 'react';
import '../styles/ExperienceCard.css';
import Speer from '../assets/Speer.jpeg';

import { useEffect } from 'react';

function Experience(){

    useEffect(() => {
        const cards = document.querySelectorAll('.cardExp');

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

        cards.forEach(cardExp => {
            observer.observe(cardExp);
        });
    }, []);

		return(
            <>
                <center>
                    <div className = "cardExp">
                        <img className = "cardExp-image" src = { Speer } alt = "Speer"></img>
                        <p className = "cardExp-title">Speer Technologies</p>
                        <p className = "cardExp-pos">Full-Stack Engineer Intern</p>
                        <p className = "cardExp-time">June 2024 to Sept 2024</p>
                        <p className = "cardExp-text">
                            Assisted in building developing and deploying full-stack web applications using Next.js.
                            Developed responsive UI components and integrated them with backend APIs.
                            Met with clients to discuss project requirements, gather feedback, and ensure alignment with business goals.
                            Collaborated with senior developers to troubleshoot and resolve bugs.
                        </p>
                    </div>
                </center>
            </>   
		);
}

export default Experience