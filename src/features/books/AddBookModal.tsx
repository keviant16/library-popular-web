import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput, IonList, IonThumbnail, IonImg, IonFab, IonFabButton, IonIcon, IonNavLink, IonNav, IonBackButton, IonTitle } from "@ionic/react"
import { add } from "ionicons/icons"
import React, { useRef } from "react"
import SearchGoogleBook from "./SearchGoogleBook"

const AddBookModal: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    return (
        <React.Fragment>
            <IonModal ref={modal} trigger="open-modal">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>Annuler</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding" scrollY={true}>

                </IonContent>
            </IonModal>

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton id="open-modal">
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
        </React.Fragment >
    )
}
export default AddBookModal



