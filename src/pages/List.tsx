import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonChip, IonContent, IonDatetime, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSegment, IonSegmentButton, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter } from '@ionic/react';
import { addOutline, calendar, trailSignOutline, trash } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';

const list: React.FC = () => {
    const [loading , setLoading] = useState<boolean>(true);
 const [users , Setusers] = useState<any[]>([]);
const [showalert] = useIonAlert();
const [showToast] = useIonToast();
const [selectedUser , setSelecteduser] = useState<any>(null);
const modal = useRef<HTMLIonModalElement>(null);
const cardmodal = useRef<HTMLIonModalElement>(null);
const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
const page =useRef(null);
const [activeSegment, SetActiveSegment] = useState<any>('details');

useEffect(() => {
    setPresentingElement(page.current);
}, []);

    useIonViewWillEnter( async () => {
 const users = await getUsers();
 Setusers(users);
setLoading(false);
    }) ;

    const getUsers =async () => {
        const data = await fetch ('https://randomuser.me/api?results=10')
        const users = await data.json();
        console.log(users);
        return users.results;
    }

const clearlist  = () => {
showalert({
header: "Confirm!",
message : 'Are You sure you want to delete all Users ? ',
buttons : [
{
    text:'Cancel' , role:'cancel'
},
{
text:'Delete' ,
handler: () => {
Setusers([]);
showToast({
        message:'All Users Deleted',
        duration: 2000,
        color:'danger',
});
 },
  },
],
});
};
const doRefresh =  async (event: any) => {
   const data = await getUsers();
   Setusers(data);
    event.detail.complete();
};

    return (
        <IonPage ref={page}>
            <IonHeader>
            
                <IonToolbar color='success'>
                <IonButtons  slot="start"><IonMenuButton/></IonButtons>
                    <IonTitle>List</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={clearlist}>  <IonIcon slot='icon-only' icon={trash}/>  </IonButton>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar color={'success'}>
                    <IonSearchbar/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot='fixed'  onIonRefresh={(ev) => doRefresh(ev)}>
                    <IonRefresherContent/>
                </IonRefresher>
{loading && (
    [...Array(10)].map((_, index) => (
        <IonCard key={index}>
<IonCardContent className='ion-no-padding'>
    <IonItem lines='none'>
       <IonAvatar slot='start'>
      <IonSkeletonText/>
       </IonAvatar>
        <IonLabel>
           <IonSkeletonText animated style={ {width: '150px'}} />
            <p><IonSkeletonText /></p>
        </IonLabel>
        <IonChip slot='end' color='primary' >
        </IonChip>
    </IonItem>
</IonCardContent>

        </IonCard>
    ))
)}

            {users.map((user , index) => (
                <IonCard key={index} onClick={() => setSelecteduser(user)}>
<IonCardContent className='ion-no-padding'>
    <IonItem lines='none'>
       <IonAvatar slot='start'>
        <IonImg src={user.picture.thumbnail}/>
       </IonAvatar>
        <IonLabel>
            {user.name.first} {user.name.last}
            <p>{user.email}</p>
        </IonLabel>
        <IonChip slot='end' color='primary' >
            {user.nat}
        </IonChip>
    </IonItem>
</IonCardContent>

                </IonCard>
            ))}
            <IonModal   breakpoints={[0 , 0.5 , 0.8]} initialBreakpoint={0.5} ref={modal} isOpen={selectedUser !== null} onIonModalDidDismiss={() => setSelecteduser(null)}  >
<IonHeader>
<IonToolbar color={'success'}>
<IonButtons slot='start' >
    <IonButton onClick={() => modal.current?.dismiss()}>close</IonButton>
</IonButtons>
<IonTitle>{selectedUser?.name.first} {selectedUser?.name.last}</IonTitle>
</IonToolbar>
<IonToolbar color={'success'}>
    <IonSegment value={activeSegment} onIonChange={(e) => SetActiveSegment(e.detail.value!)}>
        <IonSegmentButton value="details">details</IonSegmentButton>
        <IonSegmentButton value="calendar">calendar</IonSegmentButton>
    </IonSegment>
</IonToolbar>
</IonHeader>
<IonContent className='ion-padding'>
{activeSegment === 'details' && (
    <IonCard>
        <IonAvatar slot='start'>
            <IonImg src={selectedUser?.picture.large}/>
        </IonAvatar>
        <IonCardContent className='ion-no-padding'>
            <IonItem lines="none">
                <IonLabel class='ion-text-wrap'>
                    {selectedUser?.name.first} {selectedUser?.name.last}
                    <p>{selectedUser?.email}</p>
                </IonLabel>
            </IonItem>
        </IonCardContent>
    </IonCard>
)}
{activeSegment === 'calendar' && <IonDatetime/> }
</IonContent>
            </IonModal>
            </IonContent>
            <IonModal ref={cardmodal} trigger='card-modal' presentingElement={presentingElement!}>
            <IonHeader>
<IonToolbar color={'success'}>
<IonButtons slot='start' >
    <IonButton onClick={() => cardmodal.current?.dismiss()}>close</IonButton>
</IonButtons>
<IonTitle>Card Modal</IonTitle>
</IonToolbar>
</IonHeader>
<IonContent><p>My card Modal</p></IonContent>
            </IonModal>
            <IonFab slot='fixed' vertical='bottom' horizontal='end'>
<IonFabButton id='card-modal'>
    <IonIcon icon={addOutline}/>
</IonFabButton>

            </IonFab>
        </IonPage>
    );
};

export default list;