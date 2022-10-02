import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { Header } from '../components/Header';

const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed>
                    <IonRow className="ion-justify-content-center">
                        <IonCol>
                            <IonItem lines='none' >
                                <IonLabel>
                                    <h1>Bonjour !</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Chiffre d'affaire du mois</IonCardSubtitle>
                                    <IonCardTitle>10e</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Nombre de livre vendu</IonCardSubtitle>
                                    <IonCardTitle>100</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Nombre de livre reserver</IonCardSubtitle>
                                    <IonCardTitle>17</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Nombre de livre disponible</IonCardSubtitle>
                                    <IonCardTitle>17</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonItem href='/tableau-de-bord/étagères'>
                                    <IonCardHeader>
                                        <IonCardSubtitle>Acces aux</IonCardSubtitle>
                                        <IonCardTitle>
                                            <h2>Etagères</h2>
                                        </IonCardTitle>
                                    </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonItem href='/tableau-de-bord/tags'>
                                    <IonCardHeader>
                                        <IonCardSubtitle>Acces aux</IonCardSubtitle>
                                        <IonCardTitle>
                                            <h2>Tags</h2>
                                        </IonCardTitle>
                                    </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonItem href='/tableau-de-bord/livres'>
                                    <IonCardHeader>
                                        <IonCardSubtitle>Acces aux</IonCardSubtitle>
                                        <IonCardTitle>
                                            <h2>Livres</h2>
                                        </IonCardTitle>
                                    </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6" sizeSm="3">
                            <IonCard>
                                <IonItem href='/tableau-de-bord/reservations'>
                                    <IonCardHeader>
                                        <IonCardSubtitle>Acces aux</IonCardSubtitle>
                                        <IonCardTitle>
                                            <h2>Reservations</h2>
                                        </IonCardTitle>
                                    </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" sizeSm="6">
                            <IonRow>
                                <IonCol>
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardSubtitle>card title</IonCardSubtitle>
                                            <IonCardTitle>
                                                <h2>Card</h2>
                                            </IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol>
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardSubtitle>card title</IonCardSubtitle>
                                            <IonCardTitle>
                                                <h2>Card</h2>
                                            </IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardSubtitle>card title</IonCardSubtitle>
                                            <IonCardTitle>
                                                <h2>Card</h2>
                                            </IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                                <IonCol>
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardSubtitle>card title</IonCardSubtitle>
                                            <IonCardTitle>
                                                <h2>Card</h2>
                                            </IonCardTitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                        <IonCol size="12" sizeSm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>card title</IonCardSubtitle>
                                    <IonCardTitle>
                                        <h2>Card</h2>
                                        <h2>Card</h2>
                                        <h2>Card</h2>
                                        <h2>Card</h2>
                                    </IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default Dashboard;
