import React, { useState } from "react";
import "./estilos/proyectos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes, faQuestion } from "@fortawesome/free-solid-svg-icons";
import imagen18 from "../imagenes/imagen18.jpg";
import imagen14 from "../imagenes/imagen14.jpg";
import imagen17 from "../imagenes/imagen17.jpg";
import imagen19 from "../imagenes/imagen19.jpg";
import imagen20 from "../imagenes/imagen20.jpg";
import imagen50 from "../interfaz/img7.jpg";

export default function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: "Construcción del Futuro Educativo",
      description:
        "Presentación de la Propuesta de Financiamiento de la Vivienda estudiantil a la Cooperación Japonesa. Este proyecto busca mejorar las condiciones de vida de los estudiantes mediante la construcción de alojamientos adecuados y accesibles.",
      imageUrl: imagen20,
      fullDescription:
        "Este ambicioso proyecto tiene como objetivo principal la construcción de viviendas estudiantiles que alberguen a jóvenes de bajos recursos, permitiéndoles acceder a educación superior sin preocupaciones logísticas. La propuesta fue presentada a la Cooperación Japonesa, destacando su enfoque en sostenibilidad y comunidad. El diseño arquitectónico incorpora espacios verdes y áreas comunes para fomentar el estudio colaborativo y el desarrollo personal.",
    },
    {
      title: "Fortalecimiento del Desarrollo Sostenible",
      description:
        "El apoyo del desarrollo del programa de promoción de plantaciones forestales para las familias del Oriente Boliviano y zonas tropicales.",
      imageUrl: imagen18,
      fullDescription:
        "Nuestro programa de plantaciones forestales ha beneficiado a más de 500 familias en el Oriente Boliviano, proporcionando no solo recursos maderables sostenibles, sino también formación en gestión forestal responsable. Hemos establecido viveros comunitarios y capacitado a los lugareños en técnicas de reforestación que respetan los ecosistemas locales mientras generan ingresos económicos.",
    },
    {
      title: "Conservación y Restauración Ecológica",
      description:
        "Socialización del programa en las regiones del Oriente Boliviano y zonas tropicales del país. Recuperación de especies nativas en el área forestal.",
      imageUrl: imagen14,
      fullDescription:
        "Este programa integral combina educación ambiental con acción directa. Hemos identificado y mapeado más de 50 especies nativas en peligro, desarrollando estrategias específicas para su conservación. Las comunidades locales participan activamente en los procesos de restauración, aprendiendo sobre la importancia de la biodiversidad mientras contribuyen a protegerla.",
    },
    {
      title: "Complejo Productivo Forestal Industrial",
      description:
        "Implementación en la región Valles del Departamento de Cochabamba de un centro modelo de producción forestal sostenible.",
      imageUrl: imagen17,
      fullDescription:
        "El complejo productivo representa un modelo innovador que integra producción forestal con procesamiento industrial local, reduciendo así la huella de carbono del transporte. El proyecto incluye áreas de investigación donde se desarrollan técnicas de silvicultura avanzada, procesamiento eficiente de madera y desarrollo de productos forestales no maderables, generando empleo y conocimiento técnico en la región.",
    },
    {
      title: "Transformando Vidas en el Chapare",
      description:
        "Profesionalización de 48 beneficiados, hijos de comunarios, a través de estudios universitarios e institutos técnicos.",
      imageUrl: imagen19,
      fullDescription:
        "Este programa educativo ha permitido que jóvenes de comunidades rurales accedan a educación superior de calidad. Más allá de las becas, proporcionamos tutorías, alojamiento y seguimiento personalizado. Los beneficiarios estudian carreras estratégicas para el desarrollo regional como agronomía, ingeniería forestal y gestión ambiental, asegurando que sus conocimientos reviertan directamente en sus comunidades de origen.",
    },
  ];

  const defaultProject = {
    title: "Nuestros Proyectos",
    description:
      "Trabajamos en colaboración con instituciones académicas como las Universidades Franz Tamayo, Univalle, Unitep, Fundación Infocal y otras, desarrollando iniciativas que combinan educación, sostenibilidad y desarrollo comunitario.",
    imageUrl: imagen50,
    fullDescription:
      "Nuestra fundación se especializa en proyectos integrales que abordan los desafíos ambientales y sociales de manera holística. Cada iniciativa es diseñada con participación comunitaria, rigor científico y un enfoque de sostenibilidad a largo plazo. Nuestras alianzas con instituciones académicas nos permiten combinar conocimiento tradicional con investigación aplicada, generando soluciones innovadoras y replicables.",
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="proyectos-container">
      <div className="background-pattern"></div>

      <div className="proyectos-content">
        <div className="proyectos-header">
          <h1>Nuestros Proyectos</h1>
          <p>{defaultProject.description}</p>
        </div>

        <div className="proyectos-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="proyecto-card"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="proyecto-image"
              />
              <div className="proyecto-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      <div className={`proyecto-modal ${showModal ? "active" : ""}`}>
        <div className="modal-content">
          <FontAwesomeIcon
            icon={faTimes}
            className="modal-close"
            onClick={closeModal}
          />
          <img
            src={selectedProject?.imageUrl || defaultProject.imageUrl}
            alt={selectedProject?.title}
            className="modal-image"
          />
          <div className="modal-body">
            <h2>{selectedProject?.title || defaultProject.title}</h2>
            <p>
              {selectedProject?.fullDescription ||
                defaultProject.fullDescription}
            </p>
          </div>
        </div>
      </div>

      <a href="/cuestionario" className="floating-btn">
        <FontAwesomeIcon icon={faQuestion} />
      </a>
      <footer className="proyectos-footer">
        <a href="/cuestionario" className="floating-btn">
          <FontAwesomeIcon icon={faQuestion} />
        </a>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=61556457446489"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/noqanchej/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Fundación Ambiental. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
