import { IonList, IonListHeader, IonLabel, IonSpinner } from "@ionic/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../../app/features/book/bookSlice";
import Book from "../../interface/Book";
import { getAllbooks } from "../../services/BookService";
import BookItem from "./BookItem";

const BookList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const books = useSelector((state: any) => state.book.books)
    console.log(books);

    const dispatch = useDispatch()

    useEffect(() => {
        const initOnStart = async () => {
            const response: Book[] = await getAllbooks();
            dispatch(setBooks(response))
            setLoading(false)
        }
        setLoading(true)
        initOnStart()
    }, [dispatch]);

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Livres</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer un livre de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {loading ? <IonSpinner name="bubbles" /> :
                books.map((book: Book) => (
                    <BookItem key={book.id} book={book} editable={true} />
                ))
            }
        </IonList>
    )
}

export default BookList