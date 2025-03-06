import React, { useState } from "react";
import "./ejerciciosStily.css"


import Ejercicio1A from "../../assets/img/EspaldaAlta/Ejercicio1.png"
import Ejercicio2A from "../../assets/img/EspaldaAlta/Ejercicio2.png"
import Ejercicio3A from "../../assets/img/EspaldaAlta/Ejercicio3.png"
import Ejercicio4A from "../../assets/img/EspaldaAlta/Ejercicio4.png"
import Ejercicio5A from "../../assets/img/EspaldaAlta/Ejercicio5.png"
import Ejercicio6A from "../../assets/img/EspaldaAlta/Ejercicio6.png"

const EjerciciosPorDia = {
  1: [
    { imagen: Ejercicio1A },
    { texto: "Liberar la tensión del cuello y de la espalda. Llevar ambas manos detrás de la cabeza para flexionarla, quedando el mentón pegado sobre el pecho. Siempre con suavidad y sin forzar la posición." },
  ],
  2: [
    { imagen: Ejercicio2A },
    { texto: "Es uno de los ejercicios de estiramiento que deben hacerse con mayor suavidad y precaución. Colocar un brazo por detrás del tronco y la otra mano sobre la parte contraria de la cabeza, y llevarla a un lado. Volver a la posición inicial y comenzar con el otro lado, siguiendo los mismos pasos." },
  ],
  3: [
    { imagen: Ejercicio3A },
    { texto: "Llevar la cabeza suavemente intentando mirar por encima del hombro y manteniendo la postura." },
  ],
  4: [
    { imagen: Ejercicio4A },
    { texto: "Llevar los brazos hacia adelante, flexionar las rodillas ligeramente y llevar el tronco hacia adelante mirando hacia abajo. " },
  ],
  5: [
    { imagen: Ejercicio5A },
    { texto: " Nos ubicamos frente a la pared y utilizando una pelota mediana la ubicamos contra la pared y la apretamos con la frente por intervalo de 6 segundos. Realizar 10repeticiones suaves. Tener en cuenta conservar la espalda erguida y realizar la fuerza solo con la cabeza. Realizar el mismo ejercicio con la parte posterior de la cabeza." },
  ],
  6: [
    { imagen: Ejercicio6A },
    { texto: "Sobre una colchoneta en el suelo, ubique las manos y rodillas sobre el suelo, luego levante el izquierdo y la pierna derecha conservando la postura estable y la espalda extendida. Conserve la postura por intervalo de 5 segundos. Si no logra levantando la pierna puede iniciar solamente levantando un brazo e intercalando con el brazo contrario. " },
  ],
};

const EjercicioEspaldaAlta = () => {
  const [dia, setDia] = useState(1);
  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };
  return (
    <div className="ejercicios-container">
      <h1>Ejercicios para Espalda Alta - {dia}</h1>
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

export default EjercicioEspaldaAlta;