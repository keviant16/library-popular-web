import { IonCol, IonContent, IonGrid, IonLabel, IonList, IonListHeader, IonPage, IonRow } from '@ionic/react';
import { Header } from '../components/Header';

const Booking: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonGrid fixed >
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonListHeader>
                                    <IonLabel>
                                        <h1>Panier</h1>
                                        <p>bla bla bla ...</p>
                                    </IonLabel>
                                </IonListHeader>

                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            cart ..
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            inforamtion ..
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            reserver, annuler
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Booking;
