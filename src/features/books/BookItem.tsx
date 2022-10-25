import { IonItem, IonThumbnail, IonImg, IonLabel, IonModal, IonChip } from "@ionic/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { initBookForm } from "../../app/slice/bookSlice";
import Book from "../../interface/Book";
import { handleStatusChipColor, handleStatusValue } from "../../utils/Utils";
import BookForm from "./BookForm/BookForm";


interface BookItemProps {
  book: Book,
  editable?: boolean
}

const BookItem: React.FC<BookItemProps> = (props: BookItemProps) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const dispatch = useDispatch()

  const handleInitBookForm = () => {

    dispatch(initBookForm({
      price: props.book.price,
      bookshelf: props.book.bookshelf,
      tags: props.book.tags
    }))
  }

  return (
    <>
      <IonItem button id={"open-modal-" + props.book.id} onClick={handleInitBookForm}>
        <IonThumbnail slot="start">
          <IonImg
            alt={"couverture-du-livre" + props.book.title}
            src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
          />
        </IonThumbnail>
        <IonLabel>
          <h3>{props.book.title}</h3>

          <p>
            {props.book.authors &&
              props.book.authors.map((authorName: string, idx: number) =>
                idx < props.book.authors.length - 1 ? authorName + ", " : authorName)
            }
          </p>

          {props.book.bookshelf &&
            <p>Etagère : {props.book.bookshelf}</p>
          }

          <p>{props.book.status &&
            <IonChip color={handleStatusChipColor(props.book.status)}>
              {handleStatusValue(props.book.status)}
            </IonChip>
          }
            {props.book.tags && props.book.tags.length > 0 &&
              props.book.tags.map((tags: string, idx: number) => < IonChip key={idx} > {tags}</IonChip>)
            }
          </p>
        </IonLabel>
        <IonLabel slot="end">
          {props.book.price && <p>{props.book.price} €</p>}
        </IonLabel>
      </IonItem>
      {
        props.editable &&
        <IonModal ref={modal} trigger={"open-modal-" + props.book.id}>
          <BookForm modal={modal} book={props.book} editable={props.editable} />
        </IonModal>
      }
    </>
  )
}

export default BookItem;