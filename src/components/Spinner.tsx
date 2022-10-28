import { IonItem, IonSpinner } from "@ionic/react";
import { FunctionComponent } from "react";

interface SpinnerProps { }

const Spinner: FunctionComponent<SpinnerProps> = () => (
  <IonItem lines="none" className="hidden">
    <IonSpinner name="lines" />
  </IonItem>
)

export default Spinner;