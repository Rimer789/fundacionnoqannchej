import React, { useState, useEffect } from "react";
import ".//estilos/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import imagen9 from "../interfaz/blanco.jpg";
import { Link } from "react-router-dom";

export default function Informacion() {
  const [idioma, setIdioma] = useState("es");
  const [textoTraducido, setTextoTraducido] = useState([
    "NOQANCHEJ FUNDACION",
    "En NOQANCHEJ, estamos comprometidos con la restauración y conservación del medio ambiente. Nos dedicamos apasionadamente a la reforestación, promoviendo un futuro sostenible para las generaciones venideras.",
    "Nuestra misión va más allá de plantar árboles. Buscamos crear un impacto duradero, contribuyendo a la salud del planeta, mejorando la biodiversidad y proporcionando beneficios tangibles a las comunidades locales.",
    "Únete a nosotros en nuestra misión de construir un mundo más verde y sostenible. Cada árbol cuenta, cada acción importa. ¡Juntos podemos hacer la diferencia!",
  ]);

  const cambiarIdioma = () => {
    setIdioma(idioma === "es" ? "en" : "es");
  };

  useEffect(() => {
    document.title =
      "NOQANCHEJ FUNDACION - Restauración y Conservación del Medio Ambiente";
    document.querySelector('meta[name="description"]').content =
      "NOQANCHEJ está comprometido con la restauración y conservación del medio ambiente, promoviendo un futuro sostenible para las generaciones venideras.";
  }, []);

  return (
    <div className="info-container">
      <head>
        <title>
          NOQANCHEJ FUNDACION - Restauración y Conservación del Medio Ambiente
        </title>
        <meta
          name="description"
          content="NOQANCHEJ está comprometido con la restauración y conservación del medio ambiente, promoviendo un futuro sostenible para las generaciones venideras."
        />
      </head>

      <div className="language-switcher">
        <button className="language-btn" onClick={cambiarIdioma}>
          {idioma === "es" ? "EN" : "ES"}
        </button>
      </div>

      <div className="info-content">
        <div className="info-image-section">
          <img src={imagen9} alt="Logo NOQANCHEJ" className="info-image" />
          <h1 className="info-title">{textoTraducido[0]}</h1>
        </div>

        <div className="info-description-section">
          {textoTraducido.slice(1).map((parrafo, index) => (
            <p key={index} className="info-description">
              {parrafo}
            </p>
          ))}
        </div>
      </div>

      <a href="/cuestionario" className="floating-btn">
        <FontAwesomeIcon icon={faQuestion} />
      </a>

      <footer className="proyectos-footer">
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
