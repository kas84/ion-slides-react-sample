import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const activate = () => {
    alert("clicked the button")
  }
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop:true
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSlides pager={false} options={slideOpts}>
          <IonSlide>
          <IonButton key={1} onClick={activate}> boton 1 </IonButton>
          <IonButton key={2} onClick={activate}> boton 2</IonButton>
          <IonButton key={3} onClick={activate}> boton 3</IonButton>
          <IonButton key={4} onClick={activate}> boton 4</IonButton>
          <IonButton key={5} onClick={activate}> boton 5</IonButton>
          <IonButton key={6} onClick={activate}> boton 6</IonButton>
          <IonButton key={7} onClick={activate}> boton 7</IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
