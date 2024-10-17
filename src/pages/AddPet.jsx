// AddPet.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import '../styles/AddPet.css';

const AddPet = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('cachorro');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPet = {
      name,
      age,
      type,
      description,
      characteristics: characteristics.split(',').map(item => item.trim()),
      photo,
    };

    try {
      await apiClient.addPet(newPet);
      navigate('/');
    } catch (error) {
      console.error('Error al agregar la mascota:', error);
    }
  };

  return (
    <div className="add-pet-container">
      <h1>Agregar Nueva Mascota</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <select 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required
        >
          <option value="cachorro">Cachorro</option>
          <option value="adulto">Adulto</option>
          <option value="senior">Senior</option>
        </select>
        <input 
          type="text" 
          placeholder="Tipo (perro, gato, etc.)" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Descripción" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Características (separadas por comas)" 
          value={characteristics} 
          onChange={(e) => setCharacteristics(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="URL de la foto" 
          value={photo} 
          onChange={(e) => setPhoto(e.target.value)} 
          required 
        />
        <button type="submit">Agregar Mascota</button>
      </form>
    </div>
  );
};

export default AddPet;
