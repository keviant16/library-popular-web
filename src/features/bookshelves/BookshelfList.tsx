import { IonLabel, IonList, IonListHeader, IonSpinner } from "@ionic/react"
import { useEffect, useState } from "react"
import Bookshelf from "../../interface/Bookshelf"
import { getAllBookshelves } from "../../services/BookshelfService"

const BookshelfList: React.FC = () => {
    const [input, setInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [bookshelfList, setbookshelfList] = useState<Bookshelf[]>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        setLoading(true)
        initOnStart()
    }, []);

    const initOnStart = async () => {
        const bookshelves: any = await getAllBookshelves();
        setbookshelfList(bookshelves)
        setLoading(false)
    }

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>étagères</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer une étagère de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {loading ? <IonSpinner name="bubbles" /> :
                bookshelfList &&
                bookshelfList.map((bookshelf: Bookshelf, index: number) => (
                    <div key={index}>{bookshelf.name} </div>
                ))
            }
        </IonList>
    )
}

export default BookshelfList