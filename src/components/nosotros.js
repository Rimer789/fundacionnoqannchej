import React from "react";
import ".//estilos/nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


export default function nosotros() {
    return (
        <div id="contenedorn">
            <head>
                <title> NOQANCHEJ FUNDACION - Restauración y Conservación del Medio Ambiente</title>
                <meta name="description" content="NOQANCHEJ está comprometido con la restauración y conservación del medio ambiente, promoviendo un futuro sostenible para las generaciones venideras." />
            </head>
            <div id="divisionn">
                <div id="izquierdon">
                    <div id="titulon" className="titulon">
                        <p className="n">NOQANCHEJ</p>
                        <p className="f">FUNDACION</p>
                    </div>
                </div>
                <div id="derechon">
                    <div id="descripcionn" className="descripcionn">
                        <p>
                            La Fundación NOQANCHEJ es una entidad de Derecho Privado, sin fines de lucro,
                            con sede en el Departamento de Cochabamba, Bolivia. Constituida bajo el régimen legal de las fundaciones, la organización se rige por estatutos y normativas
                            constitucionales y legales. Su misión es promover el desarrollo del capital humano
                            y social de manera sostenible, enfocándose en la formación y educación del potencial humano...
                        </p>
                    </div>
                    <div >
                        <Link to="/Cuestionario"> <div className="boton-flotante"> OYE TU?</div></Link>
                    </div>

                </div>

            </div>
            <div id="contenedorn1">
                <div id="divisionn1">
                    <div id="izquierdon1">
                        <div id="descripcionn" className="descripcionn">
                            <p>
                                Apoyamos a las personas en el acceso a formación técnica profesional, gestionamos proyectos educativos, sociales y productivos, creamos grupos sociales fortalecidos, difundimos programas medioambientales y brindamos capacitación en el manejo de cultivos orgánicos, todo con el objetivo de preservar la flora y fauna, y promover un desarrollo sostenible.
                            </p>
                        </div>
                    </div>
                    <div id="derechon1">
                        <div id="titulon" className="titulon">
                            <p className="n">VISION</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contenedorn2">
                <div id="divisionn2">
                    <div id="izquierdon2">
                        <div id="descripcionn2" className="descripcionn2">
                            <p>Nos visualizamos como líderes en el desarrollo integral de comunidades, siendo reconocidos por nuestro compromiso con la educación técnica, la sostenibilidad ambiental y el fortalecimiento social. Aspiramos a ser un referente en la promoción de prácticas agrícolas orgánicas y la conservación de la biodiversidad, contribuyendo así al bienestar humano y al equilibrio ecológico.</p>
                        </div>
                    </div>
                    <div id="derechon2">
                        <div id="titulon" className="titulon">
                        <p className="n">MISION</p>

                        </div>
                    </div>
                </div>
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
