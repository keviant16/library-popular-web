import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import { FunctionComponent, RefObject, useState } from "react";
import Book from "../../../interface/Book";
import BookFormSegment1 from "./BookFormSegment1";
import BookFormSegment2 from "./BookFormSegment2";
import { useSelector } from "react-redux";
import { useCreateBookMutation, } from "../../../app/api/api";

interface BookFormProps {
  book: Book,
  modal: RefObject<HTMLIonModalElement>
  editable?: boolean
}

const BookForm: FunctionComponent<BookFormProps> = (props) => {
  const [createBook, { isLoading }] = useCreateBookMutation();
  const [segment, setSegment] = useState("info");
  const bookForm = useSelector((state: any) => state.book.bookForm)

  const handleSegment = (segment: "form" | "info") => {
    if (segment === "form") return setSegment("form")
    return setSegment("info")
  }

  const handleClick = async () => {
    if (!bookForm.bookshelf) return;

    await createBook({
      ...props.book,
      price: bookForm.price,
      bookshelf: bookForm.bookshelf,
      tags: bookForm.tags,
      status: "IN_STOCK",
    })
  }

  return (
    <>
      <IonHeader>
        <IonToolbar className="ion-padding" color={"primary"}>
          <IonTitle>{props.editable ? "Modifer" : "Ajouter"} livre</IonTitle>
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

          <IonRow className="ion-justify-content-center ">
            <IonCol sizeMd="4">
              <IonImg
                className="book-form-img"
                alt={"couverture-du-livre-" + props.book.title}
                src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
              />
            </IonCol>
            <IonCol sizeMd="8" >
              <IonItem lines="none">
                <IonLabel>
                  <h3>Titre : {props.book.title}</h3>
                  <p>Sous-titre: {props.book.subtitle ? props.book.subtitle : "-"}</p>
                  <p>Autheurs : </p>
                  <ul>
                    {props.book.authors && props.book.authors.map((authorName: string, idx: number) => (
                      <li key={idx}>
                        <p>{authorName}</p>
                      </li>
                    ))}
                  </ul>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonSegment value={segment}>
                <IonSegmentButton value="info" onClick={() => handleSegment("info")}>
                  <IonLabel>Info +</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="form" onClick={() => handleSegment("form")}>
                  <IonLabel>Formulaire</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              <IonList>
                {segment === "form"
                  ? <BookFormSegment1 book={props.book} />
                  : <BookFormSegment2 book={props.book} />
                }
              </IonList>
            </IonCol>
          </IonRow>

          {segment === "segment1" &&
            <IonRow>
              <IonCol>
                {isLoading
                  ? <IonSpinner />
                  :
                  <>
                    <IonButton
                      onClick={handleClick}
                      expand="full">
                      Ajouter
                    </IonButton>
                  </>
                }

              </IonCol>
            </IonRow>
          }
        </IonGrid>
      </IonContent>
    </>
  );
}

export default BookForm;