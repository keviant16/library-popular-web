import { IonLabel, IonList, IonListHeader, } from "@ionic/react"
import { useSelector } from "react-redux";
import Bookshelf from "../../interface/Bookshelf"
import BookshelfItem from "./BookshelfItem";

const BookshelfList: React.FC = () => {
    const bookshelves = useSelector((state: any) => state.bookshelf.bookshelves)

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>étagères</h1>
                </IonLabel>
            </IonListHeader>
            {bookshelves.map((bookshelf: Bookshelf) => (
                <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
            ))}
        </IonList>
    )
}

export default BookshelfList