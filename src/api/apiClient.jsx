const API_URL = 'http://localhost:3005/api/pets';

const apiClient = {
  async getPets() {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener mascotas');
    }
    return await response.json();
  },

  async getPet(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener la mascota');
    }
    return await response.json();
  },

  async addPet(pet) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    });
    if (!response.ok) {
      throw new Error('Error al agregar la mascota');
    }
    return await response.json();
  },

  async deletePet(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      return null;
    } else if (!response.ok) {
      throw new Error('Error al eliminar la mascota');
    }

    return await response.json();
  },
};

export default apiClient;
