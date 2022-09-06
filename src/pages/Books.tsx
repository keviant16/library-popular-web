import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Books: React.FC = () => {
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
                        <IonTitle size="large">Books</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Books</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Books;
