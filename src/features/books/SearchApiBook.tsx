import { IonButton, IonList, IonNavLink, IonSearchbar, IonListHeader, IonContent, IonButtons, IonHeader, IonToolbar, IonTitle, IonItem } from "@ionic/react"
import React, { RefObject, useEffect, useState } from "react"
import Book from "../../interface/Book";
import GoogleBook from "../../interface/GoogleBook";
import { getGoogleBooksByCodeIsbn } from "../../services/BookAPIService";
import { getbooksByIsbn } from "../../services/BookService";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

interface SearchApiBookProps {
    modal: RefObject<HTMLIonModalElement>
}

const SearchApiBook: React.FC<SearchApiBookProps> = (props: SearchApiBookProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const [bookList, setBookList] = useState<Book[]>();
    const [loading, setLoading] = useState(false);
    const [existing, setExisting] = useState(false);

    useEffect(() => {
        const handleApiBookCall = async () => {
            setLoading(true)
            const bdd_response = await getbooksByIsbn(searchText)

            if (bdd_response !== 404) return handle_found_book(bdd_response)
            const goolge_book_response = await getGoogleBooksByCodeIsbn(searchText)

            if (!goolge_book_response.hasOwnProperty("items")) return setBookList([])
            const bookArray: Book[] = goolge_book_response.items.map((item: GoogleBook) => googleBookItemToBook(item))
            setBookList(bookArray)
            setExisting(false)
            setLoading(false)
        }

        const handle_found_book = (books: Book[]) => {
            setBookList(books)
            setLoading(false)
            setExisting(true)
        }

        const googleBookItemToBook = (item: GoogleBook): Book | undefined => {
            if (item.volumeInfo === undefined) return undefined

            return {
                title: item.volumeInfo.title,
                subtitle: item.volumeInfo.subtitle,
                publisher: item.volumeInfo.publisher,
                publishedDate: item.volumeInfo.publishedDate,
                image: item.volumeInfo.imageLinks?.thumbnail,
                isbn: searchText,
                pageCount: item.volumeInfo.pageCount,
                description: item.volumeInfo.description,
                authors: item.volumeInfo.authors,
                tags: [],
                bookshelf: "",
            }
        }

        if (!searchText) return setBookList([])
        if (searchText.length < 10 || searchText.length > 13) return setBookList([]);
        if (searchText.length === 11 || searchText.length === 12) return setBookList([]);

        handleApiBookCall()
    }, [searchText]);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><h3>1. Rechercher</h3></IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p style={{ paddingLeft: 8 }}>Entrer le code isbn</p>
                <IonSearchbar
                    debounce={250}
                    placeholder='ex : 9782253136460'
                    value={searchText}
                    onIonChange={e => setSearchText(e.detail.value!)}
                    showCancelButton="focus"
                />
                <IonList>
                    <IonListHeader>
                        <h4>Résultats pour {searchText} : {bookList?.length}</h4>

                    </IonListHeader>
                    {existing &&
                        <IonItem color={"danger"}>
                            {bookList && bookList?.length > 1 ?
                                <p>Plusieurs livres avec ce code isbn sont déjà présentent dans librairie</p> :
                                <p>Un livre avec ce code isbn est déjà présent dans librairie</p>
                            }
                        </IonItem>
                    }
                    {loading && <IonItem>recherche en cours ...</IonItem>}

                    {bookList?.map((book: Book, index: number) => (
                        <IonNavLink
                            key={index}
                            routerDirection="forward"
                            component={() => <BookForm book={book} modal={props.modal} editable={existing} />}
                        >
                            <BookItem book={book} />
                        </IonNavLink>
                    ))}
                </IonList>
            </IonContent>
        </>

    )
}

export default SearchApiBook;