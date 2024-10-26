import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY_WEATHER;
const BASE_URL = import.meta.env.VITE_URL;

// Fonction pour récupérer les données météo en fonction d'une ville
export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city, 
        appid: API_KEY,
        units: 'metric', // Pour obtenir les données en Celsius
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    throw error;
  }
};