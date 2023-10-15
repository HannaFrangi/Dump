import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import tab1 from './Tab1';
import tab2 from './Tab2';
import { logoInstagram, logoYoutube } from 'ionicons/icons';

const Settings: React.FC = () => {

    return (
      <IonTabs>
<IonTabBar slot='bottom' >
<IonTabButton tab='tab1' href='/app/Settings/tab1'>
<IonIcon icon={logoInstagram} />
<IonLabel>Tab 1</IonLabel>
</IonTabButton>
<IonTabButton tab='tab2' href='/app/Settings/tab2'>
<IonIcon icon={logoYoutube} />
<IonLabel>Tab 2</IonLabel>
</IonTabButton>

</IonTabBar>
<IonRouterOutlet>
<Route path="/app/Settings/tab1" component={tab1}/>
<Route path="/app/Settings/tab2" component={tab2}/>
<Route exact path="/app/Settings">
    <Redirect to="/app/Settings/tab1"/>
</Route>
</IonRouterOutlet>
      </IonTabs>
    );
};

export default Settings;