import { IonItem, IonThumbnail, IonImg, IonLabel, IonModal } from "@ionic/react";
import { useRef } from "react";
import Book from "../../interface/Book";
import BookForm from "./BookForm";


interface BookItemProps {
    book: Book,
    editable?: boolean
}

const BookItem: React.FC<BookItemProps> = (props: BookItemProps) => {
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <>
            <IonItem button id={"open-modal-" + props.book.id}>
                <IonThumbnail slot="start">
                    <IonImg
                        alt={"couverture-du-livre" + props.book.title}
                        src={props.book.image ? props.book.image : "https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg"}
                    />
                </IonThumbnail>
                <IonLabel>
                    <h2>{props.book.title}</h2>
                    <p>{props.book.authorsName && props.book.authorsName.map((authorName: string, idx: number) => idx < props.book.authorsName.length - 1 ? authorName + ", " : authorName)}</p>
                </IonLabel>
            </IonItem>
            {props.editable &&
                <IonModal ref={modal} trigger={"open-modal-" + props.book.id}>
                    <BookForm modal={modal} book={props.book} editable={props.editable} />
                </IonModal>
            }
        </>
    )
}

export default BookItem;