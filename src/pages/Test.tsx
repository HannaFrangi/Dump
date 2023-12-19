import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import V1 from '../assets/video/V1.webm';
import A1 from '../assets/sounds/audio.mp3'
import A2 from '../assets/sounds/fire.mp3'
import A3 from'../assets/sounds/water.mp3'
import sum from '../assets/sum.jpg'
import { logoSoundcloud } from 'ionicons/icons';
import ParticleBackground from 'react-particle-backgrounds'
import { useCallback } from "react";


const Test: React.FC = () => {
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
        
        <IonPage >
            <IonHeader >
                <IonToolbar color='danger'>
                <IonButtons slot='start'> <IonBackButton defaultHref='/'/></IonButtons>
                    <IonTitle>Audio <IonIcon icon={logoSoundcloud}/></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion center">
            <video loop autoPlay width="100%">
          <source src={V1} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className='ion-padding ion-center'>
        <audio controls>
          <source src={A1} type="audio/mp3"  />
          Your browser does not support the audio tag.
        </audio>
        <audio controls>
          <source src={A2} type="audio/mp3"  />
          Your browser does not support the audio tag.
        </audio>
        <audio controls>
          <source src={A3} type="audio/mp3"  />
          Your browser does not support the audio tag.
        </audio>
        </div>
        <ParticleBackground settings={settings} />
            </IonContent>
          
        </IonPage>
    );
};

export default Test;
