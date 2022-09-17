import { IonItem, IonLabel, IonInput, IonButton, IonList, IonThumbnail, IonImg, IonNavLink, IonSearchbar } from "@ionic/react"
import React, { RefObject, useState } from "react"
import GoogleBook from "../../interface/GoogleBook"
import { getBooksByCodeIsbn } from "../../services/GoogleBookAPIService";
import BookForm from "./BookForm";

interface SearchGoogleBookProps {
    input: RefObject<HTMLIonInputElement>
}

const SearchGoogleBook: React.FC = () => {

    const [searchText, setSearchText] = useState('');

    function handleChange(value: string) {
        setSearchText(value)
    }

    return (
        <div>
            <p style={{ paddingLeft: 8 }}>Searchbar with cancel button shown on focus</p>
            <IonSearchbar debounce={250} placeholder='ex : London' animated value={searchText} onIonChange={e => handleChange(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
            <IonList>
                <IonItem button >
                    <IonThumbnail slot="start">
                        <IonImg alt="couverture-du-livre" src="https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>Title</h2>
                        <p>Auteur</p>
                    </IonLabel>
                </IonItem>
            </IonList>
        </div>
    )

    // < IonList >
    // <IonItem>
    //     <IonLabel position="stacked">Enter le code barre de votre livre</IonLabel>
    //     <IonInput ref={props.input} type="text" placeholder="ex : 2700232704" /></IonItem>
    {/* </IonItem>
            <IonButton expand="block" onClick={() => searchBookByIsbn()}>
                Confirmer
            </IonButton> */}
    {/* {bookItems?.map((book: GoogleBook, idx: number) => (
                    <IonItem key={idx} >
                        <IonThumbnail slot="start">
                            <IonImg alt="couverture-du-livre" src={book.volumeInfo.imageLinks?.thumbnail} />
                        </IonThumbnail>
                        <IonLabel>
                            <h2>{book.volumeInfo.title}</h2>
                            <p>
                                {book.volumeInfo.authors.map((author: string, idx: number) =>
                                    idx < book.volumeInfo.authors.length - 1 ? author + ", " : author
                                )}
                            </p>
                            <IonNavLink routerDirection="forward" component={() => <BookForm book={book} />}>
                                <IonButton>Detail</IonButton>
                            </IonNavLink>
                        </IonLabel>
                    </IonItem>
                ))} */}
    // </IonList >

}

export default SearchGoogleBook;