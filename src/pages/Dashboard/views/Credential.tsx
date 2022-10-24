import { IonPage, IonContent } from "@ionic/react";
import { FunctionComponent } from "react";
import { Header } from "../../../components/Header";
import CredentialList from "../../../features/credentials/CredentialList";

interface CredentialProps { }

const Credential: FunctionComponent<CredentialProps> = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <CredentialList />
            </IonContent>
        </IonPage>
    );
}

export default Credential;