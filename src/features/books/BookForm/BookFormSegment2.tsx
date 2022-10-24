import { FunctionComponent } from "react";
import Book from "../../../interface/Book";
import { BookFormItem } from "../BookFormItem";

interface BookFormSegment2Props {
  book: Book
}

const BookFormSegment2: FunctionComponent<BookFormSegment2Props> = (props) => {
  return (
    <>
      <BookFormItem
        head="Description"
        content={<p>{props.book.description ? props.book.description : "-"}</p>}
      />
      <BookFormItem
        head="Editeur"
        content={<p>{props.book.publisher ? props.book.publisher : "-"}</p>}
      />
      <BookFormItem
        head="Date de publication"
        content={<p>{props.book.publishedDate ? props.book.publishedDate : "-"}</p>}
      />
      <BookFormItem
        head="Nombre de page"
        content={<p>{props.book.pageCount ? props.book.pageCount : "-"}</p>}
      />
    </>
  );
}

export default BookFormSegment2;