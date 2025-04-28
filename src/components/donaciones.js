import React, { useState } from "react";
import { FaPaypal, FaMoneyBill, FaCopy } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faWhatsapp, 
  faInstagram, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import "./estilos/donaciones.css";
import imagen9 from "../interfaz/marcanoqacchej.png";

export default function Donaciones() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "bancaria",
      name: "Transferencia Bancaria",
      icon: <FaMoneyBill className="payment-icon" />,
      info: {
        title: "Información Bancaria",
        content: (
          <div className="bank-details">
            <p><strong>Banco:</strong> Banco Nacional de Bolivia</p>
            <p><strong>Nombre:</strong> Fundación NOQANCHEJ</p>
            <p><strong>N° de Cuenta:</strong> 1500-4567-8901</p>
            <p><strong>CI/NIT:</strong> 123456789</p>
            <p><strong>Tipo de Cuenta:</strong> Cuenta Corriente</p>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText("1500-4567-8901")}>
              <FaCopy /> Copiar N° de Cuenta
            </button>
          </div>
        )
      }
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <FaPaypal className="payment-icon" />,
      info: {
        title: "Donación por PayPal",
        content: "Próximamente disponible. Estamos trabajando para habilitar esta opción de pago."
      }
    },
    {
      id: "yape",
      name: "Yape",
      icon: <span className="payment-icon">YAPE</span>,
      info: {
        title: "Donación por Yape",
        content: "Próximamente disponible. Estamos trabajando para habilitar esta opción de pago."
      }
    }
  ];

  const openModal = (method) => {
    setSelectedMethod(method);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="donaciones-container">
      <div className="donaciones-header">
        <div className="mission-statement">
          ¡Únete a nuestra misión verde! Tu donación ayuda a forestar y plantar más árboles, 
          contribuyendo al bienestar del planeta y construyendo un futuro más sostenible. 
          ¡Cada aporte cuenta en nuestra labor para cuidar nuestro hogar común!
        </div>
      </div>

      <div className="donaciones-content">
        <div className="donacion-image-section">
          <img 
            src={imagen9} 
            alt="Logo NOQANCHEJ" 
            className="donacion-image"
          />
          <div className="image-caption">
            Forestemos y reforestemos juntos, nuestra amazonia
          </div>
        </div>

        <div className="payment-methods">
          <h2 className="payment-title">Métodos de Donación</h2>
          
          <div className="payment-method">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className={`payment-btn ${selectedMethod === method.id ? 'selected' : ''}`}
                onClick={() => openModal(method.id)}
              >
                {method.icon}
                <span>{method.name}</span>
              </button>
            ))}
          </div>

          <p className="coming-soon">Más métodos de pago próximamente</p>
        </div>
      </div>

      <footer className="donaciones-footer">
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
        <p className="copyright">© {new Date().getFullYear()} NOQANCHEJ FUNDACION. Todos los derechos reservados.</p>
      </footer>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">
              {paymentMethods.find(m => m.id === selectedMethod)?.info.title}
            </h3>
            <div className="modal-body">
              {paymentMethods.find(m => m.id === selectedMethod)?.info.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}