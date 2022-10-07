import { IonList, IonListHeader, IonLabel } from "@ionic/react"
import { useSelector } from "react-redux";
import Book from "../../interface/Book";

import BookItem from "./BookItem";

const BookList = () => {
    const books: Book[] = useSelector((state: any) => state.book.books)

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Livres</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer un livre de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {books.map((book: Book, idx: number) => (
                <BookItem key={idx} book={book} editable={true} />
            ))}
        </IonList>
    )
}

export default BookList