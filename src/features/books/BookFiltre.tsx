import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";

interface BookFiltreProps {
    filter: any
}

const BookFiltre: FunctionComponent<BookFiltreProps> = (props) => {
    return (
        <IonAccordionGroup ref={props.filter}>
            <IonAccordion value="filter">
                <IonList>
                    <IonItem>
                        <IonLabel>Etagères</IonLabel>
                        <IonSelect>
                            <IonSelectOption value="apples">Apples</IonSelectOption>
                            <IonSelectOption value="oranges">Oranges</IonSelectOption>
                            <IonSelectOption value="bananas">Bananas</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Tags</IonLabel>
                        <IonSelect multiple={true}>
                            <IonSelectOption value="apples">Apples</IonSelectOption>
                            <IonSelectOption value="oranges">Oranges</IonSelectOption>
                            <IonSelectOption value="bananas">Bananas</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonAccordion>
        </IonAccordionGroup>
    );
}

export default BookFiltre;