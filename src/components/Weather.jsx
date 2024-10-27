import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../services/WeatherService';
import { fetchCitySuggestions } from '../services/CityService';
import { 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  CircularProgress, 
  Box, 
  Autocomplete 
} from '@mui/material';

const Weather = () => {
  const [city, setCity] = useState('Brussels');
  const [selectedCity, setSelectedCity] = useState('Brussels');
  const [citySuggestions, setCitySuggestions] = useState([]);

  // Fetch de la météo
  const { data, error, isLoading } = useQuery(
    ['weather', selectedCity],
    () => fetchWeather(selectedCity),
    {
      enabled: !!selectedCity, // La requête ne se lancera que si selectedCity est défini
    }
  );

  // Fetch des suggestions de villes
  const handleCityChange = async (e, newValue) => {
    if (newValue === city) return;
    setCity(newValue);
    if (newValue.length > 2) {
      try {
        const suggestions = await fetchCitySuggestions(newValue);
        setCitySuggestions(suggestions);
      } catch (error) {
        console.error('Error fetching city suggestions:', error);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedCity(city);
  };

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px', 
        boxShadow: 3,
        maxWidth: 400, 
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Weather App
      </Typography>
      <form onSubmit={handleSearch}>
        <Autocomplete
          options={citySuggestions.map((city) => city.name)}
          value={city}
          onInputChange={handleCityChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter city"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: '10px' }}
            />
          )}
        />
        <Button 
          variant="contained" 
          type="submit" 
          fullWidth 
          sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}
        >
          Search
        </Button>
      </form>

      {isLoading && (
        <CircularProgress style={{ marginTop: '20px' }} />
      )}
      {error && (
        <Typography color="error" sx={{ marginTop: '20px' }}>
          Check spelling or no data present for this city.
        </Typography>
      )}
      {data && (
        <Card sx={{ marginTop: '20px', borderRadius: '8px' }}>
          <CardContent>
            <Typography variant="h5">{data.name}</Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              {data.weather[0].description}
            </Typography>
            <Typography variant="h6">{data.main.temp}°C</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Weather;