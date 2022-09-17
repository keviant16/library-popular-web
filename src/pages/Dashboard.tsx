import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonPage } from '@ionic/react';
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
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
