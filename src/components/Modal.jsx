// Modal.jsx
import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, pet }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{pet.name}</h2>
        <img src={pet.photo} alt={pet.name} />
        <p><strong>Edad:</strong> {pet.age}</p>
        <p><strong>Descripción:</strong> {pet.description}</p>
        <p><strong>Características:</strong></p>
        <ul>
          {pet.characteristics.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
        <button className="close-modal-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
