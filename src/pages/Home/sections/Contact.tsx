import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { FunctionComponent } from "react";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <h1>En cas de problème</h1>
          <p>
            Veuillez me <a href="mailto:librarie.populaire@gmail.com">contacter par email</a>
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Contact;