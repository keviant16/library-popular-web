import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Dashboard: React.FC = () => {
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
                        <IonTitle size="large">Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Dashboard</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
