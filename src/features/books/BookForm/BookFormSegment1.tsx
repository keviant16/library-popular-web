import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookForm } from "../../../app/slice/bookSlice";
import Book from "../../../interface/Book";
import BookshelfSelect from "../../bookshelves/BookshelfSelect";
import TagSelect from "../../tags/TagSelect";

interface BookFormSegment1Props {
  book: Book
}

const BookFormSegment1: FunctionComponent<BookFormSegment1Props> = () => {
  const bookForm = useSelector((state: any) => state.book.bookForm)
  const dispatch = useDispatch()

  const handleSelect = (e: any) => {
    dispatch(setBookForm({ name: e.target.name, value: e.target.value }))
  }

  return (
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
  );
}

export default BookFormSegment1;