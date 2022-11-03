import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import library_picture from "../../../assets/images/overview-picture.webp";

const Overview: React.FC = () => {
    return (
        <IonGrid>
            <IonRow className="ion-padding ion-justify-content-center">
                <IonCol size="12" sizeMd="6" >
                    <h1>Bienvenue visiteur et bénévole !</h1>
                    <h2>- La librairie bénévole ouvre son site </h2>
                    <p>Grâce à ce site, il vous sera possible de rechercher un livre en librairie.</p>
                    <IonButton>Rechercher</IonButton>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                    <img src={library_picture} alt="book-library" className="section-image" />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Overview;
