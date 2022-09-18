import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonNavLink, IonButton } from "@ionic/react"
import { useEffect, useState } from "react"
import GoogleBook from "../../interface/GoogleBook"
// import { getBooksByCodeIsbn } from "../../services/BookAPIService"
import BookForm from "./BookForm"

interface GoogleBookListProps {
    input: string | undefined
}

const GoogleBookList: React.FC<GoogleBookListProps> = (props: GoogleBookListProps) => {

    const [googleBookList, setGoogleBookList] = useState<GoogleBook[]>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        initGoogleBookList()
    }, []);

    async function initGoogleBookList() {
        if (typeof props.input !== 'string') {
            return
        }

        // const bookResponse: any = await getBooksByCodeIsbn(props.input)

        // setGoogleBookList(bookResponse)
        setLoading(false)
    }

    return (
        <></>
        //         <IonList>
        //             {googleBookList?.map((book: GoogleBook, idx: number) => (
        //                 <IonItem key={idx} >
        //                     <IonThumbnail slot="start">
        //                         <IonImg alt="couverture-du-livre" src={book.volumeInfo.imageLinks?.thumbnail} />
        //                     </IonThumbnail>
        //                     <IonLabel>
        //                         <h2>{book.volumeInfo.title}</h2>
        //                         <p>
        //                             {book.volumeInfo.authors.map((author: string, idx: number) =>
        //                                 idx < book.volumeInfo.authors.length - 1 ? author + ", " : author
        //                             )}
        //                         </p>
        //                         {/* <IonNavLink routerDirection="forward" component={() => <BookForm book={book} />}> */}
        //                         <IonButton>Continuer</IonButton>
        //                     </IonNavLink>
        //                 </IonLabel>
        //                 </IonItem>
        //     ))
        // }
        //         </IonList >
    )
}

export default GoogleBookList