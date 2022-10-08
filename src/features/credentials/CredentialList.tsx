import { IonList, IonListHeader, IonLabel, IonSpinner } from "@ionic/react";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_credentials } from "../../app/slice/authSlice";
import { getAllCredentials } from "../../services/CredentialService";
import CredentialItem from "./CredentialItem";

interface CredentialListProps { }

const CredentialList: FunctionComponent<CredentialListProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const credentials = useSelector((state: any) => state.auth.credentials)
    const dispatch = useDispatch()

    useEffect(() => {
        const initOnStart = async () => {
            const allCredentials: any[] = await getAllCredentials();
            dispatch(set_credentials(allCredentials))
            setLoading(false)
        }
        setLoading(true)
        initOnStart()
    }, [dispatch]);

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Identifiants</h1>
                </IonLabel>
            </IonListHeader>
            {loading ?
                <IonSpinner name="bubbles" />
                :
                credentials.map((credential: any, index: number) => (
                    <CredentialItem key={index} credential={credential} />
                ))
            }
        </IonList>
    );
}

export default CredentialList;