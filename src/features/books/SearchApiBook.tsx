import { IonItem, IonLabel, IonButton, IonList, IonThumbnail, IonImg, IonNavLink, IonSearchbar, IonListHeader, IonContent, IonButtons, IonHeader, IonToolbar, IonTitle } from "@ionic/react"
import React, { RefObject, useEffect, useState } from "react"
import Author from "../../interface/Author";
import Book from "../../interface/Book";
import GoogleBook from "../../interface/GoogleBook";
import { getGoogleBooksByCodeIsbn } from "../../services/BookAPIService";
import BookForm from "./BookForm";
import BookItem from "./BookItem";

interface SearchApiBookProps {
    modal: RefObject<HTMLIonModalElement>
}

const SearchApiBook: React.FC<SearchApiBookProps> = (props: SearchApiBookProps) => {
    const [searchText, setSearchText] = useState<string>("");
    const [bookList, setBookList] = useState<Book[]>();

    useEffect(() => {
        if (!searchText) return setBookList([])
        handleApiBookCall()
    }, [searchText]);

    const handleApiBookCall = async () => {
        if (searchText.length < 10 && searchText.length > 13) return setBookList([]);
        if (searchText.length === 11 || searchText.length === 12) return setBookList([]);

        let response = await getGoogleBooksByCodeIsbn(searchText)

        if (!response.hasOwnProperty("items")) return setBookList([])
        console.log(response.items);
        const bookArray: Book[] = response.items.map((item: GoogleBook) => googleBookItemToBook(item))
        setBookList(bookArray)
    }

    const googleBookItemToBook = (item: GoogleBook): Book | undefined => {
        if (item.volumeInfo === undefined) return undefined

        const authorArray: Author[] = []
        item.volumeInfo.authors.forEach((value => {
            const authorObj: Author = { name: value }
            authorArray.push(authorObj)
        }))

        return {
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            publisher: item.volumeInfo.publisher,
            publishedDate: item.volumeInfo.publishedDate,
            image: item.volumeInfo.imageLinks?.thumbnail,
            isbn: searchText,
            pageCount: item.volumeInfo.pageCount,
            price: 0.50,
            description: item.volumeInfo.description,
            authors: authorArray,
        }
    }

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
                <IonSearchbar debounce={250} placeholder='ex : 9782253136460' value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

                <IonList>
                    <IonListHeader>
                        <h4>Résultats pour {searchText} : {bookList?.length}</h4>
                    </IonListHeader>
                    {bookList?.map((book: Book, index: number) => (
                        <IonNavLink
                            key={index}
                            routerDirection="forward"
                            component={() => <BookForm book={book} modal={props.modal} />}
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