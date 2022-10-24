import { IonFab, IonFabButton, IonIcon, IonModal, IonNav } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { FunctionComponent, useRef } from "react";
import BookSearchList from "./BookSearchList";

interface BookModalProps { }

const BookModal: FunctionComponent<BookModalProps> = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <React.Fragment>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton id="open-modal">
          <IonIcon icon={add} />
        </IonFabButton>
        <IonModal ref={modal} trigger="open-modal">
          <IonNav root={() => <BookSearchList modal={modal} />} />
        </IonModal>
      </IonFab>
    </React.Fragment>
  );
}

export default BookModal;