import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { AppLauncher } from '@capacitor/app-launcher';
import P2 from '../Assets/P2.jpg';
import { logoInstagram, logoWhatsapp } from 'ionicons/icons';
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
const tab2: React.FC = () => {

    return (
        <IonPage >
              <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start' >
<IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Barcode</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
               <div className='ion-text-center ion-padding' > <img src={P2} width='100%' /> </div>
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