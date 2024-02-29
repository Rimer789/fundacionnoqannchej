import React, { useState } from "react";
import { FaPaypal, FaMoneyBill, FaYenSign } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./estilos/donaciones.css";
import imagen9 from "..//imagenes/imagen9.jpg";


export default function Donaciones() {
  const [modalVisible, setModalVisible] = useState(false);
  const [botonInfo, setBotonInfo] = useState("");
  const [botonSeleccionado, setBotonSeleccionado] = useState(null);

  const mostrarModal = (info) => {
    setBotonInfo(info);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const seleccionarBoton = (boton) => {
    setBotonSeleccionado(boton);
  };

  return (
    <div id="contenedor">
      <div class="mensaje-importante">
        ¡Únete a nuestra misión verde! Tu donación ayuda a forestar y plantar más árboles, contribuyendo al bienestar del planeta y construyendo un futuro más sostenible. ¡Cada aporte cuenta en nuestra labor para cuidar nuestro hogar común!
      </div>


      <div id="division">
        <div id="izquierdo">
          <img className="imagen-redonda" src={imagen9} alt="Imagen 2" />

        </div>

        <div id="derecho">
          <h2>Dona mediante </h2>
          <button
            className={`boton-bancaria ${botonSeleccionado === "bancaria" ? "seleccionado" : ""}`}
            onClick={() => {
              mostrarModal("Cuenta Bancaria");
              seleccionarBoton("bancaria");
            }}
          >
            <FaMoneyBill />
            <span>Cuenta Bancaria</span>
          </button>
          <h3>proximamente</h3>
          <div>
            <button
              className={`boton-paypal ${botonSeleccionado === "paypal" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de PayPal");
                seleccionarBoton("paypal");
              }}
            >
              <FaPaypal />
              <span>PayPal</span>
            </button>
          </div>
          <br />
          <div>
            <button
              className={`boton-yape ${botonSeleccionado === "yape" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de Yape");
                seleccionarBoton("yape");
              }}
            >
              <FaYenSign />
              <span>Yape</span>
            </button>
          </div>
        </div>
      </div>

      <div id="referencias">
        <div id="redes-sociales">
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

      {modalVisible && (
        <div className="modal">
          <div className="modal-contenido mediano">
            <p>{botonInfo}</p>
            <button className="cerrar-modal" onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
