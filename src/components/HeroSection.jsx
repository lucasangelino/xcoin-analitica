import React from 'react';
import '../styles/HeroSection.css'; // Asegúrate de agregar estilos a este archivo.

function HeroSection({ title, subtitle, buttonText }) {
    return (
        <div className="hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button>{buttonText}</button>
        </div>
    );
}

export default HeroSection;