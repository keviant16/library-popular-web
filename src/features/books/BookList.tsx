import { IonAccordion, IonAccordionGroup, IonList } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ListHeader from "../../components/ListHeader";
import Book from "../../interface/Book";
import BookItem from "./BookItem";
import BookSearchbar from "./BookSearchbar";

interface BookListProps {
  hideReturn?: boolean
}

const BookList = (props: BookListProps) => {
  const books: Book[] = useSelector((state: any) => state.book.books)

  return (
    <IonList>
      <ListHeader
        icon={arrowBack}
        header={props.hideReturn ? "Rechercher un livre" : "Livres"}
        search={<BookSearchbar />}
        fitreActive
        hideReturn={props.hideReturn}
      />
      {books.map((book: Book, idx: number) => (
        <BookItem key={idx} book={book} editable={true} />
      ))}
    </IonList>
  )
}

export default BookList