import { IonFab, IonFabButton, IonIcon, IonModal, IonNav } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { useRef } from "react";
import SearchApiBook from "../features/books/SearchApiBook";
import BookshelfAddForm from "../features/bookshelves/BookshelfAddForm";
import TagAddForm from "../features/tags/TagAddForm";
interface AddModalProps {
    view: string
    icon: string
}

const AddModal: React.FC<AddModalProps> = (props: AddModalProps) => {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <React.Fragment>
            <IonFab id="open-modal" vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton >
                    <IonIcon icon={props.icon} />
                </IonFabButton>
            </IonFab>
            <IonModal ref={modal} trigger="open-modal">
                {props.view === "bookshelf" &&
                    <IonNav root={() => <BookshelfAddForm modal={modal} />} ></IonNav>
                }
                {props.view === "tag" &&
                    <IonNav root={() => <TagAddForm modal={modal} />} ></IonNav>
                }
                {props.view === "book" &&
                    <IonNav root={() => <SearchApiBook modal={modal} />} ></IonNav>
                }
            </IonModal>
        </React.Fragment >
    )
}
export default AddModal