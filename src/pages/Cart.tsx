import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Cart: React.FC = () => {
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
                        <IonTitle size="large">Cart</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Cart</IonTitle>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Cart;
