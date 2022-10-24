import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import Book from "../../../interface/Book";
import BookshelfSelect from "../../bookshelves/BookshelfSelect";
import TagSelect from "../../tags/TagSelect";

interface BookFormSegment1Props {
  book: Book
}

const BookFormSegment1: FunctionComponent<BookFormSegment1Props> = () => {
  return (
    <>
      <BookshelfSelect />
      <TagSelect />
      <IonItem>
        <IonLabel>Prix</IonLabel>
        <IonSelect
          name="price"
        // value={bookForm.price}
        // onIonChange={(e) => setBookForm(prev => ({ ...prev, price: e.detail.value }))}
        >
          <IonSelectOption value={1.00}>1.00 €</IonSelectOption>
          <IonSelectOption value={0.50}>0.50 €</IonSelectOption>
        </IonSelect>
      </IonItem>
    </>
  );
}

export default BookFormSegment1;