import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de agregar estilos a este archivo.
import logoImage from '../assets/logo.png'; // Asegúrate de que la ruta a la imagen es correcta

function Navbar({ links }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logoImage} alt="XWallet Logo" style={{ height: '50px' }} /> 
                </Link>
            </div>
            <ul className="navbar-links">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
