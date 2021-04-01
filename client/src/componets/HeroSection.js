import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function Herosection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Um Mundo de Cursos</h1>
            <p>O que você está esperando?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Vamos Começar</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Assistir Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default Herosection
