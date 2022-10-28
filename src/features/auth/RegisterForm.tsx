import { IonInputCustomEvent } from "@ionic/core";
import { IonItem, IonLabel, IonInput, IonList, IonButton, InputChangeEventDetail, IonSpinner, IonSelect, IonSelectOption, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FunctionComponent, RefObject, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/slice/authSlice";
import { getAllCredentials, register } from "../../services/CredentialService";

interface RegisterFormProps {
  modal: RefObject<HTMLIonModalElement>
}

const ROLES = [{ name: "Admin", value: "ADMIN" }, { name: "Bénévole", value: "VOLUNTEER" }]

const initalState = {
  uid: "",
  password: "",
  roles: []
}

const RegisterForm: FunctionComponent<RegisterFormProps> = (props: RegisterFormProps) => {
  const [registerForm, setRegisterForm] = useState(initalState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch()

  const register_on_click = async () => {
    setLoading(true)
    if (registerForm.uid.length < 3) return handle_error("uid_length");
    if (registerForm.password.length < 7) return handle_error("password_length");
    if (registerForm.roles.length === 0) return handle_error("roles_length");

    //TODO : handle existing 
    const response: string = await register(registerForm, handle_error);
    if (response !== 'Credential has been save !') return handle_error("roles_length");

    const allCredentials: any[] = await getAllCredentials();
    dispatch(setCredentials(allCredentials))

    setLoading(false)
  }

  const handle_error = (error_name: string) => {
    if (error_name === "existing_credentials") setError("Identifiant / mot de passe incorrect.")
    if (error_name === "password_length") setError("Mot de passe trop court. (min 8 charactères)")
    if (error_name === "uid_length") setError("Identifiant trop court.(min 4 charactères)")
    if (error_name === "roles_length") setError("Aucun role selectionner")

    setLoading(false)
  }

  const handle_change = (e: IonInputCustomEvent<InputChangeEventDetail> | any) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.detail.value }))
    setError("")
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h3>Ajouter de nouveaux identifients</h3>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>Identifiant : </IonLabel>
            <IonInput type="text" value={registerForm.uid} onIonChange={(e) => handle_change(e)} name="uid" />
          </IonItem>

          <IonItem>
            <IonLabel>Mot de passe :</IonLabel>
            <IonInput type="password" value={registerForm.password} onIonChange={(e) => handle_change(e)} name="password" />
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Roles :</h3>
            </IonLabel>
            <IonSelect multiple name="roles" value={registerForm.roles} onIonChange={(e) => handle_change(e)}>
              {ROLES.map((role: { name: string, value: string }, index: number) => (
                <IonSelectOption key={index} value={role.value}>{role.name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>

          {error &&
            <IonItem>
              <IonLabel color={"danger"}>Error : {error}</IonLabel>
            </IonItem>
          }

          <IonButton expand="full" onClick={register_on_click}>
            {loading ? <IonSpinner name="bubbles" /> : "Enregister"}
          </IonButton>
        </IonList>
      </IonContent>
    </>
  );
}

export default RegisterForm;

