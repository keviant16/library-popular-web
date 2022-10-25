import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllBookshelvesQuery } from "../../app/api/api";
import { setBookForm } from "../../app/slice/bookSlice";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Bookshelf from "../../interface/Bookshelf";

interface BookshelfSelectProps { }

const BookshelfSelect: FunctionComponent<BookshelfSelectProps> = () => {
  const { data, error, isLoading } = useGetAllBookshelvesQuery('')
  const bookForm = useSelector((state: any) => state.book.bookForm)
  const dispatch = useDispatch()

  const handleBookForm = (e: any) => {
    console.log(bookForm);
    dispatch(setBookForm({ name: e.target.name, value: e.target.value }))
  }

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Etagère</IonLabel>
      <IonSelect
        value={bookForm.bookshelf}
        name="bookshelf"
        onIonChange={handleBookForm}
      >
        {data && data.map((bookshelf: Bookshelf) => (
          <IonSelectOption key={bookshelf.id} value={bookshelf.name}>
            {bookshelf.name}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
}

export default BookshelfSelect;