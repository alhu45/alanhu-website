import React from 'react';
import '../styles/Card.css';
import PowerBI from '../assets/powerbi.png'
import Tableau from '../assets/tableau.png'
import Excel from '../assets/excel.svg.png'
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
                        <img className = "card-image" src = { PowerBI }></img>
                        <p className = "card-title">PowerBI</p>
                    </div>      
                    <div className = "card">
                        <img className = "card-image" src = { Tableau }></img>
                        <p className = "card-title">Tableau</p>
                    </div>     
                    <div className = "card">
                        <img className = "card-image" src = { Excel }></img>
                        <p className = "card-title">Excel</p>
                    </div>        
                </center>
            </>   
		);
}

export default Card