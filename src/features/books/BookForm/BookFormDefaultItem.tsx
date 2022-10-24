import { FunctionComponent } from "react";
import Book from "../../../interface/Book";
import { BookFormItem } from "../BookFormItem";

interface BookFormDefaultItemProps {
  book: Book
}

const BookFormDefaultItem: FunctionComponent<BookFormDefaultItemProps> = (props) => {
  return (
    <>
      <BookFormItem
        head="Titre"
        content={<p>{props.book.title}</p>}
      />
      <BookFormItem
        head="Auteur"
        content={
          <ul>
            {props.book.authors && props.book.authors.map((authorName: string, idx: number) => (
              <li key={idx}>
                <p>{authorName}</p>
              </li>
            ))}
          </ul>
        } />
      <BookFormItem
        head="Sous-titre"
        content={<p>{props.book.subtitle ? props.book.subtitle : "-"}</p>}
      />
    </>
  );
}

export default BookFormDefaultItem;