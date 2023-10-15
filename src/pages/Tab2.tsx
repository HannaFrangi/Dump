import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const tab2: React.FC = () => {

    return (
        <IonPage>
              <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start' >
<IonMenuButton/>
                    </IonButtons>
                    <IonTitle>tab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default tab2;