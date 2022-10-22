import { IonButton, IonIcon, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import { removeCircleOutline } from "ionicons/icons";
import { FunctionComponent } from "react";

interface BookFiltreProps { }

const BookFiltre: FunctionComponent<BookFiltreProps> = () => {
    return (
        <IonList>
            <IonItem>
                <IonLabel>Filtres :</IonLabel>
                <IonButton color={"secondary"}>
                    <IonIcon icon={removeCircleOutline} />
                    Retirer filter
                </IonButton>
            </IonItem>
            <IonItem>
                <IonLabel>Etagères</IonLabel>
                <IonSelect interface="popover">
                    <IonSelectOption value="apples">Apples</IonSelectOption>
                    <IonSelectOption value="oranges">Oranges</IonSelectOption>
                    <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem>
                <IonLabel>Tags</IonLabel>
                <IonSelect interface="popover" multiple>
                    <IonSelectOption value="apples">Apples</IonSelectOption>
                    <IonSelectOption value="oranges">Oranges</IonSelectOption>
                    <IonSelectOption value="bananas">Bananas</IonSelectOption>
                </IonSelect>
            </IonItem>
        </IonList>
    );
}

export default BookFiltre;