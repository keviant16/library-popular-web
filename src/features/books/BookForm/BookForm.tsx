import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import { FunctionComponent, RefObject, useState } from "react";
import Book from "../../../interface/Book";
import BookFormSegment1 from "./BookFormSegment1";
import BookFormDefaultItem from "./BookFormDefaultItem";
import BookFormSegment2 from "./BookFormSegment2";
import { useDispatch, useSelector } from "react-redux";
import { useCreateBookMutation, useCreateBookshelfMutation } from "../../../app/api/api";
import Spinner from "../../../components/Spinner";
import { BookFormItem } from "../BookFormItem";

interface BookFormProps {
  book: Book,
  modal: RefObject<HTMLIonModalElement>
}

const BookForm: FunctionComponent<BookFormProps> = (props) => {
  const [createBook, { isLoading }] = useCreateBookMutation();
  const [segment, setSegment] = useState("default");
  const bookForm = useSelector((state: any) => state.book.bookForm)

  const handleSegment = (segment: "default" | "segment1" | "segment2") => {
    if (segment === "default") return setSegment("default")
    if (segment === "segment1") return setSegment("segment1")
    return setSegment("segment2")
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
              <IonSegment>
                <IonSegmentButton value="default" onClick={() => handleSegment("segment1")}>
                  <IonLabel>Formulaire</IonLabel>
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