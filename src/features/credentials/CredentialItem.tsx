import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonSpinner, useIonAlert } from "@ionic/react";
import { trash } from "ionicons/icons";
import { FunctionComponent } from "react";
import { useDeleteCredentialMutation } from "../../app/api/api";

interface CredentialItemProps {
  credential: {
    uid: string,
    roles: any[]
  },
}

const CredentialItem: FunctionComponent<CredentialItemProps> = (props: CredentialItemProps) => {
  const [deleteCredential, { isLoading: isDeleting }] = useDeleteCredentialMutation()
  const [presentAlert] = useIonAlert();

  const handleDelete = () => {
    presentAlert({
      header: "Attention !",
      subHeader: `Etes vous sur de vouloir supprimer les identifiants ${props.credential.uid} ?`,
      message: `bla bla bla ${props.credential.uid}`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => { },
        },
        {
          text: 'Confirmer',
          role: 'confirm',
          handler: async () => deleteCredential(props.credential),
        },
      ],
    })
  }

  return (
    <IonItem>
      {isDeleting
        ? <IonSpinner name="bubbles" />
        :
        <IonLabel>
          <h4>Identifiant: {props.credential.uid}</h4>
          <p>
            Roles : {" "}
            {props.credential.roles.map((role: any) => (
              <span key={role}>
                {role === "ADMIN" ? "Admin " :
                  role === "VOLUNTEER" ? "Bénévole " : ""
                }
              </span>
            ))}
          </p>
        </IonLabel>
      }
      <IonButtons slot='end'>
        <IonButton onClick={handleDelete} color={"danger"} fill="solid">
          <IonIcon slot="icon-only" icon={trash} />
        </IonButton>
      </IonButtons>
    </IonItem>
  );
}

export default CredentialItem;