// WeatherService.js

import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '2667fe7ca48dce3433714a708387c92f'; // Get your API key from https://openweathermap.org/

export const getWeather = async () => {
  try {
    // Get current device location
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Fetch weather data based on location
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
   
    const { main, weather, name} = response.data;
    const temperature = main.temp;
    const description = weather[0].description;
    const city = name;

    return { temperature, description, city };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
