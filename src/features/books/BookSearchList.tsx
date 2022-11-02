import { IonHeader, IonToolbar, IonContent, IonList, IonLabel, IonSearchbar, IonItemGroup, IonItemDivider, IonButton, IonItem, IonIcon } from "@ionic/react";
import { FunctionComponent, RefObject, useEffect, useState } from "react";
import { getGoogleBooksByCodeIsbn } from "../../services/BookAPIService";
import GoogleBook from "../../interface/GoogleBook";
import Book from "../../interface/Book";
import { getbooksByIsbn } from "../../services/BookService";
import Book404Item from "./Book404Item";
import Spinner from "../../components/Spinner";
import SearchBookItem from "./SearchBookItem";
import { close } from "ionicons/icons";

interface BookSearchListProps {
  modal: RefObject<HTMLIonModalElement>,
  isbn?: string | undefined
}

interface BookDataProps {
  googleBooks: Book[] | undefined,
  libraryBooks: Book[] | undefined
}

const BookSearchList: FunctionComponent<BookSearchListProps> = (props) => {
  const [searchText, setSearchText] = useState<string>(props.isbn || "");
  const [bookDatas, setBookDatas] = useState<BookDataProps>({ googleBooks: [], libraryBooks: [] });
  const [loading, setLoading] = useState({ google: false, library: false });

  useEffect(() => {
    if (!searchText) return
    if (searchText.length < 10 || searchText.length > 13) return;
    if (searchText.length === 11 || searchText.length === 12) return;

    let active = true
    callBooksApi()
    return () => { active = false }

    async function callBooksApi() {
      setLoading({ google: true, library: true })
      const googleBooks: Book[] | undefined = await callGoogleBooks(searchText);
      const libraryBooks: Book[] | undefined = await callLibraryBooks(searchText)
      if (!active) return
      setBookDatas({ googleBooks: googleBooks, libraryBooks: libraryBooks })
    }
  }, [searchText])

  const callLibraryBooks = async (isbn: string) => {
    const libraryBooksResponse = await getbooksByIsbn(isbn)
    setLoading((prev) => ({ ...prev, library: false }))
    return libraryBooksResponse
  }

  const callGoogleBooks = async (isbn: string) => {
    const googleBookResponse = await getGoogleBooksByCodeIsbn(isbn)
    if (!googleBookResponse.hasOwnProperty("items")) return [];
    const googleBook = googleBookResponse.items.map((item: GoogleBook) => convertToBook(item))
    setLoading((prev) => ({ ...prev, google: false }))
    return googleBook
  }

  const convertToBook = (googleBook: GoogleBook) => {
    if (googleBook.volumeInfo === undefined) return undefined;
    return {
      title: googleBook.volumeInfo.title,
      subtitle: googleBook.volumeInfo.subtitle,
      publisher: googleBook.volumeInfo.publisher,
      publishedDate: googleBook.volumeInfo.publishedDate,
      image: googleBook.volumeInfo.imageLinks?.thumbnail,
      isbn: searchText,
      pageCount: googleBook.volumeInfo.pageCount,
      description: googleBook.volumeInfo.description,
      authors: googleBook.volumeInfo.authors,
      tags: [],
      bookshelf: "",
    }
  }

  return (
    <>
      <IonHeader>
        <IonToolbar className="ion-padding" color={"primary"}>
          <IonSearchbar
            debounce={250}
            placeholder='Entrer code isbn'
            value={searchText}
            onIonChange={e => setSearchText(e.detail.value!)}
            color={"light"}
          />
          <IonButton onClick={() => props.modal.current?.dismiss()} color={"secondary"} slot="end">
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Dans la librairie</IonLabel>
              <IonLabel slot="end">{bookDatas.libraryBooks?.length} Resultats</IonLabel>
            </IonItemDivider>
            {loading.library
              ? <Spinner />
              : bookDatas.libraryBooks?.length
                ? bookDatas.libraryBooks.map((book: Book) => (
                  <SearchBookItem key={book.id} book={book} modal={props.modal} editable={true} />
                ))
                : <Book404Item />
            }
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Dans Google Book Api</IonLabel>
              <IonLabel slot="end">{bookDatas.googleBooks?.length} Resultats</IonLabel>
            </IonItemDivider>
            {loading.google
              ? <Spinner />
              : bookDatas.googleBooks?.length
                ? bookDatas.googleBooks.map((book: Book, index: number) => (
                  <SearchBookItem key={index} book={book} modal={props.modal} />
                ))
                : <Book404Item />
            }
          </IonItemGroup>
        </IonList>
      </IonContent>
    </>
  );
}

export default BookSearchList;