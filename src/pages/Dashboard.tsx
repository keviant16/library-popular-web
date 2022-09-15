import { IonButtons, IonContent, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from '../components/Header';
import Scanner from '../components/Scanner';

const Dashboard: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>

                <IonToolbar>
                    <IonToolbar>
                        <IonButtons>
                            <Scanner />
                        </IonButtons>
                        <IonTitle>Default Buttons</IonTitle>

                    </IonToolbar>

                </IonToolbar>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
