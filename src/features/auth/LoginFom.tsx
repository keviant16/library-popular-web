import { IonInputCustomEvent } from "@ionic/core";
import { IonItem, IonLabel, IonInput, IonList, IonButton, InputChangeEventDetail, IonSpinner, IonListHeader } from "@ionic/react";
import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { set_auth_has, set_login_form } from "../../app/features/auth/authSlice";
import { login } from "../../services/AuthService";
import jwt_decode from "jwt-decode";

interface LoginFormProps { }

const LoginForm: FunctionComponent<LoginFormProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const loginForm = useSelector((state: any) => state.auth.loginForm)
    const history = useHistory();
    const dispatch = useDispatch()

    const login_on_click = async () => {
        setLoading(true)
        if (loginForm.uid.length < 3) return handle_error("uid_length");
        if (loginForm.password.length < 7) return handle_error("uid_password");

        const jwtToken = await login(loginForm);
        if (!jwtToken) return handle_error("incorrect_credentials");
        localStorage.setItem("jwtToken", jwtToken)
        get_roles_from_token(jwtToken)

        setLoading(false)
        history.push('/tableau-de-bord')
    }

    const handle_error = (error_name: string) => {
        if (error_name === "incorrect_credentials") setError("Uid ou mot de passe incorrect.")
        if (error_name === "uid_password") setError("Mot de passe est trop court. (4 charactères)")
        if (error_name === "uid_length") setError("Uid est trop court.(8 charactères)")

        setLoading(false)
    }

    const get_roles_from_token = (jwtToken: any) => {
        const jwt_content: any = jwt_decode(jwtToken);

        const isAdmin = jwt_content.roles.find((role: any) => role.authority === "ADMIN") ? "ADMIN" : ""
        const isVolunteer = jwt_content.roles.find((role: any) => role.authority === "VOLUNTEER") ? "VOLUNTEER" : ""

        localStorage.setItem("isAdmin", isAdmin)
        localStorage.setItem("isVolunteer", isVolunteer)
    }

    const handle_change = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
        const eventName = e.target.name
        const eventValue = e.detail.value
        dispatch(set_login_form({ name: eventName, value: eventValue }))
        setError("")
    }

    return (
        <IonList style={{ border: "" }}>
            <IonItem>
                <IonLabel>Uid : </IonLabel>
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

{/* <IonItem>
<IonCheckbox slot="start" />
<IonLabel>Role admin</IonLabel>
</IonItem>
<IonItem>
<IonCheckbox slot="start" />
<IonLabel>Role bénévole</IonLabel>
</IonItem> */}