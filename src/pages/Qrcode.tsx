import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { qrCodeOutline } from 'ionicons/icons';
import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code'; 
import ParticleBackground from 'react-particle-backgrounds'

const Qrcode: React.FC = () => {
    const [value, setValue] = useState();
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const settings = {
        particle: {
          particleCount: 35,
          color: "#fff",
          minSize: 1,
          maxSize: 4
        },
        velocity: {
          minSpeed: 0.2,
          maxSpeed: 0.4
        },
        opacity: {
          minOpacity: 0,
          maxOpacity: 0.6,
          opacityTransitionTime: 10000
        }
      }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                <IonButtons slot='start'> <IonBackButton defaultHref='/'/></IonButtons>
                    <IonTitle>Qr Code <IonIcon icon={qrCodeOutline}/></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
            <div className="App">
            <center>
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value of Qr-code"
                />
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setBack(e.target.value)}
                    placeholder="Background color"
                />
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setFore(e.target.value)}
                    placeholder="Foreground color"
                />
                <br />
                <br />
                <input
                    type="number"
                    onChange={(e) => setSize(parseInt(e.target.value ===
                        '' ? 0 : e.target.value, 10))}
                    placeholder="Size of Qr-code"
                />
                <br />
                <br />
                <br />
                {value && (
                    <QRCode
                        title="GeeksForGeeks"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                )}
            </center>
        </div>
        <ParticleBackground settings={settings}/>
            </IonContent>
        </IonPage>
    );
};

export default Qrcode;