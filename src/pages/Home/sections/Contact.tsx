import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { FunctionComponent } from "react";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h1>Une pane ?</h1>
          <p>
            Veuillez me concater en cas de problème par <a href="">email</a> pour me prévenir de vos problèmes rencontrées.
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Contact;