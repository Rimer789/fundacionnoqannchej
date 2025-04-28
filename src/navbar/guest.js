import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Home from '../components/informacion';
import Nosotros from '../components/nosotros';
import Proyectos from '../components/proyectos';
import './cs.css';
import Contactos from '../components/contactos';
import Donaciones from '../components/donaciones';
import Cuestionario from '../components/cuestionario';
import blancoImg from './logo.jpg';

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(true);
    const menuRef = useRef(null);
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
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setShowMenu(false);
                } 
                else if (currentScrollY < lastScrollY) {
                    setShowMenu(true);
                }
                
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav 
                ref={menuRef}
                className={`menu ${menuActive ? 'active' : ''} ${showMenu ? 'show' : 'hide'}`}
            >
                <div className="menu-container">
                    <div className="menu-header">
                        <div className="logo-container">
                            <img src={blancoImg} alt="Logotipo de la fundación" className="logo" />
                        </div>
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            &#9776;
                        </div>
                    </div>
                    
                    <ul>
                        <li className={location.pathname === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>
                            <Link to="/">QUIÉNES SOMOS</Link>
                        </li>
                        <li className={location.pathname === '/nosotros' ? 'active' : ''} onClick={() => handleLinkClick('/nosotros')}>
                            <Link to="/nosotros">QUÉ HACEMOS</Link>
                        </li>
                        <li className={location.pathname === '/proyectos' ? 'active' : ''} onClick={() => handleLinkClick('/proyectos')}>
                            <Link to="/proyectos">PROYECTOS</Link>
                        </li>
                        <li className={location.pathname === '/donaciones' ? 'active' : ''} onClick={() => handleLinkClick('/donaciones')}>
                            <Link to='/donaciones'>DONAR</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="contenido-despues-del-menu">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/contactos" element={<Contactos />} />
                    <Route path="/donaciones" element={<Donaciones />} />
                    <Route path='/cuestionario' element={<Cuestionario />} />
                </Routes>
            </div>
        </>
    );
};

export default Menu;