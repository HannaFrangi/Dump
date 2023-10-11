import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonRoute, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter();
const doRegister  = (event: any) => {
event.preventDefault();
console.log('doRegister');
router.goBack();
}; 

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'> <IonBackButton defaultHref='/'/></IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
            <IonCard>
            <IonCardContent>
                <form onSubmit={doRegister}>
                    <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='HannaFrangi.hf@gmail.com'></IonInput>
               <IonInput className='ion-margin-top' fill='outline' label='Password' labelPlacement='floating' type='password' ></IonInput>
            <IonButton routerLink='/' color = 'tertiary' expand='block' className='ion-margin-top'> Create Account <IonIcon icon={personCircleOutline} slot='end'/></IonButton>
                </form>
            </IonCardContent>
           </IonCard>
           </IonContent>
        </IonPage>
    );
};

export default Register;