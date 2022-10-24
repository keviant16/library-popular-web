import { IonItem, IonLabel, IonList, IonSpinner } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useGetAllBooksQuery } from "../../app/api/api";
import ListHeader from "../../components/ListHeader";
import Book from "../../interface/Book";
import BookItem from "./BookItem";
import BookSearchbar from "./BookSearchbar";

interface BookListProps {
  hideReturn?: boolean
  hideAddBook?: boolean
}

const BookList = (props: BookListProps) => {
  const { data, error, isLoading } = useGetAllBooksQuery('')

  return (
    <IonList>
      <ListHeader
        icon={arrowBack}
        header={props.hideReturn ? "Rechercher un livre" : "Livres"}
        search={<BookSearchbar />}
        fitreActive
        hideAddBook={props.hideAddBook}
        hideReturn={props.hideReturn}
      />
      {error ? (
        <IonItem>
          <IonLabel color={"danger"}>Oh non, il y a eu une erreur</IonLabel>
        </IonItem>
      ) : isLoading ? (
        <IonItem lines="none">
          <IonSpinner name="lines" />
        </IonItem>
      ) : data ? (
        <>
          {data.map((book: Book, idx: number) => <BookItem key={idx} book={book} editable={true} />)}
        </>
      ) : null}
    </IonList>
  )
}

export default BookList