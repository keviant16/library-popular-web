import { IonItem, IonLabel } from "@ionic/react";

export const BookFormItem = ({ head, content, select, lines }: any) => (
  <IonItem lines={lines}>
    <IonLabel>
      <h3>{head} :</h3>
      {content}
    </IonLabel>
    {select}
  </IonItem>
)
