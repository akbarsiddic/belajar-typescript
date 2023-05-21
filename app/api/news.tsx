import axios from 'axios';

const API_KEY = 'ea699407926a471dad405f0701aae166'; // Replace with your News API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    console.log('News data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
};