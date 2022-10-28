import { IonItem, IonLabel } from "@ionic/react";
import { FunctionComponent } from "react";

interface Book404ItemProps {
  label?: string
}

const Book404Item: FunctionComponent<Book404ItemProps> = (props) => (
  <IonItem lines="none">
    <IonLabel>Aucun livre trouvé</IonLabel>
  </IonItem>
)

export default Book404Item;