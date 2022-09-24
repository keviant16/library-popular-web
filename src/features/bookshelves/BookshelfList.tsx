import { IonLabel, IonList, IonListHeader, IonSpinner } from "@ionic/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookshelves } from "../../app/features/bookshelf/bookshelfSlice";
import Bookshelf from "../../interface/Bookshelf"
import { getAllBookshelves } from "../../services/BookshelfService";
import BookshelfItem from "./BookshelfItem";

const BookshelfList: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const bookshelves = useSelector((state: any) => state.bookshelf.bookshelves)
    const dispatch = useDispatch()

    useEffect(() => {
        const initOnStart = async () => {
            const allBookshelves: Bookshelf[] = await getAllBookshelves();
            dispatch(setBookshelves(allBookshelves))
            setLoading(false)
        }

        setLoading(true)
        initOnStart()
    }, [dispatch]);



    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>étagères</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer une étagère de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {loading ? <IonSpinner name="bubbles" /> :
                bookshelves.map((bookshelf: Bookshelf) => (
                    <BookshelfItem key={bookshelf.id} bookshelf={bookshelf} />
                ))
            }
        </IonList>
    )
}

export default BookshelfList