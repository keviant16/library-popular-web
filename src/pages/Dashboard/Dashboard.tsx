import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { useSelector } from 'react-redux';
import DashboardCard from '../../components/DashboardCard';
import { Header } from '../../components/Header';

const Dashboard: React.FC = () => {
  const { is_volunteer, is_admin } = useSelector((state: any) => state.auth)

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonItem lines='none' >
                <IonLabel>
                  <h1>Espace {is_volunteer && "Bénévole"}  {is_volunteer && is_admin && " / "}  {is_admin && "Admin"}</h1>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Gains"} title={10 + " $"} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Livre vendu"} title={100} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Livre Indisponible"} title={17} />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Livre disponible"} title={17}
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Acces aux"} title={"Etagères"} href='/tableau-de-bord/étagères' />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Acces aux"} title={'Tags'} href='/tableau-de-bord/tags'
              />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"Acces aux"} title={'Livres'} href='/tableau-de-bord/livres' />
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard subtitle={"..."} title={'....'} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeSm="6">
              <IonRow>
                <IonCol>
                  <DashboardCard subtitle={"Acces aux"} title={'Identifiants'} href='tableau-de-bord/identifiants' />
                </IonCol>
                <IonCol>
                  <DashboardCard subtitle={"..."} title={'....'} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <DashboardCard subtitle={"..."} title={'....'} />
                </IonCol>
                <IonCol>
                  <DashboardCard subtitle={"..."} title={'....'} />
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="12" sizeSm="6">
              <DashboardCard subtitle={"..."} title={'....'} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Dashboard;
