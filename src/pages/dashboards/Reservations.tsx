import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Reservations: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Reservations</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Dashboard Reservations</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Reservations;
