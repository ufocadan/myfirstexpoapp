// App.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { getWeather } from './WeatherService';

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather();
      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {weather ? (
        <Text style={styles.text}>
          {`City:${weather.city} \nTemperature: ${weather.temperature}°C\nDescription: ${weather.description}`}
        </Text>
      ) : (
        <Text style={styles.loadingText}>Loading weather...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
