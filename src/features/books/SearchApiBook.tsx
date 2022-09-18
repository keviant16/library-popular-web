import { IonItem, IonLabel, IonButton, IonList, IonThumbnail, IonImg, IonNavLink, IonSearchbar, IonListHeader, IonContent, IonButtons, IonHeader, IonToolbar, IonTitle } from "@ionic/react"
import React, { RefObject, useEffect, useState } from "react"
import Book from "../../interface/Book";
import GoogleBook from "../../interface/GoogleBook";
import { getGoogleBooksByCodeIsbn } from "../../services/BookAPIService";
import BookForm from "./BookForm";

interface SearchApiBookProps {
    modal: RefObject<HTMLIonModalElement>
}

const SearchApiBook: React.FC<SearchApiBookProps> = (props: SearchApiBookProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const [bookList, setBookList] = useState<Book[]>();


    function handleChange(value: string) {
        setSearchText(value)
    }

    async function handleApiBookCall() {
        let response = await getGoogleBooksByCodeIsbn(searchText)

        if (response.hasOwnProperty("items")) {
            const bookArray: Book[] = response.items.map((item: GoogleBook) => googleBookItemToBook(item))
            setBookList(bookArray)
        } else {
            setBookList([])
        }
    }

    function googleBookItemToBook(item: GoogleBook): Book | undefined {
        const volumeInfo = item.volumeInfo

        if (volumeInfo === undefined) return undefined

        return {
            isbn: volumeInfo.industryIdentifiers,
            title: volumeInfo.title,
            subtitle: volumeInfo.subtitle,
            description: volumeInfo.description,
            publisher: volumeInfo.publisher,
            publishedDate: volumeInfo.publishedDate,
            pageCount: volumeInfo.pageCount,
            imageLink: volumeInfo.imageLinks,
            price: 0.5,
            qty: 1,
            authors: volumeInfo.authors,
            tags: []
        }
    }

    useEffect(() => {
        if (searchText) {
            handleApiBookCall()
        } else {
            setBookList([])
        }
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
                <IonSearchbar debounce={250} placeholder='ex : 978-2-253-13646-0' value={searchText} onIonChange={e => handleChange(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
                <IonList>
                    <IonListHeader>
                        <h4>Résultats pour {searchText} : {bookList?.length}</h4>
                    </IonListHeader>
                    {bookList?.map((book: Book, index: number) => (
                        <>
                            <IonNavLink key={index} routerDirection="forward" component={() => <BookForm book={book} modal={props.modal} />}>
                                <IonItem button>
                                    <IonThumbnail slot="start">
                                        <IonImg
                                            alt={"couverture-du-livre" + book.title}
                                            src={book.imageLink?.smallThumbnail ? book.imageLink?.smallThumbnail : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}

                                        />
                                    </IonThumbnail>
                                    <IonLabel>
                                        <h2>{book.title}</h2>
                                        <p>{book.authors && book.authors.map((author: string, idx: number) => idx < book.authors.length - 1 ? author + ", " : author)}</p>
                                    </IonLabel>
                                </IonItem>
                            </IonNavLink>
                        </>
                    ))}


                </IonList>
            </IonContent>
        </>

    )
}

export default SearchApiBook;