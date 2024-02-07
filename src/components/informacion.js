import React from "react";
import ".//estilos/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagen9 from "..//interfaz/blanco.jpg";
import { Link } from "react-router-dom";


export default function Informacion() {
    return (
        <div id="contenedori">
            <head>
                <title> NOQANCHEJ FUNDACION - Restauración y Conservación del Medio Ambiente</title>
                <meta name="description" content="NOQANCHEJ está comprometido con la restauración y conservación del medio ambiente, promoviendo un futuro sostenible para las generaciones venideras." />
            </head>
            <div id="divisioni">
                <div id="izquierdoi">
                    <img className="imagen-redondai" src={imagen9} alt="Imagen 2" />
                    <div id="tituloi" className="tituloi">NOQANCHEJ FUNDACION </div>
                </div>
                <div id="derechoi">
                    <div id="descripcioni" className="descripcioni">
                        <p>
                            En NOQANCHEJ, estamos comprometidos con la restauración y conservación del medio ambiente. Nos dedicamos apasionadamente a la reforestación, promoviendo un futuro sostenible para las generaciones venideras.
                        </p>
                        <p>
                            Nuestra misión va más allá de plantar árboles. Buscamos crear un impacto duradero, contribuyendo a la salud del planeta, mejorando la biodiversidad y proporcionando beneficios tangibles a las comunidades locales.
                        </p>
                        <p>
                            Únete a nosotros en nuestra misión de construir un mundo más verde y sostenible. Cada árbol cuenta, cada acción importa. ¡Juntos podemos hacer la diferencia!
                        </p>
                    </div>
                    <div >
                        <Link to="/Cuestionario"> <div className="boton-flotante"> OYE TU?</div></Link>
                    </div>

                </div>

            </div>

            <div id="referenciasi">
                <div id="redes-socialesi">
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

    );
}
