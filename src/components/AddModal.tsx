import { IonFab, IonFabButton, IonIcon, IonModal, IonNav } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { useRef } from "react";
import BookshelfAddForm from "../features/bookshelves/BookshelfAddForm";

interface AddModalProps {
    view: string
}

const AddModal: React.FC<AddModalProps> = (props: AddModalProps) => {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <React.Fragment>
            <IonFab id="open-modal" vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton >
                    <IonIcon icon={add} />
                </IonFabButton>
            </IonFab>
            <IonModal ref={modal} trigger="open-modal">
                {props.view === "bookshelf" &&
                    <IonNav root={() => <BookshelfAddForm modal={modal} />} ></IonNav>
                }
            </IonModal>
        </React.Fragment >
    )
}
export default AddModal