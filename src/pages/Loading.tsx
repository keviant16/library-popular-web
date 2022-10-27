import { IonContent, IonPage, IonProgressBar } from "@ionic/react";
import { FunctionComponent } from "react";
import { Header } from "../components/Header";

interface LoadingProps {

}

const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonProgressBar type="indeterminate"></IonProgressBar>
      </IonContent>
    </IonPage>
  );
}

export default Loading;