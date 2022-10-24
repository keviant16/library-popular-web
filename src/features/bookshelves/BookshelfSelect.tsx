import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { useGetAllBookshelvesQuery } from "../../app/api/api";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Bookshelf from "../../interface/Bookshelf";

interface BookshelfSelectProps { }

const BookshelfSelect: FunctionComponent<BookshelfSelectProps> = () => {
  const { data, error, isLoading } = useGetAllBookshelvesQuery('')

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return (
    <IonItem>
      <IonLabel>Etagère</IonLabel>
      <IonSelect>
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