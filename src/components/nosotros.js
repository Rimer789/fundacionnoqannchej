import React from "react";
import ".//estilos/nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagen1 from "../imagenes/imagen1.jpg";
import imagen2 from "..//imagenes/imagen2.jpg";
import imagen3 from "..//imagenes/imagen3.jpg";
import imagen4 from "..//imagenes/imagen4.jpg";
import imagen5 from "..//imagenes/imagen5.jpg";
import imagen6 from "..//imagenes/imagen6.jpg";
import imagen7 from "..//imagenes/imagen7.jpg";
import imagen8 from "..//imagenes/imagen8.jpg";
import imagen9 from "..//imagenes/imagen9.jpg";
import imagen10 from "..//imagenes/imagen10.jpg";




export default function Nosotros() {
    return (
        <section class="layoutn">
            <div class="leftSide">
                <img src={imagen1} alt="Imagen 1" />
                <br></br>
                <br></br>
                <img src={imagen2} alt="Imagen 1" />
                <br></br>
                <br></br>
                <img src={imagen3} alt="Imagen 1" />
                <br></br>
                <br></br>
                <img src={imagen4} alt="Imagen 1" />
                <br></br>
                <br></br>
                <img src={imagen5} alt="Imagen 1" />

            </div>
            <div class="bodyn">
                <div id="nosotros-container">
                    <div id="titulo">Fundación NOQANCHEJ:</div>
                    <div id="contenido">
                        <p>
                            La Fundación NOQANCHEJ es una entidad de Derecho Privado, sin fines de lucro, con sede en el Departamento de Cochabamba, Bolivia. Constituida bajo el régimen legal de las fundaciones, la organización se rige por estatutos y normativas constitucionales y legales. Su misión es promover el desarrollo del capital humano y social de manera sostenible, enfocándose en la formación y educación del potencial humano...
                        </p>
                        <p>
                            <strong>Visión:</strong> La visión estratégica de la Fundación se proyecta desde el Trópico de Cochabamba hacia todo el territorio nacional y América Latina. Se basa en el ejercicio regular y permanente del pensamiento sistémico, el análisis de la realidad y la búsqueda de soluciones a mediano y largo plazo. La Fundación busca siempre preferir actividades que respondan a una visión estratégica en la consecución de sus fines, sin perder de vista lo importante para el futuro.
                        </p>
                        <p>
                            <strong>Misión:</strong> La misión de la Fundación NOQANCHEJ es promover el desarrollo del capital humano y social de manera sustentable. Se enfoca principalmente en la formación y educación del potencial humano, complementando los servicios estatales y generando innovaciones tecnológicas de alto impacto. La Fundación aspira a aumentar la competitividad de los recursos humanos y sectores productivos, contribuyendo a mejorar los niveles de vida de la población.
                        </p>
                        <p>
                            En NOQANCHEJ, nos fundamentamos en principios de apoyo a la juventud, desarrollo armónico de la familia, pluralismo, inclusividad y respeto a la dignidad humana. Somos una institución sin vinculación política, comprometida con la democracia, la cultura, y la promoción del desarrollo rural. Valoramos la libertad individual, el desarrollo sostenible y reconocemos a la familia como el núcleo vital de la sociedad.
                        </p>
                        <p>
                            La duración de nuestra Fundación es indefinida, y nos esforzamos por contribuir al mejoramiento de las condiciones de vida a través de programas educativos, sociales, empresariales y habitacionales. Nos dedicamos a proyectos de investigación, desarrollo de cultivos alternativos, promoción del ecoturismo, y diversas iniciativas que generan impacto positivo. En NOQANCHEJ, nuestro compromiso va más allá, aspiramos a crear un legado duradero y sostenible para las generaciones venideras.
                        </p>
                    </div>
                </div>
            </div>
            <div class="rightSide">
                <img src={imagen6} alt="Imagen 2" />
                <br></br>
                <br></br>
                <img src={imagen7} alt="Imagen 2" />
                <br></br>
                <br></br>
                <img src={imagen8} alt="Imagen 2" />
                <br></br>
                <br></br>
                <img src={imagen9} alt="Imagen 2" />
                <br></br>
                <br></br>
                <img src={imagen10} alt="Imagen 2" />
                <br></br>
                <br></br>
            </div>
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