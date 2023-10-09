import axios from 'axios';

export const fetchSwapiData = async (resource) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/${resource}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching SWAPI data:', error);
    throw error;
  }
};
