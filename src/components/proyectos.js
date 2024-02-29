import React, { useState } from "react";
import "./estilos/proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagen18 from "..//imagenes/imagen18.jpg";
import imagen14 from "..//imagenes/imagen14.jpg";
import imagen17 from "..//imagenes/imagen17.jpg";
import imagen19 from "..//imagenes/imagen19.jpg";
import imagen20 from "..//imagenes/imagen20.jpg";
import imagen50 from "../../src/interfaz/img7.jpg"; // Agregamos la imagen predeterminada

export default function Proyectos() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const projects = [
        {
            title: "CONSTRUCCIÓN DEL FUTURO EDUCATIVO",
            description: "Presentación de la Propuesta de Financiamiento de la Vivienda estudiantil a la Cooperación Japonesa...",
            imageUrl: imagen20,
        },
        {
            title: "FORTALECIENDO EL DESARROLLO SOSTENIBLE",
            description: "El apoyo del desarrollo del programa de promoción de plantaciones forestales para las familias del Oriente Boliviano y zonas tropicales...",
            imageUrl: imagen18,
        },
        {
            title: "FOMENTO DE LA CONSERVACIÓN Y RESTAURACIÓN ECOLÓGICA",
            description: "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal...",
            imageUrl: imagen14,
        },
        {
            title: "IMPLEMENTACION DE UN COMPLEJO PRODUCTIVO FORESTAL INDUSTRIAL EN LA REGION VALLES DEL DEPARTAMENTO DE COCHABAMBA",
            description: "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal...",
            imageUrl: imagen17,
        },
        {
            title: "TRANSFORMANDO VIDAS EN EL CHAPARE",
            description: "profesionalización de 48 beneficiados, hijos de comunarios, a través de estudios universitarios e institutos técnicos. un impulso educativo para el desarrollo de la región.",
            imageUrl: imagen19,
        },
    ];

    // Información predeterminada
    const defaultProject = {
        title: "NUESTROS PROYECTOS",
        description: "Los proyectos y programas desarrollados Gracias a las instituciones que nos han colaborado como ser las Universidades Franz Tamayo, Univalle; Unitep, Fundacion Infocal y otras universidades nos han permitido desarrollar nuestros proyectos",
        imageUrl: imagen50,
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleScroll = (direction) => {
        const scrollContainer = document.querySelector('.proyectos-derecha');
        if (scrollContainer) {
            if (direction === 'left') {
                scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
            } else if (direction === 'right') {
                scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }
    };

    const handleScrollPosition = () => {
        const scrollContainer = document.querySelector('.proyectos-derecha');
        if (scrollContainer) {
            setScrollPosition(scrollContainer.scrollLeft);
        }
    };

    return (
        <div className="proyectos-container">
            <div className="proyectos-izquierda">
                {selectedProject ? (
                    <div className="project-details">
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                    </div>
                ) : (
                    <div className="project-details">
                        <h2>{defaultProject.title}</h2>
                        <p>{defaultProject.description}</p>
                    </div>
                )}
            </div>
            <div className="proyectos-derecha" onScroll={handleScrollPosition}>
                {projects.map((project, index) => (
                    <div key={index} className="proyecto" onClick={() => handleProjectClick(project)}>
                        <img src={project.imageUrl} alt={project.title} />
                    </div>
                ))}
            </div>
           
            {selectedProject ? (
                <div className="background-image" style={{ backgroundImage: `url(${selectedProject.imageUrl})` }} />
            ) : (
                <div className="background-image" style={{ backgroundImage: `url(${defaultProject.imageUrl})` }} />
            )}
            <div>
                <Link to="/Cuestionario"> <div className="boton-flotante"> OYE TU?</div></Link>
            </div>
            <div id="referenciasi">
                <div id="redes-socialesi">
                    <a href="https://www.facebook.com/profile.php?id=61556457446489" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="https://www.instagram.com/noqanchej/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
    );
}
