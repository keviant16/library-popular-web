import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllBookshelvesQuery } from "../../app/api/api";
import { setBookForm } from "../../app/slice/bookSlice";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Bookshelf from "../../interface/Bookshelf";

interface BookshelfSelectProps {
  value: string,
  name: string,
  handleChange: (e: any) => void
}

const BookshelfSelect: FunctionComponent<BookshelfSelectProps> = (props) => {
  const { data, error, isLoading } = useGetAllBookshelvesQuery('')

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Etagère</IonLabel>
      <IonSelect
        value={props.value}
        name={props.name}
        onIonChange={props.handleChange}
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