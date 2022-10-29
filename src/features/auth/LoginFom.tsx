import { IonInputCustomEvent } from "@ionic/core";
import { IonItem, IonLabel, IonInput, IonList, IonButton, InputChangeEventDetail, IonSpinner } from "@ionic/react";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../../services/CredentialService";
import jwt_decode from "jwt-decode";
import { setIsAdmim, setIsVolunteer } from "../../app/slice/authSlice";

interface LoginFormProps { }

const initiaState = {
    uid: "",
    password: ""
}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [loginForm, setLoginForm] = useState(initiaState);
    const [error, setError] = useState<string>("");
    const history = useHistory();
    const dispatch = useDispatch()

    const login_on_click = async () => {
        setLoading(true)
        if (loginForm.uid.length < 3) return handle_error("uid_length");
        if (loginForm.password.length < 7) return handle_error("uid_password");

        const jwtToken = await login(loginForm);
        if (!jwtToken) return handle_error("incorrect_credentials");

        localStorage.setItem("jwtToken", jwtToken)
        store_roles(jwtToken)
        setLoading(false)

        history.push('/tableau-de-bord')
    }

    const handle_error = (error_name: string) => {
        if (error_name === "incorrect_credentials") setError("identifiant ou mot de passe incorrect.")
        if (error_name === "uid_password") setError("Mot de passe est trop court. (4 charactères)")
        if (error_name === "uid_length") setError("identifiant est trop court.(8 charactères)")

        setLoading(false)
    }

    const store_roles = (jwtToken: any) => {
        const jwt_content: any = jwt_decode(jwtToken);
        const isAdmin: string | boolean = jwt_content.roles.find((role: any) => role.authority === "ADMIN") ? "ADMIN" : ""
        const isVolunteer: string | boolean = jwt_content.roles.find((role: any) => role.authority === "VOLUNTEER") ? "VOLUNTEER" : ""
        localStorage.setItem("isAdmin", isAdmin)
        localStorage.setItem("isVolunteer", isVolunteer)

        if (isAdmin) dispatch(setIsAdmim(true))
        if (isVolunteer) dispatch(setIsVolunteer(true))
        return isAdmin
    }

    const handle_change = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
        setLoginForm(prev => ({ ...prev, [e.target.name]: e.detail.value }))
        setError("")
    }

    return (
        <IonList>
            <IonItem>
                <IonLabel>Identifiant : </IonLabel>
                <IonInput type="text" value={loginForm.uid} onIonChange={(e) => handle_change(e)} name="uid" />
            </IonItem>

            <IonItem>
                <IonLabel>Mot de passe :</IonLabel>
                <IonInput type="password" value={loginForm.password} onIonChange={(e) => handle_change(e)} name="password" />
            </IonItem>

            {error &&
                <IonItem>
                    <IonLabel color={"danger"}>Error : {error}</IonLabel>
                </IonItem>
            }

            <IonButton expand="full" onClick={login_on_click}>
                {loading ? <IonSpinner name="bubbles" /> : "Se connecter"}
            </IonButton>
        </IonList>
    );
}

export default LoginForm;
