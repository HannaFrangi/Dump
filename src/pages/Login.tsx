import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {cloudCircleOutline, globeOutline, iceCream, logInOutline, personCircleOutline, qrCode, qrCodeOutline } from 'ionicons/icons' ; 
import SH2 from "../assets/SH2.png"; 
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';
//import particlesOptions from "../Assets/particles.json";
import { useCallback } from "react";
 //import Particles from "react-particles";
import { Network } from '@capacitor/network';
import ParticleBackground from 'react-particle-backgrounds'


const INTRO_KEY = 'intro-seen';
const Login: React.FC = () => {
    const router = useIonRouter(); 
const [introSeen , SetIntroSeen] = useState(false);
const [present , dismiss] = useIonLoading();

useEffect(() => {
const CheckStorage =async () => {
    const seen = await Preferences.get({key: INTRO_KEY});
    console.log("file : login.tsx:17 CHeck Storage" , seen );
    SetIntroSeen(seen.value === 'true');
}
CheckStorage();
} , [] )


const doLOgin = async (event: any) => {
event.preventDefault(); 
 await present('Logging in');
 setTimeout( async () => {
    dismiss();
    router.push('/app', 'root');
 } , 2000)
console.log('doLOgin');

}; 
const FinishIntro = async() => {
    console.log('Finish');
    SetIntroSeen(true);
    Preferences.set({key: INTRO_KEY, value: 'true'});
}

const seeIntroAgain= () => {
SetIntroSeen(false);
Preferences.remove({key : INTRO_KEY}); 
}

const test = () => {
    router.push('/Test');
}
const map = () => {
  router.push('/map');
}
const logCurrentNetworkStatus = async () => {
  const status = await Network.getStatus();
  console.log('Network status:', status);
}; 
useEffect(() => {
  // Call your function when the component is first mounted
  logCurrentNetworkStatus();
}, []);

const settings = {
  particle: {
    particleCount: 150,
    color: "#e3d5d5",
    maxSize: 2
  },
  velocity: {
    directionAngle: 180,
    directionAngleVariance: 60,
    minSpeed: 0.1,
    maxSpeed: 0.3
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.4,
    opacityTransitionTime: 10000
  }
}


    return (
        <>
        {!introSeen ? (
        <Intro onfinish={FinishIntro}/> 
        ) :(
        <IonPage>
           
            <IonHeader>
                <IonToolbar color = 'danger'>
                    <IonTitle>Sum2Prove</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                
            <div className='ion-text-center ion-padding' >
            <img src={SH2} alt='SH Logo' width={'50%'} />
            
            </div>
            <IonCard>
            <IonCardContent>
                <form onSubmit={doLOgin}> 
                    <IonInput mode='md' fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='HannaFrangi.hf@gmail.com'></IonInput>
               <IonInput  mode='md' className='ion-margin-top' fill='outline' label='Password' labelPlacement='floating' type='password' ></IonInput>
              <IonButton type='submit' color='danger' expand='block' className='ion-margin-top' onClick={logCurrentNetworkStatus}> Login <IonIcon icon={logInOutline} slot="end"/> </IonButton>
            <IonButton routerLink='/register' color = 'tertiary' expand='block' className='ion-margin-top'> Create Account <IonIcon icon={personCircleOutline} slot='end'/></IonButton>
            <IonButton routerLink='/weather' color='danger' type='button'  expand='block'  className='ion-margin-top'>Weather <IonIcon icon={cloudCircleOutline} slot='end'/></IonButton>
            <IonButton onClick={seeIntroAgain} size='small'  type= 'button' color='warning' expand='block' className='ion-margin-top'> Watch Intro Again <IonIcon icon={logInOutline} slot="end"/> </IonButton>
            <IonButton  onClick={test} size='small'  type= 'button' color='dark' expand='block' className='ion-margin-top'>Test <IonIcon icon={iceCream} slot="end"/> </IonButton>
              <IonButton routerLink='/Qrcode' color='danger' type='button'  expand='block'  className='ion-margin-top'>Qr Code <IonIcon icon={qrCodeOutline} slot='end'/></IonButton>
                </form> 
            </IonCardContent>
            <ParticleBackground settings={settings}/>
           </IonCard>
           
            </IonContent>

        </IonPage>
    ) }
        </>
    );
};

export default Login;