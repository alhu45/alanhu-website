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
import Mongo from '../assets/mongo.webp'
import Spark from '../assets/spark.png'
import Kafka from '../assets/kafka.svg'
import AWS from '../assets/aws.png'
import Azure from '../assets/azure.jpg'
import Docker from '../assets/docker.png'
import Kubernetes from '../assets/docker.svg.png'
import Terraform from '../assets/terraform.png'
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
                        <img className = "card-image" src = { MySQL }></img>
                        <p className = "card-title">SQL</p>
                    </div>    
                    <div className = "card">
                        <img className = "card-image" src = { Mongo }></img>
                        <p className = "card-title">MongoDB</p>
                    </div>      
                    <div className = "card">
                        <img className = "card-image" src = { Spark }></img>
                        <p className = "card-title">Apache Spark</p>
                    </div>     
                    <div className = "card">
                        <img className = "card-image" src = { Kafka }></img>
                        <p className = "card-title">Apache Kafka</p>
                    </div>   
                    <div className = "card">
                        <img className = "card-image" src = { AWS }></img>
                        <p className = "card-title">AWS</p>
                    </div>  
                    <div className = "card">
                        <img className = "card-image" src = { Azure }></img>
                        <p className = "card-title">Azure</p>
                    </div>  
                    <div className = "card">
                        <img className = "card-image" src = { Docker }></img>
                        <p className = "card-title">Docker</p>
                    </div> 
                    <div className = "card">
                        <img className = "card-image" src = { Kubernetes }></img>
                        <p className = "card-title">Kubernetes</p>
                    </div> 
                    <div className = "card">
                        <img className = "card-image" src = { Terraform }></img>
                        <p className = "card-title">Terraform</p>
                    </div> 
                    <div className = "card">
                        <img className = "card-image" src = { Git }></img>
                        <p className = "card-title">Github Actions</p>
                    </div> 
                </center>
            </>   
		);
}

export default Card