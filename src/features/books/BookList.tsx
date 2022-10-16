import { useSelector } from "react-redux";
import Book from "../../interface/Book";
import BookItem from "./BookItem";

const BookList = () => {
    const books: Book[] = useSelector((state: any) => state.book.books)

    return (
        <>
            {books.map((book: Book, idx: number) => (
                <BookItem key={idx} book={book} editable={true} />
            ))}
        </>
    )
}

export default BookList