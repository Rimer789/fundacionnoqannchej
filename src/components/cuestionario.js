import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

const Cuestionario = () => {
  const [respuestas, setRespuestas] = useState({});
  const [preguntaActual, setPreguntaActual] = useState(0);

  const preguntas = [
    "Tipo de combustible:",
    "Eficiencia del combustible (Rendimiento del automóvil):",
    "Distancia recorrida diariamente:",
    "Frecuencia de conducción:",
    "Emisiones de CO2 por unidad de combustible:",
    "Consumo diario de combustible:",
    "Factor de emisión de CO2 del combustible:",
    "¿Realizas mantenimiento regular en tu automóvil para mejorar la eficiencia del combustible?",
    "¿Tu automóvil cuenta con tecnologías de eficiencia energética, como start-stop o modo Eco?",
    "¿Consideras opciones de transporte alternativas para reducir la dependencia del automóvil?"
  ];

  const opciones = [
    ["Gasolina", "Diésel", "Eléctrico", "Otro"],
    ["Menos de 20 MPG / 8.5 km por litro", "20-30 MPG / 8.5-12.8 km por litro", "Más de 30 MPG / 12.8 km por litro"],
    ["Menos de 20 km", "20-50 km", "Más de 50 km"],
    ["Diariamente", "Solo durante la semana laboral", "Ocasionalmente"],
    ["Menos de 2.5 kg CO2 por litro / 9.4 kg CO2 por galón", "2.5-3.5 kg CO2 por litro / 9.4-13.2 kg CO2 por galón", "Más de 3.5 kg CO2 por litro / 13.2 kg CO2 por galón"],
    ["Menos de 10 litros", "10-20 litros", "Más de 20 litros"],
    ["Menos de 2.5 kg CO2 por litro / 9.4 kg CO2 por galón", "2.5-3.5 kg CO2 por litro / 9.4-13.2 kg CO2 por galón", "Más de 3.5 kg CO2 por litro / 13.2 kg CO2 por galón"],
    ["Sí, regularmente", "Ocasionalmente", "No"],
    ["Sí", "No", "No estoy seguro"],
    ["Sí, regularmente", "Ocasionalmente", "No"]
  ];

  const manejarSiguiente = () => {
    setPreguntaActual((prevPregunta) => prevPregunta + 1);
  };

  const manejarAtras = () => {
    setPreguntaActual((prevPregunta) => prevPregunta - 1);
  };

  const manejarRespuesta = (opcionSeleccionada) => {
    setRespuestas({ ...respuestas, [preguntaActual]: opcionSeleccionada });
  };

  const calcularEmisiones = () => {
    // Lógica de cálculo de emisiones
    const diasConducidosAlAno = 365;
    const distanciaDiaria = respuestas[2] === "Menos de 20 km" ? 20 : respuestas[2] === "20-50 km" ? 50 : 100;
    const eficienciaCombustible = respuestas[1] === "Menos de 20 MPG / 8.5 km por litro" ? 8.5 : respuestas[1] === "20-30 MPG / 8.5-12.8 km por litro" ? 12.8 : 20;
    const emisionesCombustible = respuestas[4] === "Menos de 2.5 kg CO2 por litro / 9.4 kg CO2 por galón" ? 2.5 : respuestas[4] === "2.5-3.5 kg CO2 por litro / 9.4-13.2 kg CO2 por galón" ? 3.5 : 5;
    const consumoDiario = respuestas[5] === "Menos de 10 litros" ? 10 : respuestas[5] === "10-20 litros" ? 20 : 30;

    const emisionesDiarias = (distanciaDiaria / eficienciaCombustible) * emisionesCombustible;
    const emisionesAnuales = emisionesDiarias * diasConducidosAlAno * consumoDiario;

    return {
      emisionesDiarias: emisionesDiarias.toFixed(2),
      emisionesAnuales: emisionesAnuales.toFixed(2)
    };
  };

  const mostrarResultados = () => {
    const resultados = calcularEmisiones();
    return (
      <div>
        <h3>Resultados:</h3>
        <p>Emisiones Diarias: {resultados.emisionesDiarias} kg CO2</p>
        <p>Emisiones Anuales: {resultados.emisionesAnuales} kg CO2</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Cuestionario y Calculadora</h1>
      {preguntaActual < preguntas.length ? (
        <div>
          <h3>{preguntas[preguntaActual]}</h3>
          <div>
            {opciones[preguntaActual].map((opcion, index) => (
              <button
                key={index}
                onClick={() => manejarRespuesta(opcion)}
                style={{ backgroundColor: respuestas[preguntaActual] === opcion ? "lightblue" : "white" }}
              >
                {opcion}
              </button>
            ))}
          </div>
          <button onClick={manejarAtras} disabled={preguntaActual === 0}>
            Atrás
          </button>
          <button onClick={manejarSiguiente}>Siguiente</button>
        </div>
      ) : (
        <div>
          {mostrarResultados()}
          <Link to="/">atras</Link>
        </div>
      )}
    </div>
  );
};

export default Cuestionario;
