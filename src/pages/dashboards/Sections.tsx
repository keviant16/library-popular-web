import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Sections: React.FC = () => {
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
                        <IonTitle size="large">Sections</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Dashboard Sections</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Sections;
