import React from "react";
import ".//estilos/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Informacion() {
    return (
        <section class="layouti">
            <div class="main">
                <div id="inicio-containeri">
                    <div id="tituloi">FUNDACION NOQANCHEJ</div>
                    <div id="descripcioni">
                        <p >
                            En NOQANCHEJ , estamos comprometidos con la restauración y conservación del medio ambiente. Nos dedicamos apasionadamente a la reforestación, promoviendo un futuro sostenible para las generaciones venideras.
                        </p>
                        <p>
                            Nuestra misión va más allá de plantar árboles. Buscamos crear un impacto duradero, contribuyendo a la salud del planeta, mejorando la biodiversidad y proporcionando beneficios tangibles a las comunidades locales.
                        </p>
                        <p>
                            Únete a nosotros en nuestra misión de construir un mundo más verde y sostenible. Cada árbol cuenta, cada acción importa. ¡Juntos podemos hacer la diferencia!
                        </p>
                    </div>

                </div>
            </div>

            <div class="footer">
                <div id="footer-container">
                    <p>Contactanos</p>
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
