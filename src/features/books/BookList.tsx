import { IonList, IonListHeader, IonLabel, IonItem, IonInput, IonButton, IonIcon, IonSpinner, IonNavLink } from "@ionic/react"
import { add } from "ionicons/icons"
import { useEffect, useState } from "react";
import Book from "../../interface/Book";
import { addBook, getAllbooks } from "../../services/BookService";

const BookList = () => {
    const [input, setInput] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [bookList, setBookList] = useState<Book[]>([]);
    const [error, setError] = useState<string>();
    const [bookItems, setBookItems] = useState<Book[]>();


    useEffect(() => {
        setLoading(true)
        initBookList()
    }, []);

    const initBookList = async () => {
        const bookResponse: any = await getAllbooks();
        setBookList(bookResponse)
        setLoading(false)
    }

    const addSectionOnClick = async () => {
        if (!input) {
            setError("Le champs est vide")
            return
        }

        setLoading(true)

        // await addBook(newBook);
        initBookList()
    }

    const handleOnChange = (e: any) => {
        setInput(e.detail.value!)
        setError("")
    }

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>
                    <h1>Livres</h1>
                    <p>D'Ici vous pouvez ajouter, modifer et supprimer un livre de la librairie</p>
                </IonLabel>
            </IonListHeader>
            {/* <IonItem>
                <IonLabel position="stacked">Enter le code barre de votre livre</IonLabel>
                <IonInput
                    value={input}
                    placeholder="ex: 2700232704"
                    onIonChange={(e) => handleOnChange(e)} />
                {error &&
                    <IonLabel slot="error" color={"danger"}>{error}</IonLabel>
                }
                <IonButton
                    slot="end"
                    color={"primary"}
                    fill="solid"
                    routerLink='/tableau-de-bord/livres'
                >
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>
            </IonItem> */}

            {/* {
                loading ? <IonSpinner name="bubbles" /> :
                    bookList.map((book: Book) => (
                        <>book item</>
                        // <SectionItem
                        //     key={section.resourceId}
                        //     section={section}
                        //     callback={initBookList}
                        // />
                    ))
            } */}
        </IonList >
    )
}

export default BookList