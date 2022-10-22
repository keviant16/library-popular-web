import { IonList, IonListHeader, IonLabel, IonSpinner, IonButton, IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { FunctionComponent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_credentials } from "../../app/slice/authSlice";
import ListHeader from "../../components/ListHeader";
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
            <ListHeader icon={arrowBack} header={"Identifiants"} />
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