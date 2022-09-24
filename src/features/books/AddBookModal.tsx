import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader, IonModal, IonNav, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react"
import { add } from "ionicons/icons"
import React, { useRef } from "react";
import SearchApiBook from "./SearchApiBook";

const AddBookModal = () => {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <React.Fragment>
            <IonFab id="open-modal" vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton >
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonModal ref={modal} trigger="open-modal">
                <IonNav root={() => <SearchApiBook modal={modal} />}></IonNav>
            </IonModal>
        </React.Fragment >
    )
}
export default AddBookModal