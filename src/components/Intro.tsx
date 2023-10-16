import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { Children } from 'react';
import {Swiper , SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Intro.css'
import I1 from '../assets/I1.png';
import I2 from '../assets/I2.png';
import I3 from '../assets/I3.png';
import I4 from '../assets/I4.png';
import { Route } from 'react-router';

interface ContainerProps {
onfinish: () => void;

}
const Swipperbuttonnext = ({Children} : any ) => {
const swiper =useSwiper();
return <IonButton onClick={() => swiper.slideNext()}>{Children}</IonButton>;
}
const Intro: React.FC<ContainerProps> = ({onfinish}) => {
    return (
<Swiper>
    <SwiperSlide> <img src={I1} alt='I1.png'/> <IonText>  Hello </IonText> <Swipperbuttonnext>FEIN</Swipperbuttonnext></SwiperSlide>
    <SwiperSlide> <img src={I2} alt='I2.png'/> <IonText>  Trance </IonText> <Swipperbuttonnext>newwww</Swipperbuttonnext></SwiperSlide>
    <SwiperSlide> <img src={I3} alt='I3.png'/> <IonText>  Metroooooo </IonText> <Swipperbuttonnext>Trance</Swipperbuttonnext></SwiperSlide>
    <SwiperSlide> <img src={I4} alt='I4.png'/> <IonText>  Spiderrrrrrr </IonText> <IonButton onClick={() => onfinish()}>Finish</IonButton></SwiperSlide>
</Swiper>
    );
};

export default Intro; 