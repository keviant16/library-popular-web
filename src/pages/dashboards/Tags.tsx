import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
const Tags: React.FC = () => {
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
                        <IonTitle size="large">Tags</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Dashboard Tags</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Tags;
