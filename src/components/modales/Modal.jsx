import React from 'react';
import { useNavigate } from 'react-router-dom';
import './modalSty.css';

const Modal = ({ isOpen, onClose, title, content, buttonLabel, navigateTo }) => {
  const navigate = useNavigate();
  const handleButtonClick = () =>{
    navigate(navigateTo);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <div className="modal-body">
          {content}
        </div>
        <button className="modal-button" onClick={handleButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Modal;
