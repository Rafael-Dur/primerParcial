import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetDetail from './pages/PetDetail';
import AddPet from './pages/AddPet';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetail />} />
        <Route path="/add-pet" element={<AddPet />} />
      </Routes>
    </Router>
  );
};

export default App;
