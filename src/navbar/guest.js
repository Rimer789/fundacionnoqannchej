// Menu.js

import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from '../components/informacion';
import Nosotros from '../components/nosotros';
import Proyectos from '../components/proyectos';
import './cs.css';
import Contactos from '../components/contactos';
import Donaciones from '../components/donaciones';

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleLinkClick = (path) => {
        setMenuActive(false);
        navigate(path);
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;
    
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const nav = document.querySelector('.menu');
    
            if (scrollPosition > prevScrollPos) {
                // Oculta el menú al hacer scroll hacia abajo
                nav.classList.add('hidden');
            } else {
                // Muestra el menú al hacer scroll hacia arriba
                nav.classList.remove('hidden');
            }
    
            prevScrollPos = scrollPosition;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ marginBottom: isNavFixed ? '60px' : '0' }}>
            </div>

            <nav className={`menu ${menuActive || isNavFixed ? 'active' : ''}`}>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={location.pathname === '/nosotros' ? 'active' : ''} onClick={() => handleLinkClick('/nosotros')}>
                        <Link to="/nosotros">Acerca de nosotros</Link>
                    </li>
                    <li className={location.pathname === '/proyectos' ? 'active' : ''} onClick={() => handleLinkClick('/proyectos')}>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li className={location.pathname === '/contactos' ? 'active' : ''} onClick={() => handleLinkClick('/contactos')}>
                        <Link to='/contactos'>Convenios</Link>
                    </li>
                    <li className={location.pathname === '/donaciones' ? 'active' : ''} onClick={() => handleLinkClick('/donaciones')}>
                        <Link to='/donaciones'>Donaciones</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/contactos" element={<Contactos />} />
                    <Route path="/donaciones" element={<Donaciones />} />
                </Routes>
            </div>
        </>
    );
};

export default Menu;
