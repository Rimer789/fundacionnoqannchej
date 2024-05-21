import React, { useState, useEffect } from "react";
import ".//estilos/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import imagen9 from "..//interfaz/blanco.jpg";
import { Link } from "react-router-dom";

export default function Informacion() {
    const [idioma, setIdioma] = useState("es");
    const [textoTraducido, setTextoTraducido] = useState(null);

    useEffect(() => {
        // Función para obtener la traducción del texto
        const traducirTexto = async () => {
            const textos = [
                "NOQANCHEJ FUNDACION",
                "En NOQANCHEJ, estamos comprometidos con la restauración y conservación del medio ambiente. Nos dedicamos apasionadamente a la reforestación, promoviendo un futuro sostenible para las generaciones venideras.",
                "Nuestra misión va más allá de plantar árboles. Buscamos crear un impacto duradero, contribuyendo a la salud del planeta, mejorando la biodiversidad y proporcionando beneficios tangibles a las comunidades locales.",
                "Únete a nosotros en nuestra misión de construir un mundo más verde y sostenible. Cada árbol cuenta, cada acción importa. ¡Juntos podemos hacer la diferencia!"
            ];

            // Traduce los textos al idioma seleccionado
            const traducciones = await Promise.all(textos.map(async (texto) => {
                const traduccion = await traducirTextoIndividual(texto, idioma);
                return traduccion;
            }));

            // Actualiza el estado con los textos traducidos
            setTextoTraducido(traducciones);
        };

        traducirTexto();
    }, [idioma]);

    // Función para traducir un texto individual
    const traducirTextoIndividual = async (texto, idiomaDestino) => {
        const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyBO2S37YPuMMvT2iyNjYIJfi4DDcEvsvDo`;
        const data = {
            q: texto,
            target: idiomaDestino
        };
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            if (json && json.data && json.data.translations && json.data.translations.length > 0) {
                return json.data.translations[0].translatedText;
            } else {
                console.error("Error al traducir:", json);
                return texto;
            }
        } catch (error) {
            console.error("Error al traducir:", error);
            return texto;
        }
    };
    

    return (
        <div id="contenedori">
            <head>
                <title> NOQANCHEJ FUNDACION - Restauración y Conservación del Medio Ambiente</title>
                <meta name="description" content="NOQANCHEJ está comprometido con la restauración y conservación del medio ambiente, promoviendo un futuro sostenible para las generaciones venideras." />
            </head>
            <div id="divisioni">
                <div id="izquierdoi">
                    <img className="imagen-redondai" src={imagen9} alt="Imagen 2" />
                    <div id="tituloi" className="tituloi">{textoTraducido && textoTraducido[0]}</div>
                </div>
                <div id="derechoi">
                    <div id="descripcioni" className="descripcioni">
                        {textoTraducido && textoTraducido.slice(1).map((parrafo, index) => (
                            <p key={index}>{parrafo}</p>
                        ))}
                    </div>
                    <div>
                        <Link to="/Cuestionario"> <div className="boton-flotante"> OYE TU?</div></Link>
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
