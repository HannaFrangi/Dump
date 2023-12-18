import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { cloudCircleOutline, qrCodeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import './weather.css';
import ParticleBackground from 'react-particle-backgrounds'

const Weather: React.FC = () => {
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

  const settings = {
    particle: {
      particleCount: 100,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000
    }
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar class='insane-toolbar'>
          <IonButtons slot='start'> <IonBackButton defaultHref='/' /></IonButtons>
          <IonTitle>Weather <IonIcon icon={cloudCircleOutline} /></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding , custom-background" scrollY={false}>

        <IonInput onIonChange={(e) => setCity(e.detail.value)} labelPlacement="floating"> <div slot="label">
          City Name <IonText color="danger">(Required)</IonText>
        </div></IonInput>
        <IonButton shape="round" expand="block" fill='outline' color="tertiary" onClick={getWeatherData}>Get Weather</IonButton>
        {weatherData && (
          <div><IonCard className="custom-card"><IonCardHeader className="custom-card-header"><div className="header-content"><img src={weatherData.current.condition.icon} /><div className="header-text">{weatherData.location.name} , {weatherData.location.country} </div></div> </IonCardHeader>
            <IonCardContent class="custom-card-content">
              <IonCardSubtitle className="custom-card-subtitle">{weatherData.current.condition.text}</IonCardSubtitle>
              <IonCardSubtitle className="custom-card-subtitle">Temperature: {weatherData.current.temp_c} °C</IonCardSubtitle>
              <IonCardSubtitle className="custom-card-subtitle">Wind Speed:{weatherData.current.wind_kph} Kph</IonCardSubtitle>
              <IonCardSubtitle className="custom-card-subtitle">Wind Direction: {weatherData.current.wind_dir}</IonCardSubtitle>
              <IonCardSubtitle className="custom-card-subtitle">Humidity: {weatherData.current.humidity} % </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          </div>
        )}
        <ParticleBackground settings={settings} />
      </IonContent>

    </IonPage>
  );
};

export default Weather;