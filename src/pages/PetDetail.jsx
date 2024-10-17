import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import '../styles/PetDetail.css';

const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const petData = await apiClient.getPet(id);
        setPet(petData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPet();
  }, [id]);

  const handleClose = () => {
    navigate('/home');
  };

  if (error) return <div>Error: {error}</div>;
  if (!pet) return <div>Cargando...</div>;

  return (
    <div className="pet-detail-container">
      <h1>{pet.name}</h1>
      <img src={pet.photoUrl} alt={pet.name} className="pet-image" />
      <p>Edad: {pet.age}</p>
      <p>Descripción: {pet.description}</p>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
};

export default PetDetail;
