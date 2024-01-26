import React, { useState } from "react";
import ".//estilos/proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagen18 from "..//imagenes/imagen18.jpg";
import imagen14 from "..//imagenes/imagen14.jpg";
import imagen17 from "..//imagenes/imagen17.jpg";
import imagen19 from "..//imagenes/imagen19.jpg";
import imagen20 from "..//imagenes/imagen20.jpg";



export default function Proyectos() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "CONSTRUCCIÓN DEL FUTURO EDUCATIVO",
            description: "Presentación de la Propuesta de Financiamiento de la Vivienda estudiantil a la Cooperación Japonesa...",
            imageUrl: imagen20,
            additionalInfo: [
                {
                    imageUrl: imagen18,
                },
                {
                    imageUrl: imagen18,
                }
            ],        },
        {
            title: "FORTALECIENDO EL DESARROLLO SOSTENIBLE",
            description: "El apoyo del desarrollo del programa de promoción de plantaciones forestales para las familias del Oriente Boliviano y zonas tropicales...",
            imageUrl: imagen18,
            additionalInfo: [
                {
                    imageUrl: imagen18,
                },
                {
                    imageUrl: imagen18,
                }
            ],
        },
        {
            title: "FOMENTO DE LA CONSERVACIÓN Y RESTAURACIÓN ECOLÓGICA",
            description: "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal...",
            imageUrl: imagen14,
            additionalInfo: [
                {
                    imageUrl: imagen18,
                },
                {
                    imageUrl: imagen18,
                }
            ],        },
        {
            title: "IMPLEMENTACION DE UN COMPLEJO PRODUCTIVO FORESTAL INDUSTRIAL EN LA REGION VALLES DEL DEPARTAMENTO DE COCHABAMBA",
            description: "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal...",
            imageUrl: imagen17,
            additionalInfo: [
                {
                    imageUrl: imagen18,
                },
                {
                    imageUrl: imagen18,
                }
            ],        },
        {
            title: "TRANSFORMANDO VIDAS EN EL CHAPARE",
            description: "profesionalización de 48 beneficiados, hijos de comunarios, a través de estudios universitarios e institutos técnicos. un impulso educativo para el desarrollo de la región.",
            imageUrl: imagen19,
            additionalInfo: [
                {
                    imageUrl: imagen18,
                },
                {
                    imageUrl: imagen18,
                }
            ],        },
    ];

    const openModal = (index) => {
        setModalVisible(true);
        setSelectedProject(projects[index]);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProject(null);
    };

    return (

        <section class="layoutp">
            <div class="header">
                <div id="titulo">Proyectos</div>
                <div id="descripcion">
                    <p>
                        Los proyectos y programas desarrollados
                        Gracias a las instituciones que nos han colaborado como ser las Universidades Franz Tamayo, Univalle; Unitep, Fundacion Infocal y otras universidades nos han permitido desarrollar nuestros proyectos.
                    </p>
                </div>
            </div>
            <div class="bodyp">
                <div id="proyectos-container">
                    {projects.map((project, index) => (
                        <div key={index} className="proyecto-box" onClick={() => openModal(index)}>
                            <h3 className="tituloa">{project.title}</h3>
                            <img src={project.imageUrl} alt={project.title} />
                            <p className="descripcion">{project.description}</p>
                        </div>
                    ))}

                    {modalVisible && selectedProject && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>{selectedProject.title}</h2>
                                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
                                <p>{selectedProject.description}</p>

                                {selectedProject.additionalInfo && (
                                    <div className="additional-images">
                                        {selectedProject.additionalInfo.map((additionalImage, index) => (
                                            <div key={index} className="additional-image">
                                                <img src={additionalImage.imageUrl} alt={`Imagen adicional ${index + 1}`} />
                                                <p>{additionalImage.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div class="rightSide"></div>
            <div class="footer">
                <div id="footer-container">
                    <div id="redes-sociales">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
