import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import { Header } from '../components/Header';

const Dashboard: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                {/* <DashboardButton /> */}
                <IonBreadcrumbs>
                    <IonBreadcrumb href="#home">Home</IonBreadcrumb>
                    <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
                    <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
                    <IonBreadcrumb href="#film">Film</IonBreadcrumb>
                </IonBreadcrumbs>
                <IonItem href="#">
                    <IonLabel>Anchor Item</IonLabel>
                </IonItem>

                <IonItem href="#" disabled={true}>
                    <IonLabel>Disabled Anchor Item</IonLabel>
                </IonItem>

                <IonItem button>
                    <IonLabel>Button Item</IonLabel>
                </IonItem>

                <IonItem button disabled={true}>
                    <IonLabel>Disabled Button Item</IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
