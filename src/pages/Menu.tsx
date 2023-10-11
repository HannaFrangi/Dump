import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import P1 from '../assets/P1.jpg';

const Menu: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                <IonButtons slot='start'> <IonBackButton defaultHref='/'/></IonButtons>
                    <IonTitle>Stay wit me</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonCard>
      <img alt="P1" src={P1} />
      <IonCardHeader>
        <IonCardTitle>Metrooooooooo</IonCardTitle>
        <IonCardSubtitle>いっしょにいて下さい</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>あなたのあかしは、わたしを喜ばせ、　わたしを教えさとすものです。</IonCardContent>
    </IonCard>
    <div className='ion-text-center ion-padding'>
                <img src='https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Resident%20Evil%20-%20CODE%20Veronica%20X.jpg?alt=media&token=328099c8-bb39-4287-aeeb-3421074a67e7' width={'70%'}/>
                <audio controls >
        <source src="https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/A_D_H_D.mp3?alt=media&token=71767d45-26c3-411f-9a86-720a6f11f78b" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <div className='ion-text-center ion-padding' >  
      <img src='https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Manhunt.jpg?alt=media&token=c0925d61-0a14-48bf-a7f7-50a6e8a25906' width={'70%'}/>
      <audio controls >
        <source src="https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/HYAENA.mp3?alt=media&token=2aca951c-6aba-4245-a5c3-85bfdaf53b5d" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <div className='ion-text-center ion-padding' >
      <img src='https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Silent%20Hill%203.jpg?alt=media&token=5fd263b2-2561-4933-b25c-68762045f220' width={'70%'}/>
      <audio controls >
        <source src="https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Flooded_The_Face%5B1%5D.mp3?alt=media&token=6c42cd4b-0362-497f-bc5a-0a946ef0c296" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <div className='ion-text-center ion-padding'>
<img src='https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Primal%20-%20Civilization%20Is%20Only%20Skin%20Deep.jpg?alt=media&token=9ad44d5a-5ac3-42da-9915-730e24de5c00' width={'70%'} />
<audio controls >
        <source src="https://firebasestorage.googleapis.com/v0/b/test-da190.appspot.com/o/Maze.mp3?alt=media&token=3abe35d6-395f-43e5-9ba1-21061c6b33b9" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        </div>
            <iframe  src="https://open.spotify.com/embed/track/4IO2X2YoXoUMv0M2rwomLC?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/track/7KVBqGLGhrEejVokzYd8vF?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            
            </IonContent>
        </IonPage>
    );
};

export default Menu;