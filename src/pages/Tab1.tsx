import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const tab1: React.FC = () => {

    const [image, Setimage] = useState<any>(null);
const takeimage =async () => {
    const image = await Camera.getPhoto({
quality: 100,
allowEditing:false,
resultType: CameraResultType.Base64,
saveToGallery:true,  
source:CameraSource.Camera,
})
const img = `data:image/jpeg;base64,${image.base64String}`; 
Setimage(img);
};

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start' >
<IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Camera Example</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton expand="full" onClick={takeimage}> Take Picture</IonButton>
                <img src={image}/>
            </IonContent>
        </IonPage>
    );
};

export default tab1;