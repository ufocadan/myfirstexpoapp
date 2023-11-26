import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DigitalClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const appName = 'Ünal Foçadan-Yeliz Foçadan';
  const formattedTime = currentDateTime.toLocaleTimeString([], { timeStyle: 'short' });
  const formattedDate = currentDateTime.toLocaleDateString();
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDateTime);

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{appName}</Text>
      <Text style={styles.digitalClock}>{formattedTime}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.day}>{dayOfWeek}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitalClock: {
    fontSize: 50,
    color: 'white',
  },
  date: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
    marginTop: 5,
  },
});

export default DigitalClock;
