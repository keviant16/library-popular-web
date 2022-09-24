import { IonCol, IonGrid, IonRow } from "@ionic/react";
import library_picture from "../../assets/images/about-picture.jpg";
import Button from "../Button";

const About: React.FC = () => {
    return (
        <IonGrid>
            <IonRow className="ion-padding ion-justify-content-center">
                <IonCol size="12" sizeSm="5">
                    <img src={library_picture} alt="book-library" className="section-image" />
                </IonCol>
                <IonCol size="12" sizeSm="5">
                    <h1>A propos </h1>
                    <h2>- Qui nous sommes ? </h2>
                    <p>
                        le commité local du Secours Populaire Francais de Drancy, est en activité depuis 37 ans. Implantée à DRANCY (93700), nous sommes spécialisées dans le secteur d'activité des autres organisations fonctionnant par adhésion volontaire.
                    </p>
                    <h2>- Où et Quand nous trouver ?</h2>
                    <p>Tout les Samedi hors periode de vacances scolaire de 9h a 12h au <a target="_blank" href="https://www.google.fr/maps/place/2+Cit%C3%A9+de+la+Muette,+93700+Drancy/@48.9195758,2.4520897,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66cb6d520accb:0x16371396d779981f!8m2!3d48.9195723!4d2.4542837">2 CITE DE LA MUETTE 93700 DRANCY</a>.</p>

                </IonCol>

            </IonRow>
        </IonGrid>
    );
};

export default About;
