import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { useSelector } from 'react-redux';
import DashboardCard from '../../components/DashboardCard';
import { Header } from '../../components/Header';

const Dashboard: React.FC = () => {
  const { isVolunteer, isAdmin } = useSelector((state: any) => state.auth)

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonItem lines='none' >
                <IonLabel>
                  <h1>Espace librarie</h1>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" sizeSm="3">
              <DashboardCard
                subtitle={"Caisse"}
                title={10 + " $"}
              />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard
                subtitle={"Livre disponible"}
                title={100} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard
                subtitle={"Livre indisponible"}
                title={17} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard
                subtitle={"Livre vendu"}
                title={10}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"page"} title={"Etagères"} href='/tableau-de-bord/étagères' disabled={!isVolunteer} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"page"} title={'Tags'} href='/tableau-de-bord/tags' disabled={!isVolunteer} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"page"} title={'Livres'} href='/tableau-de-bord/livres' disabled={!isVolunteer} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"page"} title={'Calendrier'} disabled={true} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeSm="6">
              <IonRow>
                <IonCol>
                  <DashboardCard subtitle={"page"} title={'Identifiants'} href='tableau-de-bord/identifiants' disabled={!isAdmin} />
                </IonCol>
                <IonCol>
                  <DashboardCard subtitle={"page"} title={'Réservation'} disabled={true} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <DashboardCard subtitle={"page"} title={'Bilan'} disabled={true} />
                </IonCol>
                <IonCol>
                  <DashboardCard subtitle={"..."} title={'....'} />
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="12" sizeSm="6">
              <DashboardCard subtitle={"..."} title={"Télécharger l'application mobile"} disabled={true} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Dashboard;
