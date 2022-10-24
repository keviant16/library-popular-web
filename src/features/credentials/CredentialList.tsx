import { IonList, IonLabel, IonSpinner, IonItem, IonButton, IonIcon, IonInput, IonSelect, IonSelectOption, IonAccordionGroup, IonAccordion } from "@ionic/react";
import { add, arrowBack } from "ionicons/icons";
import { FunctionComponent, useRef, useState } from "react";
import { useGetAllCredentialsQuery, useRegisterMutation } from "../../app/api/api";
import ListHeader from "../../components/ListHeader";
import CredentialItem from "./CredentialItem";

const initalState = {
  uid: "",
  password: "",
  roles: []
}

const ROLES = [{ name: "Admin", value: "ADMIN" }, { name: "Bénévole", value: "VOLUNTEER" }]

interface CredentialListProps { }

const CredentialList: FunctionComponent<CredentialListProps> = () => {
  const { data, error, isLoading } = useGetAllCredentialsQuery('')
  const [register, { isLoading: isCreating }] = useRegisterMutation()
  const [registerForm, setRegisterForm] = useState(initalState);
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  const toggleAccordion = () => {
    if (!accordionGroup.current) return;

    const nativeEl = accordionGroup.current;

    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };

  const handleClick = async () => {
    if (registerForm.uid.length === 0) return
    if (registerForm.password.length === 0) return
    if (registerForm.roles.length === 0) return
    await register(registerForm)
  }

  const handleChange = (e: any) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.detail.value }))
  }

  return (
    <IonList>
      <ListHeader icon={arrowBack} header={"Identifiants"}
        search={
          <IonButton onClick={toggleAccordion}>
            <IonIcon icon={add} />
          </IonButton>
        }
      />
      {error ? (
        <IonItem>
          <IonLabel color={"danger"}>Oh non, il y a eu une erreur</IonLabel>
        </IonItem>
      ) : isLoading ? (
        <IonItem lines="none">
          <IonSpinner name="lines" />
        </IonItem>
      ) : data ? (
        <>
          <IonAccordionGroup ref={accordionGroup}>
            <IonAccordion value="second">
              <div className="ion-padding" slot="content">
                <IonItem>
                  <IonLabel>Identifiant : </IonLabel>
                  <IonInput type="text" value={registerForm.uid} onIonChange={handleChange} name="uid" />
                </IonItem>

                <IonItem>
                  <IonLabel>Mot de passe :</IonLabel>
                  <IonInput type="password" value={registerForm.password} onIonChange={handleChange} name="password" />
                </IonItem>

                <IonItem>
                  <IonLabel>Roles :</IonLabel>
                  <IonSelect multiple name="roles" value={registerForm.roles} onIonChange={handleChange}>
                    {ROLES.map((role: { name: string, value: string }, index: number) => (
                      <IonSelectOption key={index} value={role.value}>{role.name}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>

                <IonButton expand="full" onClick={handleClick}>
                  {isCreating ? <IonSpinner name="bubbles" /> : "Enregister"}
                </IonButton>
              </div>
            </IonAccordion>
          </IonAccordionGroup>


          {data.map((credential: any, index: number) => (
            <CredentialItem key={index} credential={credential} />
          ))}
        </>
      ) : null
      }
    </IonList>
  );
}

export default CredentialList;