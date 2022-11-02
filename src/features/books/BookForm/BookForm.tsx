import { IonBackButton, IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonRow, IonSegment, IonSegmentButton, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import { FunctionComponent, RefObject, useState } from "react";
import Book from "../../../interface/Book";
import BookFormSegment1 from "./BookFormSegment1";
import BookFormSegment2 from "./BookFormSegment2";
import { useDispatch, useSelector } from "react-redux";
import { useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation, } from "../../../app/api/api";
import { handleStatusChipColor, handleStatusValue } from "../../../utils/Utils";
import { initBookForm } from "../../../app/slice/bookSlice";
import { close } from "ionicons/icons";

interface BookFormProps {
  book: Book,
  modal: RefObject<HTMLIonModalElement>
  editable?: boolean
}

const BookForm: FunctionComponent<BookFormProps> = (props) => {
  const { isVolunteer } = useSelector((state: any) => state.auth)


  const [createBook, { isLoading: isCreating }] = useCreateBookMutation();
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const dispatch = useDispatch()

  const [segment, setSegment] = useState("info");
  const bookForm = useSelector((state: any) => state.book.bookForm)

  const handleSegment = (segment: "form" | "info") => {
    if (segment === "info") return setSegment("info")

    dispatch(initBookForm({
      price: props.book.price || 0.50,
      bookshelf: props.book.bookshelf || "",
      tags: props.book.tags || []
    }))

    return setSegment("form")
  }

  const handleClick = async (button: "add" | "update" | "delete" | "status") => {
    if (!bookForm.bookshelf) return;

    if (button === "add") await createBook({
      ...props.book,
      price: bookForm.price,
      bookshelf: bookForm.bookshelf,
      tags: bookForm.tags,
      status: "IN_STOCK",
    })

    if (button === "update") await updateBook({
      ...props.book,
      price: bookForm.price,
      bookshelf: bookForm.bookshelf,
      tags: bookForm.tags,
    })

    if (button === "status") await updateBook({
      ...props.book,
      status: props.book.status === "GONE" ? "IN_STOCK" : "GONE"
    })

    if (button === "delete") await deleteBook(props.book)

  }

  return (
    <>
      <IonHeader>
        <IonToolbar className="ion-padding" color={"primary"}>
          <IonTitle>
            {isVolunteer
              ? props.editable
                ? "Modifer le "
                : "Ajouter le "
              : "Détail du "
            }
            livre
          </IonTitle>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonButton
            onClick={() => props.modal.current?.dismiss()}
            color={"secondary"}
            slot="end">
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center ">
            <IonCol size="4">
              <IonImg
                className="book-form-img"
                alt={"couverture-du-livre-" + props.book.title}
                src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
              />
            </IonCol>
            <IonCol size="8">
              <IonItem>
                <IonLabel>
                  <h3>Titre : {props.book.title}</h3>
                  <p>Autheurs : </p>
                  <ul>
                    {props.book.authors && props.book.authors.map((authorName: string, idx: number) => (
                      <li key={idx}>
                        <p>{authorName}</p>
                      </li>
                    ))}
                  </ul>
                  {props.book.status &&
                    <IonChip color={handleStatusChipColor(props.book.status)}>
                      {handleStatusValue(props.book.status)}
                    </IonChip>
                  }
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

          {segment === "form" && isVolunteer &&
            <IonRow>
              <IonCol>
                {isCreating || isUpdating || isDeleting
                  ? <IonSpinner />
                  : props.editable
                    ?
                    <IonButtons>
                      <IonButton color={"warning"} onClick={() => handleClick("update")} fill="solid">
                        Modifier
                      </IonButton>

                      <IonButton onClick={() => handleClick("status")} color={props.book.status === "IN_STOCK" ? "danger" : "success"} fill="solid">
                        {props.book.status === "IN_STOCK" ? "Désactivé" : "Activé"}
                      </IonButton>
                    </IonButtons>
                    :
                    <IonButton onClick={() => handleClick("add")} expand="full">
                      Ajouter
                    </IonButton>
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