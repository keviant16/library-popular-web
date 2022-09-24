import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { Header } from '../components/Header';

const Dashboard: React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid fixed>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeSm="8">
                            <IonItem lines='none' >
                                <IonLabel>
                                    <h1>Bonjour !</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-justify-content-center">
                        <IonCol size="12" sizeSm="8">
                            <IonList>
                                <IonItem button detail routerLink='/tableau-de-bord/étagères'>
                                    <IonLabel>
                                        <h2>Etagères</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem button detail routerLink='/tableau-de-bord/tags'>
                                    <IonLabel>
                                        <h2>Tags</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem button detail routerLink='/tableau-de-bord/livres'>
                                    <IonLabel>
                                        <h2>Livres</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                    </IonLabel>
                                </IonItem>

                                <IonItem button detail routerLink='/tableau-de-bord/reservations'>
                                    <IonLabel>
                                        <h2>Reservations</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ab tempora nostrum earum eum, nesciunt ex quos cumque ratione quasi, animi quaerat vero nemo quas beatae id modi quo consectetur.</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
