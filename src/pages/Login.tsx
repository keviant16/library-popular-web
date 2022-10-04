import { IonPage, IonContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import LoginForm from "../features/auth/LoginFom";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-padding ion-justify-content-center">
                        <IonCol size="12" sizeSm="5">
                            <LoginForm />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Login;