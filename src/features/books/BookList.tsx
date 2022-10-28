import { IonItem, IonItemDivider, IonLabel, IonList, IonSpinner } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetAllBooksQuery } from "../../app/api/api";
import ListHeader from "../../components/ListHeader";
import Book from "../../interface/Book";
import BookItem from "./BookItem";
import BookSearchbar from "./BookSearchbar";

interface BookListProps {
  hideReturn?: boolean
  hideAddBook?: boolean
  isVisitor?: boolean
}

const BookList = (props: BookListProps) => {
  const { data, error, isLoading } = useGetAllBooksQuery('')
  const { searchValue, bookFilter }: any = useSelector((state: any) => state.book)

  const filtredBook: Book[] | undefined = useMemo(() => data?.filter((book: Book) => {
    return book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      && (bookFilter.bookshelf ? book.bookshelf === bookFilter.bookshelf : true)
      && (bookFilter.tags ? book.tags.filter(tag => bookFilter.tags.includes(tag)) : true)
  }), [searchValue, data, bookFilter])


  return (
    <IonList>
      <ListHeader
        icon={arrowBack}
        header={props.hideReturn ? "Rechercher un livre" : "Livres"}
        search={<BookSearchbar />}
        searchActive
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
          <IonItemDivider>
            <IonLabel>{filtredBook?.length} Résultats</IonLabel>
          </IonItemDivider>
          {filtredBook?.map((book: Book, idx: number) => <BookItem key={idx} book={book} editable={true} />)}
        </>
      ) : null}
    </IonList>
  )
}

export default BookList