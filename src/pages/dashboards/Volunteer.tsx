import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Volunteer: React.FC = () => {
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
                        <IonTitle size="large">Volunteer</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Dashboard Volunteer</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Volunteer;
