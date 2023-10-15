import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOut, newspaperOutline } from 'ionicons/icons';

const menu: React.FC = () => {
const path = [
{name : 'Home' , url:'/app/list' , icon : homeOutline},
{name : 'Settings' , url:'/app/Settings' , icon : newspaperOutline},
]
  return (
    <IonPage>
      <IonSplitPane contentId='main'>
   <IonMenu contentId='main'>
   <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {path.map((item, index) =>(
<IonMenuToggle key={index} autoHide={false} >
  <IonItem routerLink={item.url} routerDirection='none'>
  <IonIcon slot='start' icon={item.icon}/>
  {item.name}
 </IonItem>
 </IonMenuToggle>
      ) )}
<IonMenuToggle autoHide={false} >
  <IonButton color={'tertiary'} expand='full' routerLink={'/'} routerDirection='root'>
  <IonIcon slot='start' icon={logOut}/>
LogOut
 </IonButton>
 </IonMenuToggle>

      </IonContent>
   </IonMenu>
    <IonRouterOutlet id='main'>
    <Route exact path={'/app/List'} component={List}/>
   <Route path={'/app/Settings'} component={Settings}/>
   <Route exact path={'/app'}>
    <Redirect to= "/app/list"/>
   </Route>
    </IonRouterOutlet>
    </IonSplitPane>
    </IonPage>
  );
};

export default menu;