import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1)
  };

  const decrement = () => {
    setCounter(prev => prev - 1)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonItem>
          Count : {counter}
          <IonButton slot="end" onClick={increment} > Increment</IonButton>
          <IonButton slot="end" color="danger" onClick={decrement} > Decrement</IonButton>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
