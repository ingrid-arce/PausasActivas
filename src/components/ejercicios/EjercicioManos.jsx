import React, { useState } from "react";
import "./ejerciciosStily.css";


import Ejercicio1M from "../../assets/img/Manos/Ejercicio1.png"
import Ejercicio2M from "../../assets/img/Manos/Ejercicio2.png"
import Ejercicio3M from "../../assets/img/Manos/Ejercicio3.png"
import Ejercicio4M from "../../assets/img/Manos/Ejercicio4.png"
import Ejercicio5M from "../../assets/img/Manos/Ejercicio5.png"
import Ejercicio6M from "../../assets/img/Manos/Ejercicio6.png"

const EjerciciosPorDia = {
  1: [
    { imagen: Ejercicio1M },
    { texto: " Tome una pelota y hagala rodar hacia atrás y adelante flexionando y extendiendo la mano y la muñeca. A tolerancia, evite forzar el movimiento de extensión. " },
  ],
  2: [
    { imagen: Ejercicio2M },
    { texto: "Coloque los brazos con los puños cerrados sobre una mesa. Extienda los dedos sobre la mesa y vuelva a cerrar el puño lentamente." },
  ],
  3: [
    { imagen: Ejercicio3M },
    { texto: "Extienda la mano sobre la mesa con la palma hacia abajo. Separe el pulgar de los demás dedos, y luego acerque los dedos al pulgar uno por uno, y finalmente los separa uno por uno. " },
  ],
  4: [
    { imagen: Ejercicio4M },
    { texto: "Coloque las manos extendidas sobre la mesa, con las palmas hacia arriba. Doble los dedos hacia arriba y vuelvas a extender lentamente" },
  ],
  5: [
    { imagen: Ejercicio5M },
    { texto: ". Empleando una pelota de goma realice los  cuatro ejercicios 10 veces de forma suave" },
  ],
  6: [
    { imagen: Ejercicio6M },
    { texto: " . Empleando una goma elástico realice los tres ejercicios 5 veces de forma suave" },
  ],
};

const EjercicioManos = () => {
  const [dia, setDia] = useState(1);

  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };
  return (
    <div className="ejercicios-container">
      <h1>Ejercicios para Manos - {dia}</h1>
      <div className="ejercicios-list">
        {EjerciciosPorDia[dia].map((ejercicio, index) => (
          <div key={index}>
            {ejercicio.imagen && <img src={ejercicio.imagen} alt={`Ejercicio ${index + 1}`} />}
            <p>{ejercicio.texto}</p>
          </div>
        ))}
      </div>
      <select value={dia} onChange={handleDiaChange} className="dia-select">
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
        <option value="6"> 6</option>
      </select>
      <div className="boton-container">
        <button className="boton-guardar" onClick={() => window.open("https://forms.office.com/r/QYuY1ZbgAC")}>
          Guardar Progreso
        </button>
      </div>
    </div>
  );
};

export default EjercicioManos;