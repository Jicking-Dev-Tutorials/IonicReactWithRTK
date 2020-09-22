import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonItem>
          Count : {0}
          <IonButton slot="end">Increment</IonButton>
          <IonButton slot="end" color="danger">Decrement</IonButton>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
