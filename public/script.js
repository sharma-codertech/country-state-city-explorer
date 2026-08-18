// DOM Elements
const countrySelect = document.getElementById('countrySelect');
const stateSelect = document.getElementById('stateSelect');
const citySelect = document.getElementById('citySelect');
const statesCard = document.getElementById('statesCard');
const citiesCard = document.getElementById('citiesCard');
const infoCard = document.getElementById('infoCard');
const emptyState = document.getElementById('emptyState');
const resetBtn = document.getElementById('resetBtn');
const selectedCountrySpan = document.getElementById('selectedCountry');
const selectedStateSpan = document.getElementById('selectedState');
const selectedCitySpan = document.getElementById('selectedCity');

// State
let selectedCountry = null;
let selectedCountryName = null;
let selectedState = null;
let selectedStateName = null;
let selectedCity = null;
let selectedCityName = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCountries();
  
  countrySelect.addEventListener('change', handleCountryChange);
  stateSelect.addEventListener('change', handleStateChange);
  citySelect.addEventListener('change', handleCityChange);
  resetBtn.addEventListener('click', resetSelection);
});

// Load Countries
async function loadCountries() {
  try {
    countrySelect.disabled = true;
    const response = await fetch('/api/countries');
    const countries = await response.json();
    
    countrySelect.innerHTML = '<option value="">-- Select a Country --</option>';
    
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.iso2;
      option.textContent = country.name;
      countrySelect.appendChild(option);
    });
    
    countrySelect.disabled = false;
  } catch (error) {
    console.error('Error loading countries:', error);
    countrySelect.innerHTML = '<option value="">Error loading countries</option>';
  }
}

// Handle Country Selection
async function handleCountryChange() {
  const countryCode = countrySelect.value;
  
  if (!countryCode) {
    statesCard.style.display = 'none';
    citiesCard.style.display = 'none';
    infoCard.style.display = 'none';
    emptyState.style.display = 'block';
    resetSelection();
    return;
  }
  
  selectedCountry = countryCode;
  selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
  selectedState = null;
  selectedStateName = null;
  selectedCity = null;
  selectedCityName = null;
  
  updateInfo();
  
  try {
    stateSelect.disabled = true;
    const response = await fetch(`/api/states/${countryCode}`);
    const states = await response.json();
    
    stateSelect.innerHTML = '<option value="">-- Select a State --</option>';
    
    if (states.length === 0) {
      stateSelect.innerHTML = '<option value="">No states available</option>';
      statesCard.style.display = 'none';
      citiesCard.style.display = 'none';
    } else {
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.iso2;
        option.textContent = state.name;
        stateSelect.appendChild(option);
      });
      statesCard.style.display = 'block';
    }
    
    stateSelect.disabled = false;
  } catch (error) {
    console.error('Error loading states:', error);
    stateSelect.innerHTML = '<option value="">Error loading states</option>';
    statesCard.style.display = 'block';
  }
}

// Handle State Selection
async function handleStateChange() {
  const stateCode = stateSelect.value;
  
  if (!stateCode || !selectedCountry) {
    citiesCard.style.display = 'none';
    selectedState = null;
    selectedStateName = null;
    selectedCity = null;
    selectedCityName = null;
    updateInfo();
    return;
  }
  
  selectedState = stateCode;
  selectedStateName = stateSelect.options[stateSelect.selectedIndex].text;
  selectedCity = null;
  selectedCityName = null;
  
  updateInfo();
  
  try {
    citySelect.disabled = true;
    const response = await fetch(
      `/api/cities/${selectedCountry}/${stateCode}`
    );
    const cities = await response.json();
    
    citySelect.innerHTML = '<option value="">-- Select a City --</option>';
    
    if (cities.length === 0) {
      citySelect.innerHTML = '<option value="">No cities available</option>';
      citiesCard.style.display = 'none';
    } else {
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.id;
        option.textContent = city.name;
        citySelect.appendChild(option);
      });
      citiesCard.style.display = 'block';
    }
    
    citySelect.disabled = false;
  } catch (error) {
    console.error('Error loading cities:', error);
    citySelect.innerHTML = '<option value="">Error loading cities</option>';
    citiesCard.style.display = 'block';
  }
}

// Handle City Selection
function handleCityChange() {
  const cityId = citySelect.value;
  
  if (!cityId) {
    selectedCity = null;
    selectedCityName = null;
  } else {
    selectedCity = cityId;
    selectedCityName = citySelect.options[citySelect.selectedIndex].text;
  }
  
  updateInfo();
}

// Update Info Display
function updateInfo() {
  selectedCountrySpan.textContent = selectedCountryName || '-';
  selectedStateSpan.textContent = selectedStateName || '-';
  selectedCitySpan.textContent = selectedCityName || '-';
  
  if (selectedCountry) {
    infoCard.style.display = 'block';
    emptyState.style.display = 'none';
  } else {
    infoCard.style.display = 'none';
    emptyState.style.display = 'block';
  }
}

// Reset Selection
function resetSelection() {
  countrySelect.value = '';
  stateSelect.value = '';
  citySelect.value = '';
  statesCard.style.display = 'none';
  citiesCard.style.display = 'none';
  infoCard.style.display = 'none';
  emptyState.style.display = 'block';
  selectedCountry = null;
  selectedCountryName = null;
  selectedState = null;
  selectedStateName = null;
  selectedCity = null;
  selectedCityName = null;
}
