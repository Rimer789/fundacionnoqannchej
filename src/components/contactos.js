import React, { useState } from "react";
import ".//estilos/conv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagenProyecto1 from "..//imagenes/bosque.jpg";


export default function Convenios() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "ALIANZA BOSQUES TROPICALES BOLIVIA S.A. Y FUNDACION NOQANCHEJ",
            description: "Nuestra organizacion productiva ha logrado consolidar una alianza estrategico fondo de la comunidad del grupo COBOCE. La empresa privada Nacional BOSQUES TROPICALES BOLIVIA S.A. y los productores agropecuarios Union UAAPRAMTROP, para consolidar un groprama: 'SUMAQ CAWSAY NOQNCHIKPAQ'",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 1...",
        },
        {
            title: "MONITOREO ACCION SOCIAL A INVERSIONISTAS DE PLANTACIONES FORESTALES COMERCIALES EN EL TROPICO DE COCHABAMBA",
            description: "falta",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 2...",
        },
        {
            title: "CONVENIO INTERINSTITUCIONAL ENTRE LA MANCOMUNIDAD DE MUNICIPIOS DEL VALLE ALTO DE LA REGION DE VALLES DE COCHABAMBA Y LA FUNDACION NOWANCHEJ  ",
            description: "El presente convenio interinstitucional tiene por objetivo la suma de esfuerzos para promoveer la implementacion del complejo regional de forestacion y reforestacion integral en la Mancomunidad de Municipios de Valle Alto correspondiente a la region valles de Cochabamba ",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 3...",
        },
        {
            title: "CONVENIO INTERINSTITUCIONAL MARCO ENTRE LA MANCOMUNIDAD DE MUNICIPIOS DEL TROPICO DE COCHABAMBA MTC Y LA FUNDACION NOQNCHEJ",
            description: "El precente convenio interinstitucional marco tiene por objetivo la suma de esfuerzos para promover emprendimientos, acciones, planes, programas y proyectos de caacter publico, privado y/o mixtos en el ambito medio ambiental, forestacion, reforestacion, aprovechamiento sostenible forestal",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 3...",
        },
        {
            title: "CONVENIO INTERINSTITUCIONAL MARCO ENTRE LA MANCOMUNIDAD AYOPAYA PARTE DE LA REGION ANDINA DEL DEPARTAMENTO DE COCHABAMBA Y LA FUNDACION NOQANCHEJ",
            description: "El presente convenio interinstitucional tiene por objetivo la suma de esfuerzos para promover la implementacion del complejo regional de forestacion y reforestacion en la mancomunidad de municipios de Ayopaya correspondiente a la region Andina del departamento de Cochabamba, la alianza implica impulsar y la gestion conjunta de financiamiento para estudios tecnicos de preinversion, inversion en proyectos regionales y municipales para la implementacion de unidades productivas ",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 3...",
        },
        {
            title: "CONVENIO DE COOPERACION INTERINSTITUCIONAL ENTRE LA UNIVERSIDAD INDIGENA BOLIVIANA COMUNITARIA INTERCULTURAL PRODUCTIVA QUECHUA 'CASIMIRU HUANCA' (UNIBOL QUECHUA) Y LA FUNDACION NOQANCHEJ",
            description: "El presente convenio tiene como objetivo establecer el marco para dar inicio a la cooperacion interinstitucional entre la FUNFACION NOQANCHEJ y la UNIBOL-QUECHUA persiguiento acciones conjuntas en las areas de conservacion de la Biodiversidad, medio ambiente, desarrollo sostenible para generar un impacto importante en la calidad de vidad de las personas",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 3...",
        },
        {
            title: "UNION DE ASOCIACIONES AGROPECUARIAS Y RUBROS AFINES DE LOS MUNICIPIOS DEL TROPICO DE COCHABAMBA UAAPRAMTROC FUNDACION NOQANCHEJ",
            description: "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal...",
            imageUrl: imagenProyecto1,
            additionalInfo: "Más información sobre el Proyecto 3...",
        },
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

        <section class="layoutc">
            <div class="header">
                <div id="titulo">CONVENIOS</div>
                <div id="descripcion">
                    <p>
                    Explora nuestra red de colaboraciones y alianzas estratégicas. La Fundación [Nombre] se enorgullece de contar con diversos convenios que fortalecen nuestro compromiso con el desarrollo sostenible, la educación, la salud y otros sectores clave.       </p>
                </div>
            </div>
            <div class="bodyc">
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
                                <h2 >{selectedProject.title}</h2>
                                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
                                <p>{selectedProject.description}</p>
                                <p>{selectedProject.additionalInfo}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div ></div>
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
