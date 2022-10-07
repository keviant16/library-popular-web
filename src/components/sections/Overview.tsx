import { IonCol, IonGrid, IonRow } from "@ionic/react";
import library_picture from "../../assets/images/overview-picture.jpg";
import Button from "../Button";

const Overview: React.FC = () => {
    return (
        <IonGrid>
            <IonRow className="ion-padding ion-justify-content-center">
                <IonCol size="12" sizeSm="6" >
                    <h1>Bienvenue visiteur et bénévole !</h1>
                    <h2>- La librairie bénévole ouvre son site </h2>
                    <p>Grâce à ce site, vous aurez la possibilité de rechercher un livre présent dans la librairie et de les réserver.</p>
                    <p>En tant que bénévole, vous pourrez également gérer les livres et les sections de la librairie.</p>
                    <Button
                        content={"Rechercher"}
                        onClick={undefined}
                        disabeled={undefined}
                        color={undefined}
                    />
                </IonCol>
                <IonCol size="12" sizeSm="6">
                    <img src={library_picture} alt="book-library" className="section-image" />
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Overview;
