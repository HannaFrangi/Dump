import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { AppLauncher } from '@capacitor/app-launcher';
import P2 from '../assets/P2.jpg';
import { logoInstagram, logoWhatsapp } from 'ionicons/icons';
import { faker } from '@faker-js/faker';

const checkCanOpenUrl = async () => {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.instagram.android' });
  
    console.log('Can open url: ', value);
  };
  const Whatsapp = async () => {
    await AppLauncher.openUrl({ url: 'com.whatsapp' });
  };
  const instagram = async() => {
await AppLauncher.openUrl({url:'com.instagram.android'});
  }; 
  const randomName = faker.person.fullName();
  const img = faker.image.animals();
  const Title = faker.internet.emoji();
  const subtitle = faker.vehicle.vehicle();
  const subtitle1 = faker.vehicle.vin();
  const subtitle2 = faker.vehicle.fuel();
  const Country = faker.address.country();
  const Country1 = faker.address.state();
  const Country2 = faker.address.city();
  console.log(randomName)
const tab2: React.FC = () => {

    return (
        <IonPage >
              <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start' >
<IonMenuButton/>
                    </IonButtons>
                    <IonTitle>{randomName} </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               <div className='ion-text-center ion-padding' > <img src={P2} width='100%' /> </div>
               <IonCard>
      <img  src={img} />
      <IonCardHeader>
        <IonCardTitle>{Title}</IonCardTitle>
        <IonCardSubtitle>{Country} {Country1} {Country2} </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{subtitle} {subtitle1} {subtitle2} </IonCardContent>
    </IonCard>
              <form onSubmit={checkCanOpenUrl}>
                <div className='ion-padding ion-center'>
                <IonButton onClick={Whatsapp}> Whatsapp <IonIcon icon={logoWhatsapp} slot='end'/></IonButton>
                <p>
               <IonButton onClick={instagram} color="success">Instagram <IonIcon icon={logoInstagram} slot='end'/></IonButton>
               </p>
               </div>
               </form>
            </IonContent>
        </IonPage>
    );
};

export default tab2;