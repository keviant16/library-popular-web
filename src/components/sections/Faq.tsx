import { IonAccordionGroup, IonCol, IonGrid, IonRow } from "@ionic/react";
import Accordion from "../Accordion";


const Faq: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <h1>FAQ</h1>
                    <p>Retrouvez les réponses au questions les plus communes que vous pouvez avoir.</p>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeSm="5">
                    <IonAccordionGroup>
                        <Accordion
                            value={"first"}
                            label={"Qui nous sommes"}
                            content={"First Content"}
                        />
                        <Accordion
                            value={"second"}
                            label={"Je suis bénévole"}
                            content={"Second Content"}
                        />
                        <Accordion
                            value={"Third"}
                            label={"Je ne (re)trouve pas un livre"}
                            content={"Third Content"}
                        />
                    </IonAccordionGroup>
                </IonCol>
                <IonCol size="12" sizeSm="5">
                    <IonAccordionGroup>
                        <Accordion
                            value={"first"}
                            label={"Horaire d'ouverture"}
                            content={"First Content"}
                        />
                        <Accordion
                            value={"second"}
                            label={"Prix des livres"}
                            content={"Second Content"}
                        />
                        <Accordion
                            value={"Third"}
                            label={"Nombre maximum de livre à réserver"}
                            content={"Third Content"}
                        />
                    </IonAccordionGroup>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Faq;
