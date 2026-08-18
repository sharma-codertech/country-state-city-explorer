const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// API Configuration
const API_BASE_URL = 'https://api.countrystatecity.in/v1';
const API_KEY = '0eae5194642eb8a18b11fa108f9b08eefe50df3db83b899f916968df25644c9a';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/countries`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

app.get('/api/states/:countryCode', async (req, res) => {
  try {
    const { countryCode } = req.params;
    const response = await axios.get(
      `${API_BASE_URL}/countries/${countryCode}/states`,
      {
        headers: {
          'X-CSCAPI-KEY': API_KEY
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching states:', error.message);
    res.status(500).json({ error: 'Failed to fetch states' });
  }
});

app.get('/api/cities/:countryCode/:stateCode', async (req, res) => {
  try {
    const { countryCode, stateCode } = req.params;
    const response = await axios.get(
      `${API_BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
      {
        headers: {
          'X-CSCAPI-KEY': API_KEY
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cities:', error.message);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

app.listen(PORT, () => {
  console.log(`🌍 Country State City UI running at http://localhost:${PORT}`);
  console.log(`📍 Open your browser and navigate to http://localhost:${PORT}`);
});
