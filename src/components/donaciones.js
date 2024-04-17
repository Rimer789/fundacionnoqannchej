import React, { useState } from "react";
import { FaPaypal, FaMoneyBill, FaYenSign } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./estilos/donaciones.css";
import imagen9 from "..//interfaz/marcanoqacchej.png";


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
    <div id="contenedord">
      <br/>
      <br/>
      <div class="mensaje-importante">
        ¡Únete a nuestra misión verde! Tu donación ayuda a forestar y plantar más árboles, contribuyendo al bienestar del planeta y construyendo un futuro más sostenible. ¡Cada aporte cuenta en nuestra labor para cuidar nuestro hogar común!
      </div>


      <div id="division">
        <div id="izquierdo">
          <img className="imagen-redonda" src={imagen9} alt="Imagen 2" />
          <div class="mensaje-importante">
            Forestemos y reforestemos juntos, nuestra amazonia
      </div>
        </div>

        <div id="derecho">
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
          <div class="mensaje-importante">
            Proximamente
      </div>
          <div>
            <button
              className={`boton-paypal ${botonSeleccionado === "paypal" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de PayPal");
                seleccionarBoton("paypal");
              }}
            >
              <span></span>
            </button>
          </div>
          <div>
            <button
              className={`boton-yape ${botonSeleccionado === "yape" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de Yape");
                seleccionarBoton("yape");
              }}
            >
              <span></span>
            </button>
            
          </div>
          <div>
          <button
              className={`boton-pay ${botonSeleccionado === "pay" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de pay");
                seleccionarBoton("pay");
              }}
            >
              <span></span>
            </button>
          </div>
          <div>
          <button
              className={`boton-fli ${botonSeleccionado === "fli" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de fli");
                seleccionarBoton("fli");
              }}
            >
              <span></span>
            </button>
          </div>
          <div>
          <button
              className={`boton-donate ${botonSeleccionado === "donate" ? "seleccionado" : ""}`}
              onClick={() => {
                mostrarModal("Información de donate");
                seleccionarBoton("donate");
              }}
            >
              <span></span>
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
