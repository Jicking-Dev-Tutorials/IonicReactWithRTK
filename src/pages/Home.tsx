import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCounter } from '../Reducer';
import './Home.css';

const Home: React.FC = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonItem>
          Count : {counter?.count || 0}
          <IonButton slot="end" onClick={() => dispatch(increment())} > Increment</IonButton>
          <IonButton slot="end" color="danger" onClick={() => dispatch(decrement())} > Decrement</IonButton>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
