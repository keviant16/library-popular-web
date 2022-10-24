import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from "@ionic/react";
import { FunctionComponent, RefObject, useState } from "react";
import Book from "../../../interface/Book";
import BookFormSegment1 from "./BookFormSegment1";
import BookFormDefaultItem from "./BookFormDefaultItem";
import BookFormSegment2 from "./BookFormSegment2";

interface BookFormProps {
  book: Book,
  modal: RefObject<HTMLIonModalElement>
}

const BookForm: FunctionComponent<BookFormProps> = (props) => {
  const [segment, setSegment] = useState("default");

  const handleSegment = (segment: "default" | "segment1" | "segment2") => {
    if (segment === "default") return setSegment("default")
    if (segment === "segment1") return setSegment("segment1")
    return setSegment("segment2")
  }

  console.log(segment);

  return (
    <>
      <IonHeader>
        <IonToolbar className="ion-padding" color={"primary"}>
          <IonTitle>Ajouter un livre</IonTitle>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonButton
            onClick={() => props.modal.current?.dismiss()}
            color={"secondary"}
            slot="end">
            Annuler
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol sizeSm="4">
              <IonImg
                alt={"couverture-du-livre" + props.book.title}
                src={props.book.image
                  ? props.book.image
                  : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"
                }
              />
            </IonCol>
            <IonCol sizeSm="8">
              <IonSegment>
                <IonSegmentButton value="default" onClick={() => handleSegment("default")}>
                  <IonLabel>Livre</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="segment1" onClick={() => handleSegment("segment1")}>
                  <IonLabel>Ajouter</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="segment2" onClick={() => handleSegment("segment2")}>
                  <IonLabel>Info +</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              <IonList>
                {segment === "default"
                  ? <BookFormDefaultItem book={props.book} />
                  : segment === "segment1"
                    ? <BookFormSegment1 book={props.book} />
                    : <BookFormSegment2 book={props.book} />
                }
              </IonList>
            </IonCol>
          </IonRow>
          {segment === "segment1" &&
            <IonRow>
              <IonCol>
                <IonButton expand="full">Ajouter</IonButton>
              </IonCol>
            </IonRow>
          }
        </IonGrid>
      </IonContent>
    </>
  );
}

export default BookForm;