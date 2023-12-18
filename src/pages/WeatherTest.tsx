// src/components/WeatherComponent.js

import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonImg, IonAvatar } from '@ionic/react';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '070dca3953a54accb95212004231612';
  const apiUrl = 'https://api.weatherapi.com/v1/current.json'; // Replace with the actual API endpoint

  const getWeatherData = async () => {
    try {
      const response = await fetch(`${apiUrl}?&key=${apiKey}&q=${city}`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle error
    }
  };
  return (
    <IonContent>
      <IonInput placeholder="Enter city" onIonChange={(e) => setCity(e.detail.value)} />
      <IonButton onClick={getWeatherData}>Get Weather</IonButton>
      {weatherData && (
        <div><IonAvatar><IonImg src={weatherData.current.condition.icon}/></IonAvatar>

          <p>{weatherData.current.temp_f}</p>
          <p>Temperature: {weatherData.current.temp_c} C</p>
          {/* Display other weather information as needed */}
        </div>
      )}
    </IonContent>
  );
};

export default WeatherComponent;
