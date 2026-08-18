# Country State City Web UI

A beautiful interactive web UI to explore countries, states, and cities using the Country State City API.

## Features

- 🌍 Browse all countries worldwide
- 📍 Select states/regions for any country
- 🏙️ View cities within each state
- 💾 Real-time data fetching from Country State City API
- 🎨 Modern, responsive UI with gradient design
- ⚡ Fast and lightweight

## Project Structure

```
CountryStateCityProject/
├── server.js              # Express.js server
├── package.json           # Dependencies
├── public/
│   ├── index.html         # Main HTML page
│   ├── style.css          # Styling
│   └── script.js          # Frontend JavaScript
└── README.md              # This file
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- **express** - Web framework
- **axios** - HTTP client
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

You should see:
```
🌍 Country State City UI running at http://localhost:3000
📍 Open your browser and navigate to http://localhost:3000
```

### 3. Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

## 📸 Application Output

Here's what the web UI looks like in action:

![Country State City Explorer UI](https://github.com/sharma-codertech/country-state-city-explorer/raw/master/Output.png)

## How to Use

1. **Select a Country** - Choose from the dropdown list of all countries
2. **Select a State** - Once a country is selected, choose a state/region
3. **Select a City** - After selecting a state, browse available cities
4. **View Selection** - Your current selection is displayed in the info box
5. **Reset** - Click the reset button to start over

## API Endpoints

The application provides the following backend endpoints:

- `GET /api/countries` - Fetch all countries
- `GET /api/states/:countryCode` - Fetch states for a country
- `GET /api/cities/:countryCode/:stateCode` - Fetch cities for a state

## API Details

- **Provider**: Country State City API (countrystatecity.in)
- **API Key**: Configured in `server.js`
- **Base URL**: `https://api.countrystatecity.in/v1`

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: Country State City API
- **Tools**: npm, axios

## Customization

### Change Port

Edit `server.js`:
```javascript
const PORT = 3000; // Change this to your desired port
```

### Update API Key

Edit `server.js`:
```javascript
const API_KEY = 'your-api-key-here';
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
1. Change the PORT in `server.js`
2. Or kill the process using port 3000

### CORS Errors

CORS is already enabled in the server. If you still get errors:
- Check browser console for exact error
- Verify API key is valid
- Ensure API endpoint is accessible

### Countries Not Loading

- Check browser console for errors
- Verify internet connection
- Confirm API key is valid
- Check if API service is up at https://countrystatecity.in

## API Creation Guide

📖 **Detailed Documentation Available!**

For a comprehensive guide on **how to create your own API with authentication keys and detailed configuration**, please refer to the included document:

```
CountryStateCity_API_Beginner_Guide.docx
```

This document contains:
- ✅ Step-by-step API creation instructions
- 🔑 How to generate and manage API keys
- 🔐 Authentication setup and configuration
- 📝 Detailed examples and use cases
- 🛠️ Troubleshooting common issues
- 💡 Best practices for API development

**To follow along:**
1. Open the `CountryStateCity_API_Beginner_Guide.docx` file
2. Follow the detailed steps provided
3. Generate your own API key from [Country State City API](https://countrystatecity.in/)
4. Update the `API_KEY` in `server.js` with your key
5. Configure your environment variables in `.env` file

### Current API Configuration

This project uses the Country State City API with the following configuration:

**File:** `server.js`
```javascript
const API_BASE_URL = 'https://api.countrystatecity.in/v1';
const API_KEY = 'your-api-key-here';  // Replace with your own API key
```

**File:** `.env`
```env
API_KEY=your-api-key-here
```

⚠️ **Important:** Never commit your API key to version control. Always use environment variables and `.gitignore` to protect sensitive data.

## License

MIT

## API Attribution

Data provided by [Country State City API](https://countrystatecity.in/)
