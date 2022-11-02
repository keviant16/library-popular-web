import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookForm } from "../../../app/slice/bookSlice";
import Book from "../../../interface/Book";
import BookshelfSelect from "../../bookshelves/BookshelfSelect";
import TagSelect from "../../tags/TagSelect";
import { BookFormItem } from "./BookFormItem";

interface BookFormSegment1Props {
  book?: Book
}

const BookFormSegment1: FunctionComponent<BookFormSegment1Props> = (props) => {
  const bookForm = useSelector((state: any) => state.book.bookForm)
  const { isVolunteer } = useSelector((state: any) => state.auth)

  const dispatch = useDispatch()

  const handleSelect = (e: any) => {
    dispatch(setBookForm({ name: e.target.name, value: e.target.value }))
  }

  return (
    <>
      {isVolunteer ?
        <>
          <BookshelfSelect
            value={bookForm.bookshelf}
            name={"bookshelf"}
            handleChange={handleSelect}
          />
          <TagSelect
            value={bookForm.tags}
            name={"tags"}
            handleChange={handleSelect}
          />
          <IonItem>
            <IonLabel>Prix</IonLabel>
            <IonSelect
              name="price"
              value={bookForm.price}
              onIonChange={handleSelect}
            >
              <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
              <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
            </IonSelect>
          </IonItem>
        </>
        :
        <>
          <BookFormItem head={"bookshelf"} content={<p>{props.book?.bookshelf} </p>} />
          <BookFormItem head={"Tags"} content={<p>{props.book?.tags.map((tag, idx) => <>{tag} {props.book?.tags && (idx < props.book?.tags?.length - 1) && " - "}</>)} </p>} />
          <BookFormItem head={"price"} content={<p>{props.book?.price}</p>} />
        </>
      }

    </>
  );
}

export default BookFormSegment1;