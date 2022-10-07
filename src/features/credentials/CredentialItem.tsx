import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, useIonAlert } from "@ionic/react";
import { trash } from "ionicons/icons";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { set_credentials } from "../../app/features/auth/authSlice";
import { deleteCredential, getAllCredentials } from "../../services/CredentialService";

interface CredentialItemProps {
    credential: {
        uid: string,
        roles: any[]
    },
}

const CredentialItem: FunctionComponent<CredentialItemProps> = (props: CredentialItemProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [presentAlert] = useIonAlert();
    const dispatch = useDispatch()

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
                    handler: () => {
                        deleteCredentialOnClick(props.credential.uid)
                    },
                },
            ],
        })
    }

    const updateCredentials = async () => {
        const response: any[] = await getAllCredentials();
        dispatch(set_credentials(response))
    }

    const deleteCredentialOnClick = async (uid?: string) => {
        setLoading(true)
        await deleteCredential(uid);
        await updateCredentials()
        setLoading(false)
    }

    return (
        <IonItem>
            <IonLabel>
                <h3>Identifiant: {props.credential.uid}</h3>
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
                {loading && <p>deleting ...</p>}
            </IonLabel>
            <IonButtons slot='end'>
                <IonButton onClick={() => handleDelete()} color={"danger"} fill="solid">
                    <IonIcon slot="icon-only" icon={trash} />
                </IonButton>
            </IonButtons>
        </IonItem >
    );
}

export default CredentialItem;