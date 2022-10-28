import { IonCol, IonGrid, IonRow } from "@ionic/react";
import library_picture from "../../../assets/images/about-picture.webp";

const About: React.FC = () => {
    return (
        <IonGrid>
            <IonRow className="ion-padding ion-justify-content-center">
                <IonCol size="12" sizeSm="6">
                    <img src={library_picture} alt="book-library" className="section-image" />
                </IonCol>
                <IonCol size="12" sizeSm="6">
                    <h1>A propos </h1>
                    <h2>- Qui nous sommes ? </h2>
                    <p>
                        le commité local du Secours Populaire Francais de Drancy, est en activité depuis 37 ans. Implantée à DRANCY (93700), nous sommes spécialisées dans le secteur d'activité des autres organisations fonctionnant par adhésion volontaire.
                    </p>
                    <h2>- Où et Quand nous trouver ?</h2>
                    <p>Tout les Samedi hors periode de vacances scolaire de 9h a 12h au <a rel="noreferrer" target="_blank" href="https://www.google.fr/maps/place/2+Cit%C3%A9+de+la+Muette,+93700+Drancy/@48.9196768,2.4620897,17z/data=!3m1!4b1!4m6!3m4!1s0x47e66cb6d620accb:0x16371396d779981f!8m2!3d48.9196723!4d2.4642837">2 CITE DE LA MUETTE 93700 DRANCY</a>.</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default About;
