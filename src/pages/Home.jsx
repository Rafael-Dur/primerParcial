import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../api/apiClient';
import PetCard from '../components/PetCard';
import '../styles/Home.css';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterAge, setFilterAge] = useState('');

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await apiClient.getPets();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    fetchPets();
  }, []);

  const handleDelete = (id) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };

  const filteredPets = pets.filter(pet => 
    (filterType ? pet.type === filterType : true) &&
    (filterAge ? pet.age === filterAge : true)
  );

  return (
    <div className="home-container">
      <h1 className="home-title">Lista de Mascotas</h1>
      <Link to="/add-pet">
        <button className="add-pet-button">Agregar Mascota</button>
      </Link>

      {/* Filtros */}
      <div className="filters">
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="">Filtrar por Tipo</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
        <select onChange={(e) => setFilterAge(e.target.value)}>
          <option value="">Filtrar por Edad</option>
          <option value="cachorro">Cachorro</option>
          <option value="adulto">Adulto</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      {/* Mostrar mascotas filtradas */}
      <div className="pet-grid">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
