import { IonButton, IonList, IonNavLink, IonSearchbar, IonListHeader, IonContent, IonButtons, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel } from "@ionic/react"
import React, { RefObject, useEffect, useState } from "react"
import Book from "../../interface/Book";
import GoogleBook from "../../interface/GoogleBook";
import { getGoogleBooksByCodeIsbn } from "../../services/BookAPIService";
import BookForm from "./BookForm2";
import BookItem from "./BookItem";

interface SearchApiBookProps {
  modal: RefObject<HTMLIonModalElement>
}

const SearchApiBook: React.FC<SearchApiBookProps> = (props: SearchApiBookProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [bookList, setBookList] = useState<Book[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return setBookList([])
    if (searchText.length < 10 || searchText.length > 13) return setBookList([]);
    if (searchText.length === 11 || searchText.length === 12) return setBookList([]);

    handleApiBookCall()
  }, [searchText]);

  const handleApiBookCall = async () => {
    setLoading(true)
    const goolge_book_response = await getGoogleBooksByCodeIsbn(searchText)

    if (!goolge_book_response.hasOwnProperty("items")) return setBookList([])
    const bookArray: Book[] = goolge_book_response.items.map((item: GoogleBook) => googleBookItemToBook(item))
    setBookList(bookArray)
    setLoading(false)
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

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>1. Rechercher</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.modal.current?.dismiss()}>Fermer</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>Entrer le code isbn</IonLabel>
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

          {loading && <IonItem>recherche en cours ...</IonItem>}

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