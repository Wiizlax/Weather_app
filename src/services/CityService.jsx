import axios from 'axios';

const GEO_DB_API_URL = import.meta.env.VITE_URL_CITIES;
const GEO_DB_API_KEY = import.meta.env.VITE_API_KEY_CITIES;

export const fetchCitySuggestions = async (query) => {
  try {
    const response = await axios.get(GEO_DB_API_URL, {
      headers: {
        'X-RapidAPI-Key': GEO_DB_API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
      params: {
        namePrefix: query, // Filtrer par le début du nom de la ville
        minPopulation: 10000, // Limiter aux villes avec une certaine population
        limit: 5, // Limiter le nombre de résultats
      },
    });
    return response.data.data.map((city) => ({
      name: `${city.name}`,
      coordinates: [city.latitude, city.longitude],
    }));
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    throw error;
  }
};
