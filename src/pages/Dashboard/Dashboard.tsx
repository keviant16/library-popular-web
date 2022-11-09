import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { useSelector } from 'react-redux';
import { useGetBookCountByStatusQuery, useGetBookCountQuery, useGetBookDonationQuery } from '../../app/api/api';
import DashboardCard from '../../components/DashboardCard';
import Error from '../../components/Error';
import { Header } from '../../components/Header';
import Spinner from '../../components/Spinner';

const Dashboard: React.FC = () => {
  const { isVolunteer, isAdmin } = useSelector((state: any) => state.auth)
  const { data: donation, error: donationError, isLoading: isDonationLoading } = useGetBookDonationQuery('')
  const { data: count, error: countError, isLoading: isCountLoading } = useGetBookCountQuery('')
  const { data: statusGone, error: statusGoneError, isLoading: isStatusGoneLoading } = useGetBookCountByStatusQuery(1)
  const { data: statusInStock, error: statusInStockError, isLoading: isStatusInStockLoading } = useGetBookCountByStatusQuery(0)


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
              {donationError ? <Error /> : isDonationLoading ? <Spinner /> :
                <DashboardCard
                  subtitle={"Gains"}
                  title={donation + " €"}
                />
              }
            </IonCol>
            <IonCol size="6" sizeSm="3">
              <DashboardCard
                subtitle={"..."}
                title={"..."}
              />

            </IonCol>
            <IonCol size="6" sizeSm="3">
              {statusGoneError ? <Error /> : isStatusGoneLoading ? <Spinner /> :
                <DashboardCard
                  subtitle={"Livre indisponible"}
                  title={statusGone}
                />
              }
            </IonCol>
            <IonCol size="6" sizeSm="3">
              {statusInStockError ? <Error /> : isStatusInStockLoading ? <Spinner /> :
                <DashboardCard
                  subtitle={"Livre disponible"}
                  title={statusInStock}
                />
              }
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
