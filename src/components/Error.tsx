import { IonItem, IonLabel } from "@ionic/react";
import { FunctionComponent } from "react";

interface ErrorProps { }

const Error: FunctionComponent<ErrorProps> = () => {
  return (
    <IonItem>
      <IonLabel color={"danger"}>Oh non, il y a eu une erreur, veuillez nous contactez par email</IonLabel>
    </IonItem>
  );
}

export default Error;