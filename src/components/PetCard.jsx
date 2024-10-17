// PetCard.jsx
import React, { useState } from 'react';
import apiClient from '../api/apiClient';
import Modal from './Modal';
import '../styles/PetCard.css';

const PetCard = ({ pet, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await apiClient.deletePet(pet.id); 
      onDelete(pet.id); 
    } catch (error) {
      console.error('Error al eliminar la mascota', error);
    }
  };

  return (
    <div className="pet-card">
      <img src={pet.photoUrl} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Edad: {pet.age}</p>
      <div className="button-container">
        <button className="details-button" onClick={() => setIsModalOpen(true)}>
          Ver detalles
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Adoptar
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pet={pet} />
    </div>
  );
};

export default PetCard;
