import React, { useState } from "react";
import "./ejerciciosStily.css"

import Ejercicio1B from "../../assets/img/EspaldaBaja/Ejercicio1.jpg"
import Ejercicio3B from "../../assets/img/EspaldaBaja/Ejercicio3.jpg"
import Ejercicio2B from "../../assets/img/EspaldaBaja/Ejercicio2.jpg"
import Ejercicio4B from "../../assets/img/EspaldaBaja/Ejercicio4.jpg"
import Ejercicio5B from "../../assets/img/EspaldaBaja/Ejercicio5.jpg"
import Ejercicio6B from "../../assets/img/EspaldaBaja/Ejercicio6.jpg"
import Ejercicio7B from "../../assets/img/EspaldaBaja/Ejercicio7.jpg"
import Ejercicio8B from "../../assets/img/EspaldaBaja/Ejercicio8.jpg"
import Ejercicio9B from "../../assets/img/EspaldaBaja/Ejercicio9.jpg"
import Ejercicio10B from "../../assets/img/EspaldaBaja/Ejercicio10.jpg"


const EjerciciosPorDia = {
  1: [
    { imagen: Ejercicio1B },
    { texto: "Corrección postural: en posición sedente arquear la espalda para mejorar la postura de columna vertebral." },
  ],
  2: [
    { imagen: Ejercicio2B },
    { texto: "En posición sentado incline el tronco hacia delante sobre los muslos en actitud relajada." },
  ],
  3: [
    { imagen: Ejercicio3B },
    { texto: "Acuéstese boca abajo con los codos apoyados en el piso, levante la cabeza y la espalda hacia atrás, manteniendo los brazos apoyados en el suelo. Mantenga la posición 5 segundos y vuelva a la posición de partida. Repita el movimiento hasta completar la serie." },
  ],
  4: [
    { imagen: Ejercicio4B },
    { texto: "Acostado boca arriba ubique las rodillas flexionadas y los pies sobre el suelo, luego ubique el tobillo derecho sobre la rodilla izquierda, lleve la pierna izquierda hacia el pecho y ubique las manos detrás del muslo izquierdo. Conserve esta postura por intervalo de 10 minutos y realice el mismo ejercicio con la pierna contraria." },
  ],
  5: [
    { imagen: Ejercicio5B },
    { texto: "Acostado sobre la espalda doblar las rodillas y llevar los talones hacia las nalgas, manteniendo los pies planos en el suelo. Agarrar los tobillos, y sujetándose a ellos, lentamente levantar las caderas, arqueando la parte baja de la columna y levantando el tronco hacia el techo. A medida que se van levantando las caderas, inhalar lentamente a través de la nariz." },
  ],
  6: [
    { imagen: Ejercicio6B },
    { texto: "Acuéstese boca arriba con los brazos en cruz, las rodillas flexionadas y las plantas de los pies apoyadas en el suelo. Flexione las rodillas en dirección al pecho. Puede llegar a tocarlo, pero no es necesario. Mantenga el ángulo de flexión de la cadera y las rodillas constante a lo largo de todo el ejercicio. Desde esa posición de partida, baje lentamente las dos rodillas hacia el lado izquierdo. Mantenga entre las dos rodillas la separación que le sea cómoda (no es necesario que se toquen). Antes de que la rodilla izquierda llegue a tocar el suelo, detenga el movimiento. Lentamente, vuelva a llevar las rodillas al centro y bájelas hacia la derecha. Repita a un lado" },
  ],
  7: [
    { imagen: Ejercicio7B },
    { texto: "Arquear y redondear la espalda acompañando con respiración" },
  ],
  8: [
    { imagen: Ejercicio8B },
    { texto: "Sobre una colchoneta en el suelo, ubique las manos y rodillas sobre el suelo, luego levante el izquierdo y la pierna derecha conservando la postura estable y la espalda extendida. Conserve la postura por intervalo de 5 segundos. Si no logra levantando la pierna puede iniciar solamente levantando un brazo e intercalando con el brazo contrario." },
  ],
  9: [
    { imagen: Ejercicio9B },
    { texto: "Acostado boca abajo, elevar las piernas ligeramente flexionadas durante todo el ejercicio. Lentito subimos una mano pegada al cuerpo dándole todo el recorrido posible. Alternamos con la otra mano y la otra pierna" },
  ],
  10: [
    { imagen: Ejercicio10B },
    { texto: "Acostado boca arriba, flexione rodillas y lleve las puntas de las manos en dirección a arriba, tome aire y eleve la cabeza, bote el aire al bajarla." },
  ],
};

const EjerciciosEspaldaBaja = () => {
  const [dia, setDia] = useState(1);

  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };
  return (
    <div className="ejercicios-container">
      <h1>Ejercicios para espalda baja - {dia}</h1>
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
        <option value="7"> 7</option>
        <option value="8"> 8</option>
        <option value="9"> 9</option>
        <option value="10"> 10</option>

      </select>

      <div className="boton-container">
        <button className="boton-guardar" onClick={() => window.open("https://forms.office.com/r/QYuY1ZbgAC")}>
          Guardar Progreso
        </button>
      </div>
    </div>
  );
};

export default EjerciciosEspaldaBaja;