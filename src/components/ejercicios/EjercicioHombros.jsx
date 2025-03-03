import React, { useState } from "react";
import "./ejerciciosStily.css";


import Ejercicio1H from "../../assets/img/Hombros/Ejercicio1.png"
import Ejercicio2H from "../../assets/img/Hombros/Ejercicio2.png"
import Ejercicio3H from "../../assets/img/Hombros/Ejercicio3.png"
import Ejercicio4H from "../../assets/img/Hombros/Ejercicio4.png"
import Ejercicio5H from "../../assets/img/Hombros/Ejercicio5.png"
import Ejercicio6H from "../../assets/img/Hombros/Ejercicio6.png"

const EjerciciosPorDia = {
  1: [
    { imagen: Ejercicio1H },
    { texto: " Acostado boca arriba o de píe, sujetar un palo de escoba con ambas manos y llevar los brazos hacia arriba. Realizar 10 veces y sostener 5 segundos." },
  ],
  2: [
    { imagen: Ejercicio2H },
    { texto: " De pie o sentado, tomar un bastón de madera liviano con ambas manos, ubicar el brazo afectado a nivel del hombro y extenderlo hacia arriba, sostener por 15 segundos, repetir 5 veces." },
  ],
  3: [
    { imagen: Ejercicio3H },
    { texto: " De pie o sentado ubicar una banda elástica por encima del hombro, ubicar la mano del brazo afectado detrás de la espalda y tomar un extremo de la banda. Extender el brazo. Luego con la mano del brazo contrario tomar el otro extremo de la banda y halar hasta que el brazo contrario forme un ángulo de 90º sostener por 15 segundos, repetir 5 veces." },
  ],
  4: [
    { imagen: Ejercicio4H },
    { texto: "Toma una mancuerna de 1 libra con cada mano, las palmas de las manos hacia arriba y los codos cerca al cuerpo. Comienza de pie, y dobla los codos tratando de tocar el brazo con las mancuernas y sin doblar la muñeca. Regresa a la posición inicial. Entre serie y serie se descansarán 20 segundos. Realizar tres series de 15 repeticiones" },
  ],
  5: [
    { imagen: Ejercicio5H },
    { texto: " De pie, ubicar el brazo izquierdo estirado y en dirección al lado contrario, con la mano contraria realizar ligera presión hacia adentro en el brazo que está estirando. Realizar lo mismo con el brazo derecho. Realizar 3 veces por 15 segundos." },
  ],
  6: [
    { imagen: Ejercicio6H },
    { texto: " Llevar los brazos hacia atrás, entrelazar los dedos y estirar conservando la espalda erguida" },
  ],
};

const EjercicioHombros = () => {
  const [dia, setDia] = useState(1);
  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };
  return (
    <div className="ejercicios-container">
      <h1>Ejercicios para Hombros - Día {dia}</h1>
      <div className="ejercicios-list">
        {EjerciciosPorDia[dia].map((ejercicio, index) => (
          <div key={index}>
            {ejercicio.imagen && <img src={ejercicio.imagen} alt={`Ejercicio ${index + 1}`} />}
            <p>{ejercicio.texto}</p>
          </div>
        ))}
      </div>

      <select value={dia} onChange={handleDiaChange} className="dia-select">
        <option value="1">Día 1</option>
        <option value="2">Día 2</option>
        <option value="3">Día 3</option>
        <option value="4">Día 4</option>
        <option value="5">Día 5</option>
        <option value="6">Día 6</option>
      </select>
    </div>
  );
};

export default EjercicioHombros;