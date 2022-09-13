import { IonButton, IonButtons, IonContent, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle, search, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import { Header } from '../components/Header';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { useState } from 'react';

const Dashboard: React.FC = () => {

    const [data, setdata] = useState("");
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
        setdata(data.text)

    };

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>

                <IonToolbar>
                    <IonToolbar>
                        <IonButtons>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={personCircle} />
                            </IonButton>
                            <IonButton>
                                <IonIcon slot="icon-only" icon={search} />
                            </IonButton>
                        </IonButtons>
                        <IonButtons slot="primary">
                            <IonButton color="secondary">
                                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Default Buttons</IonTitle>

                    </IonToolbar>
                    <IonButton onClick={openScanner}>Scan barcode</IonButton>
                    <IonButton>{data}</IonButton>
                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
