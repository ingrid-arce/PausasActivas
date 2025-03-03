import React, { useState } from 'react';
import './CategoryCards.css';
import Modal from '../modales/Modal';

import EspaldaAlta from '../../assets/img/espalda-alta.png';
import EspaldaBaja from '../../assets/img/espalda-baja.png';
import Manos from '../../assets/img/manos.png';
import Hombros from '../../assets/img/hombros.png';

const CategoryCard = ({ image, title, onClick }) => (
  <div className="category-card" onClick={onClick}>
    <img src={image} alt={title} className="card-image" />
    <p className="card-title">{title}</p>
  </div>
);

const CategoryCards = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: '' });

  const handleOpenModal = (title, content, navigateTo) => {
    setModalData({ isOpen: true, title, content, navigateTo });
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <section className="category-section">
      <CategoryCard
        image={EspaldaBaja}
        title="Espalda Baja"
        onClick={() => handleOpenModal( 'Calentamientos - Espalda Baja', 
          <div className='cuerpito'>
             <div>Levante las piernas doblando la rodilla, sostenga 10 segundos.</div>
            <div>Párese en las puntas de los pies 10 segundos.</div>
            <div>Realice una marcha suave en el mismo puesto aumentando la velocidad.</div>
          </div>,
          '/EjerciciosEspaldabaja'
        )}
      />
      <CategoryCard
        image={EspaldaAlta}
        title="Espalda Alta"
        onClick={() => handleOpenModal('Calentamientos - Espalda Alta', 
          <div className='cuerpito'>
            <div>Levante las piernas doblando la rodilla, sostenga 10 segundos.</div>
            <div> Pararse en puntas de pies durante 10 segundos.</div>
            <div>Realizar una marcha suave en el mismo puesto aumentando la velocidad gradualmente.</div> </div>,
            '/EjercicioEspaldaAlta'
      )}
      />
      <CategoryCard
        image={Manos}
        title="Manos"
        onClick={() => handleOpenModal('Calentamientos - Manos', 
          <div className='cuerpito'>
            <div>Abra y cierre las manos rápidamente por 10 segundos.</div>
            <div>Estire los dedos hacia atrás suavemente con la otra mano.</div>
            <div>Aprete el puño y realice movimientos circulares durante 10 segundos.</div>
          </div>,
          "/EjercicioManos"
        )}
      />
      <CategoryCard
        image={Hombros}
        title="Hombros"
        onClick={() => handleOpenModal('Calentamientos - Hombros', 
          <div className='cuerpito'>
            <div>Levante los hombros hacia las orejas, mantenga 5 segundos y suelte.</div>
            <div>Realice rotaciones suaves con los brazos extendidos hacia delante.</div>
            <div>Realice rotaciones suaves con los hombros extendidos hacia atras.</div>
          </div>,
          '/EjercicioHombros'
        )}
      />
      <Modal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        content={modalData.content}
        buttonLabel="Realizar ejercicios"
        navigateTo={modalData.navigateTo}
      />
    </section>
  );
};

export default CategoryCards;