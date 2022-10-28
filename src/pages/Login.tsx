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
                <LoginForm />
            </IonContent>
        </IonPage>
    );
}

export default Login;