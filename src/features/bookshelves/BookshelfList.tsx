import { IonList } from "@ionic/react"
import { arrowBack } from "ionicons/icons";
import { useSelector } from "react-redux";
import ListHeader from "../../components/ListHeader";
import Bookshelf from "../../interface/Bookshelf"
import BookshelfItem from "./BookshelfItem";

const BookshelfList: React.FC = () => {
    const bookshelves = useSelector((state: any) => state.bookshelf.bookshelves)

    return (
        <IonList>
            <ListHeader icon={arrowBack} header={"étagères"} />
            {bookshelves.map((bookshelf: Bookshelf) => (
                <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
            ))}
        </IonList>
    )
}

export default BookshelfList