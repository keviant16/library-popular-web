import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { add } from "ionicons/icons";
import { FunctionComponent } from "react";
import AddModal from "../../../components/AddModal";
import { Header } from "../../../components/Header";
import CredentialList from "../../../features/credentials/CredentialList";

interface CredentialProps {

}

const Credential: FunctionComponent<CredentialProps> = () => {

    return (
        <IonPage>
            <Header />
            <IonContent>
                <CredentialList />
                <AddModal view="credential" icon={add} />
            </IonContent>
        </IonPage>
    );
}

export default Credential;